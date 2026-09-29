import { defineConfig } from 'vitepress'

import pkg from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '',
      },
    ],
  ],
  lang: 'es-mx',

  // Sustituye "mi-componente-vue" por el nombre real del repositorio.
  base: '/flujo-de-residuos-solidos-cdmx/',
  // base: '/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-search
    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' },
      { text: 'Documentación', link: '/documentacion/index' },
      { text: `v${pkg.version}`, link: pkg.repository.url },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' },
        ],
      },
    ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    socialLinks: [{ icon: 'github', link: pkg.repository.url }],
  },
})
