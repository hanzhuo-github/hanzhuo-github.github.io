---
lang: zh-CN
title: 响应系统（3）ref
description: 原始值的响应式方案
article: false
date: 2024-10-04
order: 4
---

## 1 ref

JavaScript 中的 Proxy 无法提供对原始值的代理，所以想将原始值变成响应式数据，就要对它做一层包裹。用一个非原始值包裹原始值。

比如对于一个字符串 `let name = 'vue'`，我们对其进行包裹

```js
const wrapper = {
  value: "vue",
};

const name = reactive(wrapper);

name.value; // vue
name.value = "vue3"; // 修改可以触发响应
```

下面来创建一个 ref 函数。

Step1: 对原始数据做一层包裹。

Step2: 区分 ref。现在，来比较下面代码中的 ref1 和 ref2，虽然在实现上来看，它们没有任何区别，但我们仍然有必要区分出一个数据是否是 ref（涉及到自动脱 ref 能力）。

```js
const ref1 = ref(1);
const ref2 = reactive({ value: 1 });
```

:::code-tabs
@tab Step1 包裹

```js
function ref(val) {
  const wrapper = {
    value: val,
  };
  return reactive(wrapper);
}
```

@tab Step2 区分 ref

```js{5-8}
function ref(val) {
  const wrapper = {
    value: val,
  };
  // 在 wrapper 上定义一个「不可枚举、不可写」的属性 '__v_isRef'，设置其值是 true
  Object.defineProperty(wrapper, "__v_isRef", {
    value: true,
  });
  return reactive(wrapper);
}
```

:::

## 2 响应丢失问题

如果直接将 reactive 数据结构，会失去响应性，见代码 1；为了不失去响应性，可以按照代码 2 来构造 newObj。
:::code-tabs
@tab 1. 直接解构 reactive

```js
const obj = reactive({ foo: 1, bar: 2 });
const newObj = { ...obj }; // 对应 vue 中解构 reactive 数据给模板使用
effect(() => {
  console.log(newObj.foo); // newObj 是一个普通对象，不是响应式对象，无法 track
});
obj.foo = 10; // 不会触发响应
```

@tab 2. 不失响应性的做法

```js{2-13,15}
const obj = reactive({ foo: 1, bar: 2 });
const newObj = {
  foo: {
    get value() {
      return obj.foo;
    },
  },
  bar: {
    get value() {
      return obj.bar;
    },
  },
};
effect(() => {
  console.log(newObj.foo.value); // newObj 是一个普通对象，不是响应式对象，无法 track
});
obj.foo = 10; // 现在可以触发响应
```

@tab 3. 抽象后的用法

```js
const obj = reactive({ foo: 1, bar: 2 });
const newObj = { ...toRefs(obj) };
effect(() => {
  console.log(newObj.foo.value);
});
obj.foo = 10; // 触发响应
```

:::

由此，我们将这种结构抽象出来如下面的代码 1。为了概念上的同意，toRef 和 toRefs 转换后的结果也视为 ref 数据，所以要在 toRef 函数上加上一段代码，见下面的代码 2。

现在的 toRef 函数的结果是只读的，我们还要给它加上 setter 函数，见下面的代码 3。

:::code-tabs
@tab 1. toRef & toRefs

```js
function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key];
    },
  };
  return wrapper;
}

function toRefs(obj) {
  const ret = {};
  for (const key in obj) {
    ret[key] = toRef(obj, k);
  }
  return ret;
}
```

@tab 2. toRef 上加属性 \_\_v_isRef

```js{7-9}
function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key];
    },
  };
  Object.defineProperty(wrapper, "__v_isRef", {
    value: true,
  });
  return wrapper;
}
```

@tab 3. 加 setter

```js{6-8}
function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key];
    },
    set value(val) {
      obj[key] = val
    }
  };
  Object.defineProperty(wrapper, "__v_isRef", {
    value: true,
  });
  return wrapper;
}
```

:::

## 3 自动脱 ref

我们在使用 Vue 时，在模板中写 ref 数据都不需要加 `.value`，这就是自动脱 ref。

上面代码中 `const newObj = { ...toRefs(obj) }` 在访问属性时，必须用 `newObj.foo.value`，如果想直接通过 `newObj.foo` 来实现对该数据的访问，应该怎么办呢？

我们可以使用 Proxy 为 newObj 创建一个代理对象，在 get 拦截函数中利用之前提到过的 '\_\_v_isRef' 属性标识，来达到目的。

同理，设置属性时也要有脱 ref 的能力，我们在 set 拦截中也做了对应的修改。

```js{5-6,10-14}
const proxyRefs(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver)
      // 如果读取的是 ref，返回其 value 属性
      return value.__v_isRef ? value.value : value
    },
    // 设置属性也可以脱 ref
    set(target, key, newVal, receiver) {
      const value = target[key];  // 真实值
      if (value.__v_isRef) {
        value.value = newVal
        return true
      }
      return Reflect.set(target, key, newVal, receiver)
    }
  })
}
```

现在，就可以自动脱 ref、不使用 `.value` 来访问对应值了。

```js
const newObj = proxyRefs({ ...toRefs(obj) });

newObj.foo; //1
newObj.bar; //2
```

在 Vue 的 setup 中，ref 数据会自动传递给 proxyRefs。这就是为什么我们可以直接在模板里访问一个 ref 的值，而无须通过 .value 属性来访问。
