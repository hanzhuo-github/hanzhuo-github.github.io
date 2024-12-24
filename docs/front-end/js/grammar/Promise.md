---
lang: zh-CN
title: Promise
description:
date: 2024-10-14
category:
  - 前端
tag:
  - js
  - 面试
---

手写 Promise。

<!-- more -->

先看一下 ES6 中 Promise 的使用：

```js
let promise = new Promise((resolve, reject) => {
  // executor 生产者代码
});
```

使用 `new Promise` 构造器返回的 `promise` 具有内部属性：

- `state`：最初是 `"pending"`；`resolve` 被调用时变为 `"fulfilled"`，或 `reject` 被调用时变为 `"rejected"`。
- `result`：最初是 `undefined`；`resolve(value)` 被调用时变为 `value`，或 `reject(error)` 被调用时变为 `error`。

## 1 MyPromise 基本实现与 Promise.all

```js
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.result = undefined;

    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.result = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (error) => {
      if (this.state === "pending") {
        this.state = "reject";
        this.result = error;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        try {
          const x = onFulfilled(this.result);
          resolve(x);
        } catch (err) {
          reject(err);
        }
      }
      if (this.state === "rejected") {
        try {
          const x = onRejected(this.result);
          resolve(x);
        } catch (err) {
          reject(err);
        }
      }
      if (this.state === "pending") {
        this.onResolvedCallbacks.push(() => {
          try {
            const x = onFulfilled(this.result);
            resolve(x);
          } catch (err) {
            reject(err);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            const x = onFulfilled(this.result);
            resolve(x);
          } catch (err) {
            reject(err);
          }
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => resolve(value));
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        return resolve([]);
      }

      const resultArray = [];
      let completeCnt = 0;

      function processResult(index, value) {
        resultArray[index] = value;
        completeCnt++;
        if (completeCnt === promises.length) {
          resolve(resultArray);
        }
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then((value) => {
          processResult(index, value);
        }, reject);
      });
    });
  }
}
```

测试

```js
const promise1 = new MyPromise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new MyPromise((resolve) => setTimeout(() => resolve(2), 500));
const promise3 = new MyPromise((resolve, reject) =>
  setTimeout(() => reject("Error!"), 1500)
);

// 测试成功情况
MyPromise.all([promise1, promise2])
  .then((values) => console.log(values)) // 输出 [1, 2]
  .catch((error) => console.error(error));

// 测试失败情况
MyPromise.all([promise1, promise3])
  .then((values) => console.log(values)) // 不会输出
  .catch((error) => console.error(error)); // 输出 'Error!'
```

## 2 Promise.race

```js
class MyPromise {
  // 省略部分代码

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve, reject);
      });
    });
  }
}
```

## 3 Promise.allSettled

```js
class MyPromise {
  // 省略部分代码

  static allSettled(promise) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        return resolve([]);
      }

      const resultArray = [];
      let completeCnt = 0;

      function processResult(index, state, value) {
        resultArray[index] = { state, value };
        completeCnt++;
        if (completeCnt === promises.length) {
          resolve(resultArray);
        }
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => processResult(index, "fulfilled", value),
          (err) => processResult(index, "rejected", err)
        );
      });
    });
  }
}
```

## 4 Promise.any

```js
class MyPromise {
  // 省略部分代码

  static any(promise) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        return reject(new AggregateError([], "All promises were rejected"));
      }

      const errors = [];
      let rejectedCount = 0;

      function processError(index, err) {
        errors[index] = err;
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject(new AggregateError([], "All promises were rejected"));
        }
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          resolve, // 第一个成功的 Promise 就 resolve
          (err) => processError(index, err)
        );
      });
    });
  }
}
```

测试

```js
const promise1 = new MyPromise((resolve) => setTimeout(() => resolve(1), 100));
const promise2 = new MyPromise((resolve) => setTimeout(() => resolve(2), 200));
const promise3 = new MyPromise((_, reject) =>
  setTimeout(() => reject("Error!"), 150)
);

// 测试 MyPromise.race
MyPromise.race([promise1, promise2, promise3])
  .then((result) => console.log("Race result:", result)) // 输出 Race result: 1
  .catch((error) => console.error("Race error:", error));

// 测试 MyPromise.allSettled
MyPromise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log("AllSettled results:", results)
);
// 输出：
// AllSettled results: [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'rejected', reason: 'Error!' }
// ]

// 测试 MyPromise.any
MyPromise.any([promise3, promise1, promise2])
  .then((result) => console.log("Any result:", result)) // 输出 Any result: 1
  .catch((error) => console.error("Any error:", error));
```
