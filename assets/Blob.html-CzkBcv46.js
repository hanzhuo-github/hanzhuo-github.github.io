import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, g as createTextVNode, a as createCommentVNode, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Blob 表示“具有类型的二进制数据”。它由一个可选的字符串 "),
        createBaseVNode("code", null, "type"),
        createTextVNode("（MIME 类型） 和 "),
        createBaseVNode("code", null, "blobParts"),
        createTextVNode("（一系列其他 Blob 对象、字符串和 "),
        createBaseVNode("code", null, "BufferSource"),
        createTextVNode("）组成。")
      ],
      -1
      /* HOISTED */
    )),
    createCommentVNode(" more "),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="_1-创建" tabindex="-1"><a class="header-anchor" href="#_1-创建"><span>1. 创建</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>blobParts<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><ul><li><code>blobParts</code>: <code>Blob</code>/<code>BufferSource</code>/<code>String</code> 的数组</li><li><code>options</code>: <ul><li><code>type</code>: <code>Blob</code> 类型，通常是 MIME 类型</li><li><code>endings</code>: 是否转换换行符，使 <code>Blob</code> 对应于当前操作系统的换行符。默认为 <code>&quot;transparent&quot;</code> 啥也不做，也可以是 <code>&quot;native&quot;</code> 转换。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 利用字符串创建 Blob</span></span>\n<span class="line"><span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;html&gt;…&lt;/html&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 利用类型化数组 typed array &amp; 字符串 创建</span></span>\n<span class="line"><span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Unit8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>hello<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text/plain&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>slice</code> 方法：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// contentType 默认与源 blob 的 type 相同</span></span>\n<span class="line">blob<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">[</span>byteStart<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>byteEnd<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>contentType<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><h2 id="_2-应用" tabindex="-1"><a class="header-anchor" href="#_2-应用"><span>2. 应用</span></a></h2><h3 id="_2-1-blob-用作-url" tabindex="-1"><a class="header-anchor" href="#_2-1-blob-用作-url"><span>2.1 Blob 用作 URL</span></a></h3><p>Blob 可以用作 <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code> 及其他标签的 URL 来显示内容。</p><p>因为有 <code>type</code>，我们可以上传/下载 Blob 对象。网络请求中，<code>type</code> 对应的是 <code>Content-Type</code>。</p><p><code>URL.createObjectURL(blob)</code> 为 Blob 对象创建一个唯一的 URL，形式为 <code>blob:&lt;origin&gt;/&lt;uuid&gt;</code>，即下面例子中 <code>link.href</code> 的值。生成的 URL 只在当前的 document 中是有效的。对应的 Blob 保存在内存中，浏览器无法释放它。直到文档退出（unload），这个 URL -&gt; Blob 的映射会被自动清除，对应的 Blob 对象也被释放了。</p><p>一旦创建 URL，即使不再需要对应的 Blob，它也将一直在内存中。我们可以使用 <code>URL.revokeObjectURL(url)</code> 移除对应的映射，从而删除对应的 Blob。</p>', 12)),
    createVNode(_component_CodeTabs, {
      id: "55",
      data: [{ "id": "html" }, { "id": "模拟点击" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("html")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("模拟点击")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "div",
          {
            class: "language-html line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "html",
            "data-title": "html"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "<!-- 点击 Download，下载 hello.txt，内容为 Hello, world! -->")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "<"),
                      createTextVNode("a")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "download"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("hello.txt"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "href"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("#"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "id"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("link"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createTextVNode("Download"),
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "</"),
                      createTextVNode("a")
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ])
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "<"),
                      createTextVNode("script")
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token script" }, [
                    createBaseVNode("span", { class: "token language-javascript" }),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" }, [
                      createTextVNode("  "),
                      createBaseVNode("span", { class: "token keyword" }, "let"),
                      createTextVNode(" blob "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token keyword" }, "new"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token class-name" }, "Blob"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token punctuation" }, "["),
                      createBaseVNode("span", { class: "token string" }, '"Hello, world!"'),
                      createBaseVNode("span", { class: "token punctuation" }, "]"),
                      createBaseVNode("span", { class: "token punctuation" }, ","),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "{"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token literal-property property" }, "type"),
                      createBaseVNode("span", { class: "token operator" }, ":"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token string" }, '"text/plain"'),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token punctuation" }, "}"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ";")
                    ]),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" }, [
                      createTextVNode("  link"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createTextVNode("href "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token constant" }, "URL"),
                      createBaseVNode("span", { class: "token punctuation" }, "."),
                      createBaseVNode("span", { class: "token function" }, "createObjectURL"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("blob"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ";")
                    ]),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" })
                  ]),
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "</"),
                      createTextVNode("script")
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ])
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// 或者使用 .click() 模拟用户点击，自动下载")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" link "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" document"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"a"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("link"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("download "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"hello.txt"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" blob "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Blob"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token string" }, '"Hello, world!"'),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "type"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"text/plain"'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("link"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("href "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token constant" }, "URL"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "createObjectURL"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("blob"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("link"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "click"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 只使用一次 Blob，删除对应的映射以释放内存")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token constant" }, "URL"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "revokeObjectURL"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("link"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("href"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
      _: 1
      /* STABLE */
    }),
    _cache[6] || (_cache[6] = createStaticVNode('<h3 id="_2-2-blob-转换为-base64" tabindex="-1"><a class="header-anchor" href="#_2-2-blob-转换为-base64"><span>2.2 Blob 转换为 base64</span></a></h3><p>base64 编码是基于 64 个可打印字符来表示二进制数据的方法，它可以在 “data-url” 中使用。</p><p>&quot;data-url&quot; 的格式为：<code>data:[&lt;mediatype&gt;][;base64],&lt;data&gt;</code>。可以在任何地方使用这种 url，就和使用正常的 url 一样。</p><p>比如：<img src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7">。可以打开控制台看到它的 data-url。</p><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span></span>\n<span class="line">  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7<span class="token punctuation">&quot;</span></span></span>\n<span class="line"><span class="token punctuation">/&gt;</span></span></span>\n<span class="line"></span></code></pre></div><p>利用 <code>FileReader</code> 将 Blob 转换为 base64.</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;hello.txt&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line highlighted"><span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 将 Blob 转换为 base64</span></span>\n<span class="line"></span>\n<span class="line">reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  link<span class="token punctuation">.</span>href <span class="token operator">=</span> reader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>    <span class="token comment">// data-url</span></span>\n<span class="line">  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 <code>URL.createObjectURL(blob) &amp; URL.revokeObjectURL(url)</code> 不同的是，Blob 转换为 data-url 无需撤销。但是对大的 Blob 进行编码时，需要消耗一定的性能，而 <code>URL.createObjectURL(blob)</code> 直接访问 Blob，无需编码。</p><h3 id="_2-3-image-转换为-blob" tabindex="-1"><a class="header-anchor" href="#_2-3-image-转换为-blob"><span>2.3 Image 转换为 Blob</span></a></h3><p>可以使用图片、图片的一部分、页面截图来创建 Blob，这样可以方便地将图片上传。</p><p>图片的操作通过 <code>&lt;canvas&gt;</code> 完成：</p><ol><li>使用 <code>canvas.drawImage</code> 画图</li><li>调用 <code>.toBlob(callback, format, quality)</code> 创建 Block 并在完成时调用 callback。</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span></span>\n<span class="line">canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 向 context 中复制图像（也可以使用此方法剪裁）</span></span>\n<span class="line">context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">canvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 创建完 Blob 后的回调</span></span>\n<span class="line">  <span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  link<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&quot;example.png&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-blob-转换为-arraybuffer" tabindex="-1"><a class="header-anchor" href="#_2-4-blob-转换为-arraybuffer"><span>2.4 Blob 转换为 ArrayBuffer</span></a></h3><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 从 blob 创建 arrayBuffer</span></span>\n<span class="line"><span class="token keyword">const</span> bufferPromise <span class="token operator">=</span> <span class="token keyword">await</span> blob<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 或使用 then</span></span>\n<span class="line">blob<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">buffer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><h3 id="_2-5-blob-转换为-stream" tabindex="-1"><a class="header-anchor" href="#_2-5-blob-转换为-stream"><span>2.5 Blob 转换为 Stream</span></a></h3><p>读写超过 2GB 的 Blob 时，将其转换成 ArrayBuffer 会更加占用内存，这时可以直接将 blob 转换为 stream 进行处理。</p><p>Stream 支持逐部分地读写。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 从 blob 中获取可读流</span></span>\n<span class="line"><span class="token keyword">const</span> readableStream <span class="token operator">=</span> blob<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> stream <span class="token operator">=</span> readableStream<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">{</span> done<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;读完了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 19))
  ]);
}
const Blob_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Blob.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/grammar/Blob.html","title":"Blob","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Blob","description":null,"article":false,"date":"2023-10-16T00:00:00.000Z","tag":["js","二进制数据"]},"headers":[{"level":2,"title":"1. 创建","slug":"_1-创建","link":"#_1-创建","children":[]},{"level":2,"title":"2. 应用","slug":"_2-应用","link":"#_2-应用","children":[{"level":3,"title":"2.1 Blob 用作 URL","slug":"_2-1-blob-用作-url","link":"#_2-1-blob-用作-url","children":[]},{"level":3,"title":"2.2 Blob 转换为 base64","slug":"_2-2-blob-转换为-base64","link":"#_2-2-blob-转换为-base64","children":[]},{"level":3,"title":"2.3 Image 转换为 Blob","slug":"_2-3-image-转换为-blob","link":"#_2-3-image-转换为-blob","children":[]},{"level":3,"title":"2.4 Blob 转换为 ArrayBuffer","slug":"_2-4-blob-转换为-arraybuffer","link":"#_2-4-blob-转换为-arraybuffer","children":[]},{"level":3,"title":"2.5 Blob 转换为 Stream","slug":"_2-5-blob-转换为-stream","link":"#_2-5-blob-转换为-stream","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":3.14,"words":941},"filePathRelative":"front-end/js/grammar/Blob.md","localizedDate":"2023年10月16日","excerpt":"<p>Blob 表示“具有类型的二进制数据”。它由一个可选的字符串 <code>type</code>（MIME 类型） 和 <code>blobParts</code>（一系列其他 Blob 对象、字符串和 <code>BufferSource</code>）组成。</p>\\n"}');
export {
  Blob_html as comp,
  data
};
