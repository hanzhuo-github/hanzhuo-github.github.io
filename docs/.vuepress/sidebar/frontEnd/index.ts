import { javascript } from "./javascript.js";
import { arraySidebar } from "vuepress-theme-hope";

export const frontEnd = arraySidebar([
  {
    text: "JavaScript",
    prefix: "js/",
    icon: "iconfont icon-js",
    children: javascript,
  },
  {
    text: "浏览器",
    prefix: "browser/",
    icon: "iconfont icon-browser",
    children: "structure",
  },
  {
    text: "框架",
    icon: "iconfont icon-frameworks",
    children: [
      {
        text: "Vue",
        prefix: "vue/",
        icon: "iconfont icon-vuejs",
        children: "structure",
      },
      {
        text: "React",
        prefix: "react/",
        icon: "iconfont icon-react",
        children: "structure",
      },
    ],
  },
  {
    text: "工程化",
    icon: "iconfont icon-project",
    prefix: "configuration/",
    children: "structure",
  },
]);
