import { arraySidebar } from "vuepress-theme-hope";

export const javascript = arraySidebar([
  "variable-type",
  "prototype",
  "closure",
  "this",
  "currying",
  "recurrent-request",
  "module",
  "js-string",
  {
    text: "JS Runtime",
    collapsible: true,
    link: "js-runtime/",
    prefix: "js-runtime/",
    children: "structure",
  },
  {
    text: "Grammar",
    collapsible: true,
    link: "grammar/",
    prefix: "grammar/",
    children: [
      "Promise",
      "Object",
      "modules",
      "js-array",
      "iterables",
      "generator",
      "Symbol",
      "bigint",
      "Blob",
      "ArrayBuffer",
    ],
  },
]);
