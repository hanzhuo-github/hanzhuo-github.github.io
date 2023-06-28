import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index";

export default hopeTheme({
  plugins: {
    mdEnhance: {
      card: true,
    },
    comment: {
      provider: "Waline",

      // waline 模式下
      serverURL: "https://comments.richzone.ink/", // your serverURL
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