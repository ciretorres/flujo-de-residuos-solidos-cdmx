import { createRequire } from 'module'
// import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)

const pkg = require('../../package.json')

function nav() {
  return [
    { text: 'Inicio', link: '/' },
    { text: 'Documentación', link: '/documentacion/' },
    // { text: 'My Awesome Project', link: '/my-awesome-project' },
    // { text: 'Markdown Examples', link: '/markdown-examples' },
    // { text: 'Runtime API Examples', link: '/api-examples' },
    { text: 'v' + pkg.version, link: pkg.repository.url },
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
// export default defineConfig({})
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
    nav: nav(),
    // sidebar: sidebar(),

    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: pkg.repository.url || '',
    //     // link: 'https://github.com/vuejs/vitepress'
    //     ariaLabel: '',
    //   },
    // ],
  },
}
