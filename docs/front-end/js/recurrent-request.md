---
lang: zh-CN
title: 前端请求并发控制
description:
date: 2024-10-16
---

s 中实现对并发请求的控制。比如有 20 个请求，同一时间只能触发 3 个请求，任何一个请求完成，就继续下一次请求，直到 20 个请求都结束，一起返回这 20 个请求的结果.

<!-- more -->

```js
class RequestController {
  constructor(maxConcurrent = 3) {
    this.maxConcurrent = maxConcurrent;
    this.queue = [];
    this.running = 0;
    this.results = [];
  }

  async add(promiseGenerator, index) {
    if (this.running < this.maxConcurrent) {
      return this.run(promiseGenerator, index);
    }

    return new Promise((resolve, reject) => {
      this.queue.push({ promiseGenerator, index, resolve, reject });
    });
  }

  async run(promiseGenerator, index) {
    this.running++;

    try {
      const res = await promiseGenerator();
      this.results[index] = res;
      return res;
    } catch (error) {
      this.results[index] = error;
      throw error;
    } finally {
      this.running--;
      this.runNext();
    }
  }

  runNext() {
    if (this.queue.length === 0) return;
    if (this.running >= this.maxConcurrent) return;

    const { promiseGenerator, index, resolve, reject } = this.queue.shift();

    this.run(promiseGenerator, index).then(resolve).catch(reject);
  }

  async processAll(promiseGenerators) {
    const promises = promiseGenerators.map((gen, i) => this.add(gen, i));
    await Promise.all(promises);
    return this.results;
  }
}
```

测试

```js
async function example() {
  const mockRequest = (id) => {
    return () =>
      new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 1000);
        setTimeout(() => {
          resolve(`请求 ${id} 完成：${delay}ms`);
        }, delay);
      });
  };

  const requests = Array.from({ length: 20 }, (_, i) => mockRequest(i + 1));

  const controller = new RequestController(3);

  const results = await controller.processAll(requests);

  console.log(results);
}

example();
```
