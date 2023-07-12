import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index";
import { enSidebar, zhSidebar } from "./sidebar/index";

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
  iconAssets: "fontawesome",

  // 支持全屏模式
  fullscreen: true,

  print: false,

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      headerDepth: 3,
    },
    '/en/': {
      navbar: enNavbar,
      sidebar: enSidebar,
      headerDepth: 3,
    },
  },
})