import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Catalog = resolveComponent("Catalog");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("<p>React 的设计哲学：<code>UI = f(state)</code>。只有数据变化时，才会触发协调（conciliation）。</p><p>React 中关于数据的部分有：<code>props</code>、<code>state</code>、<code>context</code>。</p><ul><li><code>props</code>：从组件外传进来。<mark>不可变的（Immutable）</mark>。</li><li><code>state</code>：在组件内部。<mark>不可变的（Immutable）</mark>。</li><li><code>context</code>：通过组件外的 Context.Provider 提供数据，组件内部可以消费 context 数据。</li></ul>", 3)),
    createVNode(_component_Catalog)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/react/","title":"React","lang":"zh-CN","frontmatter":{"title":"React","index":false,"article":false,"icon":"react"},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.31,"words":93},"filePathRelative":"front-end/react/index.md","localizedDate":"2024年12月24日","excerpt":"<p>React 的设计哲学：<code>UI = f(state)</code>。只有数据变化时，才会触发协调（conciliation）。</p>\\n<p>React 中关于数据的部分有：<code>props</code>、<code>state</code>、<code>context</code>。</p>\\n<ul>\\n<li><code>props</code>：从组件外传进来。<mark>不可变的（Immutable）</mark>。</li>\\n<li><code>state</code>：在组件内部。<mark>不可变的（Immutable）</mark>。</li>\\n<li><code>context</code>：通过组件外的 Context.Provider 提供数据，组件内部可以消费 context 数据。</li>\\n</ul>"}');
export {
  index_html as comp,
  data
};
