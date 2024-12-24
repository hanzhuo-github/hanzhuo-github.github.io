---
lang: zh-CN
title: 渲染器
description:
article: false
date: 2024-10-05
order: 5
headerDepth: 3
---

## 1 渲染器的基本实现

### 1.1 渲染器和响应系统的结合

在浏览器平台上，渲染器会把虚拟 DOM 渲染成真实 DOM 元素。

```js
function renderer(domString, container) {
  container.innerHTML = domString;
}

let count = ref(1)
// 使用
effect(() => {
  renderer(`<h1>${count.value}</h1>`， document.getElementById('app'))
})

count.value++
```

在副作用函数内调用 renderer 进行渲染，会与响应式数据 count 建立响应联系。当修改 count.value 的值时，副作用函数会重新执行，进行重新渲染。

这样，就利用响应系统的能力，自动调用渲染器完成了页面的渲染和更新。

- 挂载 mount：渲染器把虚拟 DOM 节点渲染为真实 DOM 节点的过程叫作挂载。
  - Vue 中的 mounted 钩子就是在挂载完成时触发的，所以在 mounted 钩子中可以访问真实 DOM 元素。
  - 挂载点：渲染器并不知道把真实 DOM 挂载到哪里，所以它需要接收一个挂载点作为参数来指定具体的挂载位置。这里的挂载点就是一个 DOM 元素，通常用 container 来表达这个容器元素。
- 虚拟 DOM：virtual DOM，dom
- 虚拟节点：virtual node，vnode

> 虚拟 DOM 是树形结构，树中的任何 vnode 都可以是一棵子树，所以 vnode 和 vdom 可以替换使用。

### 1.2 渲染器的内部结构

```js
function createRenderer() {
  function render(vnode, container) {
    // ...
  }

  function hydrate(vnode, container) {
    // ... 服务器端渲染相关
  }

  return {
    render,
    hydrate,
  };
}
```

渲染器不仅包含 render 函数，还包括 hydrate 等函数，Vue3 中创建应用的 createApp 也是渲染器的一部分。

### 1.3 render 函数的基本实现

```js
const renderer = createRenderer();

// 首次渲染，挂载
renderer.render(oldVNode, document.querySelector("#app"));
// 二次渲染，挂载 + 更新
renderer.render(newVNode, document.querySelector("#app"));
```

首次渲染时，只需要创建新 DOM 元素，只涉及到挂载。在同一个 container 上再一次调用 renderer.render 时，渲染器除了要执行挂载外，还需要执行更新。这时，渲染器会将 newVNode 和 oldVNode 进行比较，找到不同之处并进行更新。这个过程叫 **patch**。挂载动作可以看成一种特殊的 patch，即 oldVNode 不存在的 patch。

下面给出 render 函数的基本实现

```js
function createRenderer() {
  function patch(n1, n2, container) {
    // n1 旧 vnode，n2 新 vnode
  }

  function render(vnode, container) {
    if (vnode) {
      // 新 vnode 存在，将新旧 vnode 传递给 patch 进行更新
      patch(container._vnode, vnode, container);
    } else {
      // 新 vnode 不存在，但是旧 vnode 存在，即卸载 unmount
      // 只需清空 container 中的 DOM
      if (container._vnode) {
        container.innerHTML = "";
      }
    }

    container._vnode = vnode; // 更新旧 vnode
  }

  return { render };
}
```

### 1.4 patch 函数

虚拟 DOM 的一个示例如下：

```js
const vnode = {
  type: "h1",
  children: "hello",
};
```

下面针对浏览器环境实现一个基本的 patch，如代码 1。

为了将渲染器设计为可配置的通用渲染器（即实现渲染到任意平台上），可以把浏览器特定的 API 抽离出来。在此基础上，再为那些被抽离的 API 提供可配置的接口，就可以实现渲染器的跨平台能力了。见代码 2。

:::code-tabs

@tab 1. 浏览器环境

```js
function patch(n1, n2, container) {
  // n1 旧 vnode 不存在，进行挂载
  if (!n1) {
    mountElement(n2, container);
  } else {
    // ...
  }
}

function mountElement(vnode, container) {
  const el = document.createElement(vnode.type);
  // 子节点是字符串，文本节点
  if (typeof vnode.children === "string") {
    el.textContent = vnode.children;
  }
  container.appendChild(el); // 将元素添加到容器中
}
```

@tab 2. 抽离浏览器特有的 API

```js{18,21,23,25}
// 创建 renderer 时传入配置项
const renderer = createRenderer({
  // 创建元素
  createElement(tag) {
    return document.createElement(tag);
  },
  // 设置文本节点
  setElementText(el, text) {
    el.textContent = text;
  },
  // 在 parent 下添加指定元素
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor);
  },
});

function createRenderer(options) {
  const { createElement, setElementText, insert } = options;

  function mountElement(vnode, container) {
    const el = createElement(vnode.type);
    if (typeof vnode.children === "string") {
      setElementText(el, vnode.children);
    }
    insert(el, container);
  }
  function patch(n1, n2, container) {}
  function render(vnode, container) {}

  return { render };
}
```

:::

## 2 挂载与更新

### 2.1 挂载子节点、元素属性

vnode 结构：

```js
const vnode = {
  type: "div",
  // props 用来表述一个元素的属性
  props: {
    id: "foo",
  },
  children: [
    {
      type: "p",
      children: "hello",
    },
  ],
};
```

在 mountElement 函数中添加对 props 的处理如下面代码 4~11 行；添加对 children 为数组时的处理如下面代码 15~20 行。

```js{4-11,15-20}
function mountElement(vnode, container) {
  const el = createElement(vnode.type);

  // 处理 props
  if(vnode.props) {
    for (const key in vnode.props) {
      el.setAttribute(key, vnode.props[key])
      // 或者
      // el[key] = vnode.props[key]
    }
  }

  if (typeof vnode.children === "string") {
    setElementText(el, vnode.children);
  } else if (Array.isArray(vnode.children)) {
    // vnode.children 是一个数组
    vnode.children.forEach((child) => {
      patch(null, child, el);
    });
  }
  insert(el, container);
}
```

#### 2.1.1 HTML Attributes v.s. DOM Properties

```html
<input id="my-input" type="text" value="foo" />
```

在 HTML 标签上定义的属性就是 HTML Attributes，如这里的 `id="my-input"`、`type="text"`、`value="foo"`。

而 DOM 对象的 properties 就很多了，如上面的 DOM 对象的 properties 有：checked、autocomplete、height 等等。

