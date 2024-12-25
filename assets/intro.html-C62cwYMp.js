import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Catalog = resolveComponent("Catalog");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("<p>React 的设计哲学：<code>UI = f(state)</code>。只有数据变化时，才会触发协调（conciliation）。</p><p>React 中关于数据的部分有：<code>props</code>、<code>state</code>、<code>context</code>。</p><ul><li><code>props</code>：从组件外传进来。<mark>不可变的（Immutable）</mark>。</li><li><code>state</code>：在组件内部。<mark>不可变的（Immutable）</mark>。</li><li><code>context</code>：通过组件外的 Context.Provider 提供数据，组件内部可以消费 context 数据。</li></ul>", 3)),
    createVNode(_component_Catalog)
  ]);
}
const intro_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "intro.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/react/intro.html","title":"React 设计哲学","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"React 设计哲学","article":false,"date":"2024-10-28T00:00:00.000Z","order":1},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"front-end/react/intro.md","localizedDate":"2024年10月28日","excerpt":"<p>React 的设计哲学：<code>UI = f(state)</code>。只有数据变化时，才会触发协调（conciliation）。</p>\\n<p>React 中关于数据的部分有：<code>props</code>、<code>state</code>、<code>context</code>。</p>\\n<ul>\\n<li><code>props</code>：从组件外传进来。<mark>不可变的（Immutable）</mark>。</li>\\n<li><code>state</code>：在组件内部。<mark>不可变的（Immutable）</mark>。</li>\\n<li><code>context</code>：通过组件外的 Context.Provider 提供数据，组件内部可以消费 context 数据。</li>\\n</ul>"}');
export {
  intro_html as comp,
  data
};
