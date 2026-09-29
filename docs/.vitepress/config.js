import { defineConfig } from 'vitepress'

import pkg from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Flujo de RSU de la CDMX',
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
      { text: 'Comienza', link: '/comienza/introduccion' },
      { text: 'Documentación', link: '/documentacion/index' },
      { text: `v${pkg.version}`, link: pkg.repository.url },
    ],

    sidebar: [
      {
        text: 'Comienza',
        items: [
          { text: 'Introducción', link: '/comienza/introduccion' },
          { text: 'Instalación', link: '/comienza/instalacion' },
          { text: 'Estructura', link: '/comienza/estructura' },
          { text: 'Documentación', link: '/documentacion/index' },
          { text: 'Colabora', link: '/comienza/colabora' },
        ],
      },
    ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    socialLinks: [{ icon: 'github', link: pkg.repository.url }],
  },
})
