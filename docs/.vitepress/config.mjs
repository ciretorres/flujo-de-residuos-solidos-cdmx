import pkg from '../../package.json'

function nav() {
  return [
    { text: 'Inicio', link: '/' },
    { text: 'Documentación', link: '/documentacion/' },
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
export default {
  lang: 'es-mx',
  title: 'Flujo de Residuos Sólidos Urbanos de la CDMX',
  description: pkg.description,
  base: '/flujo-de-residuos-solidos-cdmx/',
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
    // https://vitepress.dev/reference/default-theme-search
    search: {
      provider: 'local',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
  },
}
