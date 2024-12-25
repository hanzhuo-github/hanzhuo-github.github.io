import { c as createElementBlock, b as createStaticVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/front-end/browser/dom-links.svg";
const _imports_1 = "/images/front-end/browser/dom-links-elements.svg";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createStaticVNode('<p>DOM 的所有操作都是以 <code>document</code> 对象开始。</p><div align="center"><img src="' + _imports_0 + '" width="50%/"></div><p><code>childNodes</code> 并不是一个数组（不能使用数组的方法），而是一个集合（collection）——一个类数组的可迭代对象（即它提供了 <code>Symbol.iterator</code> 属性，可以使用 <code>for...of</code> 来迭代）。</p><p>如果想使用数组的方法，可以创建一个真正的数组：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">)</span><span class="token punctuation">.</span>filter<span class="token punctuation">;</span> <span class="token comment">// function</span></span>\n<span class="line"></span></code></pre></div><blockquote><p>这种 DOM Collection 是只读的，不能通过 <code>childNodes[i] = ...</code> 来替换子节点。</p><p>不要用 <code>for...in</code> 来遍历 DOM Collection。<code>for...in</code> 循环遍历的是所有可枚举的属性（enumerable）。DOM Collection 中除了下标，还有一些其他的属性，如 entries、keys、values、forEach、length、item。</p></blockquote><h2 id="element-only-navigation" tabindex="-1"><a class="header-anchor" href="#element-only-navigation"><span>Element-only Navigation</span></a></h2><p>用上面的方式读取页面元素可以获得所有节点，包括文本节点、元素节点、注释节点。</p><p>但是很多任务当中，我们不想要文本节点和注释节点，只希望对元素节点做处理。</p><div align="center"><img src="' + _imports_1 + '" width="50%/"></div>', 10)
  ]));
}
const DOM_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DOM.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/browser/DOM.html","title":"DOM","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"DOM","description":null,"article":false,"date":"2023-07-01T00:00:00.000Z","order":1},"headers":[{"level":2,"title":"Element-only Navigation","slug":"element-only-navigation","link":"#element-only-navigation","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"front-end/browser/DOM.md","localizedDate":"2023年7月1日","excerpt":"<p>DOM 的所有操作都是以 <code>document</code> 对象开始。</p>\\n<div align=\\"center\\">\\n    <img src=\\"/images/front-end/browser/dom-links.svg\\" width=\\"50%/\\">\\n</div>\\n<p><code>childNodes</code> 并不是一个数组（不能使用数组的方法），而是一个集合（collection）——一个类数组的可迭代对象（即它提供了 <code>Symbol.iterator</code> 属性，可以使用 <code>for...of</code> 来迭代）。</p>\\n<p>如果想使用数组的方法，可以创建一个真正的数组：</p>"}');
export {
  DOM_html as comp,
  data
};
