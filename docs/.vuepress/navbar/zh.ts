import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "前端",
    icon: "fas fa-laptop-code",
    prefix: "/front-end/",
    children: [
      {
        text: "JavaScript",
        link: "js/variable-type",
        icon: "iconfont icon-js",
        activeMatch: "^/js/$",
      },
      {
        text: "浏览器",
        link: "browser/DOM",
        icon: "iconfont icon-browser",
      },
      {
        text: "框架",
        children: [
          {
            text: "Vue",
            link: "vue/frame-design",
            icon: "iconfont icon-vuejs",
          },
          {
            text: "React",
            link: "react/intro",
            icon: "iconfont icon-react",
          },
        ],
      },
      {
        text: "工程化",
        icon: "iconfont icon-project",
        link: "configuration//1-module",
      },
    ],
  },
  {
    text: "开发相关",
    icon: "fas fa-code",
    link: "/dev/",
  },
  {
    text: "coding",
    icon: "fas fa-keyboard",
    prefix: "/coding/",
    children: [
      {
        text: "数据结构",
        link: "data-structure/1-intro",
        icon: "iconfont icon-ds",
        activeMatch: "^/data-structure/$",
      },
      {
        text: "设计模式",
        link: "design-pattern/",
        icon: "iconfont icon-dp",
      },
      {
        text: "正则表达式",
        link: "re/",
        icon: "iconfont icon-re",
      },
    ],
  },
  {
    text: "其他",
    icon: "fas fa-lemon",
    children: [
      // {
      //   text: "Rust",
      //   link: "rust/",
      // },
      // {
      //   text: "Go",
      //   link: "go/",
      // },
      // {
      //   text: "区块链",
      //   link: "blockchain/",
      // },
      {
        text: "huggingface",
        link: "/ai/huggingface-nlp/",
        icon: "iconfont icon-huggingface",
        activeMatch: "^/huggingface-nlp/$",
      },
    ],
  },
]);
