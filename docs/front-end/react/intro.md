---
lang: zh-CN
title: React 设计哲学
article: false
date: 2024-10-28
order: 1
---

React 的设计哲学：`UI = f(state)`。只有数据变化时，才会触发协调（conciliation）。

React 中关于数据的部分有：`props`、`state`、`context`。

- `props`：从组件外传进来。==不可变的（Immutable）==。
- `state`：在组件内部。==不可变的（Immutable）==。
- `context`：通过组件外的 Context.Provider 提供数据，组件内部可以消费 context 数据。

<Catalog />
