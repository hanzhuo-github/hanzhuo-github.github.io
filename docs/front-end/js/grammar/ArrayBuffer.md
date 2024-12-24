---
lang: zh-CN
title: ArrayBuffer
description:
date: 2023-10-03
article: false
tag:
  - js
  - 二进制数据
---

在 JavaScript 中有很多种二进制数据格式，如 `ArrayBuffer`, `Unit8Array`, `DataView`, `Blob`, `File` 等。这些数据都可以使用 JavaScript 进行处理。

<!-- more -->

## 1. ArrayBuffer & 视图

基本的二进制对象是 `ArrayBuffer`，它是对固定长度的连续内存空间的引用。

```js
// 创建一个 16 字节的 buffer，用 0 做预填充
let buffer = new ArrayBuffer(16);
```

要操作 `ArrayBuffer`，必须使用 “视图（view）” 对象。下面这些都是视图对象：

- `Uint8Array`：8 位无符号整数。将 `ArrayBuffer` 中的每个字节视为 0~255 之间的某个整数。
- `Uint16Array`：16 位无符号整数。将每 2 个字节视为 0~65535 之间的整数。
- `Uint32Array`：32 位无符号整数。将每 4 个字节视为 0~4294967295 之间的整数。
- `Float64Array`：将每 8 个字节视为一个 5.0x10-324 到 1.8x10308 之间的浮点数。

所以在描述上面定义的 16 字节的 `buffer`，用 `Uint8Array` 就可以解释为 16 个 0~255 的整数，用 `Uint16Array` 就可以解释为 8 个 0~65535 之间的整数。同理，也可以杰斯为 4 个更大的整数，或者 2 个高精度浮点数。

:::tip
`ArrayBuffer` 是二进制的基础对象，但是要对其进行操作时，必须使用视图（view）
:::

下面是一个使用 view 来操作 ArrayBuffer 的例子：

```js
let buffer = new ArrayBuffer(16);

let view = new Uint32Array(buffer); // 将 buffer 视为 32 位整数

alert(Uint32Array.BYTES_PER_ELEMENT); // Unit32Array 每个整数 4 个字节

alert(buffer.byteLength); // 16
alert(view.length); // 4：16 字节的 buffer 对应的 view 是 4 个 4 字节元素

// 写入数据和遍历数据只能通过 view 来操作
view[0] = 120119110;
for (let num of view) {
  alert(num); // 120119110, 0, 0, 0
}
```

## 2. TypedArray

### 2.1 什么是 TypedArray

上面的视图类（`Uint8Array`, `Uint16Array`等）都叫做 “TypedArray”（注：没有 `TypedArray` 这个构造器，它只是个统称）。

创建视图类的参数有以下几种形式（`new TypedArray` 指的是 `new Uint8Array` 等）。

:::code-tabs
@tab array-buffer

```js
// 1. 传入 ArrayBuffer
// 还可以传入起始位置（默认是 0）及 length 来只获取 buffer 的一部分
new TypedArray(buffer, [byteOffset], [length]);
```

@tab object

```js
// 2. 传入 Array 或 类数组对象
// new TypedArray(object);
let arr = new Uint8Array([1, 2, 3, 4]);
alert(arr.length); // 4
alert(arr[1]); // 2
```

@tab typedArray

```js
// 3. 传入另一个 TypedArray
// new TypedArray(typedArray);
let arr16 = new Uint16Array([1, 1000]);
let arr8 = new Uint8Array(arr16);
alert(arr8[0]); // 1
alert(arr8[1]); // 232: 1000 的低 8 位
```

@tab length

```js
// 4. length 是元素个数
let arr = new Uint16Array(4); // 4 个整数
alert(Uint16Array.BYTES_PER_ELEMENT); // 2：每个整数 2 个字节
alert(arr.byteLength); // 8：一共 8 字节
```

@tab ()

```js
// 5. 不带参数即创建长度为 0 的类型化数组
```

:::

第一种情况提供了 `ArrayBuffer`，其余的情况没有提供 `ArrayBuffer`，但是会自动创建 `ArrayBuffer`。要想访问底层的 `ArrayBuffer`，可以使用下面属性

```js
arr.buffer; // 获取底层的 ArrayBuffer
arr.byteLength; // 获取 ArrayBuffer 的长度
```

类型化数组的列表有：

- `Uint8Array`，`Uint16Array`，`Uint32Array` —— 用于 8、16 和 32 位的整数。
  - `Uint8ClampedArray` —— 用于 8 位整数，在赋值时便“固定“其值（见下文）。
- `Int8Array`，`Int16Array`，`Int32Array` —— 用于有符号整数（可以为负数）。
- `Float32Array`，`Float64Array` —— 用于 32 位和 64 位的有符号浮点数。

> 注：`Uint8ClampedArray` 对于任何大于 255 的数字，将存为 255，任何负数会被存为 0。此行为对于图像处理很有用。
> 其余的都是按照存储位进行截取。

### 2.2 TypedArray 方法

`TypedArray` 拥有一般的 `Array` 方法，包括可以使用 `map`, `slice`, `find`, `reduce` 等进行遍历。

区别如下：

- 没有 `splice`。`buffer` 是固定连续的，不能删除对应的内存区域，我们只能为它设置零值。
- 没有 `concat`。
- 新增 `arr.set(fromArr, [offset])`。从 `offset`（默认值为 0）开始讲 `fromArr` 中的所有元素复制到 arr。
- 新增 `arr.subarray([begin, end])`。创建一个从 `begin` 到 `end` 相同类型的新视图。类似于 `slice`，但不复制任何内容，只是创建一个新视图，用于对某个片段的数据进行操作。

### 2.3 DataView

`DataView` 是在 `ArrayBuffer` 上的一种特殊的超灵活的“未类型化”视图。它允许我们在访问数据时选择格式，`.getUint8(i)`, `.getUint16(i)`。

```js
new DataView(buffer, [byteOffset], [byteLength]);
```

```js
// 4 个字节的二进制数组，每个都是最大值 255
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
let dataView = new DataView(buffer);

alert(dataView.getUint8(0)); // 255
alert(dataView.getUint16(0)); // 65535（最大的 16 位无符号整数）
alert(dataView.getUint32(0)); // 4294967295（最大的 32 位无符号整数）

dataView.setUint32(0, 0); // 将 4 个字节的数字设为 0，即将所有字节都设为 0
```
