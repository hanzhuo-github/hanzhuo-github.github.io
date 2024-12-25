import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  // favicon: "favicon.ico",
  favicon: "avatar.svg",

  author: {
    name: "Hertz",
    // url: "https://mister-hope.com",
    // email: "hanzhuosoul@gmail.com",
  },

  // https://fontawesome.com/search?o=r&m=free&f=brands

  iconAssets: [
    "//at.alicdn.com/t/c/font_4793637_2lrcv6o69nb.css",
    "fontawesome",
  ],

  // iconPrefix: "fas fa-",

  // logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "hanzhuo-github/hanzhuo-github.github.io",

  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: [
      // "Language",
      "Repo",
      "Outlook",
      "Search",
    ],
  },

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      displayFooter: true,

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  prevLink: true,
  nextLink: true,

  markdown: {
    sub: true,
    sup: true,
    spoiler: true,
    mark: true,
    attrs: true,
    align: true,
    include: true,
    vPre: true,
    plantuml: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    math: true,
    codeTabs: true,
    tabs: true,
    tasklist: true,
    component: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    highlighter: {
      type: "prismjs",
      themes: {
        light: "one-light",
        dark: "tomorrow",
      },
      lineNumbers: 6,
    },
  },

  plugins: {
    slimsearch: true,

    comment: {
      provider: "Giscus",
      repo: "hanzhuo-github/hanzhuo-github.github.io",
      repoId: "R_kgDONhniEA",
      category: "General",
      categoryId: "DIC_kwDONhniEM4Clezk",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },

  fullscreen: true,
  print: false,
});
