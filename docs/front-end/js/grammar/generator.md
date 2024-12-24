---
lang: zh-CN
title: Generator
description:
article: false
date: 2023-12-10
---

正常的函数只能返回一次值（或者没有返回），而 Generator 可以一个接一个地多次返回（“yield”）。

Generator 可以和[可迭代对象（iterables）](iterables.md)配合来创建数据流。

<!-- more -->

## 1. 创建与使用

创建 Generator Function 要使用语法 `function*`。

调用 Generator Function 不会运行对应的代码，而是返回一个 Generator Object，下面就将其称为 Generator。

Generator 是可迭代对象，主要方法是 `next()`。调用 `next()` 之后，代码会执行到最近的 `yield <value>` 语句，函数就暂停了，被 yield 的 `value` 会被返回。

```js run
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();
alert(generator); // [object Generator]

const one = generator.next();
alert(JSON.stringify(one)); // {"value":1,"done":false}
const two = generator.next();
alert(JSON.stringify(two)); // {"value":2,"done":false}
const three = generator.next();
alert(JSON.stringify(three)); // {"value":3,"done":true}

// done: true 之后再调用 `next()`，会得到 {"done":true}
const four = generator.next();
alert(JSON.stringify(four)); // {"done":true}
```

既然 Generator 是可迭代对象，那么它自然可以使用 `for...of` 来遍历

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
const generator = generateSequence();

for (let value of generator) {
  alert(value); // 1, 然后是 2
}
```

注意：`for...of` 会将 `done: true` 的结果忽略，所以上面的结果只有 `1`, `2`。如果想得到 `1`, `2`, `3`，可以将 `return 3` 换成 `yield 3`：

```js{4}
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generateSequence();

for(let value of generator) {
  alert(value);   // 1, 2, 3
}
```

我们也可以在 generator 上应用 spread 语法：

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const seq = [0, ...generateSequence()];
alert(seq); // 0, 1, 2, 3
```

## 2. 使用 generator 创建可迭代对象

在[可迭代对象（iterables）](iterables.md)中实现过一个可迭代对象 `range`，现在我们可以用 generator 来实现。

:::code-tabs
@tab iterables

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      to: this.to,

      next() {
        if (this.current <= this.to) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

alert([...range]); // 1,2,3,4,5
```

@tab generator&iterable

```js
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

alert([...range]); // 1,2,3,4,5
```

:::

## 3. Generator Composition

使用 `yield*` 可以将 generator 嵌套在另一个 generator 中。

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateCodes() {
  yield* generateSequence(48, 57); // 0...9
  yield* generateSequence(65, 90); // A...Z
  yield* generateSequence(47, 122); // a...z

  // 相当于
  // for (let i = 48; i <= 57; i++) yield i;
  // for (let i = 65; i <= 90; i++) yield i;
  // for (let i = 97; i <= 122; i++) yield i;
}

let str = "";

for (let code of generateCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

## 4. generator 方法

### 4.1 `generator.next(arg)` 向内部传参

`yield` 不仅可以向外返回结果，还可以将外部的值传递到 generator 内部，只需调用 `generator.next(arg)` 即可将 `arg` 传递到内部成为 `yield` 的结果。

```js
function* genQuestion() {
  const q1 = yield "2 + 2 = ?";
  alert(q1); // 4

  const q2 = yield "3 + 3 = ?";
  alert(q2); // 6
}

let generator = genQuestion();
alert(generator.next().value); // 2 + 2 = ?
alert(generator.next(4).value); // 3 + 3 = ?
alert(generator.next(6).done); // true
```

如果第一次调用 `next()` 传了参，该参数会被忽略。

第一次调用 `next()`，执行到 `yield "2 + 2 = ?"`，打印 `yield` 的值。
第二次调用 `next(4)`，将 4 传回去，即 `const q1 = 4;`，接着打印 q1，执行到 `yield "3 + 3 = ?"`，打印 `yield` 值：`3 + 3 = ?`。
第三次嗲用 `next(6)`，将 4 传回去，即 `const q2 = 6;`，接着打印 q2，此时的 `done` 值为 true。

### 4.2 `generator.throw` 抛出错误

上面使用 `generator.next(arg)` 将结果传递回内部作为 `yield` 的结果。如果想让 `yield` 的结果为 Error，可以使用 `generator.throw` 抛出错误。

```js
function* genQuestion() {
  try {
    const q = yield "2 + 2 = ?";
    alert("执行不到这里，外部抛出了错误传递到 yield");
  } catch (e) {
    alert(e); // 打印这个 error
  }
}

const generator = genQuestion();
const q = generator.next().value;
generator.throw(new Error("我不会算啊"));
```

### 4.3 `generator.return` 完成 generator

`generator.return` 完成 generator，可以通过传参指定 `value`。

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();
generator.next(); // { value: 1, done: false }
generator.return("hello"); // { value: 'hello', done: true }
generator.next(); // { value: undefined, done: true }
```

## 5. 异步 generator

在同步 generator function 的 `function*` 前面加上 `async` 就可以获得异步 generator function。然后就可以使用 `for await (...)` 来遍历它了。

```js
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await nwe Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  const g = generateSequence(1, 5);
  for await (let value of g) {
    alert(value);   // 1, 2, 3, 4, 5
  }
})();
```

同理，异步可迭代对象 `range` 用 generator 实现如下：

```js
const range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield value;
    }
  },
}(async () => {
  for await (let value of range) {
    alert(value); // 1, 2, 3, 4, 5
  }
})();
```
