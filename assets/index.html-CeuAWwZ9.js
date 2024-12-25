import { r as resolveComponent, c as createElementBlock, d as createVNode, b as createStaticVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Catalog = resolveComponent("Catalog");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Catalog),
    _cache[0] || (_cache[0] = createStaticVNode('<h3 id="solid-原则" tabindex="-1"><a class="header-anchor" href="#solid-原则"><span>SOLID 原则</span></a></h3><ul><li>单一职责原则 (Single Responsibility Principle, SRP)</li></ul><p>每个类应该只有一个明确的职责。即一个类不应该包含多个导致其变化的原因。</p><p>目标：降低类的复杂度，提高代码的可读性和可维护性。 示例：如果一个类同时负责处理数据逻辑和展示层的代码，应将其拆分为两个独立的类，一个负责数据逻辑，一个负责展示。</p><ul><li>开闭原则 (Open/Closed Principle, OCP)</li></ul><p>软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。也就是说，应通过扩展来实现新功能，而不是通过修改已有代码。</p><p>目标：避免在已有功能上引入新的 bug，同时让系统保持灵活性。 示例：在类的基础上使用继承或者接口实现新功能，而不修改原有类的代码。</p><ul><li>里氏替换原则 (Liskov Substitution Principle, LSP)</li></ul><p>子类对象应该能够替换父类对象，并且程序的行为不应该改变。换句话说，子类必须能够在不改变程序正确性的前提下，扩展父类的功能。</p><p>目标：确保继承结构的正确性和一致性。 示例：如果某个父类的某个方法在子类中被重写，则子类的行为应该与父类保持一致，不能违背父类的约定。</p><ul><li>接口隔离原则 (Interface Segregation Principle, ISP)</li></ul><p>客户端不应该被迫依赖它们不需要的接口。也就是说，应将大的接口拆分成更小、更具体的接口，使客户端只需关注其感兴趣的方法。</p><p>目标：减少类之间的耦合，提高代码的灵活性和可维护性。 示例：如果一个接口包含多个方法，而某些类只使用其中一部分，可以将接口分解为多个小接口。</p><ul><li>依赖倒置原则 (Dependency Inversion Principle, DIP)</li></ul><p>高层模块不应该依赖于低层模块，两者都应该依赖于抽象。抽象（接口或抽象类）不应该依赖于具体实现，具体实现应该依赖于抽象。</p><p>目标：提高代码的可扩展性和灵活性。 示例：通过接口或抽象类来定义行为，然后具体的类实现这些接口，而不是直接依赖具体的实现类。</p>', 16))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/coding/design-pattern/","title":"设计模式","lang":"zh-CN","frontmatter":{"title":"设计模式","index":false,"article":false},"headers":[{"level":3,"title":"SOLID 原则","slug":"solid-原则","link":"#solid-原则","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"coding/design-pattern/index.md","localizedDate":"2024年12月24日","excerpt":""}');
export {
  index_html as comp,
  data
};
