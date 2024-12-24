---
lang: zh-CN
title: DOM
description:
article: false
date: 2023-07-01
order: 1
---

DOM 的所有操作都是以 `document` 对象开始。

<div align=center>
    <img src=/images/front-end/browser/dom-links.svg width=50%/>
</div>

`childNodes` 并不是一个数组（不能使用数组的方法），而是一个集合（collection）——一个类数组的可迭代对象（即它提供了 `Symbol.iterator` 属性，可以使用 `for...of` 来迭代）。

如果想使用数组的方法，可以创建一个真正的数组：

```js
Array.from(document.body.childNodes).filter; // function
```

> 这种 DOM Collection 是只读的，不能通过 `childNodes[i] = ...` 来替换子节点。
>
> 不要用 `for...in` 来遍历 DOM Collection。`for...in` 循环遍历的是所有可枚举的属性（enumerable）。DOM Collection 中除了下标，还有一些其他的属性，如 entries、keys、values、forEach、length、item。

## Element-only Navigation

用上面的方式读取页面元素可以获得所有节点，包括文本节点、元素节点、注释节点。

但是很多任务当中，我们不想要文本节点和注释节点，只希望对元素节点做处理。

<div align=center>
    <img src=/images/front-end/browser/dom-links-elements.svg width=50%/>
</div>
