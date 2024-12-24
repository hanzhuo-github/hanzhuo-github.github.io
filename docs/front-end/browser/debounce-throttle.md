---
lang: zh-CN
title: 防抖和节流
description:
article: false
date: 2024-10-16
order: 3
---

- 防抖（Debounce）：事件在高频触发时，只有在事件结束后的一段时间内没有再次触发，函数才会执行。
  - 场景：搜索框输入、窗口大小调整、表单验证
- 节流（Throttle）：事件在高频触发时，保证函数在指定时间间隔内只执行一次。
  - 场景：滚动事件、按钮点击（防止重复提交）、页面滚动或窗口拖动

<!-- more -->

## 1 防抖和节流的基本概念

防抖和节流是优化高频执行代码的一种手段。

- 防抖（Debounce）：事件在高频触发时，只有在事件结束后的一段时间内没有再次触发，函数才会执行。
  - 执行函数的时机：最后一次事件触发后，延迟一段时间执行
  - 实现机制：每次事件触发都会重置计时器，函数只会在最后一次事件停止后的一段时间内执行
  - 场景：
    - 搜索框输入
    - 窗口大小调整
    - 表单验证
- 节流（Throttle）：事件在高频触发时，保证函数在指定时间间隔内只执行一次。
  - 执行函数的时机：固定时间间隔内只执行一次，若在该时间内重复触发，只有第一次生效
  - 实现机制：不管事件触发多少次，函数都会按照固定的时间间隔执行，不会重置计时器
  - 场景：
    - 滚动事件
    - 按钮点击（防止重复提交）
    - 页面滚动或窗口拖动

## 2 防抖和节流的实现

### 2.1 防抖的实现

每次事件触发时，清除上一次的定时器；只有当设定的延迟时间内没有再次触发时，才会执行函数。
:::code-tabs

@tab 防抖

```js
function debounce(func, limit) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), limit);
  };
}
```

@tab 支持 immediate

```js{5,9,10,13}
function debounce(func, limit, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, limit);

    if (callNow) func.apply(context, args);
  };
}
```

:::

使用：

```js
const handleResize = debounce(() => {
  console.log("Resize event handler executed");
}, 300);

window.addEventListener("resize", handleResize);
```

### 2.2 节流的实现

:::code-tabs
@tab 节流

```js
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

@tab 支持 immediate

```js{3,6-9,14-17}
function throttle(func, limit, immediate) {
  let inThrottle;
  let lastRan;  // 最后一次执行的时间
  return function (...args) {
    const context = this;
    if (!lastRan && immediate) {
      func.apply(context, args);
      lastRun = Date.now();
    } else {
      if (!inThrottle) {
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
          if (!immediate || Data.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit);
      }
    }
  };
}
```

:::

使用：

```js
const handleScroll = throttle(() => {
  console.log("Scroll event handler executed");
}, 200);

window.addEventListener("scroll", handleScroll);
```
