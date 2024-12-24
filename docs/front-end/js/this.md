---
lang: zh-CN
title: this
description:
article: false
date: 2023-09-17
order: 4
---

`this` 是在运行时确定的，取决于上下文（context）。**函数中的 `this` 只与函数被调用的形式有关**（请从现在起记住这句话）。

JavaScript 中函数调用有以下 4 种类型：

- function：`alert('hello')`
- method：`console.log('hello')`
- constructor：`new RegExp(/ab+c/, 'i')`
- 间接调用：`alert.call(undefined, 'hello')`

想要理解 `this`，就必须了解各种形式的函数调用是如何影响上下文的。

## 1. Function

### 1.1 非严格模式

function 调用的 `this`是 `global` 全局对象。

比如浏览器环境中，function 调用时显示的 `this` 就是 `window`。

```js
function fn() {
  console.log(this === window);
  this.cnt = 0;
}

fn(); // true
window.cnt; // 0
```

### 1.2 严格模式

当 use strict 时，`this` 是 `undefined`。

```js
function fn() {
  "use strict";
  console.log(this === undefined);
}

fn(); // true
```

### 1.3 箭头函数

箭头函数没有自己的 `this`，箭头函数中的 `this` 就是它外层的 `this`。

或者说，当箭头函数被调用时，它的 `this` 是由词法环境（即代码位置）决定的，且箭头函数的 `this` 永远不能修改。

```js
const user = {
  firstName: "Peter",
  lastName: "John",

  introduce: function () {
    console.log(this === user); // true

    function printName() {
      // this 是 window（严格模式下是 undefined）
      console.log(this === user); // false
      return this.firstName + " " + this.lastName;
    }

    return printName();
  },
};

user.introduce();
```

在上面这段代码中，`user.introduce()` 是一个 method 形式的调用，所以 `user.introduce()` 中的 `this` 是调用它的对象 `user`。

再强调一下开篇说的「`this` 只与函数被调用的形式有关」。这里的 `printName()` 是 function 形式的调用，于是它的 `this` 就是 `global`（浏览器环境下为 `window`）或 `undefined`（严格模式）。

如何修改上面的代码，可以使得 `printName()` 的 `this` 指向 user，从而可以正确输出全名呢？

一种方式是在调用时显式地将 `printName` 的 `this` 绑定到它外部的函数调用上，即`printName.call(this)`。

或者，用箭头函数来定义 `printName`，这样 `this` 由代码位置决定。

:::code-tabs
@tab call

```js
const user = {
  firstName: "Peter",
  lastName: "John",

  introduce: function () {
    console.log(this === user); // true

    function printName() {
      console.log(this === user); // true
      return this.firstName + " " + this.lastName;
    }

    return printName.call(this); // 将当前的 this(即 user) 作为 printName 调用时的 this
  },
};

user.introduce();
```

@tab 箭头函数

```js
const user = {
  firstName: "Peter",
  lastName: "John",

  introduce: function () {
    console.log(this === user); // true

    const printName = () => {
      console.log(this === user); // true
      return this.firstName + " " + this.lastName;
    };

    return printName();
    // return printName.call({}) 箭头函数的 this 不能修改。仍然返回 Peter John
  },
};

user.introduce();
```

:::

## 2. Method

方法调用中，谁调用了该方法，谁就是 `this`。或者简单点说，`this` 就是 `.` 之前的对象。

还用上面的例子

```js
const user = {
  firstName: "Peter",
  lastName: "John",

  introduce: function () {
    console.log(this === user, 1);

    const printName = () => {
      console.log(this === user, 2);
      console.log(this === window, 3);
      return this.firstName + " " + this.lastName;
    };

    return printName();
  },
};

// method invocation
user.introduce(); // true, 1; true, 2; false, 3; Peter John
const intro = user.introduce;
// function invocation
intro(); // false, 1; false, 2; true, 3; undefined undefined
```

再说一次「`this` 只与函数被调用的形式有关」。

`user.introduce()` 是方法调用，`this` 是调用它的对象，这里就是 `user`。

`intro()` 是函数调用，`this` 是全局对象（或者在严格模式下是 undefined）。

再考虑一种情况。如果将 `user.introduce` 传递给 `setTimeout`，可以得到预期的结果吗？

```js
setTimeout(user.introduce, 1000);
```

:::details 答案
不可以，`this` 指向了全局对象（或严格模式下的 undefined）。

它就相当于下面这段代码：

```js
const fn = user.introduce;
setTimeout(fn, 1000);
```

可以使用 `bind` 来达到预期效果：

