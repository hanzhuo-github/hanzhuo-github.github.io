import { arraySidebar } from "vuepress-theme-hope";

export const ai = arraySidebar([
  {
    text: "Hugging Face NLP",
    collapsible: false,
    link: "huggingface-nlp/",
    prefix: "huggingface-nlp/",
    icon: "iconfont icon-huggingface",
    children: [
      {
        text: "👋	Hugging Face 初步",
        prefix: "section1/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "👌 Hugging Face 深入",
        prefix: "section2/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "🤟 Hugging Face 高级",
        prefix: "section3/",
        collapsible: true,
        children: "structure",
      },
    ],
  },
  {
    text: "Deep RL",
    collapsible: false,
    link: "deep-rl/",
    prefix: "deep-rl/",
    icon: "iconfont icon-rl",
    children: "structure",
  },
  {
    text: "理论",
    collapsible: false,
    prefix: "theory/",
    icon: "iconfont icon-theory",
    children: ["metrics"],
  },
  {
    text: "ISL",
    collapsible: false,
    link: "statisticalLearning/",
    prefix: "statisticalLearning/",
    icon: "iconfont icon-book",
    children: ["", "introduction"],
  },
]);
