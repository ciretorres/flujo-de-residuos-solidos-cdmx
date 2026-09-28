// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
// import Layout from './Layout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  // Layout,
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    // ...
    const FlujoResiduosSolidosUrbanosCDMX = await import('./../../../src/main.js')
    app.use(FlujoResiduosSolidosUrbanosCDMX.default)
  },
}
