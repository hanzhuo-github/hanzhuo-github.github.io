import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="_1-编码方式" tabindex="-1"><a class="header-anchor" href="#_1-编码方式"><span>1. 编码方式</span></a></h2><p>JavaScript 中的字符串是基于 Unicode 的。可以通过以下三种方式将一个字符以 16 进制 Unicode 编码的方式插入到字符串中</p><ul><li><p><code>\\xXX</code><code>XX</code> 是 2 位十六进制数。</p></li><li><p><code>\\uXXXX</code><code>XXXX</code> 是 4 位十六进制数。</p></li><li><p><code>\\u{X...XXXXXX}</code><code>X...XXXXXX</code> 是结语 <code>0</code> 和 <code>10FFFF</code> 之间的十六进制和数。</p></li></ul>', 3)),
    createVNode(_component_CodeTabs, {
      id: "23",
      data: [{ "id": "<code v-pre>\\xXX</code>" }, { "id": "<code v-pre>\\uXXXX</code>" }, { "id": "<code v-pre>\\u{X...XXXXXX}</code>" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "code",
          null,
          "\\xXX",
          -1
          /* HOISTED */
        )
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "code",
          null,
          "\\uXXXX",
          -1
          /* HOISTED */
        )
      ])),
      title2: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "code",
          null,
          "\\u{X...XXXXXX}",
          -1
          /* HOISTED */
        )
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
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
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"\\x7A"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// z")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"\\xA9"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// © (版权符号)")
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
      tab1: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
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
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"\\u00A9"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// ©")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"\\u2191"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// ↑")
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
      tab2: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
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
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"\\u{1F60D}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 😍")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"\\u{D83D}\\u{DE0D}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 😍 代理对表示")
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
    createBaseVNode("p", null, [
      _cache[7] || (_cache[7] = createTextVNode("在 ")),
      createVNode(_component_RouteLink, { to: "/basic/character-encoding/Chapter3.html" }, {
        default: withCtx(() => _cache[6] || (_cache[6] = [
          createTextVNode("Unicode 编码方案")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[8] || (_cache[8] = createTextVNode(" 中介绍了代理对的概念，它使用两个 BMP 的码点来表示一个 SP 的码点。"))
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="_2-javascript-对代理对的处理" tabindex="-1"><a class="header-anchor" href="#_2-javascript-对代理对的处理"><span>2. JavaScript 对代理对的处理</span></a></h2><p>JavaScript 使用 <code>String.fromCodePoint</code> 和 <code>str.codePointAt</code> 来处理代理对。和 <code>String.fromCharCode</code>, <code>str.charCodeAt</code> 类似。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;\\u{D83D}\\u{DE0D}&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 😍</span></span>\n<span class="line">a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 2  代理对的长度是 2</span></span>\n<span class="line"></span>\n<span class="line">a<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// d83d</span></span>\n<span class="line">a<span class="token punctuation">.</span><span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1f60d 读取的是完整度的代理对</span></span>\n<span class="line"></span>\n<span class="line">a<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// de0d</span></span>\n<span class="line">a<span class="token punctuation">.</span><span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// de0d 代理对的后半部分，无意义</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-字符组合" tabindex="-1"><a class="header-anchor" href="#_3-字符组合"><span>3. 字符组合</span></a></h2><p>很多语言都有由基础字符及其上方/下方的标记所组成的字符。比如 <code>àáâäãåā</code> 是由基础字符 <code>a</code> 及其他符号组合而成的。</p><p>Unicode 标准允许我们使用多个字符：一个基础字符，配合一个或多个标记字符。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// \\u0307 上方的点</span></span>\n<span class="line"><span class="token comment">// \\u0323 下方的点</span></span>\n<span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;S\\u0307&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Ṡ</span></span>\n<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&quot;S\\u0323\\u0307&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Ṩ</span></span>\n<span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">&quot;S\\u0307\\u0323&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Ṩ</span></span>\n<span class="line"></span>\n<span class="line">b <span class="token operator">==</span> c<span class="token punctuation">;</span> <span class="token comment">// false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中的 <code>b</code> 和 <code>c</code> 看起来相同，但实际上是不同的 Unicode 字符组合，于是比较的结果为 false。</p><p>可以通过 Unicode 规范化 <code>str.normalize()</code> 来解决这个问题。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> bNorm <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">let</span> cNorm <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">bNorm <span class="token operator">===</span> cNorm<span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line">b<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 3</span></span>\n<span class="line">bNorm<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 1</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// Ṩ 比较常见，在 Unicode 中有对应的编码：\\u1e68</span></span>\n<span class="line">bNorm <span class="token operator">===</span> <span class="token string">&quot;\\u1e68&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 10))
  ]);
}
const jsString_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "js-string.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/js-string.html","title":"JavaScript 中的字符串","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"JavaScript 中的字符串","description":null,"article":false,"date":"2023-12-06T00:00:00.000Z","order":6},"headers":[{"level":2,"title":"1. 编码方式","slug":"_1-编码方式","link":"#_1-编码方式","children":[]},{"level":2,"title":"2. JavaScript 对代理对的处理","slug":"_2-javascript-对代理对的处理","link":"#_2-javascript-对代理对的处理","children":[]},{"level":2,"title":"3. 字符组合","slug":"_3-字符组合","link":"#_3-字符组合","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":1.61,"words":484},"filePathRelative":"front-end/js/js-string.md","localizedDate":"2023年12月6日","excerpt":"<h2>1. 编码方式</h2>\\n<p>JavaScript 中的字符串是基于 Unicode 的。可以通过以下三种方式将一个字符以 16 进制 Unicode 编码的方式插入到字符串中</p>\\n<ul>\\n<li>\\n<p><code>\\\\xXX</code>\\n<code>XX</code> 是 2 位十六进制数。</p>\\n</li>\\n<li>\\n<p><code>\\\\uXXXX</code>\\n<code>XXXX</code> 是 4 位十六进制数。</p>\\n</li>\\n<li>\\n<p><code>\\\\u{X...XXXXXX}</code>\\n<code>X...XXXXXX</code> 是结语 <code>0</code> 和 <code>10FFFF</code> 之间的十六进制和数。</p>\\n</li>\\n</ul>"}');
export {
  jsString_html as comp,
  data
};
