import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, d as createVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/front-end/js/js-runtime.png";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Catalog = resolveComponent("Catalog");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "p",
      null,
      "运行 JS 代码需要 JavaScript runtime environment，它可以是一个浏览器、一个服务器、一个智能手表，甚至是台洗衣机，只要它运行 JavaScript 程序。",
      -1
      /* HOISTED */
    )),
    _cache[1] || (_cache[1] = createBaseVNode(
      "figure",
      null,
      [
        createBaseVNode("img", {
          src: _imports_0,
          alt: "",
          width: "580",
          tabindex: "0",
          loading: "lazy"
        }),
        createBaseVNode("figcaption")
      ],
      -1
      /* HOISTED */
    )),
    _cache[2] || (_cache[2] = createBaseVNode(
      "p",
      null,
      "运行时环境包含以下部分：",
      -1
      /* HOISTED */
    )),
    _cache[3] || (_cache[3] = createBaseVNode(
      "ol",
      null,
      [
        createBaseVNode("li", null, "JS 引擎（JavaScript Engine）"),
        createBaseVNode("li", null, "Web API"),
        createBaseVNode("li", null, "事件循环（Event Loop）"),
        createBaseVNode("li", null, "宏任务队列（Callback Queue & Task Queue）& 微任务队列（Micro Task Queue）")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Catalog)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/js-runtime/","title":"JavaScript Runtime","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"JavaScript Runtime","article":false,"date":"2024-01-10T00:00:00.000Z","order":1},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.37,"words":110},"filePathRelative":"front-end/js/js-runtime/index.md","localizedDate":"2024年1月10日","excerpt":"<p>运行 JS 代码需要 JavaScript runtime environment，它可以是一个浏览器、一个服务器、一个智能手表，甚至是台洗衣机，只要它运行 JavaScript 程序。</p>\\n<figure><img src=\\"/images/front-end/js/js-runtime.png\\" alt=\\"\\" width=\\"580\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>运行时环境包含以下部分：</p>\\n<ol>\\n<li>JS 引擎（JavaScript Engine）</li>\\n<li>Web API</li>\\n<li>事件循环（Event Loop）</li>\\n<li>宏任务队列（Callback Queue &amp; Task Queue）&amp; 微任务队列（Micro Task Queue）</li>\\n</ol>"}');
export {
  index_html as comp,
  data
};
