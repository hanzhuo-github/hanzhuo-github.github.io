import { sidebar } from "vuepress-theme-hope";

import { ai } from "./ai.js";
import { coding } from "./coding.js";
import { frontEnd } from "./frontEnd/index.js";

export const zhSidebar = sidebar({
  "/basic/character-encoding/": ["Chapter1.md", "Chapter2.md", "Chapter3.md"],
  "/basic/os/": ["command.md"],
  "/basic/network/": [
    "index.md",
    {
      text: "底层网络知识",
      collapsible: true,
      link: "/basic/network/section1/",
      prefix: "section1/",
      children: "structure",
    },
  ],

  "/front-end/": frontEnd,
  "/coding/": coding,
  "/pl/rust/": "structure",
  "/pl/go/": "structure",
  "/pl/blockchain/": "structure",
  "/dev/": "structure",
  "/ai/": ai,

  // fallback
  "/": ["", "front-end/", "coding/", "dev/"],
});
