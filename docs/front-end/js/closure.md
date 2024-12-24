---
lang: zh-CN
title: 闭包
description:
article: false
date: 2023-09-12
order: 3
---

在谈论闭包之前，我们有必要先了解什么是词法作用域（scope），弄清楚这个概念之后再谈闭包就容易多了。

## 1. 作用域（Scope）

### 1.1 什么是作用域

变量能否被访问，是由**作用域**控制的。在变量的作用域之外，是无法访问该变量的。比如：在函数中定义的变量，只能在函数中被访问到，函数之外的地方没有办法访问该变量。

在 JavaScript 中，函数和代码块（`{}`）都可以创建作用域。当然整个 JavaScript 代码中，最外层也是一个作用域，即全局作用域。

:::code-tabs
@tab function

```js
function f() {
  let cnt = 0;
  console.log(cnt); // 0
}

console.log(cnt); // cnt is not defined
```

@tab 代码块 {}

```js
{
  let cnt = 0;
  console.log(cnt); // 0
}

console.log(cnt); // cnt is not defined
```

:::

上面代码中，function 和代码块都各自定义了一个作用域。在函数作用域中定义的变量 `cnt` 不能在函数作用域之外访问到。

![](/images/front-end/js/scope.png =180x)

正是由于这样的特性，我们可以在不同的作用域中使用相同名称的变量，且这些同名变量之间不会有任何冲突。

### 1.2 作用域嵌套

作用域是可以嵌套的，且内部的作用域中可以访问外层作用域中的变量。即变量的获取是一层层向外找的。

看下面这段代码，在 `outerFunc` 内部又定义了 `innerFunc`。

```js
function outerFunc() {
  let outerVar = "outer";

  function innerFunc() {
    let innerVar = "inner";
    console.log(innerVar); // 'inner'
    console.log(outerVar); // 'outer'
  }

  innerFunc();
}

outerFunc();
```

执行 `outerFunc()` 后，会触发 `innerFunc` 的执行。`innerFunc` 执行时，访问了 `innerVar`，它在当前 `innerFunc()` 内的作用域，所以可以访问到。当访问 `outerVar` 时，首先会在当前的 `innerFunc()` 作用域中找，没有，于是向它外面一层的作用域（即 `outerFunc()`）中找，找到了，最终打印成功。

上例中，如果在 `outerFunc()` 中还没有找到，它会继续向再外一层找（最外层就是 `global` 环境了），如果 `global` 中有，那么可以访问，如果没有该变量则抛出 ReferenceError。

> 注：如果没有 `use strict`，没有找到变量时，会在全局作用域中创建一个全局变量。

### 1.3 词法作用域/静态作用域

JavaScript 使用词法作用域（lexical scope），也叫静态作用域（static scope）。顾名思义，JavaScript 的作用域完全是由代码结构决定的，即变量的可访问性是由变量所在代码的位置决定的。它和函数的执行没有任何关系。

简单来说就是内部作用域可以访问它外层的作用域中的变量。

:::info 作用域提升（Hoisting） & 暂时性死区（Temporal Dead Zone, TDZ）

在 JavaScript 中，变量和函数声明会被提升到其作用域的顶部。

对于 `var` 声明的变量，变量声明会提升到函数或全局作用域的顶部，但初始化不会提升。

`let` 和 `const` 声明的变量也会提升，但它们与 `var` 不同。虽然声明被提升了，但这些变量在初始化之前不能被访问，访问它们会抛出 ReferenceError。这段时间就是所谓的暂时性死区（TDZ）。
:::

## 2. 闭包（Closure）

### 2.1 闭包的定义

还以这段代码为例来说明闭包。

```js
function outerFunc() {
  let outerVar = "outer";

  function innerFunc() {
    console.log(outerVar); // 'outer'
  }

  innerFunc();
}

outerFunc();
```

我们已经知道了，`innerFunc()` 内部可以访问它外层作用域中的 `outerVar`。注意这里 `innerFunc()` 是在它自己的词法作用域中被调用的（`innerFunc` 在 `outerFunc` 中被定义，它的词法作用域是 `outerFunc()`，同时它也在 `outerFunc()` 作用域中被调用）。

下面我们让 `innerFunc` 不在它自己所在的作用域中被调用。注意，`outerFunc` 此时直接返回了内部函数 `innerFunc`。

```js
function outerFunc() {
  let outerVar = "outer";

  function innerFunc() {
    console.log(outerVar);
  }

  return innerFunc;
}

function otherFunc() {
  const fn = outerFunc(); // 返回 innerFunc
  fn(); // 在 otherFunc() 内部的作用域中调用 innerFunc
}

otherFunc();
```

现在 `innerFunc()` 不在它自己的作用域中调用，而是在 `otherFunc()` 内部的作用域中被调用。那么它还能访问到 `outerFunc()` 内部作用中的变量 `outerVar` 吗？

