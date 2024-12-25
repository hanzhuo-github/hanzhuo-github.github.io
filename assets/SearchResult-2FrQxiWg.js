import { u as useLocalStorage, h as defineComponent, k as useRouter, l as useRouteLocale, m as useLocaleConfig, n as j, p as toRef, q as reactive, v as ref, x as computed, y as useEventListener, w as watch, z as h, A as s, R as RouteLink, B as c, C as n, D as o, E as D, G as usePageData, H as shallowRef, I as onMounted, J as C, K as useDebounceFn, L as i, M as onUnmounted, N as v, O as isPlainObject, P as l, Q as h$1, S as isString } from "./app-BhCVjEdW.js";
const store = ["/", "/dev/access-model.html", "/dev/authentication.html", "/dev/", "/en/", "/ai/ai-agent/", "/ai/deep-rl/deep-q-learning.html", "/ai/deep-rl/", "/ai/deep-rl/policy-gradient.html", "/ai/deep-rl/q-learning.html", "/ai/huggingface-nlp/", "/ai/statisticalLearning/", "/ai/statisticalLearning/introduction.html", "/ai/theory/metrics.html", "/basic/character-encoding/Chapter1.html", "/basic/character-encoding/Chapter2.html", "/basic/character-encoding/Chapter3.html", "/basic/network/", "/basic/os/command.html", "/coding/data-structure/1-intro.html", "/coding/data-structure/10-hash-table.html", "/coding/data-structure/11-binary-tree.html", "/coding/data-structure/12-heap.html", "/coding/data-structure/13-graph.html", "/coding/data-structure/14-string-matching.html", "/coding/data-structure/2-array.html", "/coding/data-structure/3-linked-list.html", "/coding/data-structure/4-stack.html", "/coding/data-structure/5-queue.html", "/coding/data-structure/6-recursion.html", "/coding/data-structure/7-sort.html", "/coding/data-structure/8-binary-search.html", "/coding/data-structure/9-skip-list.html", "/coding/design-pattern/factory.html", "/coding/design-pattern/", "/coding/design-pattern/interface.html", "/coding/design-pattern/options.html", "/coding/design-pattern/proxy.html", "/coding/design-pattern/singleton.html", "/coding/design-pattern/strategy.html", "/coding/design-pattern/template.html", "/coding/re/", "/front-end/browser/DOM.html", "/front-end/browser/debounce-throttle.html", "/front-end/browser/", "/front-end/browser/script-defer_async.html", "/front-end/configuration/1-module.html", "/front-end/configuration/2-ts.html", "/front-end/configuration/3-commit-message.html", "/front-end/configuration/4-git.html", "/front-end/configuration/", "/front-end/js/closure.html", "/front-end/js/currying.html", "/front-end/js/", "/front-end/js/js-string.html", "/front-end/js/module.html", "/front-end/js/prototype.html", "/front-end/js/recurrent-request.html", "/front-end/js/this.html", "/front-end/js/variable-type.html", "/front-end/react/", "/front-end/react/intro.html", "/front-end/react/lifecycle.html", "/front-end/vue/frame-design.html", "/front-end/vue/", "/front-end/vue/reactive.html", "/front-end/vue/ref.html", "/front-end/vue/render.html", "/front-end/vue/responsive-system.html", "/machine-learning/feature-engineering/", "/pl/blockchain/", "/pl/go/1-specification.html", "/pl/go/2-basic.html", "/pl/go/", "/pl/rust/1-memory.html", "/pl/rust/2-basic.html", "/pl/rust/3-quick-start.html", "/pl/rust/", "/ai/huggingface-nlp/section1/Chapter1.html", "/ai/huggingface-nlp/section1/Chapter2.html", "/ai/huggingface-nlp/section1/Chapter3.html", "/ai/huggingface-nlp/section1/Chapter4.html", "/ai/huggingface-nlp/section2/Chapter5.html", "/ai/huggingface-nlp/section2/Chapter6.html", "/basic/network/section1/Chapter1.html", "/front-end/js/grammar/ArrayBuffer.html", "/front-end/js/grammar/Blob.html", "/front-end/js/grammar/Object.html", "/front-end/js/grammar/Promise.html", "/front-end/js/grammar/Symbol.html", "/front-end/js/grammar/bigint.html", "/front-end/js/grammar/generator.html", "/front-end/js/grammar/iterables.html", "/front-end/js/grammar/js-array.html", "/front-end/js/grammar/modules.html", "/front-end/js/js-runtime/event-loop.html", "/front-end/js/js-runtime/", "/front-end/js/js-runtime/js-engine.html", "/front-end/js/js-runtime/web-api.html", "/404.html", "/ai/", "/ai/theory/", "/basic/character-encoding/", "/basic/", "/basic/os/", "/coding/data-structure/", "/coding/", "/front-end/", "/machine-learning/", "/pl/", "/ai/huggingface-nlp/section1/", "/ai/huggingface-nlp/section2/", "/basic/network/section1/", "/front-end/js/grammar/"];
const Qe = "SLIMSEARCH_QUERY_HISTORY", y = useLocalStorage(Qe, []), xe = () => {
  const { queryHistoryCount: t } = i, a = t > 0;
  return { enabled: a, queryHistories: y, addQueryHistory: (i2) => {
    a && (y.value = Array.from(/* @__PURE__ */ new Set([i2, ...y.value.slice(0, t - 1)])));
  }, removeQueryHistory: (i2) => {
    y.value = [...y.value.slice(0, i2), ...y.value.slice(i2 + 1)];
  } };
}, E = (t) => store[t.id] + ("anchor" in t ? `#${t.anchor}` : ""), Ce = "SLIMSEARCH_RESULT_HISTORY", { resultHistoryCount: W } = i, f = useLocalStorage(Ce, []), qe = () => {
  const t = W > 0;
  return { enabled: t, resultHistories: f, addResultHistory: (a) => {
    if (t) {
      const i2 = { link: E(a), display: a.display };
      "header" in a && (i2.header = a.header), f.value = [i2, ...f.value.slice(0, W - 1)];
    }
  }, removeResultHistory: (a) => {
    f.value = [...f.value.slice(0, a), ...f.value.slice(a + 1)];
  } };
}, we = (t) => {
  const a = D(), i$1 = useRouteLocale(), C$1 = usePageData(), r = ref(0), H = computed(() => r.value > 0), h2 = shallowRef([]);
  return onMounted(() => {
    const { search: p, terminate: q } = C(), g = useDebounceFn((o2) => {
      const { resultsFilter: R = (n2) => n2, querySplitter: T, suggestionsFilter: w, ...L } = a.value;
      o2 ? (r.value += 1, p(o2, i$1.value, L).then((n2) => R(n2, o2, i$1.value, C$1.value)).then((n2) => {
        r.value -= 1, h2.value = n2;
      }).catch((n2) => {
        console.warn(n2), r.value -= 1, r.value || (h2.value = []);
      })) : h2.value = [];
    }, i.searchDelay - i.suggestDelay, { maxWait: 5e3 });
    watch([t, i$1], ([o2]) => {
      g(o2.join(" "));
    }, { immediate: true }), onUnmounted(() => {
      q();
    });
  }), { isSearching: H, results: h2 };
};
var Le = defineComponent({ name: "SearchResult", props: { queries: { type: Array, required: true }, isFocusing: Boolean }, emits: ["close", "updateQuery"], setup(t, { emit: a }) {
  const i2 = useRouter(), C2 = useRouteLocale(), r = useLocaleConfig(j), { enabled: H, addQueryHistory: h$2, queryHistories: p, removeQueryHistory: q } = xe(), { enabled: g, resultHistories: o$1, addResultHistory: R, removeResultHistory: T } = qe(), w = H || g, L = toRef(t, "queries"), { results: n$1, isSearching: Y } = we(L), u = reactive({ isQuery: true, index: 0 }), m = ref(0), d = ref(0), F = computed(() => w && (p.value.length > 0 || o$1.value.length > 0)), I = computed(() => n$1.value.length > 0), D2 = computed(() => n$1.value[m.value] || null), B = () => {
    const { isQuery: e, index: s2 } = u;
    s2 === 0 ? (u.isQuery = !e, u.index = e ? o$1.value.length - 1 : p.value.length - 1) : u.index = s2 - 1;
  }, N = () => {
    const { isQuery: e, index: s2 } = u;
    s2 === (e ? p.value.length - 1 : o$1.value.length - 1) ? (u.isQuery = !e, u.index = 0) : u.index = s2 + 1;
  }, K = () => {
    m.value = m.value > 0 ? m.value - 1 : n$1.value.length - 1, d.value = D2.value.contents.length - 1;
  }, V = () => {
    m.value = m.value < n$1.value.length - 1 ? m.value + 1 : 0, d.value = 0;
  }, z = () => {
    d.value < D2.value.contents.length - 1 ? d.value += 1 : V();
  }, G = () => {
    d.value > 0 ? d.value -= 1 : K();
  }, b = (e) => e.map((s2) => isString(s2) ? s2 : h(s2[0], s2[1])), J = (e) => {
    if (e.type === "customField") {
      const s2 = v[e.index] || "$content", [c2, k = ""] = isPlainObject(s2) ? s2[C2.value].split("$content") : s2.split("$content");
      return e.display.map((v2) => h("div", b([c2, ...v2, k])));
    }
    return e.display.map((s2) => h("div", b(s2)));
  }, S = () => {
    m.value = 0, d.value = 0, a("updateQuery", ""), a("close");
  }, X = () => H ? h("ul", { class: "slimsearch-result-list" }, h("li", { class: "slimsearch-result-list-item" }, [h("div", { class: "slimsearch-result-title" }, r.value.queryHistory), p.value.map((e, s2) => h("div", { class: ["slimsearch-result-item", { active: u.isQuery && u.index === s2 }], onClick: () => {
    a("updateQuery", e);
  } }, [h(l, { class: "slimsearch-result-type" }), h("div", { class: "slimsearch-result-content" }, e), h("button", { class: "slimsearch-remove-icon", innerHTML: h$1, onClick: (c2) => {
    c2.preventDefault(), c2.stopPropagation(), q(s2);
  } })]))])) : null, Z = () => g ? h("ul", { class: "slimsearch-result-list" }, h("li", { class: "slimsearch-result-list-item" }, [h("div", { class: "slimsearch-result-title" }, r.value.resultHistory), o$1.value.map((e, s2) => h(RouteLink, { to: e.link, class: ["slimsearch-result-item", { active: !u.isQuery && u.index === s2 }], onClick: () => {
    S();
  } }, () => [h(l, { class: "slimsearch-result-type" }), h("div", { class: "slimsearch-result-content" }, [e.header ? h("div", { class: "content-header" }, e.header) : null, h("div", e.display.map((c2) => b(c2)).flat())]), h("button", { class: "slimsearch-remove-icon", innerHTML: h$1, onClick: (c2) => {
    c2.preventDefault(), c2.stopPropagation(), T(s2);
  } })]))])) : null;
  return useEventListener("keydown", (e) => {
    if (t.isFocusing) {
      if (I.value) {
        if (e.key === "ArrowUp") G();
        else if (e.key === "ArrowDown") z();
        else if (e.key === "Enter") {
          const s2 = D2.value.contents[d.value];
          h$2(t.queries.join(" ")), R(s2), i2.push(E(s2)), S();
        }
      } else if (g) {
        if (e.key === "ArrowUp") B();
        else if (e.key === "ArrowDown") N();
        else if (e.key === "Enter") {
          const { index: s2 } = u;
          u.isQuery ? (a("updateQuery", p.value[s2]), e.preventDefault()) : (i2.push(o$1.value[s2].link), S());
        }
      }
    }
  }), watch([m, d], () => {
    var _a;
    (_a = document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active")) == null ? void 0 : _a.scrollIntoView(false);
  }, { flush: "post" }), () => h("div", { class: ["slimsearch-result-wrapper", { empty: t.queries.length ? !I.value : !F.value }], id: "slimsearch-results" }, t.queries.length ? Y.value ? h(s, { hint: r.value.searching }) : I.value ? h("ul", { class: "slimsearch-result-list" }, n$1.value.map(({ title: e, contents: s2 }, c$1) => {
    const k = m.value === c$1;
    return h("li", { class: ["slimsearch-result-list-item", { active: k }] }, [h("div", { class: "slimsearch-result-title" }, e || r.value.defaultTitle), s2.map((v2, ee) => {
      const O = k && d.value === ee;
      return h(RouteLink, { to: E(v2), class: ["slimsearch-result-item", { active: O, "aria-selected": O }], onClick: () => {
        h$2(t.queries.join(" ")), R(v2), S();
      } }, () => [v2.type === "text" ? null : h(v2.type === "title" ? c : v2.type === "heading" ? n : o, { class: "slimsearch-result-type" }), h("div", { class: "slimsearch-result-content" }, [v2.type === "text" && v2.header ? h("div", { class: "content-header" }, v2.header) : null, h("div", J(v2))])]);
    })]);
  })) : r.value.emptyResult : w ? F.value ? [X(), Z()] : r.value.emptyHistory : r.value.emptyResult);
} });
export {
  Le as default
};
