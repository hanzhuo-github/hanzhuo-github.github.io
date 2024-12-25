import { h as defineComponent, c as createElementBlock, f as createBaseVNode, g as createTextVNode, d as createVNode, o as openBlock } from "./app-DERZZvM1.js";
import MyCard from "./Card-D9sicmuZ.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props, { expose: __expose }) {
    __expose();
    const introduction = [
      "Transformer models",
      "Using 🤗 Transformers",
      "Fine-tuning a pretrained model",
      "Sharing models and tokenizers"
    ];
    const divingIn = [
      "The 🤗 Datasets library",
      "The 🤗 Tokenizers library",
      "Main NLP tasks",
      "How to ask for help",
      "Sharing models and tokenizers"
    ];
    const advanced = [
      "Building and sharing demos",
      "Transformers can hear",
      "Transformers can see",
      "Optimizing form production"
    ];
    const __returned__ = { introduction, divingIn, advanced, get MyCard() {
      return MyCard;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "menu" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("本模块用于记录 "),
        createBaseVNode("a", {
          href: "https://huggingface.co/learn/nlp-course",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Hugging Face NLP Course"),
        createTextVNode(" 的学习过程。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[1] || (_cache[1] = createBaseVNode(
      "p",
      null,
      "主要围绕以下四部分展开：",
      -1
      /* HOISTED */
    )),
    _cache[2] || (_cache[2] = createBaseVNode(
      "ol",
      null,
      [
        createBaseVNode("li", null, "🤗 Transformers"),
        createBaseVNode("li", null, "🤗 DataSets"),
        createBaseVNode("li", null, "🤗 Tokenizers"),
        createBaseVNode("li", null, "🤗 Accelerate")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_1, [
      createVNode($setup["MyCard"], {
        title: "Introduction",
        subTitles: $setup.introduction
      }),
      createVNode($setup["MyCard"], {
        title: "Diving in",
        subTitles: $setup.divingIn
      }),
      createVNode($setup["MyCard"], {
        title: "Advanced",
        subTitles: $setup.advanced
      })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99d50504"], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/ai/huggingface-nlp/","title":"介绍","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"介绍","description":null,"article":false},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"ai/huggingface-nlp/index.md","localizedDate":"2024年12月24日","excerpt":"<p>本模块用于记录 <a href=\\"https://huggingface.co/learn/nlp-course\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hugging Face NLP Course</a> 的学习过程。</p>\\n<p>主要围绕以下四部分展开：</p>\\n<ol>\\n<li>🤗 Transformers</li>\\n<li>🤗 DataSets</li>\\n<li>🤗 Tokenizers</li>\\n<li>🤗 Accelerate</li>\\n</ol>\\n<div class=\\"menu\\">\\n    </div>\\n"}');
export {
  index_html as comp,
  data
};
