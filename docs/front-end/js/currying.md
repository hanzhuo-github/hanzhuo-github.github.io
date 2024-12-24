---
lang: zh-CN
title: 柯里化（Currying）
description:
article: false
date: 2023-11-26
---

柯里化（Currying）是对函数的转换，将其调用从 `f(a, b, c)` 转换为 `f(a)(b)(c)`。

<!-- more -->

## 1. 柯里化应用

lodash 库中提供了 [`_.curry`](https://lodash.com/docs#curry)，会返回一个包装器，该包装器允许函数正常调用或部分调用（partial）。

```js
function sum(a, b) {
  return a + b;
}

const currySum = _.curry(sum);

alert(currySum(1, 2)); // 允许正常调用
alert(currySum(1)(2)); // 允许 partial 调用
```

如果我们需要实现一个“加 100”的函数，可以利用上面的柯里化后的函数：

```js
const sum100 = currySum(100);

alert(sum100(2)); // 102
alert(sum100(8)); // 108
```

## 2. 柯里化实现

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
```

```js
// 使用
function sum(a, b, c) {
  return a + b + c;
}

const currySum = curry(sum);

alert(currySum(1, 2, 3)); // 6
alert(currySum(1)(2, 3)); // 6
alert(currySum(1)(2)(3)); // 6
```

:::info 注意
柯里化要求函数有确定数量的参数。
:::
