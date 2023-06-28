import { defineUserConfig } from 'vuepress'
import theme from './theme';

export default defineUserConfig({
  theme,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'MicroTiny',
      description: 'Vue 驱动的静态网站生成器',
    },
    '/en/': {
      lang: 'en-US',
      title: 'MicroTiny',
      description: 'Vue-powered Static Site Generator',
    },
  },
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
})