```js
const boundFn = user.introduce.bind(user);
setTimeout(boundFn, 1000);
```

也可以在 setTimeout 中传入箭头函数：

```js
setTimeout(() => {
  user.introduce(); // 最后还是 method invocation
}, 1000);
```

:::

## 3. Constructor

在 Constructor invocation 中，`this` 就是新创建的对象。

> 当函数使用 `new` 执行时，它会按下面的步骤执行：
>
> 1. 创建一个空对象，将其分配给 `this`
> 2. 函数体执行。通常会修改 `this`，为它添加新属性
> 3. 返回 `this`
>
> 注：箭头函数没有 `this`，所以不能用作 constructor。
>
> 参考：[Constructor 和 new](https://javascript.info/constructor-new)

:::code-tabs
@tab function

```js
function User(name, age) {
  this.name = name ? name : "anonymous";
  this.age = age ? age : 18;
}

User.prototype.setAge = function (age) {
  this.age = age;
};

const user1 = new User("Peter", 20); // Constructor invocation
const user2 = new User(); // Constructor invocation
user1.setAge(25);
```

@tab class

```js
class User {
  constructor(name, age) {
    this.name = name ? name : "anonymous";
    this.age = age ? age : 18;
  }

  setAge(age) {
    this.age = age;
  }
}
const user = new User("Lily", 21);
user.setAge(22);
```

:::

## 4. 间接调用 `call()` & `apply()`

间接调用是指 `func.call()` 和 `func.apply()`。语法如下：

```js
func.call(thisArg, arg1, arg2, ...)
func.apply(thisArg, [arg1, arg2, ...])
```

间接调用的 `this`，就是上面的第一个参数 `thisArg`。

> 函数是 JavaScript 中的一等对象，对应的对象类型是 `Function`。
>
> Function 对象的方法见 [Function: Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#instance_methods)

```js
function setAge(age) {
  console.log(this instanceof User); // true
  this.age = age;
}

function User(name, age) {
  console.log(this instanceof User); // true
  this.name = name ? name : "anonymous";
  setAge.call(this, age);
}

const user = new User("Li Hua", 18);
user; // User {name: 'Li Hua', age: 18}
```

## 5.绑定函数 `bind()`

和[间接调用](#_4-间接调用-call-apply)一样，该函数执行时的 `this` 就是 `bind()` 函数的第一个参数。

语法：

```js
func.bind(thisArg[, arg1, arg2, ...])
```

`bind` 返回一个新函数，它的代码和作用域与原函数相同，但是上下文（`this`）和传参不同。

要注意，用 `bind()` 绑定上下文后就不会再被修改了。只要已经使用过 `bind()` 了，不管之后是用了 `apply()` 或 `call`，还是重新进行了 `bind()`，都不会起任何作用。

但是也有例外，使用 Constructor invocation 是可以改变绑定函数的上下文的。

```js
function getThis() {
  "use strict";
  return this;
}

const bindOne = getThis.bind(1);

bindOne(); // 1
bindOne.call(2); // 1
bindOne.apply(2); // 1
bindOne.bind(2)(); // 1 再次绑定，不起作用

new bindOne(); // Object
```

## 6. 总结

- 有四种形式的函数调用，他们对应的 `this` 分别为：

  - function：`alert('hello')`
    - 全局对象（或 `undefined`，如果是严格模式）
  - method：`console.log('hello')`
    - 调用它的对象，即 `.` 前的对象
  - constructor：`new RegExp(/ab+c/, 'i')`
    - 创建的新对象
  - 间接调用：`alert.call(undefined, 'hello')`
    - `call()`, `apply()` 函数的第一个参数

- 可以使用 `myFunc.bind()` 来为函数绑定 `this` 和传参。得到的绑定函数不能再使用 `apply`, `call()`, `bind()` 修改上下文。但是可以使用 `new` 可以修改桑下文。

- 箭头函数没有自身的 `this`，它的 `this` 由代码位置直接决定，且不能以任何形式修改。

## 7. 练习

```js
var length = 4;
function callback() {
  console.log(this.length); // 输出是？
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object.method(callback, 1, 2);
```

:::details 答案
输出的是 3。

调用 `object.method(callback, 1, 2)` 传递了三个参数 `callback`, `1`, `2`。于是 `method()` 中的 `arguments` 是一个类数组对象（array-like）。

```js
{
  0: callback,
  1: 1,
  2: 2,
  length: 3,
}
```

这是在 `arguments` 上调用的 `callback`，于是 `this.length` 就是 `arguments.length`。
:::

> [查看更多练习](https://dmitripavlutin.com/javascript-this-interview-questions/)
