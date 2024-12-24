import { arraySidebar } from "vuepress-theme-hope";

export const coding = arraySidebar([
  {
    text: "数据结构",
    collapsible: false,
    prefix: "data-structure/",
    icon: "iconfont icon-ds",
    children: "structure",
  },
  {
    text: "设计模式",
    collapsible: false,
    link: "design-pattern/",
    prefix: "design-pattern/",
    icon: "iconfont icon-dp",
    children: "structure",
  },
  {
    text: "正则表达式",
    collapsible: false,
    prefix: "re/",
    icon: "iconfont icon-re",
    children: "structure",
  },
]);