其中一些和 HTML Attributes 同名，比如 `el.id`、`el.type`、`el.value`。

不过，HTML Attributes 和 DOM Properties 对应的部分并非是同名的，比如 HTML Attributes 中的 `class` 属性，在 DOM Properties 中的名字是 `el.className`。

也并非所有的 HTML Attributes 都有与之对应的 DOM Properties，比如 `aria-*` 类的 HTML Attributes。

当然，也并非所有的 DOM Properties 有与之对应的 HTML Attributes，比如 `el.textContent` 可以直接用来设置文本节点的内容，但是没有对应的 HTML Attributes 可以实现同样的操作。

对于 `<input value="foo" />`，用户通过修改文本框将内容修改为 "bar"，那么：

```js
el.getAttribute("value"); // 仍然是 ‘foo’
el.value; // 'bar'
el.defaultValue; // 'foo'
```

HTML Attribute 的作用是设置与之对应的 DOM Properties 的初始值。

#### 2.1.2 设置元素属性

```html
<button disabled>按钮1</button>

<button :disabled="false">按钮2</button>
```

如果渲染器使用 el.setAttribute 来处理，

```js
el.setAttribute("disabled", ""); // 1 - 按钮禁用，与预期相符
el.setAttribute("disabled", "false"); // 2- 使用 setAttribute 设置的值会被字符串化，按钮禁用了，与预期不符

// 解决：可以优先设置 DOM Properties
// 2 - 符合预期
el.disabled = false;
// 1 - disable 是一个 boolean 类型，''会被转成 false，与预期不符
// 所以对于 boolean 类型，需要把空字符串 '' 修正为 true
el.disabled = "";
```

另外，如果 DOM Properties 是只读的，那就只能通过 setAttribute 来设置了。

具体实现：

:::code-tabs
@tab 优先 DOM Properties（修正 boolean）

```js{13-18}
function mountElement(vnode, container) {
  const el = createElement(vnode.type);
  // ...省略 children 处理

  if (vnode.props) {
    for (const key in vnode.props) {
      // 优先设置 DOM Properties
      if (key in el) {
        // 在 DOM Properties 中找同名属性
        const type = typeof el[key];
        const value = vnode.props[key];

        // 修正对 boolean 值的处理
        if (type === "boolean" && value === "") {
          el[key] = true;
        } else {
          el[key] = value;
        }
      } else {
        // DOM Properties 中没有与之同名的属性
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  insert(el, container);
}
```

@tab DOM Properties 为只读时的处理

```js{1-7,17}
function shouldSetAsProps(el, key, value) {
  // <input form="form1" /> 这个 form 是只读的，不能用 DOM Properties 设置
  if (key === "form" && el.tagName === "INPUT") {
    return false;
  }
  // DOM Properties 中有同名属性，则用 DOM Properties 设置
  return key in el;
}

function mountElement(vnode, container) {
  const el = createElement(vnode.type);
  // ...省略 children 处理

  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (shouldSetAsProps(el, key, value)) {
        const type = typeof el[key];
        if (type === "boolean" && value === "") {
          el[key] = true;
        } else {
          el[key] = value;
        }
      } else {
        el.setAttribute(key, vnode.props[key]);
      }
    }
  }

  insert(el, container);
}
```

:::

最后，把属性设置也抽离出来，变成与平台无关。

```js{12-24,40}
// 创建 renderer 时传入配置项
const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag);
  },
  setElementText(el, text) {
    el.textContent = text;
  },
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor);
  },
  // 与属性设置有关的操作
  patchProps(el, key, preValue, nextValue) {
    if (shouldSetAsProps(el, key, value)) {
      const type = typeof el[key];
      if (type === "boolean" && value === "") {
        el[key] = true;
      } else {
        el[key] = value;
      }
    } else {
      el.setAttribute(key, vnode.props[key]);
    }
  },
});

// mountElement
function mountElement(vnode, container) {
  const el = createElement(vnode.type);
  if (typeof vnode.children === "string") {
    setElementText(el, vnode.children);
  } else {
    vnode.children.forEach((child) => {
      patch(null, child, el);
    });
  }

  if (vnode.props) {
    for (const key in vnode.props) {
      patchProps(el, key, null, vnode.props[key]);
    }
  }

  insert(el, container);
}
```

#### 2.1.3 对 class 的处理

:::tabs
@tab 字符串

```html
<p class="foo bar"></p>
```

对应的 vnode：

```js
const vnode = {
  type: "p",
  props: {
    class: "foo bar",
  },
};
```

@tab 对象

```html
<p :class="cls"></p>
```

对应的 vnode：

```js
const cls = { foo: true, bar: false };
const vnode = {
  type: "p",
  props: {
    class: { foo: true, bar: false },
  },
};
```

@tab 数组

```html
<p :class="arr"></p>
```

对应的 vnode：

```js
const arr = ["foo bar", { baz: true }];
const vnode = {
  type: "p",
  props: {
    class: ["foo bar", { baz: true }],
  },
};
```

:::

class 的类型多样，这里使用 normalizeClass 函数将不同类型的 class 归一化为字符串。

```js
const vnode = {
  type: "p",
  props: {
    class: normalizeClass(["foo bar", { baz: true }]),
  },
};

// 转化为：
const vnode = {
  type: "p",
  props: {
    class: "foo bar baz",
  },
};
```

normalizeClass 函数就不做解释了。

在浏览器中为一个元素设置 class 有三种方式，按照性能从好到坏依次是：`el.className`, `el.classList`, `setAttribute`。

观察前面的代码，由于 class 对应的 DOM Properties 是 className，所以 patchProps 会使用 setAttribute 来对 class 进行设置。但是最好的设置 class 的方式是 el.className，所以我们调整一下 patchProps 函数的实现。

```js
const renderer = createRenderer({
  // ... 省略其他选项
  patchProps(el, key, preValue, nextValue) {
    if (key === "class") {
      el.className = nextValue || "";
    } else if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key];
      if (type === "boolean" && nextValue === "") {
        el[key] = true;
      } else {
        el[key] = nextValue;
      }
    } else {
      el.setAttribute(key, nextValue);
    }
  },
});
```

### 2.2 卸载

初次挂载玩之后，后续渲染会触发更新，更新阶段会有卸载操作。

之前的代码中，使用 `container.innerHTML = ""` 来清空容器。

