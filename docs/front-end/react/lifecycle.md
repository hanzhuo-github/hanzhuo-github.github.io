---
lang: zh-CN
title: 生命周期
article: false
date: 2024-10-28
order: 2
---

## 1 类组件的生命周期

生命周期方法：挂载（Mounting）、更新（Updating）、卸载（Unmounting）。

```js
class CustomComponent extends React.Component {
  constructor(props) {
    super(props);
    // ...
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>{this.props.title}</div>;
  }
}
```

### 生命周期

<div align=center>
    <img src=/images/front-end/react/class-component-lifecycle.webp width=70%/>
</div>

- 渲染阶段：异步过程，负责更新虚拟 DOM（FiberNode）树。这个过程可能会被 React 暂停和恢复、甚至并发处理，因此要求**渲染阶段的生命周期方法必须是没有任何副作用（Side Effect）的纯函数（Pure Function）**。

- 提交阶段：同步过程，根据渲染阶段的比对结果修改真实 DOM，这一阶段的生命周期方法可以包含副作用。

### 生命周期函数

- `static getDerivedStateFromProps`：如果类组件中定义了这个静态方法，React 会调用这个方法，根据返回值来设置 state。这个特性肯呢个造成组件内部的 state 被意外覆盖，应慎用。

- `shouldComponentUpdate`：如果类组件中定义了这个方法且返回值是 `false`，则组件在这一次更新阶段不会重新渲染，后续的 render 等方法也不会被执行，直到下一次更新。这是早期版本最常见的性能优化方法之一，也是最常写出 Bug 的 API 之一。为了尽量避免跳过必要更新，应优先使用 React 的 [PureComponent 组件](https://zh-hans.react.dev/reference/react/PureComponent)。

- `getSnapshotBeforeUpdate`：在本次更新真实 DOM 之前，有一次访问原始 DOM 树的机会。

- `componentDidUpdate`：要注意，需要通过对比新旧 props 或 state 来避免死循环。

- `componentWillUnmount`：可以在这个方法中清理定时器、取消不受 React 管理的事件订阅等。

另外，显示调用 `forceUpdate()` 也可以进行更新。

对于错误处理，如果组件本身定义了 `static getDerivedStateFromError` 和 `componentDidCatch` 这两个生命周期方法中的一个，或者两个都定义了，这个组件就成为了错误边界（Error Boundary），这两个方法会被 React 调用来处理错误。

如果当前组件不是错误边界，React 就会去找父组件；如果父组件也不是，就继续往上，直到根组件；如果没有被任何组件接住，应用就挂了。到 v18.3.1，只有类组件才能作为错误边界，函数组件不可以。

## 2 函数组件的声明周期

### 生命周期

<div align=center>
    <img src=/images/front-end/react/fc-lifecycle.webp width=70%/>
</div>

- 挂载阶段：React 会执行组件函数，执行过程中遇到 `useState`、`useMemo` 等 Hooks 会一次挂在到 FiberNode 上。`useEffect` 也会被挂载，但是它包含的副作用（Fiber 引擎中称为 Effect）会保留到提交阶段。

React 在渲染阶段根据返回值创建 FiberNode 树，在提交阶段，React 更新真实 DOM 之后会一次执行前面定义的 Effect。

提交阶段，React 会更新真实 DOM。然后 React 先执行上一轮 Effect 的清除函数，然后再次执行 Effect（包括 `useEffect` 和 `useLayoutEffect`）。`useLayoutEffect` 的副作用是在更新真实 DOM 之后同步执行的（类似于类组件的 `componentDidMount`、`componentDidUpdate`）；而 `useEffect` 的副作用是异步执行的，一般晚于 `useLayoutEffect`。
