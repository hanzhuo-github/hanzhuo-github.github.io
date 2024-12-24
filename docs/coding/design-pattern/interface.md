---
lang: zh-CN
title: 面向接口编程
description:
article: false
date: 2023-12-12
order: 1
---

:::: info 接口是对象能响应的请求的集合。
::: right
——《设计模式》
:::
::::

这篇文章讨论的主题是：面向接口（interface）编程，而不是面向实现（implementation）编程。

在静态类型的语言中，可以通过“向上转型”将对象的具体类型隐藏在“超类型”身后。例如在 Java 中使用抽象类或 interface 来实现这一点。

而 JavaScript 是动态类型的语言，一个变量中存储的数据的类型经常变化，所以在语言层面 JavaScript 没有提供对接口的支持。

TypeScript 的出现弥补了这一点。下面通过对比「面向实现编程」和「面向接口编程」来展示面向接口编程的优势。

## 1. 需求介绍

我们要根据传入的数组渲染一个列表。

```js
class ListRender {
  render(list: string[]): string {
    let html = "<ul>";
    for (const str of list) {
      html += `<li>${str}</li>`;
    }
    html += "</ul>";

    return html;
  }
}

const myRenderer = new ListRender();
renderer.render(["Apple", "Banana", "Pear"]);
```

## 2. 面向实现编程

现在增加需求，我们要按照字母序实现对列表的排序。下面是基于实现的编程：

```ts
class SortAlphabetically {
  sort(list: string[]): string[] {
    return [...list].sort((s1, s2) => s1.localeCompare(s2));
  }
}

class ListRender {
  sorter: SortAlphabetically;

  constructor() {
    this.sorter = new SortAlphabetically();
  }

  render(list: string[]): string {
    const sortedList = this.sorter.sort(list);

    let html = "<ul>";
    for (const str of sortedList) {
      html += `<li>${str}</li>`;
    }
    html += "</ul>";

    return html;
  }
}

const myRenderer = new ListRender();
renderer.render(["Apple", "Banana", "Pear"]);
```

接下来又提出了新需求，除了要按照字母升序排，还要支持降序排列。于是代码又改成：

```js {7-11,14,16-20}
class SortAlphabetically {
  sort(list: string[]): string[] {
    return [...list].sort((s1, s2) => s1.localeCompare(s2));
  }
}

class SortAlphabeticallyDescending {
  sort(list: string[]): string[] {
    return [...list].sort((s1, s2) => s2.localeCompare(s1));
  }
}

class ListRender {
  sorter: SortAlphabetically | SortAlphabeticallyDescending;

  constructor(ascending: boolean) {
    this.sorter = ascending
      ? new SortAlphabetically()
      : new SortAlphabeticallyDescending();
  }

  render(list: string[]): string {
    ...
  }
}

// 升序：传入 true
const myRenderer = new ListRender(true);
renderer.render(["Apple", "Banana", "Pear"]);
```

目前 `ListRender` 既要负责渲染列表，还要判断是升序还是降序来实例化对应的排序器，这违反了**单一职责原则**。

除此之外，我们在新增新的排序方法时，总是要修改 `ListRender` 的代码，这违反了**开放-封闭原则**。

## 3. 面向接口编程

下面给出面向接口的编程实现。

使用 interface 来实现向上转型。让所有的排序对象的类型都隐藏在 `Sorter` 类型身后。所有继承自 `Sorter` 类的具体类都要实现其中的 `sort()` 方法。

```ts
interface Sorter {
  sort(list: string[]): string[];
}

class SortAlphabetically implements Sorter {
  sort(list: string[]): string[] {
    return [...list].sort((s1, s2) => s1.localeCompare(s2));
  }
}

class SortAlphabeticallyDescending implements Sorter {
  sort(list: string[]): string[] {
    return [...list].sort((s1, s2) => s2.localeCompare(s1));
  }
}
```

`ListRender` 直接与 `Sorter` interface 相关联，而不是与具体的实现（`SortAlphabetically` 和 `SortAlphabeticallyDescending`）相关联。

```ts
class ListRender {
  sorter: Sorter;

  constructor(sorter: Sorter) {
    this.sorter = sorter;
  }

  render(list: string[]): string {
    const sortedList = this.sorter.sort(list);

    let html = "<ul>";
    for (const str of sortedList) {
      html += `<li>${str}</li>`;
    }
    html += "</ul>";

    return html;
  }
}

// 在运行时根据 isAscending 来实例化目标排序器
const sorter = isAscending
  ? new SortAlphabetically()
  : new SortAlphabeticallyDescending();
const myRender = new ListRender(sorter);
renderer.render(["Apple", "Banana", "Pear"]);
```

针对面向实现编程出现的问题，在这里得到了解决：

- **单一职责原则**：`ListRender` 只负责渲染列表，不必负责选取排序器（在运行时来根据用户操作选择，将排序器传递给 `ListRender`，不需要在 `ListRender` 内部进行判断）；
- **开放-封闭原则**：无论后续再增加什么规则的排序，我们都不需要再修改 `ListRender` 类，只需要基于 `Sorter` 接口实现新的排序器即可。