```js
function render(vnode, container) {
  if (vnode) {
    patch(container._vnode, vnode, container);
  } else {
    if (container._vnode) {
      // 卸载 unmount
      container.innerHTML = "";
    }
  }

  container._vnode = vnode; // 更新旧 vnode
}
```

这样做有以下问题：

- 容器中可能有组件，卸载时，应该正确调用这些组件的 beforeUnmount 和 unmounted 等生命周期函数。
- 即使内容不是由组件渲染的，有的元素存在自定义指令，应在卸载发生时正确执行对应的指令钩子函数。
- 使用 innerHTML 清空容器元素内容的另一个缺陷是，不会溢出绑定在 DOM 元素上的事件处理函数。

正确的卸载方式是：根据 vnode 对象获取与其相关联的真实 DOM 元素，然后使用原声 DOM 操作方法将该 DOM 元素移除。为此，需要建立 vnode 与真实 DOM 元素之间的联系。

:::code-tabs
@tab mountElement

```js{3}
function mountElement(vnode, container) {
  // vnode.el 指向真实 DOM 元素
  const el = (vnode.el = createElement(vnode.type));

  if (typeof vnode.children === "string") {
    setElementText(el, vnode.children);
  } else {
    vnode.children.forEach((child) => {
      patch(null, child, el);
    });
  }

  if (vnode.props) {
    for (const key in vnode.props) {
      patchProps(el, key, null, vnode.props[key]);
    }
  }

  insert(el, container);
}
```

@tab render 函数

```js
function render(vnode, container) {
  if (vnode) {
    patch(container._vnode, vnode, container);
  } else {
    if (container._vnode) {
      // 要卸载的真实 DOM 元素
      const el = container._vnode.el;
      const parent = el.parentNode;
      if (parent) parent.removeChild(el);
    }
  }

  container._vnode = vnode; // 更新旧 vnode
}
```

@tab 将卸载操作封装到 unmount 函数

```js
function unmount(vnode) {
  const parent = vnode.el.parent;
  if (parent) {
    parent.removeChild(vnode.el);
  }
}

function render(vnode, container) {
  if (vnode) {
    patch(container._vnode, vnode, container);
  } else {
    if (container._vnode) {
      unmount(container._vnode);
    }
  }

  container._vnode = vnode; // 更新旧 vnode
}
```

:::

- 在 unmount 函数内，我们有机会调用绑定在 DOM 元素上的指令钩子函数，如 beforeUnmount、unmounted。
- 当 unmount 函数执行时，有机会检测虚拟节点 vnode 的类型。如果该虚拟节点是组件，那么有机会调用组件相关的生命周期函数。

### 2.3 vnode 类型

```js
function patch(n1, n2, container) {
  if (n1 && n1.type !== n2.type) {
    // 新旧 vnode 类型不同，则卸载旧 vnode，后续进行挂载
    unmount(n1);
    n1 = null;
  }

  const { type } = n2;

  if (typeof type === "string") {
    if (!n1) {
      mountElement(n2, container);
    } else {
      // 类型相同，更新
      patchElement(n1, n2);
    }
  } else if (typeof type === "object") {
    // 组件
  } else if (type === "xxx") {
    // 处理其他类型的 vnode
  }
}
```

### 2.4 事件的处理

事件视作一种特殊的属性，在 vnode.props 对象中，凡是以 on 开头的属性都视作事件。

```js
const vnode = {
  type: "p",
  props: {
    onClick: () => {
      alert("clicked");
    },
  },
  children: "text",
};
```

在 patchProps 中调用 addEventListener 来绑定事件即可。

更优的处理方式是，绑定事件时，绑定一个伪造的事件处理函数 invoker，并把真正的事件处理函数设置为 invoker.value 的值。这样，更新事件时，就不用再调用 removeEventListener 来移除上一次的绑定事件，只需要更新 invoker.value 即可。
:::code-tabs

@tab 基础实现

```js{3-6}
patchProps(el, key, prevValue, nextValue) {
  // 以 on 开头
  if (/^on/.test(key)) {
    const name = key.slice(2).toLowerCase(); // onClick -> click
    prevValue && el.removeEventListener(name, preValue); // 移除上一次绑定的事件处理函数
    el.addEventListener(name, nextValue);
  } else if (key === 'class') {
    // ... 省略
  } else if (shouldSetAsProps(el, key, nextValue)) {
    // ... 省略
  } else {
    // ... 省略
  }
}
```

@tab 优化处理

```js
patchProps(el, key, prevValue, nextValue) {
  // 以 on 开头
  if (/^on/.test(key)) {
    const invokers = el._vei || (el._vei = {})
    let invoker = invokers[key]
    const name = key.slice(2).toLowerCase()
    if (nextValue) {
      if (!invoker) {
        invoker = el._vei[key] = (e) => {
          if (Array.isArray(invoker.value)) {
            invoker.value.forEach(fn => fn(e))
          } else {
            invoker.value(e)
          }
        }
        invoker.value = nextValue
        el.addEventListener(name, invoker)
      } else {
        invoker.value = nextValue
      }
    } else if (invoker) {
      el.removeEventListener(name, invoker)
    }
  } else if (key === 'class') {
    // ... 省略
  } else if (shouldSetAsProps(el, key, nextValue)) {
    // ... 省略
  } else {
    // ... 省略
  }
}
```

:::

### 2.5 事件冒泡与更新时机

要屏蔽所有绑定时间晚于事件触发时间的事件处理函数的执行

```js{12,21}
patchProps(el, key, prevValue, nextValue) {
  // 以 on 开头
  if (/^on/.test(key)) {
    const invokers = el._vei || (el._vei = {})
    let invoker = invokers[key]
    const name = key.slice(2).toLowerCase()
    if (nextValue) {
      if (!invoker) {
        invoker = el._vei[key] = (e) => {
          // e.timeStamp 事件发生的时间
          // invoker.attached 绑定事件的时间
          if (e.timeStamp < invoker.attached) return
          if (Array.isArray(invoker.value)) {
            invoker.value.forEach(fn => fn(e))
          } else {
            invoker.value(e)
          }
        }
        invoker.value = nextValue
        // invoker.attached 存储处理函数被绑定的时间
        invoker.attached = performance.now()
        el.addEventListener(name, invoker)
      } else {
        invoker.value = nextValue
      }
    } else if (invoker) {
      el.removeEventListener(name, invoker)
    }
  } else if (key === 'class') {
    // ... 省略
  } else if (shouldSetAsProps(el, key, nextValue)) {
    // ... 省略
  } else {
    // ... 省略
  }
}
```

### 2.6 更新子节点

