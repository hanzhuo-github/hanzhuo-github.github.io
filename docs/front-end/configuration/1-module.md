---
lang: zh-CN
title: 模块化规范
description:
article: false
date: 2023-12-20
order: 1
---

## 1. 模块系统

- Browser 支持 ES Module（ESM）
- Node.js v11 以及以前的版本支持 CommonJS（CJS）
- Node.js v12 及以后版本既支持 CJS 也支持 ESM

### 1.1 CommonJS

CommonJS 是 Node.js 创造的一种模块化规范，旨在是 JavaScript 可以在服务端环境中使用。

在 CommonJS 中，每个文件都被视为一个模块，模块内部的代码不会自动暴露到全局作用域中，而要通过 `module.exports` 或 `exports` 来显式导出。

模块的引入通过 `require()` 来实现，使用其返回的对象来访问模块导出的内容。

```js
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};

// app.js
const math = require("./math");
console.log(math.add(1, 2)); // 3
```

### 1.2 ES Module

ESM 是 ECMAScript 规范的一部分，在 ES6（ES2015）开始被引入到 JavaScript 中。

ESM 使用 `import` 和 `export` 来导入、导出模块。

ESM 使用静态结构，在编译时就能够确定模块之间的依赖关系，这使得工具可以进行更有效的优化和静态分析。

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add } from "./math";
console.log(add(2, 3)); // 输出 5
```

ESM 的演进：

- ES2015 是第一个引入了 `import` 和 `export` 到 JavaScript 语言的版本。
- ES2020 添加了对 `import.meta` 和 `export * as ns from "mod"` 的支持。
- ES2022 添加了对顶层 `await` 的支持。
- ESnext 会随着 ECMAScript 规范的演进保持最新，包括和模块相关的 Stage 3+ 提案。

### 1.3 Node.js 对魔铠格式的检验

Node.js v12 及之后的版本既支持 CJS 也支持 ESM，但是每个文件的格式是由其文件扩展名、最近的 `package.json` 文件中的 `"type"` 字段决定的。

- `.mjs`/`.mts` 会被解释为 ES 模块，`.cjs`/`.cts` 会被解释为 CommonJS 模块
- 对于 `.js`/`.ts` 文件，查看最近的 `package.json` 文件中的 `"type"` 字段，如果是 `"module"`，则该文件被解释为 ES 模块，否则为 CommonJS 模块。

如果文件被确定为 ES 模块，Node.js 在执行期间就不会注入 CommonJS 模块和 `require` 对象到文件的作用域中。所以如果尝试使用它们程序会报错。

## 2. ESM 和 CJS 的互操作性

ESM 和 CJS 是否能互相引入呢？CommonJS 并不是 ECMAScript 规范的一部分，因此自 ESM 在 2015 年被标准化以来，运行时环境、打包工具、转移器都可以使用自己的方案自由处理二者之间的互操作性问题，没有一套标准的互操作性规则。

目前已有的互操作性规则大致有以下三类：

1. ESM-only：例如浏览器这类运行时环境，就只支持 ECMAScript Modules。
2. Bundler-like：在 JavaScript 引擎能够运行 ESM 之前，Babel 允许开发者将其转译为 CommonJS 模块。这些经过转译的 ESM 与手写的 CommonJS 之间的互操作性规则成为了打包工具和转译器的事实标准。
3. Node.js：在 Node.js 中， CommonJS 模块不能同步加载（使用 `require`）ES 模块，只能通过异步的 `import()` 来加载。ESM 可以默认导入 CommonJS 模块，而这些导入会绑定到 `exports` 对象上。
