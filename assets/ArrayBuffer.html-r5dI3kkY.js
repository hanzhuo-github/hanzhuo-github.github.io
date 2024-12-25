import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, g as createTextVNode, a as createCommentVNode, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("在 JavaScript 中有很多种二进制数据格式，如 "),
        createBaseVNode("code", null, "ArrayBuffer"),
        createTextVNode(", "),
        createBaseVNode("code", null, "Unit8Array"),
        createTextVNode(", "),
        createBaseVNode("code", null, "DataView"),
        createTextVNode(", "),
        createBaseVNode("code", null, "Blob"),
        createTextVNode(", "),
        createBaseVNode("code", null, "File"),
        createTextVNode(" 等。这些数据都可以使用 JavaScript 进行处理。")
      ],
      -1
      /* HOISTED */
    )),
    createCommentVNode(" more "),
    _cache[11] || (_cache[11] = createStaticVNode('<h2 id="_1-arraybuffer-视图" tabindex="-1"><a class="header-anchor" href="#_1-arraybuffer-视图"><span>1. ArrayBuffer &amp; 视图</span></a></h2><p>基本的二进制对象是 <code>ArrayBuffer</code>，它是对固定长度的连续内存空间的引用。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 创建一个 16 字节的 buffer，用 0 做预填充</span></span>\n<span class="line"><span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><p>要操作 <code>ArrayBuffer</code>，必须使用 “视图（view）” 对象。下面这些都是视图对象：</p><ul><li><code>Uint8Array</code>：8 位无符号整数。将 <code>ArrayBuffer</code> 中的每个字节视为 0~255 之间的某个整数。</li><li><code>Uint16Array</code>：16 位无符号整数。将每 2 个字节视为 0~65535 之间的整数。</li><li><code>Uint32Array</code>：32 位无符号整数。将每 4 个字节视为 0~4294967295 之间的整数。</li><li><code>Float64Array</code>：将每 8 个字节视为一个 5.0x10-324 到 1.8x10308 之间的浮点数。</li></ul><p>所以在描述上面定义的 16 字节的 <code>buffer</code>，用 <code>Uint8Array</code> 就可以解释为 16 个 0~255 的整数，用 <code>Uint16Array</code> 就可以解释为 8 个 0~65535 之间的整数。同理，也可以杰斯为 4 个更大的整数，或者 2 个高精度浮点数。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>ArrayBuffer</code> 是二进制的基础对象，但是要对其进行操作时，必须使用视图（view）</p></div><p>下面是一个使用 view 来操作 ArrayBuffer 的例子：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint32Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 buffer 视为 32 位整数</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>Uint32Array<span class="token punctuation">.</span><span class="token constant">BYTES_PER_ELEMENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Unit32Array 每个整数 4 个字节</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span>byteLength<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4：16 字节的 buffer 对应的 view 是 4 个 4 字节元素</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 写入数据和遍历数据只能通过 view 来操作</span></span>\n<span class="line">view<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">120119110</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> view<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 120119110, 0, 0, 0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-typedarray" tabindex="-1"><a class="header-anchor" href="#_2-typedarray"><span>2. TypedArray</span></a></h2><h3 id="_2-1-什么是-typedarray" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是-typedarray"><span>2.1 什么是 TypedArray</span></a></h3><p>上面的视图类（<code>Uint8Array</code>, <code>Uint16Array</code>等）都叫做 “TypedArray”（注：没有 <code>TypedArray</code> 这个构造器，它只是个统称）。</p><p>创建视图类的参数有以下几种形式（<code>new TypedArray</code> 指的是 <code>new Uint8Array</code> 等）。</p>', 13)),
    createVNode(_component_CodeTabs, {
      id: "60",
      data: [{ "id": "array-buffer" }, { "id": "object" }, { "id": "typedArray" }, { "id": "length" }, { "id": "()" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("array-buffer")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("object")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createTextVNode("typedArray")
      ])),
      title3: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
        createTextVNode("length")
      ])),
      title4: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createTextVNode("()")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 1. 传入 ArrayBuffer")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 还可以传入起始位置（默认是 0）及 length 来只获取 buffer 的一部分")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "TypedArray"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("buffer"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("byteOffset"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("length"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 2. 传入 Array 或 类数组对象")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// new TypedArray(object);")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" arr "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Uint8Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "2"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "3"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "4"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("arr"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("length"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 4")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("arr"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 2")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab2: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 3. 传入另一个 TypedArray")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// new TypedArray(typedArray);")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" arr16 "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Uint16Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1000"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" arr8 "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Uint8Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("arr16"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("arr8"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 1")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("arr8"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 232: 1000 的低 8 位")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab3: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 4. length 是元素个数")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" arr "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Uint16Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token number" }, "4"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 4 个整数")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("Uint16Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token constant" }, "BYTES_PER_ELEMENT"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 2：每个整数 2 个字节")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("arr"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("byteLength"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 8：一共 8 字节")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab4: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 5. 不带参数即创建长度为 0 的类型化数组")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[12] || (_cache[12] = createStaticVNode('<p>第一种情况提供了 <code>ArrayBuffer</code>，其余的情况没有提供 <code>ArrayBuffer</code>，但是会自动创建 <code>ArrayBuffer</code>。要想访问底层的 <code>ArrayBuffer</code>，可以使用下面属性</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">arr<span class="token punctuation">.</span>buffer<span class="token punctuation">;</span> <span class="token comment">// 获取底层的 ArrayBuffer</span></span>\n<span class="line">arr<span class="token punctuation">.</span>byteLength<span class="token punctuation">;</span> <span class="token comment">// 获取 ArrayBuffer 的长度</span></span>\n<span class="line"></span></code></pre></div><p>类型化数组的列表有：</p><ul><li><code>Uint8Array</code>，<code>Uint16Array</code>，<code>Uint32Array</code> —— 用于 8、16 和 32 位的整数。 <ul><li><code>Uint8ClampedArray</code> —— 用于 8 位整数，在赋值时便“固定“其值（见下文）。</li></ul></li><li><code>Int8Array</code>，<code>Int16Array</code>，<code>Int32Array</code> —— 用于有符号整数（可以为负数）。</li><li><code>Float32Array</code>，<code>Float64Array</code> —— 用于 32 位和 64 位的有符号浮点数。</li></ul><blockquote><p>注：<code>Uint8ClampedArray</code> 对于任何大于 255 的数字，将存为 255，任何负数会被存为 0。此行为对于图像处理很有用。 其余的都是按照存储位进行截取。</p></blockquote><h3 id="_2-2-typedarray-方法" tabindex="-1"><a class="header-anchor" href="#_2-2-typedarray-方法"><span>2.2 TypedArray 方法</span></a></h3><p><code>TypedArray</code> 拥有一般的 <code>Array</code> 方法，包括可以使用 <code>map</code>, <code>slice</code>, <code>find</code>, <code>reduce</code> 等进行遍历。</p><p>区别如下：</p><ul><li>没有 <code>splice</code>。<code>buffer</code> 是固定连续的，不能删除对应的内存区域，我们只能为它设置零值。</li><li>没有 <code>concat</code>。</li><li>新增 <code>arr.set(fromArr, [offset])</code>。从 <code>offset</code>（默认值为 0）开始讲 <code>fromArr</code> 中的所有元素复制到 arr。</li><li>新增 <code>arr.subarray([begin, end])</code>。创建一个从 <code>begin</code> 到 <code>end</code> 相同类型的新视图。类似于 <code>slice</code>，但不复制任何内容，只是创建一个新视图，用于对某个片段的数据进行操作。</li></ul><h3 id="_2-3-dataview" tabindex="-1"><a class="header-anchor" href="#_2-3-dataview"><span>2.3 DataView</span></a></h3><p><code>DataView</code> 是在 <code>ArrayBuffer</code> 上的一种特殊的超灵活的“未类型化”视图。它允许我们在访问数据时选择格式，<code>.getUint8(i)</code>, <code>.getUint16(i)</code>。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token punctuation">[</span>byteOffset<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>byteLength<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 4 个字节的二进制数组，每个都是最大值 255</span></span>\n<span class="line"><span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>buffer<span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">let</span> dataView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>dataView<span class="token punctuation">.</span><span class="token function">getUint8</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 255</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>dataView<span class="token punctuation">.</span><span class="token function">getUint16</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 65535（最大的 16 位无符号整数）</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>dataView<span class="token punctuation">.</span><span class="token function">getUint32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4294967295（最大的 32 位无符号整数）</span></span>\n<span class="line"></span>\n<span class="line">dataView<span class="token punctuation">.</span><span class="token function">setUint32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 4 个字节的数字设为 0，即将所有字节都设为 0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13))
  ]);
}
const ArrayBuffer_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ArrayBuffer.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/grammar/ArrayBuffer.html","title":"ArrayBuffer","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"ArrayBuffer","description":null,"date":"2023-10-03T00:00:00.000Z","article":false,"tag":["js","二进制数据"]},"headers":[{"level":2,"title":"1. ArrayBuffer & 视图","slug":"_1-arraybuffer-视图","link":"#_1-arraybuffer-视图","children":[]},{"level":2,"title":"2. TypedArray","slug":"_2-typedarray","link":"#_2-typedarray","children":[{"level":3,"title":"2.1 什么是 TypedArray","slug":"_2-1-什么是-typedarray","link":"#_2-1-什么是-typedarray","children":[]},{"level":3,"title":"2.2 TypedArray 方法","slug":"_2-2-typedarray-方法","link":"#_2-2-typedarray-方法","children":[]},{"level":3,"title":"2.3 DataView","slug":"_2-3-dataview","link":"#_2-3-dataview","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":3.8,"words":1141},"filePathRelative":"front-end/js/grammar/ArrayBuffer.md","localizedDate":"2023年10月3日","excerpt":"<p>在 JavaScript 中有很多种二进制数据格式，如 <code>ArrayBuffer</code>, <code>Unit8Array</code>, <code>DataView</code>, <code>Blob</code>, <code>File</code> 等。这些数据都可以使用 JavaScript 进行处理。</p>\\n"}');
export {
  ArrayBuffer_html as comp,
  data
};