上面介绍了元素属性的更新，包括普通标签属性和事件。接下来讨论如何更新元素的子节点。

子节点可能是没有子节点、文本子节点、一组子节点，对这几种情况分别处理。

```js
function patchElement(n1, n2) {
  const el = (n2.el = n1.el);
  const oldProps = n1.props;
  const newProps = n2.props;

  // 1. 更新 props
  for (const key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      patchProps(el, key, oldProps[key], newProps[key]);
    }
  }
  for (const key in oldProps) {
    if (!(key in newProps)) {
      patchProps(el, key, oldProps[key], null);
    }
  }

  // 2. 更新 children
  patchChildren(n1, n2, el);
}

function patchChildren(n1, n2, container) {
  // 1. 新子节点是文本节点
  if (typeof n2.children === "string") {
    // 旧子节点可能是：没有子节点，文本子节点、一组子节点
    // 只有当旧子节点是一组子节点时，才需要逐个卸载，其他情况下什么都不用做
    if (Array.isArray(n1.children)) {
      n1.children.forEach((c) => unmount(c));
    }

    // 最后，设置文本节点内容
    setElementText(container, n2.children);
  } else if (Array.isArray(n2.children)) {
    // 2. 新子节点是一组子节点
    if (Array.isArray(n1.children)) {
      // ** 新旧子节点都是一组子节点，涉及到核心 Diff 算法
      // 这里可以暂时用傻瓜式的办法：把旧的都卸载，再把新的依次挂载
      n1.children.forEach((c) => unmount(c));
      n2.children.forEach((c) => patch(null, c, container));
    } else {
      // 旧子节点是文本子节点、或不存在子节点
      // 只需清空容器，将新的一组子节点逐个挂载
      setElementText(container, "");
      n2.children.forEach((c) => patch(null, c, container));
    }
  } else {
    // 3. 新子节点不存在
    if (Array.isArray(n1.children)) {
      n1.children.forEach((c) => unmount(c));
    } else if (typeof n1.children === "string") {
      setElementText(container, "");
    }
    // 也没有旧子节点，则什么都不用做
  }
}
```

### 2.7 文本节点和注释节点

### 2.8 Fragment

## 3 Diff 算法

Diff 算法的处理主要考虑如下问题：

- 判断是否有节点需要移动，以及如何移动
- 找出需要被添加或移除的节点

### 3.1 简单 Diff 算法

在前面 2.6 节中，在处理新旧子节点都是一组子节点时，采用了暴力的方式，把旧的全都卸载，把新的全都挂载。如果新旧子节点组都是 3 个 p 标签节点，使用 2.6 中的方式，要先卸载 3 次，再挂载 3 次，一共 6 次 DOM 操作。

我们可以依次比较两组子节点，使用 patch 函数进行更新，由于节点的类型相同都是 p，只需修改 3 次节点中的文本内容。

如果两组子节点长度不一样，新子节点组更多，那么会有节点需要挂载；旧子节点组更多，那么要有节点需要卸载。

```js
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    const oldChildren = n1.children;
    const newChildren = n2.children;
    const oldLen = oldChildren.length;
    const newLen = newChildren.length;
    // 公共长度（短的那个长度）
    const commonLen = Math.min(oldLen, newLen);
    for (let i = 0; i < commonLen; i++) {
      // 逐个更新子节点
      patch(oldChildren[i], newChildren[i], container);
    }

    if (newLen > oldLen) {
      // 新子节点多，有新的子节点要挂载
      for (let i = commonLen; i < newLen; i++) {
        patch(null, newChildren[i], container);
      }
    } else if (newLen < oldLen) {
      // 旧子节点多，有旧的子节点要卸载
      for (let i = commonLen; i < oldLen; i++) {
        unmount(oldChildren[i]);
      }
    }
  } else {
    // ... 省略
  }
}
```

#### 3.1.2 DOM 复用与 key 的作用

对于下面的两组节点：

```js
// oldChildren
[{ type: "p" }, { type: "div" }, { type: "span" }];

// newChildren
[{ type: "span" }, { type: "p" }, { type: "div" }];
```

如果还按照上面所述的方法，依次对比。由于对应的节点是不同的标签，所以 patch 函数会先卸载旧节点，再挂载新节点。最后还是会进行 6 次 DOM 操作。

但是这两组子节点的区别仅在于顺序不同，最优的处理方式应该是移动 DOM。但是，能够移动的前提是：新旧两组子节点中的确存在可复用的节点。

我们引入 key 来作为 vnode 的标识。如果两个虚拟节点的 type 和 key 都相同，那么我们就认为它们是相同的，即可进行 DOM 的复用。

```js
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    const oldChildren = n1.children;
    const newChildren = n2.children;

    for (let i = 0; i < newChildren.length; i++) {
      const newVNode = newChildren[i];
      for (let j = 0; j < oldChildren.length; j++) {
        const oldVNode = oldChildren[j];
        // 找可复用的 oldVNode，节点的内容可能发生变化，仍然需要进行 patch
        if (newVNode.key === oldVNode.key) {
          patch(oldVNode, newVNode, container);
          break;
        }
      }
    }
  } else {
    // ... 省略
  }
}
```

我们按照上述代码进行调整后，虽然所有节点对应的真实 DOM 元素都更新完毕了，但真实 DOM 仍然保持旧的一组子节点的顺序。我们还要对子节点进行移动。

#### 3.1.3 找到需要移动的子节点

```js
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    const oldChildren = n1.children;
    const newChildren = n2.children;

    // 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）
    let lastIndex = 0;

    for (let i = 0; i < newChildren.length; i++) {
      const newVNode = newChildren[i];
      for (let j = 0; j < oldChildren.length; j++) {
        const oldVNode = oldChildren[j];
        if (newVNode.key === oldVNode.key) {
          patch(oldVNode, newVNode, container);
          if (j < lastIndex) {
            // 当前可复用节点，在旧 children 中的索引 < 最大索引值 lastIndex
            // ** 那么该节点需要移动
          } else {
            // 当前可复用节点，在旧 children 中的索引值 >= 最大索引值 lastIndex
            // ** 那么更新 lastIndex
            lastIndex = j;
          }
          break;
        }
      }
    }
  } else {
    // ... 省略
  }
}
```

#### 3.1.4 如何移动元素

上一节找到了需要移动的节点，这一节将讨论如何移动节点。这里的移动节点，指的是移动虚拟节点对应的真是 DOM 节点，而非移动虚拟节点本身。

