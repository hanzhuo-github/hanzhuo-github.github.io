---
lang: zh-CN
title: 响应系统（2）reactive
description: 非原始值的响应式方案
article: false
date: 2024-10-03
order: 3
---

本篇文章中 Proxy 和 Reflect 的内部方法、Handler 方法、触发时机，可以参考 [Proxy 和 Reflect](https://zh.javascript.info/proxy)。

## 1 代理 Object

在上一篇文章中，我们对“读取”操作做了拦截。对于一个普通的对象，都有哪些操作是“读取”呢？

1. 访问属性：`p.foo`
2. 判断 key 是否在对象（或原型）上：`key in p`
3. for...in 循环遍历对象：`for (const key in p) {}`
4. 删除属性：`delete p.foo`（把 for...in 看完，再看代码 4）

:::code-tabs
@tab 1. 访问属性 get

```js{3,5}
const obj = { foo: 1 };
const p = new Proxy(obj, {
  get(target, key, receiver) {
    track(target, key);
    return Reflect.get(target, key, receiver);
  },
});
```

@tab 2. key in obj

```js{3,5}
const obj = { foo: 1 };
const p = new Proxy(obj, {
  has(target, key) {
    track(target, key);
    return Reflect.has(target, key);
  },
});
```

@tab 3. for...in

```js{2,5-7}
const obj = { foo: 1 };
const ITERATE_KEY = Symbol();

const p = new Proxy(obj, {
  ownKeys(target) {
    track(target, ITERATE_KEY);   // 将副作用函数与 ITERATE_KEY 关联
    return Reflect.ownKeys(target);
  },
});
```

@tab 4. 删除属性 deleteProperty

```js{6-9}
const p = new Proxy(obj, {
  deleteProperty(target, key) {
    const hadKey = Object.prototype.hasOwnProperty.call(target, key)
    const res = Reflect.deleteProperty(target, key)

    // 被删除的属性是对象自己的属性 且 删除成功，才触发更新
    if (res && hadKey) {
      trigger(target, key, 'DELETE')
    }
    return res
  }
})
```

:::

### for...in

对于 for...in 的情况，如果我们给响应式数据再添加一个新的属性，副作用函数理应重新执行（因为循环当中多了一个属性），所以需要触发 track(target, ITERATE_KEY) 重新执行。

```js
effect(() => {
  for (const key in p) {
    console.log(key);
  }
});
```

当前的 set 拦截如 1 所示，当添加新属性（假设这个新属性叫 bar）时，会触发 set 拦截。trigger 时触发的事与 bar 相关的副作用函数的重新执行。在之前，我们使用 for...in 循环，建立了副作用函数与 ITERATE_KEY 之间的联系，但这个 bar 完全没有关系。所以这个 trigger 并不会触发正确触发副作用函数。

解决方法也很简单，当添加新属性时，讲那些与 ITERATE_KEY 相关的副作用函数也取出来执行。见 2。

但是，如果仅仅是对已有属性的值进行修改，比如 `p.foo = 2`，不应该触发副作用函数的执行。添加新属性和修改已有属性都是 set，所以，要在 set 拦截中分辨是添加新属性、还是设置原有属性。见 3。

和添加新属性一样，在删除一个已有属性之后，副作用函数也应该重新执行，即操作类型为 "ADD" 或者 "DELETE" 时都应该触发与 ITERATE_KEY 相关联的副作用函数。见 3。

:::code-tabs

@tab 1. 原 set（不变）

```js
const p = new Proxy(obj, {
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    trigger(target, key);
    return res;
  },
});
```

@tab 2. 添加新属性时触发 ITERATE_KEY 相关联的副作用函数

```js{3-19}
function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);

  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })

  // 将与 ITERATE_KEY 关联的副作用函数也添加到 effectsToRun
  const iterateEffects = depsMap.get(ITERATE_KEY);
  iterateEffects && iterateEffects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })

  effectsToRun.forEach(effectFn => {
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}
```

@tab 3. 修改 set

```js{3-5,7}
const p = new Proxy(obj, {
  set(target, key, newVal, receiver) {
    const type = Object.prototype.hasOwnProperty.call(target, key)
      ? "SET"
      : "ADD";
    const res = Reflect.set(target, key, newVal, receiver);
    trigger(target, key, type);   // 将 type 传递给 trigger
    return res;
  },
});

function trigger(target, key, type) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);


  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })

  // type 为 ADD 或 DELETE，才将与 ITERATE_KEY 关联的副作用函数也添加到 effectsToRun
  if (type === 'ADD' || type === 'DELETE') {
    const iterateEffects = depsMap.get(ITERATE_KEY);
    iterateEffects && iterateEffects.forEach(effectFn => {
      if (effectFn !== activeEffect) {
        effectsToRun.add(effectFn)
      }
    })
  }

  effectsToRun.forEach(effectFn => {
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}
```

:::

## 2 合理地触发响应

设置值时，如果值没变化时，不应该触发响应

```js{3,10-13}
const p = new Proxy(obj, {
  set(target, key, newVal, receiver) {
    const oldVal = target[key];

    const type = Object.prototype.getOwnProperty.call(target, key)
      ? "SET"
      : "ADD";
    const res = Reflect.set(target, key, newVal, receiver);

    if (oldVal !== newVal && (oldVal === oldVal || newVal == newVal)) {
      trigger(target, key, type);
    }

    return res;
  },
});
```

> 第 10 行代码中的 `(oldVal === oldVal || newVal == newVal)` 是对 NaN 的处理

### reactive

我们封装一个 reactive 函数，它接收一个对象，返回为其创建的响应式数据。

```js
function reactive(obj) {
  return new Proxy(obj, {
    // 各种拦截函数
  });
}
```

```js
const obj = {};
const proto = { bar: 1 };
const child = reactive(obj);
const parent = reactive(proto);

Object.setPrototypeOf(child, parent); // parent 做 child 的原型

effect(() => {
  console.log(child.bar);
});

// 修改 child.bar
child.bar = 2;
```

执行代码观察到，修改 child.bar 之后，副作用函数重新执行了 2 次，即造成了不必要的更新。

为什么会触发两次呢？当副作用函数执行时，读取 child.bar，会触发 child 代理对象的 get 拦截。拦截内部使用 `Reflect.get(obj, 'bar', receiver)`，即引擎内部通过调用 obj 对象的 `[[GET]]` 内部方法获得结果。而 obj 对象自身没有 bar 属性，于是它就到其原型（即 parent）中找，最终得到的就是 parent.bar。在访问 parent.bar 时，也会导致副作用函数被收集。所以，child.bar 和 parent.bar 都与副作用函数建立了响应联系。

当设置 child.bar 时，会调用 child 代理对象的 set 拦截，`Reflect.set(target, key, newVal, receiver)`，即引擎内部调用 obj 对象的 `[[SET]]` 内部方法。而设置的属性不在这个对象上，于是就调用其原型（即 parent）的 `[[SET]]` 内部方法。parent 是代理对象，这就相当于执行了其 set 拦截函数。也就是说，设置的是 child.bar，会导致 child 和 parent 的 set 拦截，而二者都与副作用函数建立了联系，于是最终副作用函数重新执行了两次。

解决方案就是屏蔽其中的一次执行，把 parent.bar 触发的副作用函数的重新执行屏蔽掉。是由 set 拦截函数被触发两次导致的，那么只有能在 set 拦截函数内分辨这两次更新就行。

我们看一下 child 和 parent 的 set 拦截函数的具体信息。设置 child.bar 时，会执行 child 代理对象的 set 拦截函数，此时的 target 是原始对象 obj，receiver 是代理对象 child（即 target 的代理对象）。但由于 obj 上不存在 bar 属性，所以会用 obj 的原型 parent，并执行 parent 代理对象的 set 拦截函数。此时 target 是原始对象 proto，但 receiver 仍然是代理对象 child，不再是 target 的代理对象。

:::code-tabs

@tab child 的 set 拦截函数

```js
set(target, key, newVal, receiver) {
  // target 是原始对象 obj
  // receiver 是代理对象 child
}
```

@tab parent 的 set 拦截函数

```js
set(target, key, newVal, receiver) {
  // target 是原始对象 proto
  // receiver 仍然是代理对象 child
}
```

:::

receiver 始终是 child，而 target 是变化的。我们只需判断 receiver 是否是 target 的代理对象即可。只有当 receiver 是 target 的代理对象时才触发更新。

```js{4-7,17}
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 代理对象可以通过 raw 访问原始数据
      if (key === "raw") {
        return target;
      }

      track(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, newVal, receiver) {
      const oldVal = target[key]
      const type = Object.prototype.hasOwnProperty(target, key) ? 'SET' : 'ADD
      const res = Reflect.set(target, key, newVal, receiver)

      if (receiver.raw === target) {
        if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) {
          trigger(target, key, type)
        }
      }

      return res
    },
    // 省略其他拦截函数
  });
}
```

到此，我们通过新增一个判断，只有当 receiver 是 target 的代理对象时，才可以触发更新，这样就屏蔽了由原型引起的不必要的更新。

## 3 浅响应与深响应

Vue 中有 reactive 和 shallowReactive。我们之前实现的 reactive 实际上是浅响应的。为了实现深层次的响应，修改代码如 1。

我们封装一个 createReactive 函数，接收一个参数 isShallow，表示是否为浅响应，默认为 false。见 2。

:::code-tabs
@tab 1. reactive

```js{9-12}
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === "raw") {
        return target;
      }
      track(target, key);
      const res = Reflect.get(target, key, receiver);
      // 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回
      if (typeof res === "object" && res !== null) {
        return reactive(res);
      }
      return res;
    },
  });
}
```

@tab 2. 封装 reactive 和 shallowReactive

```js{10-12}
function createReactive(obj, isShallow = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === "raw") {
        return target;
      }
      const res = Reflect.get(target, key, receiver);
      track(target, key);

      if (isShallow) {
        return res;
      }

      // 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回
      if (typeof res === "object" && res !== null) {
        return reactive(res);
      }

      return res;
    },
    // 省略其他拦截函数
  });
}
```

:::

对应的 reactive 和 shallowReactive 就很简单了

```js
function reactive(obj) {
  return createReactive(obj);
}
function shallowReactive(obj) {
  return createReactive(obj, true);
}
```

## 4 只读和浅只读

### 4.1 浅只读

Vue 中提供 readonly 函数，将数据变成只读。

```js
const obj = readonly({ foo: 1 });
obj.foo = 2; // 尝试修改数据，会得到警告
```

只读本质上也是对数据对象的代理，也可以使用 createReactive 来实现。

修改数据时，会触发 set 或 deleteProperty，对应的代码增加守卫条件。

只读的数据不会做任何修改，就没有必要为只读数据建立响应联系，修改 get 拦截如下。

```js{7-9,24-27,41-44}
function createReactive(obj, isShallow = false, isReadonly = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === "raw") {
        return target;
      }
      if (!isReadonly) {
        track(target, key);
      }

      const res = Reflect.get(target, key, receiver);
      if (isShallow) {
        return res;
      }

      // 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回
      if (typeof res === "object" && res !== null) {
        return reactive(res);
      }

      return res;
    },
    set(target, key, newVal, receiver) {
      if (isReadonly) {
        console.warn(`属性 ${key} 是只读的`);
        return true;
      }
      const oldVal = target[key]
      const type = Object.prototype.hasOwnProperty(target, key) ? 'SET' : 'ADD';
      const res = Reflect.set(target, key, newVal, receiver);

      if (receiver.raw === target) {
        if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) {
          trigger(target, key, type);
        }
      }

      return res;
    },
    deleteProperty(target, key) {
      if (isReadonly) {
        console.warn(`属性 ${key} 是只读的`);
        return true;
      }
      const hadKey = Object.prototype.hasOwnProperty.call(target, key)
      const res = Reflect.deleteProperty(target, key)

      // 被删除的属性是对象自己的属性 且 删除成功，才触发更新
      if (res && hadKey) {
        trigger(target, key, 'DELETE')
      }
      return res
    },
    // 省略其他拦截函数
  });
}
```

### 4.2 深只读

上面实现了浅只读，即

```js
const obj = readonly({ foo: { bar: 1 } });
obj.foo.bar = 3; // 还是可以修改的
```

实现深只读，只需在 get 拦截函数内递归调用 readonly 即可

```js{18}
function createReactive(obj, isShallow = false, isReadonly = false) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === "raw") {
        return target;
      }
      if (!isReadonly) {
        track(target, key);
      }

      const res = Reflect.get(target, key, receiver);
      if (isShallow) {
        return res;
      }

      // 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回
      if (typeof res === "object" && res !== null) {
        return isReadonly ? readonly(res) : reactive(res);
      }

      return res;
    },
    // 省略其他拦截函数
  });
}
```

由此，定义 readonly 和 shallowReadonly 就很简单了。

```js
function readonly(obj) {
  return createReactive(obj, false, true);
}
function shallowReadonly(obj) {
  return createReactive(obj, true, true);
}
```
