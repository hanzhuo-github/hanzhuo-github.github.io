---
lang: zh-CN
title: 框架设计
description:
article: false
date: 2024-10-01
order: 1
---

## 1 命令式 v.s. 声明式

视图层框架通常分为命令式（关注过程，如 JQuery）和声明式。

声明式代码的性能不优于命令式代码的性能。这不难理解，命令式代码可以直接用相关命令来进行对应操作；而声明式代码为了更优的性能，需要先找出代码差异只更新最新变化之处，最后仍然是要进行对应操作（这一步和命令式代码相同）。

但是，声明式代码的可维护性更强。框架的设计要保持可维护性，同时最小化性能损失。

## 2 虚拟 DOM 的性能

声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗

虚拟 DOM 就是为了最小化找出差异的性能消耗。

对比一下虚拟 DOM 和 innerHTML 模板的性能。（1）创建页面时，虚拟 DOM 需要创建 JavaScript 对象（VNode），然后新建所有 DOM 元素；innerHTML 需要渲染 HTML 字符串，然后新建所有 DOM 元素。（2）更新页面时，innerHTML 仍然要渲染 HTML 字符串，然后**销毁所有旧 DOM，新建所有新 DOM**；而虚拟 DOM 只需要进行**必要的 DOM 更新**，在此之前，它会创建新的 JavaScript 对象，并进行 Diff。

更新页面时，虚拟 DOM 的性能主要与数据变化量相关，而 innerHTML 的性能与模板大小相关。如果 innerHTML 模板很大，且只有少量更新，那它的性能显然更差。

## 3 运行时、编译时

运行时：假设我们设计了一个框架，它提供了一个 Render 函数，它接收一个树形结构的数据对象，根据该对象递归地将数据渲染成 DOM 元素。

用户在使用这个框架时，会觉得写树形结构的数据对象不直观，能不能用类似 HTML 标签的方式来描述这个树形结构的数据对象呢。

为了满足这种需求，我们可以引入编译手段，将 HTML 标签编译成树形结构的数据对象，这样就可以继续使用 Render 函数了。于是，我们写了一个 Compiler 函数，来讲 HTML 字符串编译成树形结构的数据对象。

这样，就可以写 HTML 标签，然后以此调用 Compiler、Render 函数。这时，就实现了一个运行时 + 编译时的框架。

## 4 Tree-Shaking

框架要做到良好的 Tree-Shaking。Tree-Shaking 就是消除永远不会被执行的代码（即 dead code），rollup 和 webpack 都支持 Tree-Shaking。

实现 Tree-Shaking 是有前提的，要求模块必须是 ESM (ES Module)，因为 Tree-Shaking 依赖 ESM 的静态结构。

在函数调用时（一般是顶级调用）使用 `/*#__PURE__*/` 来表明这是纯函数，不会有任何副作用，这样 Tree-Shaking 就会将这段代码移除掉。

## 5 框架构建的产物

1. IIFE（Immediately Invoked Function Expression，立即调用函数表达式）

配置：`format: 'iifl'`

使用：`<script src="/path/to/vue.js"></script>`
Vue 的输出文件：vue.global.js

2. ESM

有两种 ESM：

- 用于浏览器的 esm-browser.js
  - 使用：`<script type="module" src="/path/to/vue.esm-browser.js"></script>`
  - 将预定义常量 `_DEV_` 替换为字面量 true 或 false
- 用于打包工具的 esm-bundler.js
  - 使用：在配置中指定路径 `"module": "dist/vue.runtime.esm-bundler.js"`（如果 package.json 中存在 module 字段，会优先使用 module 字段指向的资源来代替 main 指向的资源）
  - 将预定义常量 `_DEV_` 替换为 `process.env.MPDE_ENV !== 'production'` 语句

配置：

- `format: 'esm'`
- `"main": "index.js"`
- `"module": "dist/vue.runtime.esm-bundler.js"`

3. CommonJS

配置：`format: 'cjs'`

使用：服务端渲染（Vue.js 的代码在 Node.js 中运行，而非浏览器），能够使用 require 语句引用资源。`const Vue = require('vue')`

## 6 Vue

Vue.js 声明式描述 UI，既可以使用模板，也可以使用虚拟 DOM

- 渲染器：把虚拟 DOM 对象渲染为真实 DOM 元素

  - 原理：递归遍历虚拟 DOM 对象，调用原生 DOM API 完成真实 DOM 的创建
  - 精髓：更新，通过 Diff 算法找出变更点，只会更新需要更新的内容

- 编译器：将模板编译为渲染函数

- 组件的本质：一组 DOM 元素的封装。可以是一个返回虚拟 DOM 的函数，也可以是一个对象（这个对象下必须要有一个函数来产出组件要渲染的虚拟 DOM）

Vue.js 回味开发环境和生产环境输出不同的包。vue.global.js 用于开发环境，包含必要的警告信息；vue.global.prod.js 用于生产环境，不包含警告信息。
