---
lang: zh-CN
title: Blob
description:
article: false
date: 2023-10-16
tag:
  - js
  - 二进制数据
---

Blob 表示“具有类型的二进制数据”。它由一个可选的字符串 `type`（MIME 类型） 和 `blobParts`（一系列其他 Blob 对象、字符串和 `BufferSource`）组成。

<!-- more -->

## 1. 创建

```js
new Blob(blobParts, options);
```

- `blobParts`: `Blob`/`BufferSource`/`String` 的数组
- `options`:
  - `type`: `Blob` 类型，通常是 MIME 类型
  - `endings`: 是否转换换行符，使 `Blob` 对应于当前操作系统的换行符。默认为 `"transparent"` 啥也不做，也可以是 `"native"` 转换。

```js
// 利用字符串创建 Blob
let blob = new Blob(["<html>…</html>"], { type: "text/html" });

// 利用类型化数组 typed array & 字符串 创建
let hello = new Unit8Array([72, 101, 108, 108, 111]);
let blob = new Blob([hello, " ", "world"], { type: "text/plain" });
```

可以使用 `slice` 方法：

```js
// contentType 默认与源 blob 的 type 相同
blob.slice([byteStart], [byteEnd], [contentType]);
```

## 2. 应用

### 2.1 Blob 用作 URL

Blob 可以用作 `<a>`, `<img>` 及其他标签的 URL 来显示内容。

因为有 `type`，我们可以上传/下载 Blob 对象。网络请求中，`type` 对应的是 `Content-Type`。

`URL.createObjectURL(blob)` 为 Blob 对象创建一个唯一的 URL，形式为 `blob:<origin>/<uuid>`，即下面例子中 `link.href` 的值。生成的 URL 只在当前的 document 中是有效的。对应的 Blob 保存在内存中，浏览器无法释放它。直到文档退出（unload），这个 URL -> Blob 的映射会被自动清除，对应的 Blob 对象也被释放了。

一旦创建 URL，即使不再需要对应的 Blob，它也将一直在内存中。我们可以使用 `URL.revokeObjectURL(url)` 移除对应的映射，从而删除对应的 Blob。

:::code-tabs
@tab html

```html
<!-- 点击 Download，下载 hello.txt，内容为 Hello, world! -->
<a download="hello.txt" href="#" id="link">Download</a>

<script>
  let blob = new Blob(["Hello, world!"], { type: "text/plain" });
  link.href = URL.createObjectURL(blob);
</script>
```

@tab 模拟点击

```js
// 或者使用 .click() 模拟用户点击，自动下载
let link = document.createElement("a");
link.download = "hello.txt";
let blob = new Blob(["Hello, world!"], { type: "text/plain" });
link.href = URL.createObjectURL(blob);

link.click();
// 只使用一次 Blob，删除对应的映射以释放内存
URL.revokeObjectURL(link.href);
```

:::

### 2.2 Blob 转换为 base64

base64 编码是基于 64 个可打印字符来表示二进制数据的方法，它可以在 “data-url” 中使用。

"data-url" 的格式为：`data:[<mediatype>][;base64],<data>`。可以在任何地方使用这种 url，就和使用正常的 url 一样。

比如：<img src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7">。可以打开控制台看到它的 data-url。

```html
<img
  src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"
/>
```

利用 `FileReader` 将 Blob 转换为 base64.

```js{5,6}
let link = document.createElement('a');
link.download = 'hello.txt';
let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

let reader = new FileReader();
reader.readAsDataURL(blob);     // 将 Blob 转换为 base64

reader.onload = function() {
  link.href = reader.result;    // data-url
  link.click();
}
```

和 `URL.createObjectURL(blob) & URL.revokeObjectURL(url)` 不同的是，Blob 转换为 data-url 无需撤销。但是对大的 Blob 进行编码时，需要消耗一定的性能，而 `URL.createObjectURL(blob)` 直接访问 Blob，无需编码。

### 2.3 Image 转换为 Blob

可以使用图片、图片的一部分、页面截图来创建 Blob，这样可以方便地将图片上传。

图片的操作通过 `<canvas>` 完成：

1. 使用 `canvas.drawImage` 画图
2. 调用 `.toBlob(callback, format, quality)` 创建 Block 并在完成时调用 callback。

```js
let img = document.querySelector("img");

let canvas = document.createElement("canvas");
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext("2d");

// 向 context 中复制图像（也可以使用此方法剪裁）
context.drawImage(img, 0, 0);

canvas.toBlob(function (blob) {
  // 创建完 Blob 后的回调
  let link = document.createElement("a");
  link.download = "example.png";
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}, "image/png");
```

### 2.4 Blob 转换为 ArrayBuffer

```js
// 从 blob 创建 arrayBuffer
const bufferPromise = await blob.arrayBuffer()

// 或使用 then
blob.arrayBuffer().then(buffer => {...})
```

### 2.5 Blob 转换为 Stream

读写超过 2GB 的 Blob 时，将其转换成 ArrayBuffer 会更加占用内存，这时可以直接将 blob 转换为 stream 进行处理。

Stream 支持逐部分地读写。

```js
// 从 blob 中获取可读流
const readableStream = blob.stream();
const stream = readableStream.getReader();

while (true) {
  let { done, value } = await stream.read();
  if (done) {
    console.log("读完了");
    break;
  }
  console.log(value);
}
```