通过之前的代码，我们知道，当一个虚拟节点挂载后，对应的真实 DOM 节点会被存储在 vnode.el 属性上。

2.6 节中给出 patchElement 函数。当更新操作发生时，会调用 patchElement 函数在新旧虚拟节点之间进行打补丁（patch）。

```js
function patchElement(n1, n2) {
  const el = (n2.el = n1.el);
  // ... 省略
}
```

这里取出了 n1.el（即旧 vnode 对应的真实 DOM 元素），并将 n2.el 也指向该 DOM 元素。

```js{21-27}
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    const oldChildren = n1.children;
    const newChildren = n2.children;

    // 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）
    let lastIndex = 0;

    for (let i = 0; i < newChildren.length; i++) {
      const newVNode = newChildren[i];
      let j = 0;
      for (j; j < oldChildren.length; j++) {
        const oldVNode = oldChildren[j];
        if (newVNode.key === oldVNode.key) {
          patch(oldVNode, newVNode, container);
          if (j < lastIndex) {
            // 当前可复用节点，在旧 children 中的索引 < 最大索引值 lastIndex
            // ** 那么该节点需要移动
            const prevVNode = newChildren[i - 1];
            if (prevVNode) {
              const anchor = prevVNode.el.nextSibling;
              // 调用 insert 函数，将 newVNode 对应的真实 DOM 插入到锚点元素前面
              // 即 prevVNode 对应真实 DOM 的后面
              insert(newVNode.el, container, anchor);
            }
          } else {
            // 当前可复用节点，在旧 children 中的索引值 >= 最大索引值 lastIndex
            // ** 那么更新 lastIndex
            lastIndex = j;
          }
          break;
        }
      }
    }
  } else {
    // ... 省略
  }
}
```

#### 3.1.5 添加新元素

:::code-tabs

@tab patchChildren

```js{14,18,39-52}
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    const oldChildren = n1.children;
    const newChildren = n2.children;

    // 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）
    let lastIndex = 0;

    for (let i = 0; i < newChildren.length; i++) {
      const newVNode = newChildren[i];
      let j = 0;
      let find = false;
      for (j; j < oldChildren.length; j++) {
        const oldVNode = oldChildren[j];
        if (newVNode.key === oldVNode.key) {
          find = true;
          patch(oldVNode, newVNode, container);
          if (j < lastIndex) {
            // 当前可复用节点，在旧 children 中的索引 < 最大索引值 lastIndex
            // ** 那么该节点需要移动
            const prevVNode = newChildren[i - 1];
            if (prevVNode) {
              const anchor = prevVNode.el.nextSibling;
              // 调用 insert 函数，将 newVNode 对应的真实 DOM 插入到锚点元素前面
              // 即 prevVNode 对应真实 DOM 的后面
              insert(newVNode.el, container, anchor);
            }
          } else {
            // 当前可复用节点，在旧 children 中的索引值 >= 最大索引值 lastIndex
            // ** 那么更新 lastIndex
            lastIndex = j;
          }
          break;
        }
      }

      // 在旧的一组子节点中没有找到对应可复用（同 key）的子节点
      // 那么当前 newVNode 是新节点，需要挂载
      if (!find) {
        const prevVNode = newChildren[i-1]
        let anchor = null
        if (prevVNode) {
          anchor = prevVNode.el.nextSibling
        } else {
          // 没有前一个 vnode 节点，即这个要挂载的新节点是第一个子节点
          anchor = container.firstChild
        }
        // 挂载
        patch(null, newVNode, container, anchor)
      }
    }
  } else {
    // ... 省略
  }
}
```

@tab patch 增加最第四个参数 anchor 的支持

```js{13}
// 原不支持 container 的版本见 2.3 节
function patch(n1, n2, container, anchor) {
  // 省略

  if (typeof type === "string") {
    if (!n1) {
      mountElement(n2, container, anchor);
    } else {
      // 类型相同，更新
      patchElement(n1, n2);
    }
  } else if (type === Text) {
    // ...
  } else if (type === Fragment) {
    // ...
  }
}

function mountElement(vnode, container, anchor) {
  // ... 省略
  insert(el, container, anchor);
}
```

:::

#### 3.1.6 移除不存在的元素

做完对新一组子节点的遍历（并移动对应真实 DOM 后），为了找到已经被删除的节点，还要对旧一组子节点进行遍历，如果没有找到具有相同 key 值的节点，说明该节点应该被删除。

```js
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    const oldChildren = n1.children;
    const newChildren = n2.children;

    // 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）
    let lastIndex = 0;

    for (let i = 0; i < newChildren.length; i++) {
      // ... 省略
    }

    // 更新完成后，遍历旧的一组子节点
    for (let i = 0; i < oldChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const has = newChildren.find((vnode) => vnode.key === oldVNode.key);
      if (!has) {
        // 新一组子节点中没有对应 key 的节点，则应该将其卸载
        unmount(oldVNode);
      }
    }
  } else {
    // ... 省略
  }
}
```

#### 3.1.7 总结

我们总结一下简单 Diff 算法。它的核心逻辑是，拿新的一组子节点中的节点去旧的一组子节点中寻找可复用的节点（key 值相同）。如果找到了，记录该节点在旧的一组子节点中的索引，我们把这个位置索引称为最大索引。在更新过程中，如果一个节点的索引小于最大索引，那么该节点对应的真实 DOM 元素需要移动。

如果没有找到，说明是新加的节点，需要进行挂载。

最后对旧的一组子节点进行遍历，在新的一组子节点中寻找可复用节点。如果没有找到，说明要讲对应的 vnode 卸载。

### 3.2 双端 Diff 算法

Vue.js 2 就采用了双端 Diff 算法。

#### 3.2.1 双端 Diff 算法原理及实现

双端 Diff 算法是同时对新旧两组子节点的两个端点进行比较的算法。于是需要四个索引值，分别指向新旧两组子节点的两端，我们分别将其称为 newStartIdx, newEndIdx, oldStartIdx, oldEndIdx，如下面代码所示。

```js
function patchChildren(n1, n2, container) {
  if (typeof n2.children === "string") {
    // ... 省略
  } else if (Array.isArray(n2.children)) {
    // 封装 patchKeyedChildren 函数
    patchKeyedChildren(n1, n2, container);
  } else {
    // ... 省略
  }
}

function patchKeyedChildren(n1, n2, container) {
  const oldChildren = n1.children;
  const newChildren = n2.children;

  // 四个索引值
  let oldStartIdx = 0;
  let oldEndIdx = oldChildren.length - 1;
  let newStartIdx = 0;
  let newEndIdx = newChildren.length - 1;

  // 四个索引值指向的 vnode 节点
  let oldStartVNode = oldChildren[oldStartIdx];
  let oldEndVNode = oldChildren[oldEndIdx];
  let newStartVNode = newChildren[newStartIdx];
  let newEndVNode = newChildren[newEndIdx];
}
```

