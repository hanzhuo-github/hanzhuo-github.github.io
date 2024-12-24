import { c as createElementBlock, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createStaticVNode('<p>JS Engine 是 JavaScript runtime environment 的核心，需要遵循 ECMAScript 规范。每个浏览器都有 JS Engine。</p><blockquote><p>Chrome 使用 V8（Node.js 和 Deno 也用 V8） Firefox 使用 SpiderMonkey Edge 使用 Chakra Safari 使用 JavaScriptCore</p></blockquote><h2 id="_1-工作步骤" tabindex="-1"><a class="header-anchor" href="#_1-工作步骤"><span>1. 工作步骤</span></a></h2><ol><li>JavaScript 引擎从渲染引擎（Chrome 的渲染引擎是 Blink）中获得源代码</li><li>词法分析（Lexical Analysis/Lexing）：将 source code 转换为 tokens。在 V8 中使用 Scanner 来完成这个过程。</li><li>语法分析（Parsing）：读取 tokens、检查语法，生成抽象语法树（Abstract Syntax Tree, AST）。使用 Syntax Parser 来做这件事。<a href="https://astexplorer.net/" target="_blank" rel="noopener noreferrer">AST Explorer</a></li><li>解释器/编译器（Interpreter/Compiler）。V8 中使用的是 JIT-compiler，叫做 <strong>Ignition</strong>（是解释器和编译器的混合体）。JIT 在运行时执行代码，而非在代码执行前编译全部代码。Ignition 会生成 Bytecode（与平台无关的编码，是机器码的抽象，可以将其编译成 non-optimized machine code 来执行）。V8 中，ByteCode 在主线程中执行，而 <strong>Turbofan</strong>（optimizing compiler）在另一个线程中做些优化、生成优化的机器码。</li><li>执行：JavaScript 是单线程语言。它是同步的语言，但是有异步的能力。即，它的核心是同步的，在唯一的线程中，代码执行是在 Call Stack 和 Memory 的帮助下一个个进行的。</li></ol><h2 id="_2-call-stack" tabindex="-1"><a class="header-anchor" href="#_2-call-stack"><span>2. Call Stack</span></a></h2><p>JavaScript 单线程，只有一个 Call Stack。从 Ignition 和 Turbofan 中获取了机器码，根据需要将其存储在 Call Stack 和 Memory Heap 中。</p><p>Call Stack 是由 Stack Frames 组成的内存空间。每一个 Stack Frame 都与一个函数的调用相关联，直到函数终止才会移除。</p><p>Stack Frame 包括三部分内容：</p><ol><li>local variables</li><li>argument parameters</li><li>return address</li></ol><p>Call Stack 和 <strong>Execution Context</strong> 概念相关，Execution Context 是在函数调用时创建的。</p><h2 id="_3-memory-heap" tabindex="-1"><a class="header-anchor" href="#_3-memory-heap"><span>3. Memory Heap</span></a></h2><p>array, object, function 等数据存储在 heap 中。</p><p>浏览器的数据存储在两个地方（Call Stack 或 Heap）：</p><ol><li>空间换速度：栈的速度快，但是因为硬件的限制无法确保有连续的大量的空间。于是设计了最大 Memory Space。我们只将小的数据存储在 Call Stack 中，即存放 primary data type variables。</li><li>速度换空间：heap 的速度慢，不需要连续的空间来保存大的数据。非 primary type 的数据存放在 heap 中。</li></ol><h2 id="_4-garbage-collection" tabindex="-1"><a class="header-anchor" href="#_4-garbage-collection"><span>4. Garbage Collection</span></a></h2><p>V8 主要使用像 <a href="https://javascript.info/garbage-collection#internal-algorithms" target="_blank" rel="noopener noreferrer">Mark-and-Sweep</a> 这样的算法。在标记（mark）阶段，garbage collector 遍历根（比如 global object, local variables 等）。为所有可达的（reachable）对象和值进行标记，说明它们正在被使用。在扫描（sweep）阶段，garbage collector 扫描 heap，为不可达的（unreachable）对象释放内存。这样它就将不可达的对象作为垃圾清理掉了。</p><p>比较出名的 garbage collector 有 <strong>Orinoco</strong>。</p>', 17)
  ]));
}
const jsEngine_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "js-engine.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/js-runtime/js-engine.html","title":"1. JS 引擎","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"1. JS 引擎","description":null,"article":false,"date":"2024-01-10T00:00:00.000Z","order":2},"headers":[{"level":2,"title":"1. 工作步骤","slug":"_1-工作步骤","link":"#_1-工作步骤","children":[]},{"level":2,"title":"2. Call Stack","slug":"_2-call-stack","link":"#_2-call-stack","children":[]},{"level":2,"title":"3. Memory Heap","slug":"_3-memory-heap","link":"#_3-memory-heap","children":[]},{"level":2,"title":"4. Garbage Collection","slug":"_4-garbage-collection","link":"#_4-garbage-collection","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":2.34,"words":703},"filePathRelative":"front-end/js/js-runtime/js-engine.md","localizedDate":"2024年1月10日","excerpt":"<p>JS Engine 是 JavaScript runtime environment 的核心，需要遵循 ECMAScript 规范。每个浏览器都有 JS Engine。</p>\\n<blockquote>\\n<p>Chrome 使用 V8（Node.js 和 Deno 也用 V8）\\nFirefox 使用 SpiderMonkey\\nEdge 使用 Chakra\\nSafari 使用 JavaScriptCore</p>\\n</blockquote>\\n<h2>1. 工作步骤</h2>\\n<ol>\\n<li>JavaScript 引擎从渲染引擎（Chrome 的渲染引擎是 Blink）中获得源代码</li>\\n<li>词法分析（Lexical Analysis/Lexing）：将 source code 转换为 tokens。在 V8 中使用 Scanner 来完成这个过程。</li>\\n<li>语法分析（Parsing）：读取 tokens、检查语法，生成抽象语法树（Abstract Syntax Tree, AST）。使用 Syntax Parser 来做这件事。<a href=\\"https://astexplorer.net/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AST Explorer</a></li>\\n<li>解释器/编译器（Interpreter/Compiler）。V8 中使用的是 JIT-compiler，叫做 <strong>Ignition</strong>（是解释器和编译器的混合体）。JIT 在运行时执行代码，而非在代码执行前编译全部代码。Ignition 会生成 Bytecode（与平台无关的编码，是机器码的抽象，可以将其编译成 non-optimized machine code 来执行）。V8 中，ByteCode 在主线程中执行，而 <strong>Turbofan</strong>（optimizing compiler）在另一个线程中做些优化、生成优化的机器码。</li>\\n<li>执行：JavaScript 是单线程语言。它是同步的语言，但是有异步的能力。即，它的核心是同步的，在唯一的线程中，代码执行是在 Call Stack 和 Memory 的帮助下一个个进行的。</li>\\n</ol>"}');
export {
  jsEngine_html as comp,
  data
};