执行后可以观察到，仍然输出了 `"outer"`，即 `innerFunc()` 仍然可以访问到它的词法作用域中的变量 `outerVar`。

也就是说，`innerFunc()` **closes over**(捕获) 了来自它的词法作用域中的变量 `outerVar`。

所以说 `innerFunc()` 是一个闭包，因为它**closes over**(捕获/记住) 了来自它的词法作用域中变量 `outerVar`。

:::tip 闭包的定义
现在再来看 MDN 上对闭包的定义：

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). **In other words, a closure gives you access to an outer function's scope from an inner function.** In JavaScript, closures are created every time a function is created, at function creation time.

首先它一定得是一个函数（函数都有对应的词法作用域）。即使这个函数在它自己的词法作用域之外被调用，也能访问到它的词法作用域。

简单来说就是，**记住**了「外部变量」的函数，就是闭包。和这个函数在哪执行，什么时候执行无关。
:::

### 2.2 如何判断是不是闭包

结合上面的含义，我们可以给出一个判断是不是闭包的方法。

首先得是一个函数。然后，如果这个函数中访问了非函数内部作用域中的变量，基本上就是闭包了。

比如上面的代码中，`innerFunc()` 使用了外部定义的变量 `outerVar`，那 `innerFunc()` 就是一个闭包。而且，`innerFunc()` 不在自己所在的作用域中被调用。

另外，我们常见的闭包的应用有 Event Handler, Callbacks, Curry。

## 3. 垃圾收集（选看）

如果此前不了解 JavaScript 的拉结收集机制，可以先看[垃圾收集](https://javascript.info/garbage-collection)。

一般函数调用完毕之后，就不存在对词法环境的引用了，于是词法环境和其中的变量会被从内存中删除。

但是如果有嵌套函数在函数结束后仍然可达，那么词法环境的引用依然存在，垃圾回收就不会回收它。

```js
function outerFunc() {
  const str = "outer";
  function innerFunc() {
    console.log(str);
  }
}

const fn = outerFunc();
```

fn 的外层作用域(`outer`)指向 `outerFunc()` 内部的作用域。所以，即使 `outerFunc()` 已经执行完毕，但是它的词法环境对象仍然可达，仍然会保留在内存中。

它不可达时，比如我们直接给 `fn` 赋值 `fn = null`，那么包括 `outerFunc()` 词法环境以及其内部的变量才会在内存中清除。

正常来说，只要函数可达，那么它外部的变量也都存在（即所有的函数都天然是闭包）。但是在 V8 中做了优化，如果内部嵌套的函数没有显示的使用外层变量，那么在嵌套函数中该变量就不可达。

```js
function f() {
  let a = 10;
  let b = 20;

  function g() {
    console.log(a); // 显示引用了 a，显示 10
    debugger; // 在 console 中：输入 alert(b);  b is not defined
  }

  return g;
}

let g = f();
g();
```

## 4. 练习

```js
function createIncrement() {
  let cnt = 0;
  function increment() {
    cnt++;
  }

  let info = `Count is ${cnt}`;
  function log() {
    console.log(info);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // 这里的输出是什么
```

::: details 答案
输出的内容为 `Count is 0`。

那如何可以获得正常的答案呢？

```js
function log() {
  let info = `Count is ${cnt}`;
  console.log(info);
}
```

:::

:::info 了解更多
访问[Variable scope, closure](https://javascript.info/closure)进一步了解相关内容，其中还解释了[函数声明的提升](https://javascript.info/closure#step-2-function-declarations)。

这篇文章中给出的 Closure 定义十分简额明要：

- A closure is a function that remembers its outer variables and can access them.
- In JavaScript, all functions are naturally closures (there is only one exception, to be covered in [The "new Function" syntax](https://javascript.info/new-function)).

这里再多说点，`new Function` 是在代码运行时根据字符串来创建函数的，它的作用域不是词法作用域，而是全局作用域。

为什么 `new Function` 创建的变量不是词法作用域呢？如果 `new Function` 能够访问词法作用域，试想以下场景。在代码发布到生产环境之前，通常会被 minifier 进行压缩，删掉注释、空格，并且会将局部变量以更短的名字进行重命名。比如一个变量 `let localVariable` 可能会被重命名为 `a`。运行代码时 `new Function` 要访问这个变量（比如从后端取得代码来创建函数执行），它又如何能够确定它现在的名字呢？

:::code-tabs
@tab Function Declaration

```js
function sumBy(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const sumBy2 = sumBy(2);
console.log(sumBy2(10)); // 12
```

@tab new Function

```js
function sumBy(num1) {
  // 这是在运行时通过传入的字符串创建的函数
  // 全局作用域，而非词法作用域
  return new Function("num2", "return num1+num2");
}

const sumBy2 = sumBy(2);
console.log(sumBy2(10)); // num1 is not defined
```

:::
