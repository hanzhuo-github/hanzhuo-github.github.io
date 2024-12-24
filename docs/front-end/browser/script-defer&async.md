---
lang: zh-CN
title: script 中的 defer 和 async
description:
article: false
date: 2023-11-11
order: 2
---

当浏览器遇到 `<script>` 时，它必须先处理该脚本，对于外部脚本 `<script src="...">` 也一样，必须先等脚本下载完并执行结束，然后才能继续构建 DOM。

于是，如果页面的顶部有一个需要长时间运行的脚本，它会阻塞页面，用户要等到脚本执行完才能看到页面。另外，脚本不能访问位于它下面的元素。

`<script>` 中的两个特性 `defer` 和 `async` 可以解决这个问题。

<!-- more -->

## 1. defer

`defer` 特性告诉浏览器不要等待脚本，让浏览器继续处理 HTML，构建 DOM。脚本会在后台下载，等 DOM 构建完成后，再执行脚本。它有以下特性：

- `defer` 属性的脚本不会阻塞页面
- `defer` 属性的脚本在 DOM 解析完毕后，`DOMContentLoaded` 事件前执行。
- `defer` 属性的脚本的执行保持相对顺序

```html
<p>script 前</p>

<script>
  document.addEventListener("DOMContentLoaded", () =>
    alert("DOM ready after defer!")
  );
</script>

<script defer src="/path/to/script/1"></script>
<script defer src="/path/to/script/2"></script>

<p>script 后</p>
```

上面的代码会立刻显示页面内容。然后处理有 `defer` 属性的脚本，等它们完成后（按照代码中的顺序，先执行脚本 1，再执行脚本 2），`DOMContentLoaded` 事件被触发。

脚本 1 和脚本 2 可以是并行下载的，无论谁先下载完，都必须是 1 先执行，2 后执行。

## 2. async

`async` 也是为了让脚本不阻塞页面，但它是完全独立的。

- 浏览器不会因 `async` 脚本阻塞页面（同 `defer`）
- 其他脚本不会等待 `async` 脚本，`async` 脚本也不会等待其他脚本
- `DOMContentLoaded` 和 `async` 脚本不会互相等待

`async` 脚本在后台加载，加载完成后立即执行。DOM 和其他脚本都不会等待 `async` 脚本，`async` 脚本也不会等待其他东西。它就是一个加载完就执行的完全独立的脚本。

它的执行顺序与引用的顺序无关，只和代码加载完成的顺序有关，谁先加载完谁就先执行。

:::info `defer` 只适用于外部脚本
如果 `<script>` 没有 `src`，那么 `defer` 和 `async` 都会被忽略。

但是，`async` 也可以用于模块脚本。即 `<script async type="module"></script>` 也是可以的。
:::

## 3. 动态脚本

如果使用 JavaScript 动态创建一个脚本，并将其附加到文档中：

```js
const script = document.createElement("script");
script.src = "/path/to/script";
document.body.append(script); // 文档被附加到文档中，脚本立刻开始加载
```

这种情况下，当文档被附加到文档中时，脚本就开始加载。这种动态脚本的行为是异步的（相当于设置了 `async`）：

- 它们不会等待任何东西，其它东西也不会等它们
- 先加载完的脚本先执行

如果显示设置了 `script.async=false`，这个脚本的行为相当于 `defer`，它要按照脚本在文档中的顺序去执行。

## 4. 总结

|       | 顺序                                                     | DOMContentLoaded                                                                                           |
| ----- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| async | 加载优先。脚本在文档中的顺序不重要 —— 先加载完成的先执行 | 不相关。可能在文档加载完成前加载并执行完毕。如果脚本很小或者来自于缓存，同时文档足够长，就会发生这种情况。 |
| defer | 在文档中的顺序                                           | 在文档加载和解析完成之后，在 DOMContentLoaded 之前执行。                                                   |
