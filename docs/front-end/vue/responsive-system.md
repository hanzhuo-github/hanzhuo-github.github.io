---
lang: zh-CN
title: 响应系统（1）
description:
article: false
date: 2024-10-02
order: 2
---

## 1 响应系统的实现

### 1.1 响应式数据的基本实现

```js
const obj = { text: "hello, world!" };
function effect() {
  document.body.innerText = obj.text;
}
```

这里的副作用函数 effect 读取了对象 obj 中的属性 text。我们希望，当 obj.text 变化时，该副作用函数会自动重新执行。

有两点重要的线索：

- 当副作用函数 effect 执行时，会触发 obj.text 的==读取==操作；
- 当修改 obj.text 时，会触发 obj.text 的==设置==操作。

那么，如果我们可以拦截一个对象的读取和设置操作，整件事情就很简单了：当读取 obj.text 时，把副作用函数 effect 存储到一个桶里；当设置 obj.text 时，到桶里取出副作用函数 effect 并执行即可。

在 ES2015 之前，拦截一个对象属性的读取和设置，只能通过 Object.defineProperty 来实现（Vue2 就是这么做的）。在 ES2015+ 中，可以使用 Proxy 来实现（Vue3 的实现方式）。

:::info Proxy & Reflect
先了解 [Proxy 和 Reflect](https://zh.javascript.info/proxy)，再阅读下文。
:::

:::details 响应式数据的基本实现

```js
// 存储副作用函数的桶
const bucket = new Set();

// 原始数据
const data = { text: "hello world" };
// 对原始数据的代理
const obj = new Proxy(data, {
  get(target, key) {
    bucket.add(effect);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    bucket.forEach((fn) => fn());
    return true;
  },
});

function effect() {
  document.body.innerText = obj.text;
}
effect();

setTimeout(() => {
  obj.text = "change";
}, 1000);
```

:::

### 1.2 完善的响应系统

#### Step1：副作用函数注册

在收集副作用时，不管它叫什么（上面代码中叫 effect）、或者它是一个匿名函数，也要能够被正确地收集到桶里，所以我们需要处理**副作用函数的注册**。见 Step1 代码。

#### Step2：副作用函数与目标字段之间建立联系

在 Step1 代码中，执行层面上，副作用匿名函数执行了两次。但是副作用函数并没有读取 obj.notExit 的值，所以该属性的更新，不应该与副作用函数建立响应联系。所以，我们需要**在副作用函数与被操作的目标字段之间建立明确的联系**。

具体的结构应该是，target1 -> prop1 -> effect1, effect2；target2 -> prop2 -> effect2。

我们要用 [WeakMap](https://zh.javascript.info/weakmap-weakset) 来代替之前的 Set 作为桶的数据结构。它的键是 target，对应的值是个 Map（键是属性名称，值是副作用函数的 Set）。

#### Step3: 封装处理

将上一步骤的代码做封装处理。读取属性时，在 get 拦截函数中，将副作用收集这一部分的代码封装到 track 函数中；将 set 拦截函数中的触发副作用封装到 trigger 函数中。

#### Step4: 分支切换

```js
const data = {ok: true, text: 'hello, world!'}
const obj = new Proxy(data, {...})

effect(function effectFn() {
  document.body.innerText = obj.ok ? obj.text : 'no'
})
```

由于 obj.ok 的初始值是 true，所以注册副作用函数时，会将 obj.ok 和 obj.text 都与副作用函数挂钩。

然后将 obj.ok 设置为 false，document.body.innerText 的值应该始终是 "no"，不论 obj.text 如何变化。但是现在，每次 obj.text 进行设置，都会触发副作用函数的执行，这显然是没有必要的。

解决的思路也很简单，每次副作用函数执行时，先把它从所有与之关联的依赖集合（即 deps 对应的那个 Set）中删除。

为了移除，我们得知道哪些依赖集合中包含它。所以，我们要重新设计副作用函数。

:::code-tabs

@tab Step1

```js{1-8,13-15}
// 1.1 全局变量，存储被注册的副作用函数
let activeEffect;
// 1.2 用于注册副作用函数
function effect(fn) {
  activeEffect = fn; // 注册副作用函数时，将其设置为当前的 activeEffect
  fn(); // 执行副作用函数，进而触发 obj.text 的读取操作
}

// 2. 修改 get 拦截器，加入 activeEffect
const obj = new Proxy(data, {
  get(target, key) {
    if (activeEffect) {
      bucket.add(activeEffect);
    }
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    bucket.forEach((fn) => fn());
    return true;
  },
});

// 3. 使用
effect(() => {
  console.log("effect run");  // 打印两次
  document.body.innerText = obj.text;
});

setTimeout(() => {
  obj.notExist = "hello vue3";
}, 1000);
```

@tab Step2

```js{8-16,24-27}
const bucket = new WeakMap();

// 修改 get/set 拦截器
const obj = new Proxy(data, {
  get(target, key) {
    if (!activeEffect) return target[key];
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    let depsMap = bucket.get(target);
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if (!deps) {
      depsMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect);

    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    // 把副作用函数从桶里取出并执行
    const depsMap = bucket.get(target);
    if (!depsMap) return;
    const effects = depsMap.get(key);
    effects && effects.forEach((fn) => fn());
  },
});
```

@tab Step3

```js{}
// track & trigger
const obj = new Proxy(data, {
  get(target, key) {
    track(target, key);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    trigger(target, key);
  },
});

function track(target, key) {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(fn => fn())
}
```

@tab Step4

```js{5,12,28,31-37,45-46}
let activeEffect;
function effect(fn) {
  const effectFn = () => {
    // 每次副作用函数执行时，调用 cleanup 将副作用做依赖集合中删除
    cleanup(effectFn);

    activeEffect = effectFn; // effectFn 执行时，将其设置为当前的 activeEffect
    fn();
  };

  // * activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = []; // 在 track 中收集，见 track 函数
  effectFn(); // 执行副作用函数时，读取，触发 track，去收集 activeEffect.deps 依赖
}

function track(target, key) {
  if (!activeEffect) return;
  let depsMap = bucket.get(target);
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  deps.add(activeEffect);
  // deps 就是一个与当前副作用函数存在联系的依赖集合，将其添加到 activeEffect.deps 中
  activeEffect.deps.push(deps);
}

function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i]
    deps.delete(effectFn)
  }
  effectFn.deps.length = 0  // 最后需要重置 effectFn.deps 数组
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)

  // 避免 Set 删除&新增导致的无限循环
  const effectsToRun = new Set(effects)
  effectsToRun.forEach(effectFn => effectFn())
}
```

:::

#### Step5：支持嵌套

```js
effect(function effectFn1() {
  console.log("effectFn1 执行");
  effect(function effectFn2() {
    console.log("effectFn2 执行");

    temp2 = obj.bar; // effectFn2 读取 obj.bar
  });

  temp1 = obj.foo; // effectFn1 读取 obj.foo
});
```

嵌套如上面代码所示，当修改 obj.foo 时，发现只打印了 `effectFn2 执行`，这显然与预期不符。

问题就出在 effect 函数与 activeEffect 上。如下面代码【使用全局变量】所示，用全局 activeEffect 来存储通过 effect 函数注册的副作用函数，意味着在同一时刻 activeEffect 所存储的副作用函数只能有一个。当副作用函数嵌套时，内存副作用函数的执行会覆盖 activeEffect 值，且不能恢复至原来的值。所以，再有任何响应式数据进行依赖收集，即这个响应式数据是在外层副作用函数中读取的，它们收集到的副作用函数也都全是内层副作用函数。

为了解决这个问题，我们需要一个副作用函数栈 effectStack，在副作用函数执行时，将当前副作用函数压入栈中，当副作用函数执行完后，将其从栈中弹出，并始终让 activeEffect 指向栈顶副作用函数。

:::code-tabs
@tab 使用全局变量

```js
let activeEffect;
function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn; // effectFn 执行时，将其设置为当前的 activeEffect
    fn();
  };

  effectFn.deps = [];
  effectFn(); // 执行副作用函数
}
```

@tab 使用副作用函数栈

```js{9,12-13}
let activeEffect;
const effectStack = [];

function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    // 在调用副作用函数之前将当前副作用函数压栈
    effectStack.push(effectFn);
    fn();
    // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并还原 activeEffect 为之前的值
    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1];
  };

  effectFn.deps = [];
  effectFn(); // 执行副作用函数
}
```

:::

#### Step6：避免无限递归循环

```js
const data = { foo: 1 };
const obj = new Proxy(data, {...});
effect(() => obj.foo++);
```

obj.foo++，即 `obj.foo = obj.foo + 1`。首先读取 obj.foo，触发 track 操作，把副作用函数收集到桶中；紧接着 +1 再赋值给 obj.foo，触发 trigger 操作，把桶里的副作用函数取出并执行。但是该副作用函数正在执行中，还没有执行完毕，就要开始下一次执行。这样就会无限递归地调用自己，产生了栈溢出。

解决方法也很简单。track 和 trigger 中的副作用函数都是 activeEffect。我们可以在 trigger 动作发生时增加守卫条件：如果 trigger 触发执行的副作用函数与当前正在执行的副作用函数相同，则不触发执行。

```js{6-11}
function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);
  const effectToRun = new Set();
  effects &&
    effect.forEach((effectFn) => {
      if (effectFn !== activeEffect) {
        effectToRun.add(effectFn);
      }
    });
  effectToRun.forEach((effectFn) => effectFn());
}
```

#### Step7：支持调度

可以为 effect 函数设计一个选项参数 options，允许用户指定调度器。

```js
effect(() => {
  () => {
    console.log(obj.foo);
  },
  // options，其中的调度器是一个函数
  {
    scheduler(fn) {...},
  };
});
```

实现如下。有了调度器，在 trigger 函数中触发副作用函数执行时，就可以直接调用用户传递的调度器函数，从而把控制权交给用户。

```js{11,26-29,31-32}
function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    effectStack.push(effectFn);
    fn();
    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1];
  };
  // 将 options 挂在到 effectFn 上
  effectFn.options = options;
  effectFn.deps = [];
  effectFn();
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectToRun = new Set()
  effects && effects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectToRun.add(effectFn)
    }
  })
  effectToRun.forEach(effectFn => {
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  })
}
```

## 2 计算属性 computed 与 lazy

我们利用上面介绍的内容就可以实现 Vue.js 中一个非常重要且非常有特色的能力——计算属性。

### 2.1 lazy

首先聊一下懒执行的 effect，即 lazy effect。

#### Step1：加 lazy

上面我们传递给 effect 函数的副作用函数会立即执行，但在有些场景下我们不希望它立刻执行，而是希望它在需要时才执行，比如计算属性。我们可以通过在 options 中添加 lazy 属性来达到目的。

```js
effect(
  () => {...},
  // options
  {
    lazy: true,
  }
)
```

#### Step2：计算 getter 结果

如果传递给 effect 的是一个 getter，在手动执行副作用函数时，还想要可以拿到其返回值

```js
const effectFn = effect(() => obj.foo + obj.bar, { lazy: true });
const value = effectFn();
```

:::code-tabs
@tab Step1: 加 lazy

```js{13-16}
function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    effectStack.push(effectFn);
    fn();
    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1];
  };
  effectFn.options = options;
  effectFn.deps = [];
  // 只有非 lazy 时，才执行
  if (!options.lazy) {
    effectFn();
  }
  return effectFn; // 将副作用函数作为返回值返回
}
```

@tab Step2: 存储 getter 结果

```js{6,9}
function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    effectStack.push(effectFn);
    const res = fn();
    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1];
    return res;
  };
  effectFn.options = options;
  effectFn.deps = [];
  // 只有非 lazy 时，才执行
  if (!options.lazy) {
    effectFn();
  }
  return effectFn; // 将副作用函数作为返回值返回
}
```

:::

### 2.2 computed

Step1 实现一个基础的 computed。Step2 为了避免 effectFn 进行多次计算，要对值进行缓存。Step3 当属性值变化之后，也要重新计算。

Step4: 在 effect 中读取计算属性时，

```js
const sumRes = computed(() => obj.foo + obj.bar);

effect(() => {
  console.log(sumRes.value);
});

obj.foo++;
```

执行 `console.log(sumRes.value)` 时，activeEffect 是计算属性中定义的 effectFn，只能将该副作用函数和响应式数据建立起联系。而外层的 effect 无法被内层 effect 中的响应式数据收集。

解决方法是，当读取计算属性时，手动调用 track 函数；当计算属性依赖的响应式数据变化时，手动调用 trigger。

:::code-tabs

@tab Step1

```js
function computed(getter) {
  const effectFn = effect(getter, { lazy: true });

  const obj = {
    get value() {
      return effectFn();
    },
  };

  return obj;
}

// 使用
const data = { foo: 1, bar: 2 }
const obj = new Proxy(data, {...})
const sumRes = computed(() => obj.foo + obj.bar)
console.log(sumRes.value) // 3
console.log(sumRes.value) // 3 重复计算
```

@tab Step2

```js{2-3,9-12}
function computed(getter) {
  let value; // 缓存上一次计算的值
  let dirty = true; // 是否需要重新计算值，true 则意味着“脏”，需要计算

  const effectFn = effect(getter, { lazy: true });

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn();
        dirty = false;
      }
      return value;
    },
  };

  return obj;
}
```

@tab Step3

```js{7-9}
function computed(getter) {
  let value; // 缓存上一次计算的值
  let dirty = true; // 是否需要重新计算值，true 则意味着“脏”，需要计算

  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      dirty = true;
    },
  });

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn();
        dirty = false;
      }
      return value;
    },
  };

  return obj;
}
```

@tab Step4

```js{10,21}
function computed(getter) {
  let value; // 缓存上一次计算的值
  let dirty = true; // 是否需要重新计算值，true 则意味着“脏”，需要计算

  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        dirty = true;
        trigger(obj, "value"); // 手动调用 trigger 函数
      }
    },
  });

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn();
        dirty = false;
      }
      track(obj, 'value'); // 手动调用 track 函数
      return value;
    },
  };

  return obj;
}
```

:::

## 3 watch

Step1: watch 可以观测一个响应式数据。当数据发生变化时，通知并执行相应的回调函数。它实际上就是使用了 effect 以及 options.scheduler。

Step2: watch 也可以接收一个 getter 函数。

Step3: watch 的回调函数还可以拿到新值和旧值。实现时要充分利用 effect 函数的 lazy 选项。创建一个懒执行 effect，注意最下方，手动调用副作用函数拿到旧值，即第一次执行得到的值。当变化发生触发 scheduler 调度函数执行时，就会重新调用 effectFn 获得新值。注意别忘了更新旧值。

Step4: watch 还可以通过 immediate 选项参数来指定回调是否立刻执行。立刻执行与后续执行本质上没有差别，可以把 scheduler 调度函数封装为一个通用函数，分别在初始化和变更时执行它。

Step5: watch 还支持 flush 字段。当 flush 为 post 时，调度函数需要将副作用函数放到微任务队列中，等待 DOM 更新结束后再执行。

:::code-tabs
@tab 1-观测响应式数据

```js
watch(obj, () => {
  console.log("changed");
});

obj.foo++; // 修改响应式数据，会导致回调函数执行
```

@tab 2-接收一个 getter

```js
watch(
  () => obj.foo,
  () => {
    console.log("changed");
  }
);
```

@tab 3-回调函数拿到新值旧值

```js
watch(
  () => obj.foo,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);
```

@tab 4-immediate

```js
watch(
  obj,
  () => {
    console.log("changed");
  },
  { immediate: true }
);
```

@tab 5-flush

```js
watch(
  obj,
  () => {
    console.log("changed");
  },
  {
    flush: "post", // 还可以是 pre 或 sync
  }
);
```

:::

:::code-tabs

@tab 1-观测响应式数据

```js
function watch(source, cb) {
  effect(
    () => traverse(source), // 调用 traverse 递归读取
    {
      scheduler() {
        cb(); // 数据变化就调用回调函数 cb
      },
    }
  );
}

// 递归读取，这样就能读取一个对象上的任意属性，那么任意属性变化时都可以触发回调函数执行
function traverse(value, seen = new Set()) {
  // 1. 什么都不做：要读取的数据是原始值，或者已经被读过了
  if (typeof value !== "object" || value === null || seen.has(value)) return;

  seen.add(value);
  // 只考虑 value 是对象的情况，递归处理
  for (const k in value) {
    traverse(value[k], seen);
  }

  return value;
}
```

@tab 2-兼容 getter

```js{2-7,10}
function watch(source, cb) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }

  effect(
    () => getter(),
    {
      scheduler() {
        cb(); // 数据变化就调用回调函数 cb
      },
    }
  );
}
```

@tab 3-回调函数支持新值、旧值

```js{9,11,16,18,23}
function watch(source, cb) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }

  let oldValue, newValue

  const effectFn = effect(
    () => getter(), // 调用 traverse 递归读取
    {
      lazy: true,
      scheduler() {
        newValue = effectFn(); // 在 scheduler 中调用副作用函数，得到新值
        cb(newValue, oldValue); // 数据变化就调用回调函数 cb
        oldValue = newValue;  // 更新旧值
      },
    }
  );

  oldValue = effectFn();    // 手动调用副作用函数，得到旧值
}
```

@tab 4-immediate

```js{12-16,26-28,30}
function watch(source, cb, options={}) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }

  let oldValue, newValue

  // 将 scheduler 提取成为一个独立的函数
  const job = () => {
    newValue = effectFn();
    cb(newValue, oldValue);
    oldValue = newValue;
  }

  const effectFn = effect(
    () => getter(),
    {
      lazy: true,
      scheduler: job
    }
  );

  if (options.immediate) {
    job();
  } else {
    oldValue = effectFn();
  }
}
```

@tab 5-flush post

```js{22-24}
function watch(source, cb, options={}) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }

  let oldValue, newValue

  const job = () => {
    newValue = effectFn();
    cb(newValue, oldValue);
    oldValue = newValue;
  }

  const effectFn = effect(
    () => getter(),
    {
      lazy: true,
      scheduler: () => {
        if (options.flush === 'post') {
          const p = Promise.resolve()
          p.then(job) // post
        } else {
          job()   // sync
        }
      }
    }
  );

  if (options.immediate) {
    job();
  } else {
    oldValue = effectFn();
  }
}
```

:::

### 过期的副作用——竞态问题

```js
let finalData;

watch(obj, async () => {
  const res = await fetch("path/to/request");
  finalData = res;
});
```

当 obj 发生多次变化时，系统中同时有多个请求在进行中时，finalData 的结果取决于网络中谁最后到达。但是我们要的结果应该是最后一次变化对应的请求。即前面的请求都认为是“过期”了，这样来避免竞态问题。

在 Vue 中， watch 函数的回调函数接收第三个参数 onInvalidate，它是一个函数，类似时间监听器，可以用它注册一个回调，这个回调函数在当前副作用函数过期时执行。

```js{4-6}
watch(obj, async (newValue, oldValue, onInvalidate) => {
  let expired = false;

  onInvalidate(() => { // 过期时执行
    expired = true;
  });

  const res = await fetch("path/to/request");

  if (!expired) finalData = res;
});
```

Vue 实现 onInvalidate 的原理很简单。在 watch 内部每次检测到变更后，在副作用函数重新执行之前，会先调用 onInvalidate 函数注册过期的回调。

```js{11,13-16,19-21,22}
function watch(source, cb, options = {}) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }

  let oldValue, newValue;

  let cleanup; // 存储用户注册的过期回调

  function onInvalidate(fn) {
    cleanup = fn; // 将过期回调存储到 cleanup
  }

  const job = () => {
    newValue = effectFn();
    if (cleanup) {
      cleanup()
    }
    cb(newValue, oldValue, onInvalidate);
    oldValue = newValue;
  };

  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler: () => {
      if (options.flush === "post") {
        const p = Promise.resolve();
        p.then(job); // post
      } else {
        job(); // sync
      }
    },
  });

  if (options.immediate) {
    job();
  } else {
    oldValue = effectFn();
  }
}
```

对于上面代码中的 19~21 行，第一次数据变化时，if 语句不成立。而每次执行的 expired = true，该作用域来自于上次执行 cb，即是上次执行时注册的过期回调。所以每次的 cleanup 都会将之前的请求设置为过期。
