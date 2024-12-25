import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock, g as createTextVNode, f as createBaseVNode } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createStaticVNode('<p><code>this</code> 是在运行时确定的，取决于上下文（context）。<strong>函数中的 <code>this</code> 只与函数被调用的形式有关</strong>（请从现在起记住这句话）。</p><p>JavaScript 中函数调用有以下 4 种类型：</p><ul><li>function：<code>alert(&#39;hello&#39;)</code></li><li>method：<code>console.log(&#39;hello&#39;)</code></li><li>constructor：<code>new RegExp(/ab+c/, &#39;i&#39;)</code></li><li>间接调用：<code>alert.call(undefined, &#39;hello&#39;)</code></li></ul><p>想要理解 <code>this</code>，就必须了解各种形式的函数调用是如何影响上下文的。</p><h2 id="_1-function" tabindex="-1"><a class="header-anchor" href="#_1-function"><span>1. Function</span></a></h2><h3 id="_1-1-非严格模式" tabindex="-1"><a class="header-anchor" href="#_1-1-非严格模式"><span>1.1 非严格模式</span></a></h3><p>function 调用的 <code>this</code>是 <code>global</code> 全局对象。</p><p>比如浏览器环境中，function 调用时显示的 <code>this</code> 就是 <code>window</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line">window<span class="token punctuation">.</span>cnt<span class="token punctuation">;</span> <span class="token comment">// 0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-严格模式" tabindex="-1"><a class="header-anchor" href="#_1-2-严格模式"><span>1.2 严格模式</span></a></h3><p>当 use strict 时，<code>this</code> 是 <code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_1-3-箭头函数"><span>1.3 箭头函数</span></a></h3><p>箭头函数没有自己的 <code>this</code>，箭头函数中的 <code>this</code> 就是它外层的 <code>this</code>。</p><p>或者说，当箭头函数被调用时，它的 <code>this</code> 是由词法环境（即代码位置）决定的，且箭头函数的 <code>this</code> 永远不能修改。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Peter&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token function-variable function">introduce</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// this 是 window（严格模式下是 undefined）</span></span>\n<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>\n<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">return</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">user<span class="token punctuation">.</span><span class="token function">introduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这段代码中，<code>user.introduce()</code> 是一个 method 形式的调用，所以 <code>user.introduce()</code> 中的 <code>this</code> 是调用它的对象 <code>user</code>。</p><p>再强调一下开篇说的「<code>this</code> 只与函数被调用的形式有关」。这里的 <code>printName()</code> 是 function 形式的调用，于是它的 <code>this</code> 就是 <code>global</code>（浏览器环境下为 <code>window</code>）或 <code>undefined</code>（严格模式）。</p><p>如何修改上面的代码，可以使得 <code>printName()</code> 的 <code>this</code> 指向 user，从而可以正确输出全名呢？</p><p>一种方式是在调用时显式地将 <code>printName</code> 的 <code>this</code> 绑定到它外部的函数调用上，即<code>printName.call(this)</code>。</p><p>或者，用箭头函数来定义 <code>printName</code>，这样 <code>this</code> 由代码位置决定。</p>', 21)),
    createVNode(_component_CodeTabs, {
      id: "76",
      data: [{ "id": "call" }, { "id": "箭头函数" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("call")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("箭头函数")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" user "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "firstName"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Peter"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "lastName"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "introduce"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" user"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// true")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "printName"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" user"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// true")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("firstName "),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '" "'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("lastName"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "printName"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "call"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 将当前的 this(即 user) 作为 printName 调用时的 this")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("user"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "introduce"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" user "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "firstName"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Peter"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "lastName"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "introduce"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" user"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// true")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function-variable function" }, "printName"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" user"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// true")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("firstName "),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '" "'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("lastName"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "printName"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// return printName.call({}) 箭头函数的 this 不能修改。仍然返回 Peter John")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("user"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "introduce"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
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
              createBaseVNode("div", { class: "line-number" }),
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
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="_2-method" tabindex="-1"><a class="header-anchor" href="#_2-method"><span>2. Method</span></a></h2><p>方法调用中，谁调用了该方法，谁就是 <code>this</code>。或者简单点说，<code>this</code> 就是 <code>.</code> 之前的对象。</p><p>还用上面的例子</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Peter&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token function-variable function">introduce</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> user<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">printName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> user<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">return</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// method invocation</span></span>\n<span class="line">user<span class="token punctuation">.</span><span class="token function">introduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true, 1; true, 2; false, 3; Peter John</span></span>\n<span class="line"><span class="token keyword">const</span> intro <span class="token operator">=</span> user<span class="token punctuation">.</span>introduce<span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// function invocation</span></span>\n<span class="line"><span class="token function">intro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false, 1; false, 2; true, 3; undefined undefined</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再说一次「<code>this</code> 只与函数被调用的形式有关」。</p><p><code>user.introduce()</code> 是方法调用，<code>this</code> 是调用它的对象，这里就是 <code>user</code>。</p><p><code>intro()</code> 是函数调用，<code>this</code> 是全局对象（或者在严格模式下是 undefined）。</p><p>再考虑一种情况。如果将 <code>user.introduce</code> 传递给 <code>setTimeout</code>，可以得到预期的结果吗？</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>introduce<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><details class="hint-container details"><summary>答案</summary><p>不可以，<code>this</code> 指向了全局对象（或严格模式下的 undefined）。</p><p>它就相当于下面这段代码：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> fn <span class="token operator">=</span> user<span class="token punctuation">.</span>introduce<span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><p>可以使用 <code>bind</code> 来达到预期效果：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> boundFn <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">introduce</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span>boundFn<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><p>也可以在 setTimeout 中传入箭头函数：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  user<span class="token punctuation">.</span><span class="token function">introduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最后还是 method invocation</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div></details><h2 id="_3-constructor" tabindex="-1"><a class="header-anchor" href="#_3-constructor"><span>3. Constructor</span></a></h2><p>在 Constructor invocation 中，<code>this</code> 就是新创建的对象。</p><blockquote><p>当函数使用 <code>new</code> 执行时，它会按下面的步骤执行：</p><ol><li>创建一个空对象，将其分配给 <code>this</code></li><li>函数体执行。通常会修改 <code>this</code>，为它添加新属性</li><li>返回 <code>this</code></li></ol><p>注：箭头函数没有 <code>this</code>，所以不能用作 constructor。</p><p>参考：<a href="https://javascript.info/constructor-new" target="_blank" rel="noopener noreferrer">Constructor 和 new</a></p></blockquote>', 13)),
    createVNode(_component_CodeTabs, {
      id: "158",
      data: [{ "id": "function" }, { "id": "class" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createTextVNode("function")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createTextVNode("class")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("name"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" age")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("name "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" name "),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createTextVNode(" name "),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"anonymous"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("age "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" age "),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createTextVNode(" age "),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "18"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("prototype"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function-variable function" }, "setAge"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "age"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("age "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" age"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" user1 "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Peter"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "20"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// Constructor invocation")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" user2 "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// Constructor invocation")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("user1"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "setAge"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token number" }, "25"),
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
      tab1: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "class"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "constructor"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("name"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" age")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("name "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" name "),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createTextVNode(" name "),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"anonymous"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("age "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" age "),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createTextVNode(" age "),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "18"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "setAge"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "age"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("age "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" age"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" user "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Lily"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "21"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("user"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "setAge"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token number" }, "22"),
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
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="_4-间接调用-call-apply" tabindex="-1"><a class="header-anchor" href="#_4-间接调用-call-apply"><span>4. 间接调用 <code>call()</code> &amp; <code>apply()</code></span></a></h2><p>间接调用是指 <code>func.call()</code> 和 <code>func.apply()</code>。语法如下：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">func</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> <span class="token punctuation">[</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>间接调用的 <code>this</code>，就是上面的第一个参数 <code>thisArg</code>。</p><blockquote><p>函数是 JavaScript 中的一等对象，对应的对象类型是 <code>Function</code>。</p><p>Function 对象的方法见 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#instance_methods" target="_blank" rel="noopener noreferrer">Function: Instance Methods</a></p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token operator">?</span> name <span class="token operator">:</span> <span class="token string">&quot;anonymous&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token function">setAge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;Li Hua&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">user<span class="token punctuation">;</span> <span class="token comment">// User {name: &#39;Li Hua&#39;, age: 18}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-绑定函数-bind" tabindex="-1"><a class="header-anchor" href="#_5-绑定函数-bind"><span>5.绑定函数 <code>bind()</code></span></a></h2><p>和<a href="#_4-%E9%97%B4%E6%8E%A5%E8%B0%83%E7%94%A8-call-apply">间接调用</a>一样，该函数执行时的 <code>this</code> 就是 <code>bind()</code> 函数的第一个参数。</p><p>语法：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">func</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">[</span><span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p><code>bind</code> 返回一个新函数，它的代码和作用域与原函数相同，但是上下文（<code>this</code>）和传参不同。</p><p>要注意，用 <code>bind()</code> 绑定上下文后就不会再被修改了。只要已经使用过 <code>bind()</code> 了，不管之后是用了 <code>apply()</code> 或 <code>call</code>，还是重新进行了 <code>bind()</code>，都不会起任何作用。</p><p>但是也有例外，使用 Constructor invocation 是可以改变绑定函数的上下文的。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> bindOne <span class="token operator">=</span> <span class="token function">getThis</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">bindOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></span>\n<span class="line"><span class="token function">bindOne</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></span>\n<span class="line"><span class="token function">bindOne</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></span>\n<span class="line"><span class="token function">bindOne</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 再次绑定，不起作用</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">new</span> <span class="token class-name">bindOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结"><span>6. 总结</span></a></h2><ul><li><p>有四种形式的函数调用，他们对应的 <code>this</code> 分别为：</p><ul><li>function：<code>alert(&#39;hello&#39;)</code><ul><li>全局对象（或 <code>undefined</code>，如果是严格模式）</li></ul></li><li>method：<code>console.log(&#39;hello&#39;)</code><ul><li>调用它的对象，即 <code>.</code> 前的对象</li></ul></li><li>constructor：<code>new RegExp(/ab+c/, &#39;i&#39;)</code><ul><li>创建的新对象</li></ul></li><li>间接调用：<code>alert.call(undefined, &#39;hello&#39;)</code><ul><li><code>call()</code>, <code>apply()</code> 函数的第一个参数</li></ul></li></ul></li><li><p>可以使用 <code>myFunc.bind()</code> 来为函数绑定 <code>this</code> 和传参。得到的绑定函数不能再使用 <code>apply</code>, <code>call()</code>, <code>bind()</code> 修改上下文。但是可以使用 <code>new</code> 可以修改桑下文。</p></li><li><p>箭头函数没有自身的 <code>this</code>，它的 <code>this</code> 由代码位置直接决定，且不能以任何形式修改。</p></li></ul><h2 id="_7-练习" tabindex="-1"><a class="header-anchor" href="#_7-练习"><span>7. 练习</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出是？</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">object<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>答案</summary><p>输出的是 3。</p><p>调用 <code>object.method(callback, 1, 2)</code> 传递了三个参数 <code>callback</code>, <code>1</code>, <code>2</code>。于是 <code>method()</code> 中的 <code>arguments</code> 是一个类数组对象（array-like）。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token number">0</span><span class="token operator">:</span> callback<span class="token punctuation">,</span></span>\n<span class="line">  <span class="token number">1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token number">2</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是在 <code>arguments</code> 上调用的 <code>callback</code>，于是 <code>this.length</code> 就是 <code>arguments.length</code>。</p></details><blockquote><p><a href="https://dmitripavlutin.com/javascript-this-interview-questions/" target="_blank" rel="noopener noreferrer">查看更多练习</a></p></blockquote>', 20))
  ]);
}
const this_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "this.html.vue"]]);
const data = JSON.parse(`{"path":"/front-end/js/this.html","title":"this","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"this","description":null,"article":false,"date":"2023-09-17T00:00:00.000Z","order":4},"headers":[{"level":2,"title":"1. Function","slug":"_1-function","link":"#_1-function","children":[{"level":3,"title":"1.1 非严格模式","slug":"_1-1-非严格模式","link":"#_1-1-非严格模式","children":[]},{"level":3,"title":"1.2 严格模式","slug":"_1-2-严格模式","link":"#_1-2-严格模式","children":[]},{"level":3,"title":"1.3 箭头函数","slug":"_1-3-箭头函数","link":"#_1-3-箭头函数","children":[]}]},{"level":2,"title":"2. Method","slug":"_2-method","link":"#_2-method","children":[]},{"level":2,"title":"3. Constructor","slug":"_3-constructor","link":"#_3-constructor","children":[]},{"level":2,"title":"4. 间接调用 call() & apply()","slug":"_4-间接调用-call-apply","link":"#_4-间接调用-call-apply","children":[]},{"level":2,"title":"5.绑定函数 bind()","slug":"_5-绑定函数-bind","link":"#_5-绑定函数-bind","children":[]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]},{"level":2,"title":"7. 练习","slug":"_7-练习","link":"#_7-练习","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":5.28,"words":1583},"filePathRelative":"front-end/js/this.md","localizedDate":"2023年9月17日","excerpt":"<p><code>this</code> 是在运行时确定的，取决于上下文（context）。<strong>函数中的 <code>this</code> 只与函数被调用的形式有关</strong>（请从现在起记住这句话）。</p>\\n<p>JavaScript 中函数调用有以下 4 种类型：</p>\\n<ul>\\n<li>function：<code>alert('hello')</code></li>\\n<li>method：<code>console.log('hello')</code></li>\\n<li>constructor：<code>new RegExp(/ab+c/, 'i')</code></li>\\n<li>间接调用：<code>alert.call(undefined, 'hello')</code></li>\\n</ul>"}`);
export {
  this_html as comp,
  data
};
