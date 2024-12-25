import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, d as createVNode, g as createTextVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Catalog = resolveComponent("Catalog");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("a", {
          href: "https://time.geekbang.com/column/intro/100085301?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search&tab=catalog",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "陈天·Rust 编程第一课")
      ],
      -1
      /* HOISTED */
    )),
    _cache[1] || (_cache[1] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("a", {
          href: "https://www.rust-lang.org/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Rust 官网")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Catalog),
    _cache[2] || (_cache[2] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("从其他语言迁移到 Rust 必然要经过一段时间的思维转换（Paradigm Shift），其中最大的一个思维转换就是"),
        createBaseVNode("strong", null, "变量的所有权和生命周期"),
        createTextVNode("。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[3] || (_cache[3] = createBaseVNode(
      "p",
      null,
      "Python/JavaScript/Ruby 开发者，难点在并发处理、类型系统、泛型编程。",
      -1
      /* HOISTED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/pl/rust/","title":"Rust","lang":"zh-CN","frontmatter":{"title":"Rust","index":false,"article":false},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"pl/rust/index.md","localizedDate":"2024年12月24日","excerpt":"<p><a href=\\"https://time.geekbang.com/column/intro/100085301?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search&amp;tab=catalog\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">陈天·Rust 编程第一课</a></p>\\n<p><a href=\\"https://www.rust-lang.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Rust 官网</a></p>"}');
export {
  index_html as comp,
  data
};
