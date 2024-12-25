import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode('<p>这篇文章说的模块是 ES Module。</p><p>可以认为一个模块就是一个文件。模块可以互相加载，并使用 <code>export</code> 和 <code>import</code> 来互相使用彼此的功能。</p><ul><li><code>export</code>：标记了当前模块中，可以被外部模块访问的变量和函数</li><li><code>import</code>：从其它模块进行导入。</li></ul><h2 id="_1-模块的特点" tabindex="-1"><a class="header-anchor" href="#_1-模块的特点"><span>1. 模块的特点</span></a></h2><ul><li>模块总是使用严格模式。</li><li>每个模块都有自己的顶级作用域。模块中的顶级 <code>this</code> 是 <code>undefined</code>。</li><li>模块代码只在第一次 <code>import</code> 时被解析</li></ul>', 5)),
    createVNode(_component_CodeTabs, {
      id: "38",
      data: [{ "id": "use strict" }, { "id": "顶级作用域" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("use strict")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("顶级作用域")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "div",
          {
            class: "language-html",
            "data-highlighter": "prismjs",
            "data-ext": "html",
            "data-title": "html"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "<"),
                      createTextVNode("script")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "type"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("module"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token script" }, [
                    createBaseVNode("span", { class: "token language-javascript" }),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" }, [
                      createTextVNode("  a "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "5"),
                      createBaseVNode("span", { class: "token punctuation" }, ";"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// error")
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
            class: "language-html line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "html",
            "data-title": "html"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "<"),
                      createTextVNode("script")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "type"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("module"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token script" }, [
                    createBaseVNode("span", { class: "token language-javascript" }),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" }, [
                      createTextVNode("  "),
                      createBaseVNode("span", { class: "token keyword" }, "let"),
                      createTextVNode(" a "),
                      createBaseVNode("span", { class: "token operator" }, "="),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token number" }, "5"),
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
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "<"),
                      createTextVNode("script")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "type"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("module"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token script" }, [
                    createBaseVNode("span", { class: "token language-javascript" }),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" }, [
                      createTextVNode("  "),
                      createBaseVNode("span", { class: "token function" }, "alert"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createBaseVNode("span", { class: "token keyword" }, "this"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ";"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// undefined")
                    ]),
                    createTextVNode("\n"),
                    createBaseVNode("span", { class: "line" }, [
                      createTextVNode("  "),
                      createBaseVNode("span", { class: "token function" }, "alert"),
                      createBaseVNode("span", { class: "token punctuation" }, "("),
                      createTextVNode("a"),
                      createBaseVNode("span", { class: "token punctuation" }, ")"),
                      createBaseVNode("span", { class: "token punctuation" }, ";"),
                      createTextVNode(),
                      createBaseVNode("span", { class: "token comment" }, "// Error: a is not defined")
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
      _: 1
      /* STABLE */
    }),
    _cache[10] || (_cache[10] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("code", null, "import.meta"),
        createTextVNode(" 对象中有当前模块的信息，它的内容取决于环境。在浏览器中，它包含当前脚本的 URL，如果在 HTML 中，包含当前页面的 URL。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[11] || (_cache[11] = createBaseVNode(
      "h2",
      {
        id: "_2-浏览器中模块的特点",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-浏览器中模块的特点"
        }, [
          createBaseVNode("span", null, "2. 浏览器中模块的特点")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[12] || (_cache[12] = createBaseVNode(
      "h3",
      {
        id: "_2-1-模块脚本是延迟的-deferred",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-1-模块脚本是延迟的-deferred"
        }, [
          createBaseVNode("span", null, "2.1 模块脚本是延迟的（deferred）")
        ])
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[5] || (_cache[5] = createTextVNode("模块脚本与 ")),
      _cache[6] || (_cache[6] = createBaseVNode(
        "code",
        null,
        "defer",
        -1
        /* HOISTED */
      )),
      _cache[7] || (_cache[7] = createTextVNode(" 特性（见 ")),
      createVNode(_component_RouteLink, { to: "/front-end/browser/script-defer&async.html" }, {
        default: withCtx(() => _cache[4] || (_cache[4] = [
          createTextVNode("script 中的 defer 和 async")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[8] || (_cache[8] = createTextVNode("）的脚本行为是一样的。即："))
    ]),
    _cache[13] || (_cache[13] = createStaticVNode('<ul><li><code>&lt;script type=&quot;module&quot; src=&quot;...&quot;&gt;</code> 不会阻塞页面，它们会与其他资源并行加载</li><li>HTML 文档解析完毕后才执行模块脚本</li><li>按照脚本在文档中的顺序执行</li></ul><h3 id="_2-2-用-async-特性" tabindex="-1"><a class="header-anchor" href="#_2-2-用-async-特性"><span>2.2 用 async 特性</span></a></h3><p><code>async</code> 特性除了可用于外部脚本，也可以用于模块脚本。模块脚本使用 <code>async</code> 特性时，和异步脚本具有相同的行为。</p><h3 id="_2-3-外部脚本" tabindex="-1"><a class="header-anchor" href="#_2-3-外部脚本"><span>2.3 外部脚本</span></a></h3><ul><li><p>具有相同的 <code>src</code> 的外部脚本仅运行一次。</p></li><li><p>从另一个源（如另一个网站）获取的外表脚本需要 CORS header，远程服务器必须提供表示允许获取的 header <code>Access-Control-Allow-Origin</code>。</p></li></ul><h3 id="_2-4-不允许裸模块-bare-module" tabindex="-1"><a class="header-anchor" href="#_2-4-不允许裸模块-bare-module"><span>2.4 不允许裸模块（bare module）</span></a></h3><p>浏览器中的 <code>import</code> 必须给出相对或绝对 URL 路径。没有任何路径的模块就是裸模块。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 模块必须有路径，比如 &#39;./x.js&#39;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> x <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Error，裸模块</span></span>\n<span class="line"></span></code></pre></div><h3 id="_2-5-兼容性" tabindex="-1"><a class="header-anchor" href="#_2-5-兼容性"><span>2.5 兼容性</span></a></h3><p>旧的浏览器不理解 <code>type=&quot;module&quot;</code>，可以使用 <code>nomodule</code> 特性来提示用户：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Module!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">nomodule</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;现代浏览器理解 type=module 和 nomodule，就忽略 nomodule 了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;旧的浏览器忽略了不理解的 type=module，执行了这个&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-构建工具" tabindex="-1"><a class="header-anchor" href="#_3-构建工具"><span>3. 构建工具</span></a></h2><p>在实际开发中我们会用 <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a> 等工具将不同的模块打包在一起，然后部署到生产环境的服务器。</p><p>打包工具允许我们使用裸模块和更多功能。</p><p>构建工具会做以下事情：</p><ol><li>从主模块（将被放到 HTML 中的 <code>&lt;script type=&quot;module&quot;&gt;</code>）开始，</li><li>分析它的依赖：导入、以及导入里的导入</li><li>用所有的模块构建一个单独的文件，用 bundler 函数代替 <code>import</code>。也支持 HTML/CSS 模块等特殊的模块。</li><li>在这个过程中，还可能有其他的转化和优化</li></ol><ul><li>删除无法访问的代码（unreachable code）</li><li>删除未使用的 <code>export</code>（“tree-shaking”）</li><li>删除开发时才会使用的 <code>console</code>、<code>debugger</code> 等语句</li><li>使用 <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> 将现代、前沿的 JavaScript 语法转换为具有类似功能的旧语法</li><li>压缩生成的文件（删除空格，用短名字代替变量名，等等）</li></ul>', 17))
  ]);
}
const module_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "module.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/module.html","title":"模块","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"模块","description":null,"article":false,"date":"2023-11-11T00:00:00.000Z","order":5},"headers":[{"level":2,"title":"1. 模块的特点","slug":"_1-模块的特点","link":"#_1-模块的特点","children":[]},{"level":2,"title":"2. 浏览器中模块的特点","slug":"_2-浏览器中模块的特点","link":"#_2-浏览器中模块的特点","children":[{"level":3,"title":"2.1 模块脚本是延迟的（deferred）","slug":"_2-1-模块脚本是延迟的-deferred","link":"#_2-1-模块脚本是延迟的-deferred","children":[]},{"level":3,"title":"2.2 用 async 特性","slug":"_2-2-用-async-特性","link":"#_2-2-用-async-特性","children":[]},{"level":3,"title":"2.3 外部脚本","slug":"_2-3-外部脚本","link":"#_2-3-外部脚本","children":[]},{"level":3,"title":"2.4 不允许裸模块（bare module）","slug":"_2-4-不允许裸模块-bare-module","link":"#_2-4-不允许裸模块-bare-module","children":[]},{"level":3,"title":"2.5 兼容性","slug":"_2-5-兼容性","link":"#_2-5-兼容性","children":[]}]},{"level":2,"title":"3. 构建工具","slug":"_3-构建工具","link":"#_3-构建工具","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":2.78,"words":834},"filePathRelative":"front-end/js/module.md","localizedDate":"2023年11月11日","excerpt":"<p>这篇文章说的模块是 ES Module。</p>\\n<p>可以认为一个模块就是一个文件。模块可以互相加载，并使用 <code>export</code> 和 <code>import</code> 来互相使用彼此的功能。</p>\\n<ul>\\n<li><code>export</code>：标记了当前模块中，可以被外部模块访问的变量和函数</li>\\n<li><code>import</code>：从其它模块进行导入。</li>\\n</ul>\\n<h2>1. 模块的特点</h2>\\n<ul>\\n<li>模块总是使用严格模式。</li>\\n<li>每个模块都有自己的顶级作用域。模块中的顶级 <code>this</code> 是 <code>undefined</code>。</li>\\n<li>模块代码只在第一次 <code>import</code> 时被解析</li>\\n</ul>"}');
export {
  module_html as comp,
  data
};
