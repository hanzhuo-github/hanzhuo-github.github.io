---
lang: zh-CN
title: 模块
description:
article: false
date: 2023-11-11
order: 5
---

这篇文章说的模块是 ES Module。

可以认为一个模块就是一个文件。模块可以互相加载，并使用 `export` 和 `import` 来互相使用彼此的功能。

- `export`：标记了当前模块中，可以被外部模块访问的变量和函数
- `import`：从其它模块进行导入。

## 1. 模块的特点

- 模块总是使用严格模式。
- 每个模块都有自己的顶级作用域。模块中的顶级 `this` 是 `undefined`。
- 模块代码只在第一次 `import` 时被解析

:::code-tabs
@tab use strict

```html
<script type="module">
  a = 5; // error
</script>
```

@tab 顶级作用域

```html
<script type="module">
  let a = 5;
</script>
<script type="module">
  alert(this); // undefined
  alert(a); // Error: a is not defined
</script>
```

:::

`import.meta` 对象中有当前模块的信息，它的内容取决于环境。在浏览器中，它包含当前脚本的 URL，如果在 HTML 中，包含当前页面的 URL。

## 2. 浏览器中模块的特点

### 2.1 模块脚本是延迟的（deferred）

模块脚本与 `defer` 特性（见 [script 中的 defer 和 async](../browser/script-defer&async.md)）的脚本行为是一样的。即：

- `<script type="module" src="...">` 不会阻塞页面，它们会与其他资源并行加载
- HTML 文档解析完毕后才执行模块脚本
- 按照脚本在文档中的顺序执行

### 2.2 用 async 特性

`async` 特性除了可用于外部脚本，也可以用于模块脚本。模块脚本使用 `async` 特性时，和异步脚本具有相同的行为。

### 2.3 外部脚本

- 具有相同的 `src` 的外部脚本仅运行一次。

- 从另一个源（如另一个网站）获取的外表脚本需要 CORS header，远程服务器必须提供表示允许获取的 header `Access-Control-Allow-Origin`。

### 2.4 不允许裸模块（bare module）

浏览器中的 `import` 必须给出相对或绝对 URL 路径。没有任何路径的模块就是裸模块。

```js
// 模块必须有路径，比如 './x.js'
import { x } from "x"; // Error，裸模块
```

### 2.5 兼容性

旧的浏览器不理解 `type="module"`，可以使用 `nomodule` 特性来提示用户：

```html
<script type="module">
  alert("Module!");
</script>

<script nomodule>
  alert("现代浏览器理解 type=module 和 nomodule，就忽略 nomodule 了");
  alert("旧的浏览器忽略了不理解的 type=module，执行了这个");
</script>
```

## 3. 构建工具

在实际开发中我们会用 [Webpack](https://webpack.js.org/) 等工具将不同的模块打包在一起，然后部署到生产环境的服务器。

打包工具允许我们使用裸模块和更多功能。

构建工具会做以下事情：

1. 从主模块（将被放到 HTML 中的 `<script type="module">`）开始，
2. 分析它的依赖：导入、以及导入里的导入
3. 用所有的模块构建一个单独的文件，用 bundler 函数代替 `import`。也支持 HTML/CSS 模块等特殊的模块。
4. 在这个过程中，还可能有其他的转化和优化

- 删除无法访问的代码（unreachable code）
- 删除未使用的 `export`（“tree-shaking”）
- 删除开发时才会使用的 `console`、`debugger` 等语句
- 使用 [Babel](https://babeljs.io/) 将现代、前沿的 JavaScript 语法转换为具有类似功能的旧语法
- 压缩生成的文件（删除空格，用短名字代替变量名，等等）