双端比较的每一轮比较都分为四个步骤：

- 第一步：比较「旧的一组子节点中的头部子节点」与「新的一组子节点中的头部子节点」
- 第二步：比较「旧的一组子节点中的尾部子节点」与「新的一组子节点中的尾部子节点」
- 第三步：比较「旧的一组子节点中的头部子节点」与「新的一组子节点中的尾部子节点」
- 第四步：比较「旧的一组子节点中的尾部子节点」与「新的一组子节点中的头部子节点」

如果比较过程中，两个节点的 key 不同（即不可复用），那就什么都不做。如果发现两个节点的 key 相同（即可复用），那么按照语义进行调整。

:::details 四个步骤中的比较，如果发现节点可复用，意味着什么
第一步 - 如果「旧的一组子节点中的头部子节点」与「新的一组子节点中的头部子节点」的 key 相同，即两组子节点的头部相同，二者都在头部，所以不需要对真实 DOM 进行移动操作，只需要进行 patch 即可。

第二步 - 如果「旧的一组子节点中的尾部子节点」与「新的一组子节点中的尾部子节点」的 key 相同，即两组子节点中的尾部相同，二者都在尾部，所以不需要对真实 DOM 进行移动操作，只需要进行 patch 即可。

第三步 - 如果「旧的一组子节点中的头部子节点」与「新的一组子节点中的尾部子节点」的 key 相同，那么意味着：**本来是头部节点，但在顺序中，变成了尾部节点**。对应的操作应该是：**将索引 oldStartIdx 指向的虚拟节点对应的真实 DOM 移动到索引 oldEndIdx 指向的虚拟节点所对应的真实 DOM 后面**。

第四步 - 如果「旧的一组子节点中的尾部子节点」与「新的一组子节点中的头部子节点」的 key 相同，那么意味着：**本来是最后一个子节点，但是在新顺序中，变成了第一个子节点**。对应的操作应该是：**将索引 oldEndIdx 指向的虚拟节点所对应的真实 DOM 移动到索引 oldStartIdx 指向的虚拟节点所对应的真实 DOM 前面**。
:::

```js
function patchKeyedChildren(n1, n2, container) {
  const oldChildren = n1.children;
  const newChildren = n2.children;
  // 四个索引值
  let oldStartIdx = 0;
  let oldEndIdx = oldChildren.length - 1;
  let newStartIdx = 0;
  let newEndIdx = newChildren.length - 1;
  // 四个索引值指向的 vnode 节点
  let oldStartVNode = oldChildren[oldStartIdx];
  let oldEndVNode = oldChildren[oldEndIdx];
  let newStartVNode = newChildren[newStartIdx];
  let newEndVNode = newChildren[newEndIdx];

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVNode.key === newStartVNode.key) {
      // 第一步：都在头部，只需要 patch
      patch(oldStartVNode, newStartVNode, container);
      oldStartVNode = oldChildren[++oldStartIdx];
      newStartVNode = newChildren[++newStartIdx];
    } else if (oldEndVNode.key === newEndVNode.key) {
      // 第二步：都在尾部，只需要 patch
      patch(oldEndVNode, newEndVNode, container);
      // 更新索引
      oldEndVNode = oldChildren[--oldEndIdx];
      newEndVNode = newChildren[--newEndIdx];
    } else if (oldStartVNode.key === newEndVNode.key) {
      // 第三步：需要移动 DOM，将 <旧的头部>，移动到 <旧的尾部的后面>
      patch(oldStartVNode, newEndVNode, container);
      insert(oldStartVNode.el, container, oldEndVNode.el.nextSibling);
      oldStartVNode = oldChildren[++oldStartIdx];
      newEndVNode = newChildren[--newEndIdx];
    } else if (oldEndVNode.key === newStartVNode.key) {
      // 第四步：需要移动 DOM，将 <旧的尾部>，移动到 <旧的头部的前面>
      patch(oldEndVNode, newStartVNode, container);
      // 移动 DOM
      insert(oldEndVNode.el, container, oldStartVNode.el);
      // 移动完，需要更新索引值并指向下一个位置
      oldEndVNode = oldChildren[--oldEndIdx];
      newStartVNode = newChildren[++newStartIdx];
    }
  }
}
```

#### 3.2.2 非理想状态的处理方式

按照之前的算法步骤进行双端 Diff，有可能会出现四个步骤都无法匹配的情况。这时，只能通过额外的处理步骤来处理这种非理想情况。

具体做法是，取新的一组子节点的头部节点，到旧的一组子节点中寻找。找到之后，将其索引存储到 idxInOld。这意味着：**idxInOld 对应的节点原本不是头部节点，但在更新后，变成了头部节点**。对应的操作为：**将索引 idxInOld 指向的虚拟节点对应的真实 DOM 移动到索引 oldStartIdx 指向的虚拟节点所对应的真实 DOM 前面**。

```js{4-7,16-31}
function patchKeyedChildren(n1, n2, container) {
  // ...
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!oldStartVNode) {
      oldStartVNode = oldChildren[++oldStartIdx];
    } else if (!oldEndVNode) {
      oldEndVNode = oldChildren[--oldEndIdx];
    } else if (oldStartVNode.key === newStartVNode.key) {
      // 第一步：都在头部，只需要 patch
    } else if (oldEndVNode.key === newEndVNode.key) {
      // 第二步：都在尾部，只需要 patch
    } else if (oldStartVNode.key === newEndVNode.key) {
      // 第三步：需要移动 DOM，将 <旧的头部>，移动到 <旧的尾部的后面>
    } else if (oldEndVNode.key === newStartVNode.key) {
      // 第四步：需要移动 DOM，将 <旧的尾部>，移动到 <旧的头部的前面>
    } else {
      const idxInOld = oldChildren.findIndex(
        (node) => node.key === newStartVNode.key
      );
      // 找到可复用的节点，将其对应的真实 DOM 移动到头部
      if (idxInOld > 0) {
        const vnodeToMove = oldChildren[idxInOld];
        patch(vnodeToMove, newStartVNode, container);
        // 移动 DOM
        insert(vnodeToMove.el, container, oldStartVNode.el);
        // idxInOld 处的节点所对应的真实 DOM 已经移动到了别处，因此设为 undefined
        oldChildren[idxInOld] = undefined;
        // 更新索引
        newStartVNode = newChildren[++newStartIdx];
      }
    }
  }
}
```

