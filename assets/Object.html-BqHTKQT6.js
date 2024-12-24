import { c as createElementBlock, f as createBaseVNode, a as createCommentVNode, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "p",
      null,
      "JavaScript Object",
      -1
      /* HOISTED */
    )),
    createCommentVNode(" more "),
    _cache[1] || (_cache[1] = createStaticVNode('<h2 id="_1-快速介绍" tabindex="-1"><a class="header-anchor" href="#_1-快速介绍"><span>1. 快速介绍</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 创建</span></span>\n<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span></span>\n<span class="line">user<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">delete</span> user<span class="token punctuation">.</span>age</span>\n<span class="line"></span>\n<span class="line">user<span class="token punctuation">[</span><span class="token string">&quot;likes birds&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>\n<span class="line"><span class="token keyword">delete</span> user<span class="token punctuation">[</span><span class="token string">&quot;likes birds&quot;</span><span class="token punctuation">]</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 判断属性是否存在</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span> <span class="token keyword">in</span> user<span class="token punctuation">)</span></span>\n<span class="line"><span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token string">&quot;age&quot;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> user<span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;输入一个 user 属性&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>user<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>\n<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">makeUser</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>\n<span class="line">        name<span class="token punctuation">,</span></span>\n<span class="line">        age<span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 变量名不能是保留字</span></span>\n<span class="line"><span class="token comment">// 但  属性名没有这个限制</span></span>\n<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">for</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token keyword">let</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token keyword">return</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> obj<span class="token punctuation">.</span>for <span class="token operator">+</span> obj<span class="token punctuation">.</span>let <span class="token operator">+</span> obj<span class="token punctuation">.</span>return <span class="token punctuation">)</span>     <span class="token comment">// 6</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 属性只能是 Symbol 或 Sting</span></span>\n<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>      <span class="token comment">// 箱单与 &quot;0&quot;: &quot;test&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token function">alter</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token function">alter</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-属性的顺序" tabindex="-1"><a class="header-anchor" href="#_2-属性的顺序"><span>2. 属性的顺序</span></a></h2><p>整数属性会进行排序，其他属性按照创建的顺序显示。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果一个字符串可以和一个整数互相转换，那么它就是<em>整数属性</em>。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// Number(...) 显式转换为数字</span></span>\n<span class="line"><span class="token comment">// Math.trunc 是内建的去除小数部分的方法。</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">String</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;49&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;49&quot;，相同，整数属性</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">String</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;+49&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;49&quot;，不同于 &quot;+49&quot; ⇒ 不是整数属性</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">String</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;1.2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;1&quot;，不同于 &quot;1.2&quot; ⇒ 不是整数属性</span></span>\n<span class="line"></span></code></pre></div></div><p>如果想让属性按照自定义的方式（非数值大小）显示，只需给键名前加一个 <code>+</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> codes <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;+49&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Germany&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token string-property property">&quot;+41&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Switzerland&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token string-property property">&quot;+44&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Great Britain&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token comment">// ..,</span></span>\n<span class="line">  <span class="token string-property property">&quot;+1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> code <span class="token keyword">in</span> codes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span> <span class="token operator">+</span>code <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 49, 41, 44, 1</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7))
  ]);
}
const Object_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Object.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/grammar/Object.html","title":"Object","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Object","description":null,"date":"2023-08-14T00:00:00.000Z","category":["前端"],"tag":["js","js 基本类型"]},"headers":[{"level":2,"title":"1. 快速介绍","slug":"_1-快速介绍","link":"#_1-快速介绍","children":[]},{"level":2,"title":"2. 属性的顺序","slug":"_2-属性的顺序","link":"#_2-属性的顺序","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"front-end/js/grammar/Object.md","localizedDate":"2023年8月14日","excerpt":"<p>JavaScript Object</p>\\n"}');
export {
  Object_html as comp,
  data
};
