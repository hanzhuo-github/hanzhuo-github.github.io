import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar([
  {
    text: "Hugging Face",
    collapsible: true,
    prefix: "/huggingface/",
    children: [
      "index.md",
      {
        text: "👋	Hugging Face 初步",
        prefix: "section1/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "👌 Hugging Face 深入",
        icon: "",
        prefix: "section2/",
        link: "",
        collapsible: true,
        children: "structure",
      },
      {
        text: "🤟 Hugging Face 高级",
        icon: "",
        prefix: "section3/",
        link: "",
        collapsible: true,
        children: "structure",
      }
    ],
  }
])