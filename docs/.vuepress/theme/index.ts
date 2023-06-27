import { defaultTheme } from 'vuepress'
import navbar from './navbar'
import navbarEn from './navbar_en'

export default defaultTheme({
  locales: {
    '/': {
      selectLanguageText: '语言',
      selectLanguageName: '简体中文',
      navbar: navbar,
    },
    '/en/': {
      selectLanguageText: 'Languages',
      selectLanguageName: 'English',
      navbar: navbarEn,
    },
  },
})