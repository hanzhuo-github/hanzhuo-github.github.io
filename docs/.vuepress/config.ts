import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Hertz",
      description: "记录日常工作学习生活的笔记",
    },
    "/en/": {
      lang: "en-US",
      title: "Hertz",
      description: "Record notes for daily work, study and life",
    },
  },

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],

  alias: {
    "@MyCard": path.resolve(__dirname, "./components/Card.vue"),
    "/fonts": path.resolve(__dirname, "./fonts"),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
  bundler: viteBundler(),
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
});
