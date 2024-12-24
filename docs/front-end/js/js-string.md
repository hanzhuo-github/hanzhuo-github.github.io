---
lang: zh-CN
title: JavaScript 中的字符串
description:
article: false
date: 2023-12-06
order: 6
---

## 1. 编码方式

JavaScript 中的字符串是基于 Unicode 的。可以通过以下三种方式将一个字符以 16 进制 Unicode 编码的方式插入到字符串中

- `\xXX`
  `XX` 是 2 位十六进制数。

- `\uXXXX`
  `XXXX` 是 4 位十六进制数。

- `\u{X...XXXXXX}`
  `X...XXXXXX` 是结语 `0` 和 `10FFFF` 之间的十六进制和数。

:::code-tabs
@tab `\xXX`

```js
alert("\x7A"); // z
alert("\xA9"); // © (版权符号)
```

@tab `\uXXXX`

```js
alert("\u00A9"); // ©
alert("\u2191"); // ↑
```

@tab `\u{X...XXXXXX}`

```js
alert("\u{1F60D}"); // 😍
alert("\u{D83D}\u{DE0D}"); // 😍 代理对表示
```

:::

在 [Unicode 编码方案](/basic/character-encoding/Chapter3.md) 中介绍了代理对的概念，它使用两个 BMP 的码点来表示一个 SP 的码点。

## 2. JavaScript 对代理对的处理

JavaScript 使用 `String.fromCodePoint` 和 `str.codePointAt` 来处理代理对。和 `String.fromCharCode`, `str.charCodeAt` 类似。

```js
let a = "\u{D83D}\u{DE0D}"; // 😍
a.length; // 2  代理对的长度是 2

a.charCodeAt(0).toString(16); // d83d
a.codePointAt(0).toString(16); // 1f60d 读取的是完整度的代理对

a.charCodeAt(1).toString(16); // de0d
a.codePointAt(1).toString(16); // de0d 代理对的后半部分，无意义
```

## 3. 字符组合

很多语言都有由基础字符及其上方/下方的标记所组成的字符。比如 `àáâäãåā` 是由基础字符 `a` 及其他符号组合而成的。

Unicode 标准允许我们使用多个字符：一个基础字符，配合一个或多个标记字符。

```js
// \u0307 上方的点
// \u0323 下方的点
let a = "S\u0307"; // Ṡ
let b = "S\u0323\u0307"; // Ṩ
let c = "S\u0307\u0323"; // Ṩ

b == c; // false
```

上面代码中的 `b` 和 `c` 看起来相同，但实际上是不同的 Unicode 字符组合，于是比较的结果为 false。

可以通过 Unicode 规范化 `str.normalize()` 来解决这个问题。

```js
let bNorm = b.normalize();
let cNorm = c.normalize();
bNorm === cNorm; // true
b.length; // 3
bNorm.length; // 1

// Ṩ 比较常见，在 Unicode 中有对应的编码：\u1e68
bNorm === "\u1e68"; // true
```
