---
lang: zh-CN
title: BigInt
description:
article: false
date: 2023-11-26
---

`BigInt` 是一种特殊的数字类型，提供了一种方法来表示大于 `2^53 - 1` 的整数，支持任意长度的整数。

> 更多内容请查看：[BigInt MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

<!-- more -->

## 1. 快速介绍

BigInt 可以通过两种方式创建：1. 在整数字面量后面加 `n`; 2. 调用 `BigInt` 函数，从传入的字符串或数字生成 bigint。

```js
// 1. 创建
const bigint = 1n;
const b = BigInt("1");
const c = BigInt(1);

typeof 1n; // 'bigint'

// 2. 运算
// 2.1 四则运算
1n + 2n; // 3n
5n / 2n; // 2n  除法会舍去小数部分
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// 不能将 bigint 和常规 Number 混合使用
// 如果需要混合使用，请显式转换
const number = 2;
alert(bigint + BigInt(number)); // 3 （值为 3n）
alert(Number(bigint) + number); // 3

// 2.2 不支持一元加法
alert(+bigint); // TypeError: Cannot convert a BigInt value to a number

// 2.3 比较运算
// bigint 和 Number 可以进行比较
alert(2n > 1n); // true
alert(2n > 1); // true

// bigint 和 Number 只能 ==
// 由于是不同类型，=== 一定是 false
alert(1 == 1n); // true
alert(1 === 1n); // false

// 2.4 布尔运算
// 0n 为
```

## 2. Polyfill

目前没有一个通用的好用的 polyfill。

但是 [JSBI](https://github.com/GoogleChromeLabs/jsbi) 库的开发者提出了另一种解决方案。该库使用自己的方式实现的大数，可以用它来代替原生 bigint。

| 操作           | 原生 `BigInt`     | JSBI                      |
| :------------- | :---------------- | :------------------------ |
| 从 Number 创建 | `a = BigInt(100)` | `a = JSBI.BigInt(100)`    |
| 加法           | `c = a + b`       | `c = JSBI.add(q, b)`      |
| 减法           | `c = a - b`       | `c = JSBI.subtract(a, b)` |
| ...            | ...               | ...                       |

对于支持 bigint 的浏览器，可以使用 polyfill（Babel 插件）将 JSBI 调用转换为原生的 bigint。对于那些不支持 bigint 的浏览器，原样使用 JSBI 代码即可。
