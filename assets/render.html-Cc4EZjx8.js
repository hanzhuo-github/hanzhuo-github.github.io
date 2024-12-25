import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock, g as createTextVNode, f as createBaseVNode } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  const _component_Tabs = resolveComponent("Tabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[34] || (_cache[34] = createStaticVNode('<h2 id="_1-渲染器的基本实现" tabindex="-1"><a class="header-anchor" href="#_1-渲染器的基本实现"><span>1 渲染器的基本实现</span></a></h2><h3 id="_1-1-渲染器和响应系统的结合" tabindex="-1"><a class="header-anchor" href="#_1-1-渲染器和响应系统的结合"><span>1.1 渲染器和响应系统的结合</span></a></h3><p>在浏览器平台上，渲染器会把虚拟 DOM 渲染成真实 DOM 元素。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">renderer</span><span class="token punctuation">(</span><span class="token parameter">domString<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> domString<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token comment">// 使用</span></span>\n<span class="line"><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">renderer</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h1&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1&gt;</span><span class="token template-punctuation string">`</span></span>， document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line">count<span class="token punctuation">.</span>value<span class="token operator">++</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在副作用函数内调用 renderer 进行渲染，会与响应式数据 count 建立响应联系。当修改 count.value 的值时，副作用函数会重新执行，进行重新渲染。</p><p>这样，就利用响应系统的能力，自动调用渲染器完成了页面的渲染和更新。</p><ul><li>挂载 mount：渲染器把虚拟 DOM 节点渲染为真实 DOM 节点的过程叫作挂载。 <ul><li>Vue 中的 mounted 钩子就是在挂载完成时触发的，所以在 mounted 钩子中可以访问真实 DOM 元素。</li><li>挂载点：渲染器并不知道把真实 DOM 挂载到哪里，所以它需要接收一个挂载点作为参数来指定具体的挂载位置。这里的挂载点就是一个 DOM 元素，通常用 container 来表达这个容器元素。</li></ul></li><li>虚拟 DOM：virtual DOM，dom</li><li>虚拟节点：virtual node，vnode</li></ul><blockquote><p>虚拟 DOM 是树形结构，树中的任何 vnode 都可以是一棵子树，所以 vnode 和 vdom 可以替换使用。</p></blockquote><h3 id="_1-2-渲染器的内部结构" tabindex="-1"><a class="header-anchor" href="#_1-2-渲染器的内部结构"><span>1.2 渲染器的内部结构</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ...</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">hydrate</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 服务器端渲染相关</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>\n<span class="line">    render<span class="token punctuation">,</span></span>\n<span class="line">    hydrate<span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染器不仅包含 render 函数，还包括 hydrate 等函数，Vue3 中创建应用的 createApp 也是渲染器的一部分。</p><h3 id="_1-3-render-函数的基本实现" tabindex="-1"><a class="header-anchor" href="#_1-3-render-函数的基本实现"><span>1.3 render 函数的基本实现</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 首次渲染，挂载</span></span>\n<span class="line">renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// 二次渲染，挂载 + 更新</span></span>\n<span class="line">renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首次渲染时，只需要创建新 DOM 元素，只涉及到挂载。在同一个 container 上再一次调用 renderer.render 时，渲染器除了要执行挂载外，还需要执行更新。这时，渲染器会将 newVNode 和 oldVNode 进行比较，找到不同之处并进行更新。这个过程叫 <strong>patch</strong>。挂载动作可以看成一种特殊的 patch，即 oldVNode 不存在的 patch。</p><p>下面给出 render 函数的基本实现</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// n1 旧 vnode，n2 新 vnode</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 新 vnode 存在，将新旧 vnode 传递给 patch 进行更新</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 新 vnode 不存在，但是旧 vnode 存在，即卸载 unmount</span></span>\n<span class="line">      <span class="token comment">// 只需清空 container 中的 DOM</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode<span class="token punctuation">;</span> <span class="token comment">// 更新旧 vnode</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-patch-函数" tabindex="-1"><a class="header-anchor" href="#_1-4-patch-函数"><span>1.4 patch 函数</span></a></h3><p>虚拟 DOM 的一个示例如下：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;h1&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><p>下面针对浏览器环境实现一个基本的 patch，如代码 1。</p><p>为了将渲染器设计为可配置的通用渲染器（即实现渲染到任意平台上），可以把浏览器特定的 API 抽离出来。在此基础上，再为那些被抽离的 API 提供可配置的接口，就可以实现渲染器的跨平台能力了。见代码 2。</p>', 21)),
    createVNode(_component_CodeTabs, {
      id: "81",
      data: [{ "id": "1. 浏览器环境" }, { "id": "2. 抽离浏览器特有的 API" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("1. 浏览器环境")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("2. 抽离浏览器特有的 API")
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
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("n1"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" n2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// n1 旧 vnode 不存在，进行挂载")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "!"),
                  createTextVNode("n1"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("n2"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ...")
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
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" document"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("type"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 子节点是字符串，文本节点")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"string"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("textContent "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "appendChild"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 将元素添加到容器中")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createBaseVNode("span", { class: "token comment" }, "// 创建 renderer 时传入配置项")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" renderer "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "createRenderer"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 创建元素")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "tag"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" document"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("tag"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 设置文本节点")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "setElementText"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("el"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" text")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("textContent "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" text"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 在 parent 下添加指定元素")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("el"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" parent"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" anchor "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "null")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    parent"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "insertBefore"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" anchor"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "createRenderer"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "options"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" setElementText"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" insert "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" options"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("type"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"string"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "setElementText"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("n1"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" n2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "render"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" render "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[35] || (_cache[35] = createStaticVNode('<h2 id="_2-挂载与更新" tabindex="-1"><a class="header-anchor" href="#_2-挂载与更新"><span>2 挂载与更新</span></a></h2><h3 id="_2-1-挂载子节点、元素属性" tabindex="-1"><a class="header-anchor" href="#_2-1-挂载子节点、元素属性"><span>2.1 挂载子节点、元素属性</span></a></h3><p>vnode 结构：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token comment">// props 用来表述一个元素的属性</span></span>\n<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 mountElement 函数中添加对 props 的处理如下面代码 4~11 行；添加对 children 为数组时的处理如下面代码 15~20 行。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line highlighted">  <span class="token comment">// 处理 props</span></span>\n<span class="line highlighted">  <span class="token keyword">if</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line highlighted">      <span class="token comment">// 或者</span></span>\n<span class="line highlighted">      <span class="token comment">// el[key] = vnode.props[key]</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span></span>\n<span class="line highlighted">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">setElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token comment">// vnode.children 是一个数组</span></span>\n<span class="line highlighted">    vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> child<span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">  <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-html-attributes-v-s-dom-properties" tabindex="-1"><a class="header-anchor" href="#_2-1-1-html-attributes-v-s-dom-properties"><span>2.1.1 HTML Attributes v.s. DOM Properties</span></a></h4><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>\n<span class="line"></span></code></pre></div><p>在 HTML 标签上定义的属性就是 HTML Attributes，如这里的 <code>id=&quot;my-input&quot;</code>、<code>type=&quot;text&quot;</code>、<code>value=&quot;foo&quot;</code>。</p><p>而 DOM 对象的 properties 就很多了，如上面的 DOM 对象的 properties 有：checked、autocomplete、height 等等。</p><p>其中一些和 HTML Attributes 同名，比如 <code>el.id</code>、<code>el.type</code>、<code>el.value</code>。</p><p>不过，HTML Attributes 和 DOM Properties 对应的部分并非是同名的，比如 HTML Attributes 中的 <code>class</code> 属性，在 DOM Properties 中的名字是 <code>el.className</code>。</p><p>也并非所有的 HTML Attributes 都有与之对应的 DOM Properties，比如 <code>aria-*</code> 类的 HTML Attributes。</p><p>当然，也并非所有的 DOM Properties 有与之对应的 HTML Attributes，比如 <code>el.textContent</code> 可以直接用来设置文本节点的内容，但是没有对应的 HTML Attributes 可以实现同样的操作。</p><p>对于 <code>&lt;input value=&quot;foo&quot; /&gt;</code>，用户通过修改文本框将内容修改为 &quot;bar&quot;，那么：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 仍然是 ‘foo’</span></span>\n<span class="line">el<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;bar&#39;</span></span>\n<span class="line">el<span class="token punctuation">.</span>defaultValue<span class="token punctuation">;</span> <span class="token comment">// &#39;foo&#39;</span></span>\n<span class="line"></span></code></pre></div><p>HTML Attribute 的作用是设置与之对应的 DOM Properties 的初始值。</p><h4 id="_2-1-2-设置元素属性" tabindex="-1"><a class="header-anchor" href="#_2-1-2-设置元素属性"><span>2.1.2 设置元素属性</span></a></h4><div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>按钮1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>按钮2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre></div><p>如果渲染器使用 el.setAttribute 来处理，</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 - 按钮禁用，与预期相符</span></span>\n<span class="line">el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2- 使用 setAttribute 设置的值会被字符串化，按钮禁用了，与预期不符</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 解决：可以优先设置 DOM Properties</span></span>\n<span class="line"><span class="token comment">// 2 - 符合预期</span></span>\n<span class="line">el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// 1 - disable 是一个 boolean 类型，&#39;&#39;会被转成 false，与预期不符</span></span>\n<span class="line"><span class="token comment">// 所以对于 boolean 类型，需要把空字符串 &#39;&#39; 修正为 true</span></span>\n<span class="line">el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果 DOM Properties 是只读的，那就只能通过 setAttribute 来设置了。</p><p>具体实现：</p>', 23)),
    createVNode(_component_CodeTabs, {
      id: "146",
      data: [{ "id": "优先 DOM Properties（修正 boolean）" }, { "id": "DOM Properties 为只读时的处理" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createTextVNode("优先 DOM Properties（修正 boolean）")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createTextVNode("DOM Properties 为只读时的处理")
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
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("type"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// ...省略 children 处理")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" key "),
                  createBaseVNode("span", { class: "token keyword" }, "in"),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 优先设置 DOM Properties")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token keyword" }, "in"),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token comment" }, "// 在 DOM Properties 中找同名属性")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" type "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" value "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token comment" }, "// 修正对 boolean 值的处理")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"boolean"'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" value "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '""'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("          el"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("          el"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token comment" }, "// DOM Properties 中没有与之同名的属性")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "setAttribute"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                createBaseVNode("span", { class: "line highlighted" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "shouldSetAsProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("el"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" value")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, '// <input form="form1" /> 这个 form 是只读的，不能用 DOM Properties 设置')
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"form"'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("tagName "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"INPUT"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// DOM Properties 中有同名属性，则用 DOM Properties 设置")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" key "),
                  createBaseVNode("span", { class: "token keyword" }, "in"),
                  createTextVNode(" el"),
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
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("type"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// ...省略 children 处理")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" key "),
                  createBaseVNode("span", { class: "token keyword" }, "in"),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" value "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token function" }, "shouldSetAsProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" type "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"boolean"'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" value "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '""'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          el"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          el"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "setAttribute"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[36] || (_cache[36] = createStaticVNode('<p>最后，把属性设置也抽离出来，变成与平台无关。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 创建 renderer 时传入配置项</span></span>\n<span class="line"><span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token function">setElementText</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line highlighted">  <span class="token comment">// 与属性设置有关的操作</span></span>\n<span class="line highlighted">  <span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&quot;boolean&quot;</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">===</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span></span>\n<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// mountElement</span></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">mountElement</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> vnode<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">setElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    vnode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> child<span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token function">patchProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-对-class-的处理" tabindex="-1"><a class="header-anchor" href="#_2-1-3-对-class-的处理"><span>2.1.3 对 class 的处理</span></a></h4>', 3)),
    createVNode(_component_Tabs, {
      id: "161",
      data: [{ "id": "字符串" }, { "id": "对象" }, { "id": "数组" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
        createTextVNode("字符串")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
        createTextVNode("对象")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
        createTextVNode("数组")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
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
                      createTextVNode("p")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, "class"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("foo bar"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "</"),
                      createTextVNode("p")
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
        ),
        createBaseVNode(
          "p",
          null,
          "对应的 vnode：",
          -1
          /* HOISTED */
        ),
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
                  createTextVNode(" vnode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "type"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"p"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "props"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "class"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"foo bar"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
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
      tab1: withCtx(({ value, isActive }) => _cache[12] || (_cache[12] = [
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
                      createTextVNode("p")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, ":class"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("cls"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "</"),
                      createTextVNode("p")
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
        ),
        createBaseVNode(
          "p",
          null,
          "对应的 vnode：",
          -1
          /* HOISTED */
        ),
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
                  createTextVNode(" cls "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "foo"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "bar"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" vnode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "type"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"p"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "props"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "class"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "foo"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "bar"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
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
      tab2: withCtx(({ value, isActive }) => _cache[13] || (_cache[13] = [
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
                      createTextVNode("p")
                    ]),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token attr-name" }, ":class"),
                    createBaseVNode("span", { class: "token attr-value" }, [
                      createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
                      createBaseVNode("span", { class: "token punctuation" }, '"'),
                      createTextVNode("arr"),
                      createBaseVNode("span", { class: "token punctuation" }, '"')
                    ]),
                    createBaseVNode("span", { class: "token punctuation" }, ">")
                  ]),
                  createBaseVNode("span", { class: "token tag" }, [
                    createBaseVNode("span", { class: "token tag" }, [
                      createBaseVNode("span", { class: "token punctuation" }, "</"),
                      createTextVNode("p")
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
        ),
        createBaseVNode(
          "p",
          null,
          "对应的 vnode：",
          -1
          /* HOISTED */
        ),
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
                  createTextVNode(" arr "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token string" }, '"foo bar"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "baz"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" vnode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "type"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"p"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "props"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "class"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token string" }, '"foo bar"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "baz"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
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
    _cache[37] || (_cache[37] = createStaticVNode('<p>class 的类型多样，这里使用 normalizeClass 函数将不同类型的 class 归一化为字符串。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token function">normalizeClass</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;foo bar&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 转化为：</span></span>\n<span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&quot;foo bar baz&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>normalizeClass 函数就不做解释了。</p><p>在浏览器中为一个元素设置 class 有三种方式，按照性能从好到坏依次是：<code>el.className</code>, <code>el.classList</code>, <code>setAttribute</code>。</p><p>观察前面的代码，由于 class 对应的 DOM Properties 是 className，所以 patchProps 会使用 setAttribute 来对 class 进行设置。但是最好的设置 class 的方式是 el.className，所以我们调整一下 patchProps 函数的实现。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// ... 省略其他选项</span></span>\n<span class="line">  <span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;class&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      el<span class="token punctuation">.</span>className <span class="token operator">=</span> nextValue <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> el<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&quot;boolean&quot;</span> <span class="token operator">&amp;&amp;</span> nextValue <span class="token operator">===</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">        el<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextValue<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">      el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-卸载" tabindex="-1"><a class="header-anchor" href="#_2-2-卸载"><span>2.2 卸载</span></a></h3><p>初次挂载玩之后，后续渲染会触发更新，更新阶段会有卸载操作。</p><p>之前的代码中，使用 <code>container.innerHTML = &quot;&quot;</code> 来清空容器。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 卸载 unmount</span></span>\n<span class="line">      container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode<span class="token punctuation">;</span> <span class="token comment">// 更新旧 vnode</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做有以下问题：</p><ul><li>容器中可能有组件，卸载时，应该正确调用这些组件的 beforeUnmount 和 unmounted 等生命周期函数。</li><li>即使内容不是由组件渲染的，有的元素存在自定义指令，应在卸载发生时正确执行对应的指令钩子函数。</li><li>使用 innerHTML 清空容器元素内容的另一个缺陷是，不会溢出绑定在 DOM 元素上的事件处理函数。</li></ul><p>正确的卸载方式是：根据 vnode 对象获取与其相关联的真实 DOM 元素，然后使用原声 DOM 操作方法将该 DOM 元素移除。为此，需要建立 vnode 与真实 DOM 元素之间的联系。</p>', 13)),
    createVNode(_component_CodeTabs, {
      id: "231",
      data: [{ "id": "mountElement" }, { "id": "render 函数" }, { "id": "将卸载操作封装到 unmount 函数" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[14] || (_cache[14] = [
        createTextVNode("mountElement")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[15] || (_cache[15] = [
        createTextVNode("render 函数")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[16] || (_cache[16] = [
        createTextVNode("将卸载操作封装到 unmount 函数")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[17] || (_cache[17] = [
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
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// vnode.el 指向真实 DOM 元素")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "createElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("type"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"string"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "setElementText"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "child"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "null"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" child"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" key "),
                  createBaseVNode("span", { class: "token keyword" }, "in"),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "patchProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "null"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("props"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[18] || (_cache[18] = [
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
                  createBaseVNode("span", { class: "token function" }, "render"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 要卸载的真实 DOM 元素")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" el "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" parent "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("parentNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("parent"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(" parent"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "removeChild"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createTextVNode("  container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 更新旧 vnode")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab2: withCtx(({ value, isActive }) => _cache[19] || (_cache[19] = [
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
                  createBaseVNode("span", { class: "token function" }, "unmount"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" parent "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("parent"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("parent"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    parent"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "removeChild"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "render"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "unmount"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createTextVNode("  container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vnode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" vnode"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 更新旧 vnode")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[38] || (_cache[38] = createStaticVNode('<ul><li>在 unmount 函数内，我们有机会调用绑定在 DOM 元素上的指令钩子函数，如 beforeUnmount、unmounted。</li><li>当 unmount 函数执行时，有机会检测虚拟节点 vnode 的类型。如果该虚拟节点是组件，那么有机会调用组件相关的生命周期函数。</li></ul><h3 id="_2-3-vnode-类型" tabindex="-1"><a class="header-anchor" href="#_2-3-vnode-类型"><span>2.3 vnode 类型</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>type <span class="token operator">!==</span> n2<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 新旧 vnode 类型不同，则卸载旧 vnode，后续进行挂载</span></span>\n<span class="line">    <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    n1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> n2<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">mountElement</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 类型相同，更新</span></span>\n<span class="line">      <span class="token function">patchElement</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 组件</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 处理其他类型的 vnode</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-事件的处理" tabindex="-1"><a class="header-anchor" href="#_2-4-事件的处理"><span>2.4 事件的处理</span></a></h3><p>事件视作一种特殊的属性，在 vnode.props 对象中，凡是以 on 开头的属性都视作事件。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;clicked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 patchProps 中调用 addEventListener 来绑定事件即可。</p><p>更优的处理方式是，绑定事件时，绑定一个伪造的事件处理函数 invoker，并把真正的事件处理函数设置为 invoker.value 的值。这样，更新事件时，就不用再调用 removeEventListener 来移除上一次的绑定事件，只需要更新 invoker.value 即可。</p>', 8)),
    createVNode(_component_CodeTabs, {
      id: "271",
      data: [{ "id": "基础实现" }, { "id": "优化处理" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[20] || (_cache[20] = [
        createTextVNode("基础实现")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[21] || (_cache[21] = [
        createTextVNode("优化处理")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[22] || (_cache[22] = [
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
                  createBaseVNode("span", { class: "token function" }, "patchProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("el"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" prevValue"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" nextValue")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 以 on 开头")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "^on"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "test"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" name "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "slice"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token number" }, "2"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "toLowerCase"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// onClick -> click")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    prevValue "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "removeEventListener"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("name"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" preValue"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 移除上一次绑定的事件处理函数")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "addEventListener"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("name"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" nextValue"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'class'"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token function" }, "shouldSetAsProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" nextValue"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[23] || (_cache[23] = [
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
                  createBaseVNode("span", { class: "token function" }, "patchProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("el"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" prevValue"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" nextValue")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 以 on 开头")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "^on"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "test"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" invokers "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vei "),
                  createBaseVNode("span", { class: "token operator" }, "||"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vei "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" invoker "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" invokers"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" name "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "slice"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token number" }, "2"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "toLowerCase"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("nextValue"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "!"),
                  createTextVNode("invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        invoker "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("_vei"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "e"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "isArray"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("value"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("value"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "fn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "fn"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("e"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "value"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("e"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("value "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" nextValue")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "addEventListener"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("name"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("value "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" nextValue")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "removeEventListener"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("name"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" invoker"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'class'"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token function" }, "shouldSetAsProps"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" nextValue"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
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
    _cache[39] || (_cache[39] = createStaticVNode('<h3 id="_2-5-事件冒泡与更新时机" tabindex="-1"><a class="header-anchor" href="#_2-5-事件冒泡与更新时机"><span>2.5 事件冒泡与更新时机</span></a></h3><p>要屏蔽所有绑定时间晚于事件触发时间的事件处理函数的执行</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">patchProps</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> nextValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 以 on 开头</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^on</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> invokers <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>_vei <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token keyword">let</span> invoker <span class="token operator">=</span> invokers<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>\n<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextValue<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        invoker <span class="token operator">=</span> el<span class="token punctuation">.</span>_vei<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token comment">// e.timeStamp 事件发生的时间</span></span>\n<span class="line">          <span class="token comment">// invoker.attached 绑定事件的时间</span></span>\n<span class="line highlighted">          <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>timeStamp <span class="token operator">&lt;</span> invoker<span class="token punctuation">.</span>attached<span class="token punctuation">)</span> <span class="token keyword">return</span></span>\n<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>invoker<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            invoker<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>\n<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">            invoker<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>\n<span class="line">          <span class="token punctuation">}</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">        invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue</span>\n<span class="line">        <span class="token comment">// invoker.attached 存储处理函数被绑定的时间</span></span>\n<span class="line highlighted">        invoker<span class="token punctuation">.</span>attached <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span></span>\n<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">        invoker<span class="token punctuation">.</span>value <span class="token operator">=</span> nextValue</span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> invoker<span class="token punctuation">)</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldSetAsProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> nextValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-更新子节点" tabindex="-1"><a class="header-anchor" href="#_2-6-更新子节点"><span>2.6 更新子节点</span></a></h3><p>上面介绍了元素属性的更新，包括普通标签属性和事件。接下来讨论如何更新元素的子节点。</p><p>子节点可能是没有子节点、文本子节点、一组子节点，对这几种情况分别处理。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchElement</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> oldProps <span class="token operator">=</span> n1<span class="token punctuation">.</span>props<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> newProps <span class="token operator">=</span> n2<span class="token punctuation">.</span>props<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 1. 更新 props</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">patchProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">patchProps</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> key<span class="token punctuation">,</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 2. 更新 children</span></span>\n<span class="line">  <span class="token function">patchChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 1. 新子节点是文本节点</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 旧子节点可能是：没有子节点，文本子节点、一组子节点</span></span>\n<span class="line">    <span class="token comment">// 只有当旧子节点是一组子节点时，才需要逐个卸载，其他情况下什么都不用做</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment">// 最后，设置文本节点内容</span></span>\n<span class="line">    <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 2. 新子节点是一组子节点</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// ** 新旧子节点都是一组子节点，涉及到核心 Diff 算法</span></span>\n<span class="line">      <span class="token comment">// 这里可以暂时用傻瓜式的办法：把旧的都卸载，再把新的依次挂载</span></span>\n<span class="line">      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 旧子节点是文本子节点、或不存在子节点</span></span>\n<span class="line">      <span class="token comment">// 只需清空容器，将新的一组子节点逐个挂载</span></span>\n<span class="line">      <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      n2<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 3. 新子节点不存在</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      n1<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">unmount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n1<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">setElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token comment">// 也没有旧子节点，则什么都不用做</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-文本节点和注释节点" tabindex="-1"><a class="header-anchor" href="#_2-7-文本节点和注释节点"><span>2.7 文本节点和注释节点</span></a></h3><h3 id="_2-8-fragment" tabindex="-1"><a class="header-anchor" href="#_2-8-fragment"><span>2.8 Fragment</span></a></h3><h2 id="_3-diff-算法" tabindex="-1"><a class="header-anchor" href="#_3-diff-算法"><span>3 Diff 算法</span></a></h2><p>Diff 算法的处理主要考虑如下问题：</p><ul><li>判断是否有节点需要移动，以及如何移动</li><li>找出需要被添加或移除的节点</li></ul><h3 id="_3-1-简单-diff-算法" tabindex="-1"><a class="header-anchor" href="#_3-1-简单-diff-算法"><span>3.1 简单 Diff 算法</span></a></h3><p>在前面 2.6 节中，在处理新旧子节点都是一组子节点时，采用了暴力的方式，把旧的全都卸载，把新的全都挂载。如果新旧子节点组都是 3 个 p 标签节点，使用 2.6 中的方式，要先卸载 3 次，再挂载 3 次，一共 6 次 DOM 操作。</p><p>我们可以依次比较两组子节点，使用 patch 函数进行更新，由于节点的类型相同都是 p，只需修改 3 次节点中的文本内容。</p><p>如果两组子节点长度不一样，新子节点组更多，那么会有节点需要挂载；旧子节点组更多，那么要有节点需要卸载。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> oldLen <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> newLen <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token comment">// 公共长度（短的那个长度）</span></span>\n<span class="line">    <span class="token keyword">const</span> commonLen <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>oldLen<span class="token punctuation">,</span> newLen<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> commonLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 逐个更新子节点</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>newLen <span class="token operator">&gt;</span> oldLen<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 新子节点多，有新的子节点要挂载</span></span>\n<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> commonLen<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newLen <span class="token operator">&lt;</span> oldLen<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 旧子节点多，有旧的子节点要卸载</span></span>\n<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> commonLen<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-dom-复用与-key-的作用" tabindex="-1"><a class="header-anchor" href="#_3-1-2-dom-复用与-key-的作用"><span>3.1.2 DOM 复用与 key 的作用</span></a></h4><p>对于下面的两组节点：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// oldChildren</span></span>\n<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;p&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;div&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;span&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// newChildren</span></span>\n<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;span&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;p&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;div&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><p>如果还按照上面所述的方法，依次对比。由于对应的节点是不同的标签，所以 patch 函数会先卸载旧节点，再挂载新节点。最后还是会进行 6 次 DOM 操作。</p><p>但是这两组子节点的区别仅在于顺序不同，最优的处理方式应该是移动 DOM。但是，能够移动的前提是：新旧两组子节点中的确存在可复用的节点。</p><p>我们引入 key 来作为 vnode 的标识。如果两个虚拟节点的 type 和 key 都相同，那么我们就认为它们是相同的，即可进行 DOM 的复用。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token comment">// 找可复用的 oldVNode，节点的内容可能发生变化，仍然需要进行 patch</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">          <span class="token keyword">break</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们按照上述代码进行调整后，虽然所有节点对应的真实 DOM 元素都更新完毕了，但真实 DOM 仍然保持旧的一组子节点的顺序。我们还要对子节点进行移动。</p><h4 id="_3-1-3-找到需要移动的子节点" tabindex="-1"><a class="header-anchor" href="#_3-1-3-找到需要移动的子节点"><span>3.1.3 找到需要移动的子节点</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment">// 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）</span></span>\n<span class="line">    <span class="token keyword">let</span> lastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// 当前可复用节点，在旧 children 中的索引 &lt; 最大索引值 lastIndex</span></span>\n<span class="line">            <span class="token comment">// ** 那么该节点需要移动</span></span>\n<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// 当前可复用节点，在旧 children 中的索引值 &gt;= 最大索引值 lastIndex</span></span>\n<span class="line">            <span class="token comment">// ** 那么更新 lastIndex</span></span>\n<span class="line">            lastIndex <span class="token operator">=</span> j<span class="token punctuation">;</span></span>\n<span class="line">          <span class="token punctuation">}</span></span>\n<span class="line">          <span class="token keyword">break</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-4-如何移动元素" tabindex="-1"><a class="header-anchor" href="#_3-1-4-如何移动元素"><span>3.1.4 如何移动元素</span></a></h4><p>上一节找到了需要移动的节点，这一节将讨论如何移动节点。这里的移动节点，指的是移动虚拟节点对应的真是 DOM 节点，而非移动虚拟节点本身。</p><p>通过之前的代码，我们知道，当一个虚拟节点挂载后，对应的真实 DOM 节点会被存储在 vnode.el 属性上。</p><p>2.6 节中给出 patchElement 函数。当更新操作发生时，会调用 patchElement 函数在新旧虚拟节点之间进行打补丁（patch）。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchElement</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token comment">// ... 省略</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div><p>这里取出了 n1.el（即旧 vnode 对应的真实 DOM 元素），并将 n2.el 也指向该 DOM 元素。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment">// 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）</span></span>\n<span class="line">    <span class="token keyword">let</span> lastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span>j<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> lastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// 当前可复用节点，在旧 children 中的索引 &lt; 最大索引值 lastIndex</span></span>\n<span class="line">            <span class="token comment">// ** 那么该节点需要移动</span></span>\n<span class="line highlighted">            <span class="token keyword">const</span> prevVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">            <span class="token keyword">if</span> <span class="token punctuation">(</span>prevVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">              <span class="token keyword">const</span> anchor <span class="token operator">=</span> prevVNode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>nextSibling<span class="token punctuation">;</span></span>\n<span class="line highlighted">              <span class="token comment">// 调用 insert 函数，将 newVNode 对应的真实 DOM 插入到锚点元素前面</span></span>\n<span class="line highlighted">              <span class="token comment">// 即 prevVNode 对应真实 DOM 的后面</span></span>\n<span class="line highlighted">              <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">            <span class="token punctuation">}</span></span>\n<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// 当前可复用节点，在旧 children 中的索引值 &gt;= 最大索引值 lastIndex</span></span>\n<span class="line">            <span class="token comment">// ** 那么更新 lastIndex</span></span>\n<span class="line">            lastIndex <span class="token operator">=</span> j<span class="token punctuation">;</span></span>\n<span class="line">          <span class="token punctuation">}</span></span>\n<span class="line">          <span class="token keyword">break</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-5-添加新元素" tabindex="-1"><a class="header-anchor" href="#_3-1-5-添加新元素"><span>3.1.5 添加新元素</span></a></h4>', 35)),
    createVNode(_component_CodeTabs, {
      id: "377",
      data: [{ "id": "patchChildren" }, { "id": "patch 增加最第四个参数 anchor 的支持" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[24] || (_cache[24] = [
        createTextVNode("patchChildren")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[25] || (_cache[25] = [
        createTextVNode("patch 增加最第四个参数 anchor 的支持")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[26] || (_cache[26] = [
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
                  createBaseVNode("span", { class: "token function" }, "patchChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("n1"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" n2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" n2"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"string"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "isArray"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("n2"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" oldChildren "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" n1"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" newChildren "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" n2"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("children"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" lastIndex "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("length"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" newVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" find "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createTextVNode(" oldChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("length"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" oldVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("j"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("          find "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("j "),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createTextVNode(" lastIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token comment" }, "// 当前可复用节点，在旧 children 中的索引 < 最大索引值 lastIndex")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token comment" }, "// ** 那么该节点需要移动")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" prevVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("prevVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("              "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" anchor "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" prevVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("nextSibling"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("              "),
                  createBaseVNode("span", { class: "token comment" }, "// 调用 insert 函数，将 newVNode 对应的真实 DOM 插入到锚点元素前面")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("              "),
                  createBaseVNode("span", { class: "token comment" }, "// 即 prevVNode 对应真实 DOM 的后面")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("              "),
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" anchor"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token comment" }, "// 当前可复用节点，在旧 children 中的索引值 >= 最大索引值 lastIndex")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            "),
                  createBaseVNode("span", { class: "token comment" }, "// ** 那么更新 lastIndex")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("            lastIndex "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token keyword" }, "break"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 在旧的一组子节点中没有找到对应可复用（同 key）的子节点")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 那么当前 newVNode 是新节点，需要挂载")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "!"),
                  createTextVNode("find"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" prevVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, "]")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" anchor "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "null")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("prevVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("          anchor "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" prevVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("nextSibling")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token comment" }, "// 没有前一个 vnode 节点，即这个要挂载的新节点是第一个子节点")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("          anchor "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("firstChild")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token comment" }, "// 挂载")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "null"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" anchor"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
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
      tab1: withCtx(({ value, isActive }) => _cache[27] || (_cache[27] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// 原不支持 container 的版本见 2.3 节")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("n1"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" n2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" anchor")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"string"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "!"),
                  createTextVNode("n1"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("n2"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" anchor"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 类型相同，更新")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "patchElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("n1"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" n2"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" Text"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ...")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(" Fragment"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// ...")
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
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "mountElement"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("vnode"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" container"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" anchor")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// ... 省略")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "insert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("el"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" anchor"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[40] || (_cache[40] = createStaticVNode('<h4 id="_3-1-6-移除不存在的元素" tabindex="-1"><a class="header-anchor" href="#_3-1-6-移除不存在的元素"><span>3.1.6 移除不存在的元素</span></a></h4><p>做完对新一组子节点的遍历（并移动对应真实 DOM 后），为了找到已经被删除的节点，还要对旧一组子节点进行遍历，如果没有找到具有相同 key 值的节点，说明该节点应该被删除。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment">// 寻找过程中遇到的最大索引值（在 oldChildren 中的索引）</span></span>\n<span class="line">    <span class="token keyword">let</span> lastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// ... 省略</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment">// 更新完成后，遍历旧的一组子节点</span></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">const</span> has <span class="token operator">=</span> newChildren<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> vnode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>has<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token comment">// 新一组子节点中没有对应 key 的节点，则应该将其卸载</span></span>\n<span class="line">        <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-7-总结" tabindex="-1"><a class="header-anchor" href="#_3-1-7-总结"><span>3.1.7 总结</span></a></h4><p>我们总结一下简单 Diff 算法。它的核心逻辑是，拿新的一组子节点中的节点去旧的一组子节点中寻找可复用的节点（key 值相同）。如果找到了，记录该节点在旧的一组子节点中的索引，我们把这个位置索引称为最大索引。在更新过程中，如果一个节点的索引小于最大索引，那么该节点对应的真实 DOM 元素需要移动。</p><p>如果没有找到，说明是新加的节点，需要进行挂载。</p><p>最后对旧的一组子节点进行遍历，在新的一组子节点中寻找可复用节点。如果没有找到，说明要讲对应的 vnode 卸载。</p><h3 id="_3-2-双端-diff-算法" tabindex="-1"><a class="header-anchor" href="#_3-2-双端-diff-算法"><span>3.2 双端 Diff 算法</span></a></h3><p>Vue.js 2 就采用了双端 Diff 算法。</p><h4 id="_3-2-1-双端-diff-算法原理及实现" tabindex="-1"><a class="header-anchor" href="#_3-2-1-双端-diff-算法原理及实现"><span>3.2.1 双端 Diff 算法原理及实现</span></a></h4><p>双端 Diff 算法是同时对新旧两组子节点的两个端点进行比较的算法。于是需要四个索引值，分别指向新旧两组子节点的两端，我们分别将其称为 newStartIdx, newEndIdx, oldStartIdx, oldEndIdx，如下面代码所示。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n2<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 封装 patchKeyedChildren 函数</span></span>\n<span class="line">    <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 四个索引值</span></span>\n<span class="line">  <span class="token keyword">let</span> oldStartIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> oldEndIdx <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newStartIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newEndIdx <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 四个索引值指向的 vnode 节点</span></span>\n<span class="line">  <span class="token keyword">let</span> oldStartVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> oldEndVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newStartVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newEndVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双端比较的每一轮比较都分为四个步骤：</p><ul><li>第一步：比较「旧的一组子节点中的头部子节点」与「新的一组子节点中的头部子节点」</li><li>第二步：比较「旧的一组子节点中的尾部子节点」与「新的一组子节点中的尾部子节点」</li><li>第三步：比较「旧的一组子节点中的头部子节点」与「新的一组子节点中的尾部子节点」</li><li>第四步：比较「旧的一组子节点中的尾部子节点」与「新的一组子节点中的头部子节点」</li></ul><p>如果比较过程中，两个节点的 key 不同（即不可复用），那就什么都不做。如果发现两个节点的 key 相同（即可复用），那么按照语义进行调整。</p><details class="hint-container details"><summary>四个步骤中的比较，如果发现节点可复用，意味着什么</summary><p>第一步 - 如果「旧的一组子节点中的头部子节点」与「新的一组子节点中的头部子节点」的 key 相同，即两组子节点的头部相同，二者都在头部，所以不需要对真实 DOM 进行移动操作，只需要进行 patch 即可。</p><p>第二步 - 如果「旧的一组子节点中的尾部子节点」与「新的一组子节点中的尾部子节点」的 key 相同，即两组子节点中的尾部相同，二者都在尾部，所以不需要对真实 DOM 进行移动操作，只需要进行 patch 即可。</p><p>第三步 - 如果「旧的一组子节点中的头部子节点」与「新的一组子节点中的尾部子节点」的 key 相同，那么意味着：<strong>本来是头部节点，但在顺序中，变成了尾部节点</strong>。对应的操作应该是：<strong>将索引 oldStartIdx 指向的虚拟节点对应的真实 DOM 移动到索引 oldEndIdx 指向的虚拟节点所对应的真实 DOM 后面</strong>。</p><p>第四步 - 如果「旧的一组子节点中的尾部子节点」与「新的一组子节点中的头部子节点」的 key 相同，那么意味着：<strong>本来是最后一个子节点，但是在新顺序中，变成了第一个子节点</strong>。对应的操作应该是：<strong>将索引 oldEndIdx 指向的虚拟节点所对应的真实 DOM 移动到索引 oldStartIdx 指向的虚拟节点所对应的真实 DOM 前面</strong>。</p></details><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token comment">// 四个索引值</span></span>\n<span class="line">  <span class="token keyword">let</span> oldStartIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> oldEndIdx <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newStartIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newEndIdx <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token comment">// 四个索引值指向的 vnode 节点</span></span>\n<span class="line">  <span class="token keyword">let</span> oldStartVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> oldEndVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newStartVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newEndVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第一步：都在头部，只需要 patch</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">,</span> newStartVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      oldStartVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      newStartVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newEndVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第二步：都在尾部，只需要 patch</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">,</span> newEndVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token comment">// 更新索引</span></span>\n<span class="line">      oldEndVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      newEndVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newEndVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第三步：需要移动 DOM，将 &lt;旧的头部&gt;，移动到 &lt;旧的尾部的后面&gt;</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">,</span> newEndVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token function">insert</span><span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> oldEndVNode<span class="token punctuation">.</span>el<span class="token punctuation">.</span>nextSibling<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      oldStartVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      newEndVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">--</span>newEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第四步：需要移动 DOM，将 &lt;旧的尾部&gt;，移动到 &lt;旧的头部的前面&gt;</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">,</span> newStartVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token comment">// 移动 DOM</span></span>\n<span class="line">      <span class="token function">insert</span><span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> oldStartVNode<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token comment">// 移动完，需要更新索引值并指向下一个位置</span></span>\n<span class="line">      oldEndVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      newStartVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-非理想状态的处理方式" tabindex="-1"><a class="header-anchor" href="#_3-2-2-非理想状态的处理方式"><span>3.2.2 非理想状态的处理方式</span></a></h4><p>按照之前的算法步骤进行双端 Diff，有可能会出现四个步骤都无法匹配的情况。这时，只能通过额外的处理步骤来处理这种非理想情况。</p><p>具体做法是，取新的一组子节点的头部节点，到旧的一组子节点中寻找。找到之后，将其索引存储到 idxInOld。这意味着：<strong>idxInOld 对应的节点原本不是头部节点，但在更新后，变成了头部节点</strong>。对应的操作为：<strong>将索引 idxInOld 指向的虚拟节点对应的真实 DOM 移动到索引 oldStartIdx 指向的虚拟节点所对应的真实 DOM 前面</strong>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// ...</span></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldStartVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      oldStartVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldEndVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      oldEndVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第一步：都在头部，只需要 patch</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newEndVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第二步：都在尾部，只需要 patch</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newEndVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第三步：需要移动 DOM，将 &lt;旧的头部&gt;，移动到 &lt;旧的尾部的后面&gt;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第四步：需要移动 DOM，将 &lt;旧的尾部&gt;，移动到 &lt;旧的头部的前面&gt;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token keyword">const</span> idxInOld <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span></span>\n<span class="line highlighted">        <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key</span>\n<span class="line highlighted">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token comment">// 找到可复用的节点，将其对应的真实 DOM 移动到头部</span></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>idxInOld <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        <span class="token keyword">const</span> vnodeToMove <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">        <span class="token function">patch</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">,</span> newStartVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">        <span class="token comment">// 移动 DOM</span></span>\n<span class="line highlighted">        <span class="token function">insert</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> oldStartVNode<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">        <span class="token comment">// idxInOld 处的节点所对应的真实 DOM 已经移动到了别处，因此设为 undefined</span></span>\n<span class="line highlighted">        oldChildren<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">        <span class="token comment">// 更新索引</span></span>\n<span class="line highlighted">        newStartVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-添加新元素" tabindex="-1"><a class="header-anchor" href="#_3-2-3-添加新元素"><span>3.2.3 添加新元素</span></a></h4><p>在处理非理想状态时，我们取新的一组子节点的头部节点，到旧的一组子节点中寻找。但未必总会找得到，如果找不到，说明该节点是新增节点。将它挂载到当前的头部节点之前，即 oldStartIdx 指向的虚拟节点对应的真实 DOM 之前。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// ... 省略部分代码</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldStartVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      oldStartVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">++</span>oldStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldEndVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      oldEndVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">--</span>oldEndIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第一步：都在头部，只需要 patch</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newEndVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第二步：都在尾部，只需要 patch</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldStartVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newEndVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第三步：需要移动 DOM，将 &lt;旧的头部&gt;，移动到 &lt;旧的尾部的后面&gt;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token comment">// 第四步：需要移动 DOM，将 &lt;旧的尾部&gt;，移动到 &lt;旧的头部的前面&gt;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> idxInOld <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span></span>\n<span class="line">        <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node<span class="token punctuation">.</span>key <span class="token operator">===</span> newStartVNode<span class="token punctuation">.</span>key</span>\n<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>idxInOld <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token comment">// 找到可复用的节点，将其对应的真实 DOM 移动到头部</span></span>\n<span class="line">        <span class="token keyword">const</span> vnodeToMove <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token function">patch</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">,</span> newStartVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token function">insert</span><span class="token punctuation">(</span>vnodeToMove<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> oldStartVNode<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        oldChildren<span class="token punctuation">[</span>idxInOld<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        <span class="token comment">// 没找到可复用的节点，新节点，挂载到头部</span></span>\n<span class="line highlighted">        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newStartVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> oldStartVNode<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line">      newStartVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">++</span>newStartIdx<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line highlighted">  <span class="token comment">// 循环结束后检查索引值的情况，如果下面条件成立，说明有新节点需要挂载</span></span>\n<span class="line highlighted">  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndIdx <span class="token operator">&lt;</span> oldStartIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> newStartIdx<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token keyword">const</span> anchorIdx <span class="token operator">=</span> newEndIdx <span class="token operator">+</span> <span class="token number">1</span></span>\n<span class="line highlighted">      <span class="token keyword">const</span> anchor <span class="token operator">=</span> anchorIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>anchorIdx<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span></span>\n<span class="line highlighted">      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-移除不存在的元素" tabindex="-1"><a class="header-anchor" href="#_3-2-4-移除不存在的元素"><span>3.2.4 移除不存在的元素</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// ... 省略部分代码</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略部分代码</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 循环结束后检查索引值的情况，如果下面条件成立，说明有新节点需要挂载</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldEndIdx <span class="token operator">&lt;</span> oldStartIdx <span class="token operator">&amp;&amp;</span> newStartIdx <span class="token operator">&lt;=</span> newEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ... 省略部分代码</span></span>\n<span class="line highlighted">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newEndIdx <span class="token operator">&lt;</span> newStartIdx <span class="token operator">&amp;&amp;</span> oldStartIdx <span class="token operator">&lt;=</span> oldEndIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token comment">// 移除</span></span>\n<span class="line highlighted">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStartIdx<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEndIdx<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span></span>\n<span class="line highlighted">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-5-总结" tabindex="-1"><a class="header-anchor" href="#_3-2-5-总结"><span>3.2.5 总结</span></a></h4><p>双端 Diff 指的是在新旧两组子节点的四个端点之间进行比较，并试图找到可复用的节点。</p><p>相比简单 Diff 算法的优势在于，对于同样的更新场景，执行的 DOM 移动操作次数更少。</p><h3 id="_3-3-快速-diff-算法" tabindex="-1"><a class="header-anchor" href="#_3-3-快速-diff-算法"><span>3.3 快速 Diff 算法</span></a></h3><p>找相同的前置元素（1）和相同的后置元素（2）。</p><p>如果新的一组子节点有剩余，则挂载节点（3.1）；如果旧的一组子节点有剩余，则卸载节点（3.2）。</p><p>不满足条件 3.1 和条件 3.2 是常有的现象，即涉及到节点的移动（4）。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 1. 相同的前置节点</span></span>\n<span class="line">  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    j<span class="token operator">++</span><span class="token punctuation">;</span></span>\n<span class="line">    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 2. 相同的后置节点</span></span>\n<span class="line">  <span class="token keyword">let</span> oldEnd <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> newEnd <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span><span class="token operator">--</span>oldEnd<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span><span class="token operator">--</span>newEnd<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 3. 添加或移除节点</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 3.1 j --&gt; newEnd 之间的节点是新增节点</span></span>\n<span class="line">    <span class="token keyword">const</span> anchorIdx <span class="token operator">=</span> newEnd <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> anchor <span class="token operator">=</span></span>\n<span class="line">      anchorIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>anchorIdx<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 3.2 j --&gt; oldEnd 之间的节点应被卸载</span></span>\n<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 4. 处理非理想情况</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step1：处理非理想情况时，要构造一个数组 source，他的长度是新的一组子节点经过预处理后剩余的未处理节点的数量，我们用它来存储<strong>新的一组子节点中的节点在旧的一组子节点中的位置索引</strong>，后面用它计算一个最长递增子序列，用于辅助完成 DOM 的移动操作。</p><p>Step2：根据 source 数组来判断节点是否需要移动，方法与简单 Diff 算法类似，如果遍历过程中遇到的索引值呈现递增趋势，则说明不需要移动节点，反之则需要。新增两个变量 moved（是否需要移动节点，初始值为 false） 和 pos（遍历旧的一组子节点的过程中遇到的最大索引值 k，初始值为 0）。</p><p>Step3：还需要一个数量标识，表示<strong>已经更新过的节点数量</strong>。它应该小于新的一组子节点中需要更新的节点数量。一旦前者超过后者，说明有多余节点，需要卸载。</p>', 37)),
    createVNode(_component_CodeTabs, {
      id: "512",
      data: [{ "id": "Step1-source 数组" }, { "id": "Step2-判断节点是否需要移动" }, { "id": "Step3-已更新过的节点数量" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[28] || (_cache[28] = [
        createTextVNode("Step1-source 数组")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[29] || (_cache[29] = [
        createTextVNode("Step2-判断节点是否需要移动")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[30] || (_cache[30] = [
        createTextVNode("Step3-已更新过的节点数量")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[31] || (_cache[31] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("j "),
                  createBaseVNode("span", { class: "token operator" }, ">"),
                  createTextVNode(" oldEnd "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" newEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 3.1 j --> newEnd 之间的节点是新增节点")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("j "),
                  createBaseVNode("span", { class: "token operator" }, ">"),
                  createTextVNode(" newEnd "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" oldEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 3.2 j --> oldEnd 之间的节点应被卸载")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 4. 处理非理想情况")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" count "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newEnd "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" source "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("count"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "fill"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" oldStart "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" newStart "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" keyIndex "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 构建索引表，新的一组子节点上，<key: idxInNew>")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newStart"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" newEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    keyIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldStart"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" oldEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    oldVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" k "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" keyIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" k "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"undefined"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      newVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("k"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      source"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("k "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(" newStart"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 没找到")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "unmount"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
      tab1: withCtx(({ value, isActive }) => _cache[32] || (_cache[32] = [
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
                  createTextVNode(" count "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newEnd "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" source "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("count"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "fill"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" oldStart "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" newStart "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" moved "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" pos "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" keyIndex "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 构建索引表，新的一组子节点上，<key: idxInNew>")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newStart"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" newEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  keyIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldStart"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" oldEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  oldVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" k "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" keyIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" k "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"undefined"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    newVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("k"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    source"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("k "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(" newStart"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// 判断节点是否需要移动")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("k "),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createTextVNode(" pos"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      moved "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      pos "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" k")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// 没找到")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "unmount"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      tab2: withCtx(({ value, isActive }) => _cache[33] || (_cache[33] = [
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
                  createTextVNode(" count "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newEnd "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(" j "),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" source "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Array"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("count"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "fill"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" oldStart "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" newStart "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" j"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" moved "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" pos "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" keyIndex "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 构建索引表，新的一组子节点上，<key: idxInNew>")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newStart"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" newEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  keyIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" patched "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 更新过的节点数量")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldStart"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" oldEnd"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  oldVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" oldChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("i"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("patched "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(" count"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" k "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" keyIndex"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" k "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"undefined"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      newVNode "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" newChildren"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("k"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "patch"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" container"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      patched"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      source"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("k "),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode(" newStart"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" i"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 判断节点是否需要移动")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("k "),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createTextVNode(" pos"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        moved "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        pos "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" k"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 没找到")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "unmount"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// 如果更新过的节点数量大于需要更新的节点数量，则卸载多余节点")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "unmount"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("oldVNode"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[41] || (_cache[41] = createStaticVNode('<h4 id="_3-3-2-如何移动元素" tabindex="-1"><a class="header-anchor" href="#_3-3-2-如何移动元素"><span>3.3.2 如何移动元素</span></a></h4><p>3.3.1 中已经判断了是否需要移动元素，在代码中用 moved = true 作为标识。</p><p>3.3.1 中还构造了 source 数组，数组长度为新的一组子节点去掉相同的前置&amp;后置节点后、剩余未处理的节点数量。元素值表示新的一组子节点中的节点在旧的一组子节点中的位置。后面会根据这个 source 数组计算出一个最长递增子序列，用于 DOM 移动操作。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 3.1 j --&gt; newEnd 之间的节点是新增节点</span></span>\n<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 3.2 j --&gt; oldEnd 之间的节点应被卸载</span></span>\n<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 4. 处理非理想情况</span></span>\n<span class="line">  <span class="token comment">// ...</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ...</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>moved<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 如果需要进行 DOM 移动</span></span>\n<span class="line">    <span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">lis</span><span class="token punctuation">(</span>sources<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1. 计算最长递增子序列，返回的是下标列表</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">let</span> s <span class="token operator">=</span> seq<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// s 指向最长递增子序列的最后一个元素</span></span>\n<span class="line">    <span class="token keyword">let</span> i <span class="token operator">=</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// i 指向新的一组子节点的最后一个元素</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token comment">// 3. 该节点是全新节点，挂载</span></span>\n<span class="line">        <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> newNVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> anchor <span class="token operator">=</span></span>\n<span class="line">          nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> seq<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token comment">// 2.1 节点不在最长递增子序列中，要移动</span></span>\n<span class="line">        <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> newNVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> anchor <span class="token operator">=</span></span>\n<span class="line">          nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token comment">// 2.2 节点在最长递增子序列中，不需要移动，只需要让 s 指向下一个位置</span></span>\n<span class="line">        s<span class="token operator">--</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么是最长递增子序列。如 [0, 8, 4, 12]，其中 [0, 8, 12] 和 [0, 4, 12] 都是最长递增子序列。</p><p>拿到了最长递增子序列的索引信息之后，要对节点重新进行编号，这样最长递增子序列和新的下标可以一一对应。编号方式很简单，忽略经过预处理的相同的前置节点和后置节点。</p><p>最长递增子序列 seq 反映了：在新的一组子节点中，哪些下标对应的节点在更新前后的顺序没有发生变化。所以我们只需要移动不在 seq 中的下标对应的虚拟节点所对应的真实 DOM。</p><details class="hint-container details"><summary>Vue.js3 中如何求最长递增子序列</summary><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">lis</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> p <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// p：追踪每个位置上前一个符合递增条件的元素的索引。初始值为 arr 副本</span></span>\n<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// result：最长递增子序列中元素的索引，初始值仅包含 0</span></span>\n<span class="line">  <span class="token comment">// i 外层循环，遍历数组 arr</span></span>\n<span class="line">  <span class="token comment">// j 当前 result 中最后一个元素的索引</span></span>\n<span class="line">  <span class="token comment">// u，v 二分搜索过程的边界指针；c 二分查找中间位置指针</span></span>\n<span class="line">  <span class="token keyword">let</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> c<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 对 arr 数组的遍历，对于每一个元素，判断它是否应该被添加到当前的递增子序列中</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> arrI <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arrI <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      j <span class="token operator">=</span> result<span class="token punctuation">[</span>result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arrI<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span></span>\n<span class="line">        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">continue</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">      u <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">      v <span class="token operator">=</span> result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">while</span> <span class="token punctuation">(</span>u <span class="token operator">&lt;</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>u <span class="token operator">+</span> v<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>result<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> arrI<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          u <span class="token operator">=</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">          v <span class="token operator">=</span> c<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arrI <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>result<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>u <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">        result<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  u <span class="token operator">=</span> result<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>\n<span class="line">  v <span class="token operator">=</span> result<span class="token punctuation">[</span>u <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>u<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    result<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span></span>\n<span class="line">    v <span class="token operator">=</span> p<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="_3-3-3-总结" tabindex="-1"><a class="header-anchor" href="#_3-3-3-总结"><span>3.3.3 总结</span></a></h4><p>快速 Diff 算法在实测中性能最优。它借鉴了文本 Diff 中的预处理思路，先处理新旧两组子节点中相同的前置节点和相同的后置节点。</p><p>预处理完毕后，如果无法通过简单的通过挂载新节点或者卸载已经不存在的节点来完成更新。则需要根据节点的索引关系，构造一个最长递增子序列。最长递增子序列所指向的节点即为不需要移动的节点。</p>', 11))
  ]);
}
const render_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "render.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/vue/render.html","title":"渲染器","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"渲染器","description":null,"article":false,"date":"2024-10-05T00:00:00.000Z","order":5,"headerDepth":3},"headers":[{"level":2,"title":"1 渲染器的基本实现","slug":"_1-渲染器的基本实现","link":"#_1-渲染器的基本实现","children":[{"level":3,"title":"1.1 渲染器和响应系统的结合","slug":"_1-1-渲染器和响应系统的结合","link":"#_1-1-渲染器和响应系统的结合","children":[]},{"level":3,"title":"1.2 渲染器的内部结构","slug":"_1-2-渲染器的内部结构","link":"#_1-2-渲染器的内部结构","children":[]},{"level":3,"title":"1.3 render 函数的基本实现","slug":"_1-3-render-函数的基本实现","link":"#_1-3-render-函数的基本实现","children":[]},{"level":3,"title":"1.4 patch 函数","slug":"_1-4-patch-函数","link":"#_1-4-patch-函数","children":[]}]},{"level":2,"title":"2 挂载与更新","slug":"_2-挂载与更新","link":"#_2-挂载与更新","children":[{"level":3,"title":"2.1 挂载子节点、元素属性","slug":"_2-1-挂载子节点、元素属性","link":"#_2-1-挂载子节点、元素属性","children":[{"level":4,"title":"2.1.1 HTML Attributes v.s. DOM Properties","slug":"_2-1-1-html-attributes-v-s-dom-properties","link":"#_2-1-1-html-attributes-v-s-dom-properties","children":[]},{"level":4,"title":"2.1.2 设置元素属性","slug":"_2-1-2-设置元素属性","link":"#_2-1-2-设置元素属性","children":[]},{"level":4,"title":"2.1.3 对 class 的处理","slug":"_2-1-3-对-class-的处理","link":"#_2-1-3-对-class-的处理","children":[]}]},{"level":3,"title":"2.2 卸载","slug":"_2-2-卸载","link":"#_2-2-卸载","children":[]},{"level":3,"title":"2.3 vnode 类型","slug":"_2-3-vnode-类型","link":"#_2-3-vnode-类型","children":[]},{"level":3,"title":"2.4 事件的处理","slug":"_2-4-事件的处理","link":"#_2-4-事件的处理","children":[]},{"level":3,"title":"2.5 事件冒泡与更新时机","slug":"_2-5-事件冒泡与更新时机","link":"#_2-5-事件冒泡与更新时机","children":[]},{"level":3,"title":"2.6 更新子节点","slug":"_2-6-更新子节点","link":"#_2-6-更新子节点","children":[]},{"level":3,"title":"2.7 文本节点和注释节点","slug":"_2-7-文本节点和注释节点","link":"#_2-7-文本节点和注释节点","children":[]},{"level":3,"title":"2.8 Fragment","slug":"_2-8-fragment","link":"#_2-8-fragment","children":[]}]},{"level":2,"title":"3 Diff 算法","slug":"_3-diff-算法","link":"#_3-diff-算法","children":[{"level":3,"title":"3.1 简单 Diff 算法","slug":"_3-1-简单-diff-算法","link":"#_3-1-简单-diff-算法","children":[{"level":4,"title":"3.1.2 DOM 复用与 key 的作用","slug":"_3-1-2-dom-复用与-key-的作用","link":"#_3-1-2-dom-复用与-key-的作用","children":[]},{"level":4,"title":"3.1.3 找到需要移动的子节点","slug":"_3-1-3-找到需要移动的子节点","link":"#_3-1-3-找到需要移动的子节点","children":[]},{"level":4,"title":"3.1.4 如何移动元素","slug":"_3-1-4-如何移动元素","link":"#_3-1-4-如何移动元素","children":[]},{"level":4,"title":"3.1.5 添加新元素","slug":"_3-1-5-添加新元素","link":"#_3-1-5-添加新元素","children":[]},{"level":4,"title":"3.1.6 移除不存在的元素","slug":"_3-1-6-移除不存在的元素","link":"#_3-1-6-移除不存在的元素","children":[]},{"level":4,"title":"3.1.7 总结","slug":"_3-1-7-总结","link":"#_3-1-7-总结","children":[]}]},{"level":3,"title":"3.2 双端 Diff 算法","slug":"_3-2-双端-diff-算法","link":"#_3-2-双端-diff-算法","children":[{"level":4,"title":"3.2.1 双端 Diff 算法原理及实现","slug":"_3-2-1-双端-diff-算法原理及实现","link":"#_3-2-1-双端-diff-算法原理及实现","children":[]},{"level":4,"title":"3.2.2 非理想状态的处理方式","slug":"_3-2-2-非理想状态的处理方式","link":"#_3-2-2-非理想状态的处理方式","children":[]},{"level":4,"title":"3.2.3 添加新元素","slug":"_3-2-3-添加新元素","link":"#_3-2-3-添加新元素","children":[]},{"level":4,"title":"3.2.4 移除不存在的元素","slug":"_3-2-4-移除不存在的元素","link":"#_3-2-4-移除不存在的元素","children":[]},{"level":4,"title":"3.2.5 总结","slug":"_3-2-5-总结","link":"#_3-2-5-总结","children":[]}]},{"level":3,"title":"3.3 快速 Diff 算法","slug":"_3-3-快速-diff-算法","link":"#_3-3-快速-diff-算法","children":[{"level":4,"title":"3.3.2 如何移动元素","slug":"_3-3-2-如何移动元素","link":"#_3-3-2-如何移动元素","children":[]},{"level":4,"title":"3.3.3 总结","slug":"_3-3-3-总结","link":"#_3-3-3-总结","children":[]}]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":31.63,"words":9488},"filePathRelative":"front-end/vue/render.md","localizedDate":"2024年10月5日","excerpt":"<h2>1 渲染器的基本实现</h2>\\n<h3>1.1 渲染器和响应系统的结合</h3>\\n<p>在浏览器平台上，渲染器会把虚拟 DOM 渲染成真实 DOM 元素。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">renderer</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">domString<span class=\\"token punctuation\\">,</span> container</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  container<span class=\\"token punctuation\\">.</span>innerHTML <span class=\\"token operator\\">=</span> domString<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">let</span> count <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 使用</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">effect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token function\\">renderer</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">&lt;h1&gt;</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>count<span class=\\"token punctuation\\">.</span>value<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">&lt;/h1&gt;</span><span class=\\"token template-punctuation string\\">`</span></span>， document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'app\'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">count<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">++</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');
export {
  render_html as comp,
  data
};