#### 3.2.3 添加新元素

在处理非理想状态时，我们取新的一组子节点的头部节点，到旧的一组子节点中寻找。但未必总会找得到，如果找不到，说明该节点是新增节点。将它挂载到当前的头部节点之前，即 oldStartIdx 指向的虚拟节点对应的真实 DOM 之前。

```js{27-30,35-41}
function patchKeyedChildren(n1, n2, container) {
  // ... 省略部分代码

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!oldStartVNode) {
      oldStartVNode = oldChildren[++oldStartIdx];
    } else if (!oldEndVNode) {
      oldEndVNode = oldChildren[--oldEndIdx];
    } else if (oldStartVNode.key === newStartVNode.key) {
      // 第一步：都在头部，只需要 patch
    } else if (oldEndVNode.key === newEndVNode.key) {
      // 第二步：都在尾部，只需要 patch
    } else if (oldStartVNode.key === newEndVNode.key) {
      // 第三步：需要移动 DOM，将 <旧的头部>，移动到 <旧的尾部的后面>
    } else if (oldEndVNode.key === newStartVNode.key) {
      // 第四步：需要移动 DOM，将 <旧的尾部>，移动到 <旧的头部的前面>
    } else {
      const idxInOld = oldChildren.findIndex(
        (node) => node.key === newStartVNode.key
      );
      if (idxInOld > 0) {
        // 找到可复用的节点，将其对应的真实 DOM 移动到头部
        const vnodeToMove = oldChildren[idxInOld];
        patch(vnodeToMove, newStartVNode, container);
        insert(vnodeToMove.el, container, oldStartVNode.el);
        oldChildren[idxInOld] = undefined;
      } else {
        // 没找到可复用的节点，新节点，挂载到头部
        patch(null, newStartVNode, container, oldStartVNode.el);
      }
      newStartVNode = newChildren[++newStartIdx];
    }
  }

  // 循环结束后检查索引值的情况，如果下面条件成立，说明有新节点需要挂载
  if (oldEndIdx < oldStartIdx && newStartIdx <= newEndIdx) {
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      const anchorIdx = newEndIdx + 1
      const anchor = anchorIdx < newChildren.length ? newChildren[anchorIdx].el : null
      patch(null, newChildren[i], container, anchor);
    }
  }
}
```

#### 3.2.4 移除不存在的元素

```js{11-16}
function patchKeyedChildren(n1, n2, container) {
  // ... 省略部分代码

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // ... 省略部分代码
  }

  // 循环结束后检查索引值的情况，如果下面条件成立，说明有新节点需要挂载
  if (oldEndIdx < oldStartIdx && newStartIdx <= newEndIdx) {
    // ... 省略部分代码
  } else if (newEndIdx < newStartIdx && oldStartIdx <= oldEndIdx) {
    // 移除
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      unmount(oldChildren[i]);
    }
  }
}
```

#### 3.2.5 总结

双端 Diff 指的是在新旧两组子节点的四个端点之间进行比较，并试图找到可复用的节点。

相比简单 Diff 算法的优势在于，对于同样的更新场景，执行的 DOM 移动操作次数更少。

### 3.3 快速 Diff 算法

找相同的前置元素（1）和相同的后置元素（2）。

如果新的一组子节点有剩余，则挂载节点（3.1）；如果旧的一组子节点有剩余，则卸载节点（3.2）。

不满足条件 3.1 和条件 3.2 是常有的现象，即涉及到节点的移动（4）。

```js
function patchKeyedChildren(n1, n1, container) {
  const oldChildren = n1.children;
  const newChildren = n2.children;

  // 1. 相同的前置节点
  let j = 0;
  let oldVNode = oldChildren[j];
  let newVNode = newChildren[j];
  while (oldVNode.key === newVNode.key) {
    patch(oldVNode, newVNode, container);
    j++;
    oldVNode = oldChildren[j];
    newVNode = newChildren[j];
  }

  // 2. 相同的后置节点
  let oldEnd = oldChildren.length - 1;
  let newEnd = newChildren.length - 1;
  oldVNode = oldChildren[oldEnd];
  newVNode = newChildren[newEnd];
  while (oldVNode.key === newVNode.key) {
    patch(oldVNode, newVNode, container);
    oldVNode = oldChildren[--oldEnd];
    newVNode = newChildren[--newEnd];
  }

  // 3. 添加或移除节点
  if (j > oldEnd && j <= newEnd) {
    // 3.1 j --> newEnd 之间的节点是新增节点
    const anchorIdx = newEnd + 1;
    const anchor =
      anchorIdx < newChildren.length ? newChildren[anchorIdx].el : null;
    while (j <= newEnd) {
      patch(null, newChildren[j++], container, anchor);
    }
  } else if (j > newEnd && j <= oldEnd) {
    // 3.2 j --> oldEnd 之间的节点应被卸载
    while (j <= oldEnd) {
      unmount(oldChildren[j++]);
    }
  } else {
    // 4. 处理非理想情况
  }
}
```

Step1：处理非理想情况时，要构造一个数组 source，他的长度是新的一组子节点经过预处理后剩余的未处理节点的数量，我们用它来存储**新的一组子节点中的节点在旧的一组子节点中的位置索引**，后面用它计算一个最长递增子序列，用于辅助完成 DOM 的移动操作。

Step2：根据 source 数组来判断节点是否需要移动，方法与简单 Diff 算法类似，如果遍历过程中遇到的索引值呈现递增趋势，则说明不需要移动节点，反之则需要。新增两个变量 moved（是否需要移动节点，初始值为 false） 和 pos（遍历旧的一组子节点的过程中遇到的最大索引值 k，初始值为 0）。

Step3：还需要一个数量标识，表示**已经更新过的节点数量**。它应该小于新的一组子节点中需要更新的节点数量。一旦前者超过后者，说明有多余节点，需要卸载。

:::code-tabs
@tab Step1-source 数组

