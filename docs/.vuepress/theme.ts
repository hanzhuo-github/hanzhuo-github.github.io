import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index";

export default hopeTheme({
  author: {
    name: 'Soul',
    email: 'hanzhuosoul@gmail.com',
  },
  repo: "hanzhuo-github/hanzhuo-github.github.io",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  plugins: {
    mdEnhance: {
      card: true,
    },
    comment: {
      provider: "Waline",
      serverURL: "comments.richzone.ink/", // your serverURL
    },
    components: {
      components: [
        "Badge",
        "Share",
      ],
    },
  },

  // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
  iconAssets: "fontawesome-with-brands",

  // 支持全屏模式
  fullscreen: true,

  locales: {
    '/': {
      navbar: zhNavbar,
    },
    '/en/': {
      navbar: enNavbar,
    },
  },
})