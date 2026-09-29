// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import MyHero from './components/VPHero/MyHero.vue'

import Layout from './Layout.vue'

import { h } from 'vue'

import './custom.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  // Layout,
  extends: DefaultTheme,

  // async enhanceApp({ app, router, siteData }) {
  async enhanceApp({ app }) {
    // ...
    const FlujoResiduosSolidosUrbanosCDMX = await import('./../../../src/main.js')
    app.use(FlujoResiduosSolidosUrbanosCDMX.default)

    app.component('MyHero', MyHero)
  },

  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
}