```js
if (j > oldEnd && j <= newEnd) {
  // 3.1 j --> newEnd 之间的节点是新增节点
} else if (j > newEnd && j <= oldEnd) {
  // 3.2 j --> oldEnd 之间的节点应被卸载
} else {
  // 4. 处理非理想情况
  const count = newEnd - j + 1;
  const source = new Array(count).fill(-1);

  const oldStart = j;
  const newStart = j;
  const keyIndex = {}; // 构建索引表，新的一组子节点上，<key: idxInNew>
  for (let i = newStart; i <= newEnd; i++) {
    keyIndex[newChildren[i].key] = i;
  }
  for (let i = oldStart; i <= oldEnd; i++) {
    oldVNode = oldChildren[i];
    const k = keyIndex[oldVNode.key];
    if (typeof k !== "undefined") {
      newVNode = newChildren[k];
      patch(oldVNode, newVNode, container);
      source[k - newStart] = i;
    } else {
      // 没找到
      unmount(oldVNode);
    }
  }
}
```

@tab Step2-判断节点是否需要移动

```js{7-8,21-26}
const count = newEnd - j + 1;
const source = new Array(count).fill(-1);

const oldStart = j;
const newStart = j;

let moved = false;
let pos = 0;

const keyIndex = {}; // 构建索引表，新的一组子节点上，<key: idxInNew>
for (let i = newStart; i <= newEnd; i++) {
  keyIndex[newChildren[i].key] = i;
}
for (let i = oldStart; i <= oldEnd; i++) {
  oldVNode = oldChildren[i];
  const k = keyIndex[oldVNode.key];
  if (typeof k !== "undefined") {
    newVNode = newChildren[k];
    patch(oldVNode, newVNode, container);
    source[k - newStart] = i;
    // 判断节点是否需要移动
    if (k < pos) {
      moved = true
    } else {
      pos = k
    }
  } else {
    // 没找到
    unmount(oldVNode);
  }
}
```

@tab Step3-已更新过的节点数量

```js{13,15,19,32-35}
const count = newEnd - j + 1;
const source = new Array(count).fill(-1);

const oldStart = j;
const newStart = j;
let moved = false;
let pos = 0;
const keyIndex = {}; // 构建索引表，新的一组子节点上，<key: idxInNew>
for (let i = newStart; i <= newEnd; i++) {
  keyIndex[newChildren[i].key] = i;
}
let patched = 0; // 更新过的节点数量
for (let i = oldStart; i <= oldEnd; i++) {
  oldVNode = oldChildren[i];
  if (patched <= count) {
    const k = keyIndex[oldVNode.key];
    if (typeof k !== "undefined") {
      newVNode = newChildren[k];
      patch(oldVNode, newVNode, container);
      patched++;
      source[k - newStart] = i;
      // 判断节点是否需要移动
      if (k < pos) {
        moved = true;
      } else {
        pos = k;
      }
    } else {
      // 没找到
      unmount(oldVNode);
    }
  } else {
    // 如果更新过的节点数量大于需要更新的节点数量，则卸载多余节点
    unmount(oldVNode)
  }
}
```

:::

#### 3.3.2 如何移动元素

3.3.1 中已经判断了是否需要移动元素，在代码中用 moved = true 作为标识。

3.3.1 中还构造了 source 数组，数组长度为新的一组子节点去掉相同的前置&后置节点后、剩余未处理的节点数量。元素值表示新的一组子节点中的节点在旧的一组子节点中的位置。后面会根据这个 source 数组计算出一个最长递增子序列，用于 DOM 移动操作。

```js
if (j > oldEnd && j <= newEnd) {
  // 3.1 j --> newEnd 之间的节点是新增节点
} else if (j > newEnd && j <= oldEnd) {
  // 3.2 j --> oldEnd 之间的节点应被卸载
} else {
  // 4. 处理非理想情况
  // ...
  for (let i = oldStart; i <= oldEnd; i++) {
    // ...
  }

  if (moved) {
    // 如果需要进行 DOM 移动
    const seq = lis(sources); // 1. 计算最长递增子序列，返回的是下标列表

    let s = seq.length - 1; // s 指向最长递增子序列的最后一个元素
    let i = count - 1; // i 指向新的一组子节点的最后一个元素

    for (i; i >= 0; i--) {
      if (source[i] === -1) {
        // 3. 该节点是全新节点，挂载
        const pos = i + newStart;
        const newNVNode = newChildren[pos];
        const nextPos = pos + 1;
        const anchor =
          nextPos < newChildren.length ? newChildren[nextPos] : null;
        patch(null, newVNode, container, anchor);
      } else if (i !== seq[s]) {
        // 2.1 节点不在最长递增子序列中，要移动
        const pos = i + newStart;
        const newNVNode = newChildren[pos];
        const nextPos = pos + 1;
        const anchor =
          nextPos < newChildren.length ? newChildren[nextPos] : null;
        insert(newVNode.el, container, anchor);
      } else {
        // 2.2 节点在最长递增子序列中，不需要移动，只需要让 s 指向下一个位置
        s--;
      }
    }
  }
}
```

什么是最长递增子序列。如 [0, 8, 4, 12]，其中 [0, 8, 12] 和 [0, 4, 12] 都是最长递增子序列。

拿到了最长递增子序列的索引信息之后，要对节点重新进行编号，这样最长递增子序列和新的下标可以一一对应。编号方式很简单，忽略经过预处理的相同的前置节点和后置节点。

最长递增子序列 seq 反映了：在新的一组子节点中，哪些下标对应的节点在更新前后的顺序没有发生变化。所以我们只需要移动不在 seq 中的下标对应的虚拟节点所对应的真实 DOM。

:::details Vue.js3 中如何求最长递增子序列

```js
function lis(arr) {
  const p = arr.slice(); // p：追踪每个位置上前一个符合递增条件的元素的索引。初始值为 arr 副本
  const result = [0]; // result：最长递增子序列中元素的索引，初始值仅包含 0
  // i 外层循环，遍历数组 arr
  // j 当前 result 中最后一个元素的索引
  // u，v 二分搜索过程的边界指针；c 二分查找中间位置指针
  let i, j, u, v, c;
  const len = arr.length;

  // 对 arr 数组的遍历，对于每一个元素，判断它是否应该被添加到当前的递增子序列中
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = ((u + v) / 2) | 0;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
```

:::

#### 3.3.3 总结

快速 Diff 算法在实测中性能最优。它借鉴了文本 Diff 中的预处理思路，先处理新旧两组子节点中相同的前置节点和相同的后置节点。

预处理完毕后，如果无法通过简单的通过挂载新节点或者卸载已经不存在的节点来完成更新。则需要根据节点的索引关系，构造一个最长递增子序列。最长递增子序列所指向的节点即为不需要移动的节点。
