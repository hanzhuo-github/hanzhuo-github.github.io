import { c as createElementBlock, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createBaseVNode(
      "p",
      null,
      "读书笔记-统计学习导论",
      -1
      /* HOISTED */
    ),
    createBaseVNode(
      "p",
      null,
      [
        createTextVNode("书是开源的，访问 "),
        createBaseVNode("a", {
          href: "https://www.statlearning.com/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "An Introduction to Statistical Learning"),
        createTextVNode(" 获得。")
      ],
      -1
      /* HOISTED */
    )
  ]));
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/ai/statisticalLearning/","title":"链接","lang":"zh-CN","frontmatter":{"title":"链接","article":false},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.1,"words":31},"filePathRelative":"ai/statisticalLearning/index.md","localizedDate":"2024年12月24日","excerpt":"<p>读书笔记-统计学习导论</p>\\n<p>书是开源的，访问 <a href=\\"https://www.statlearning.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">An Introduction to Statistical Learning</a> 获得。</p>\\n"}');
export {
  index_html as comp,
  data
};
