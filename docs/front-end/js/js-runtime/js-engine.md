---
lang: zh-CN
title: 1. JS 引擎
description:
article: false
date: 2024-01-10
order: 2
---

JS Engine 是 JavaScript runtime environment 的核心，需要遵循 ECMAScript 规范。每个浏览器都有 JS Engine。

> Chrome 使用 V8（Node.js 和 Deno 也用 V8）
> Firefox 使用 SpiderMonkey
> Edge 使用 Chakra
> Safari 使用 JavaScriptCore

## 1. 工作步骤

1. JavaScript 引擎从渲染引擎（Chrome 的渲染引擎是 Blink）中获得源代码
2. 词法分析（Lexical Analysis/Lexing）：将 source code 转换为 tokens。在 V8 中使用 Scanner 来完成这个过程。
3. 语法分析（Parsing）：读取 tokens、检查语法，生成抽象语法树（Abstract Syntax Tree, AST）。使用 Syntax Parser 来做这件事。[AST Explorer](https://astexplorer.net/)
4. 解释器/编译器（Interpreter/Compiler）。V8 中使用的是 JIT-compiler，叫做 **Ignition**（是解释器和编译器的混合体）。JIT 在运行时执行代码，而非在代码执行前编译全部代码。Ignition 会生成 Bytecode（与平台无关的编码，是机器码的抽象，可以将其编译成 non-optimized machine code 来执行）。V8 中，ByteCode 在主线程中执行，而 **Turbofan**（optimizing compiler）在另一个线程中做些优化、生成优化的机器码。
5. 执行：JavaScript 是单线程语言。它是同步的语言，但是有异步的能力。即，它的核心是同步的，在唯一的线程中，代码执行是在 Call Stack 和 Memory 的帮助下一个个进行的。

## 2. Call Stack

JavaScript 单线程，只有一个 Call Stack。从 Ignition 和 Turbofan 中获取了机器码，根据需要将其存储在 Call Stack 和 Memory Heap 中。

Call Stack 是由 Stack Frames 组成的内存空间。每一个 Stack Frame 都与一个函数的调用相关联，直到函数终止才会移除。

Stack Frame 包括三部分内容：

1. local variables
2. argument parameters
3. return address

Call Stack 和 **Execution Context** 概念相关，Execution Context 是在函数调用时创建的。

## 3. Memory Heap

array, object, function 等数据存储在 heap 中。

浏览器的数据存储在两个地方（Call Stack 或 Heap）：

1. 空间换速度：栈的速度快，但是因为硬件的限制无法确保有连续的大量的空间。于是设计了最大 Memory Space。我们只将小的数据存储在 Call Stack 中，即存放 primary data type variables。
2. 速度换空间：heap 的速度慢，不需要连续的空间来保存大的数据。非 primary type 的数据存放在 heap 中。

## 4. Garbage Collection

V8 主要使用像 [Mark-and-Sweep](https://javascript.info/garbage-collection#internal-algorithms) 这样的算法。在标记（mark）阶段，garbage collector 遍历根（比如 global object, local variables 等）。为所有可达的（reachable）对象和值进行标记，说明它们正在被使用。在扫描（sweep）阶段，garbage collector 扫描 heap，为不可达的（unreachable）对象释放内存。这样它就将不可达的对象作为垃圾清理掉了。

比较出名的 garbage collector 有 **Orinoco**。
