import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/vars.css'

// https://vitepress.dev/guide/custom-theme
// import DefaultTheme from 'vitepress/theme'
// import { h } from 'vue'

import Layout from './Layout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  // extends: DefaultTheme,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  async enhanceApp({ app, router, siteData }) {
    // ...
    if (!import.meta.env.SSR) {
      const FlujoResiduosSolidosUrbanosCDMX = await import(
        './../../../src/index.js'
      )
      app.use(FlujoResiduosSolidosUrbanosCDMX.default)
    }
  },
}
