---
lang: zh-CN
title: 3. 事件循环
description:
article: false
date: 2024-01-10
order: 4
---

事件循环（Event Loop）是一个无限循环的过程，它一直监测 Call Stack 和任务队列的情况。有任务等待执行时，Event Loop 就等着 Call Stack 变空，一旦变空，就将任务放入 Call Stack 中执行。

:::tip 当 JavaScrip 引擎在执行任务时，永远不会进行 Rendering。
如果任务执行的时间太长，浏览器就不能做其他任务了（比如这是有一些 user events 不能被处理）。于是，过一段时间之后就会发出一个类似 ”Page Unresponsive“ 的警报，建议杀死任务结束整个页面。
:::

## 1. 宏任务、微任务

### 1.1 宏任务

宏任务包括：

- `<script src="..."></script>`
- HTML DOM Events，如 `mousemove`
- `setTimeout`, `setTimeInterval`

### 1.2 微任务

ECMA 标准规定了一个内部队列 `promiseJobs`，通常被成为”微任务队列“（microtask queue）。

微任务包括：

- promise 以及 `.then/catch/finally`
- `await`
- `queueMicrotask(func)`：对 `func` 进行排队，以在微任务队列中执行。

## 2. 代码执行顺序

每个宏任务之后，引擎会立刻执行微任务队列中的所有任务；然后再执行其它宏任务，或渲染，或进行其它操作。

推荐[视频](https://www.youtube.com/watch?v=8aGhZQkoFbQ)。
