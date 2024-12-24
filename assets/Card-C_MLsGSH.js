import { h as defineComponent, o as openBlock, c as createElementBlock, f as createBaseVNode, t as toDisplayString, i as renderSlot, F as Fragment, j as renderList } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    title: {},
    subTitles: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "card" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "content" };
const _hoisted_4 = { class: "sub-title-wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode(
      "div",
      _hoisted_2,
      toDisplayString($props.title),
      1
      /* TEXT */
    ),
    createBaseVNode("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "menu", {}, () => [
        createBaseVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.subTitles, (title, i) => {
              return openBlock(), createElementBlock("div", {
                class: "sub-title",
                key: "title" + i
              }, [
                createBaseVNode(
                  "span",
                  null,
                  toDisplayString(title),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ])
  ]);
}
const MyCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0478f3b9"], ["__file", "Card.vue"]]);
export {
  MyCard as default
};
