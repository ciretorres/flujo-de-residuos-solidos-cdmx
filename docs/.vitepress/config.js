import { createRequire } from 'module'
// import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)

const pkg = require('../../package.json')

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Documentación', link: '/markdown-examples' },
    // { text: 'Documentación', link: '/documentacion' },
  ]
}
function sidebar() {
  return [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' },
      ],
    },
  ]
}

// https://vitepress.dev/reference/site-config
// export default defineConfig({
export default {
  lang: 'es-mx',
  title: 'Flujo de RSU de la CDMX',
  description: pkg.description,
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' },
    // ],
    nav: nav(),

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],
    // sidebar: sidebar(),

    socialLinks: [
      {
        icon: 'github',
        link: pkg.repository.url || '',
        // link: 'https://github.com/vuejs/vitepress'
        ariaLabel: '',
      },
    ],
  },
}
