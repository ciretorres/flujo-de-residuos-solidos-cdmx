# Estructura principal

Una estructura habitual de VitePress es:

```md
.
├── .github/
├── .vscode/
├── docs/
│ ├── .vitepress/
| │ ├── theme/
| | │ ├── components/
| | | │ ├── VPHero/
| | | │ │ └── MyHeroe.vue
| | │ │ └── basico.vue
| | │ ├── composables/
| | │ │ └── usarDatosApi.js
| | │ ├── utils/
| | │ │ └── fetchJson.js
| | | |
| | │ ├── custom.css
| | │ ├── index.js
| | │ ├── Layout.vue
| │ │ └── style.css
│ │ └── config.js
| |
│ ├── comienza/
| │ ├── colabora.md
| │ ├── estructura.md
| │ ├── instalacion.md
│ │ └── introduccion.md
| |
│ ├── documentacion/
│ │ └── index.md
| |
│ ├── public/
| │ ├── bibliografia
| │ ├── data/
| │ ├── img/
│ │ └── favicon.ico
│ └── index.md
|
├── public/
|
├── src/
│ ├── assets/
│ ├── components/
| │ ├── flujo-residuos-solidos-urbanos-cdmx/
| | │ ├── FlujoResiduosSolidosUrbanosCDMX.vue
| │ │ └── index.js
│ │ └── index.js
│ ├── App.vue
│ └── main.js
|
├── .gitattributes
├── .gitignore
├── index.html
├── package.json
├── .editorconfig
├── .oxlintrc.json
├── .prettierignore
├── .prettierrc.json
├── bun.lock
├── eslint.config.js
├── package-lock.md
├── REAME.md
├── vite.config.js
└── jsconfig.json
```

- docs/: contiene el sitio de documentación.
- docs/.vitepress/config.js: configuración principal de VitePress.
- docs/public/data: contiene los datasets para el gráfico
- docs/index.md: página inicial.
- Otros archivos .md: páginas adicionales de documentación.
- src/components: contiene el componente para hacer el sankey
- src/main.js: contiene la configuración para exportar el componente

## Comandos disponibles

```bash
# Iniciar el servidor local
npm run docs:dev

# Generar la versión de producción
npm run docs:build

# Previsualizar la versión generada
npm run docs:preview

```
