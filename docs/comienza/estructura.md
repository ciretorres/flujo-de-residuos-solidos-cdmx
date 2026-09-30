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
| | │ ├── composables/
| | │ ├── style/
| | │ ├── utils/
| | │ ├── index.js
| | │ ├── Layout.vue
│ │ └── config.js
| |
│ ├── comienza/
│ ├── documentacion/
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
│ │ └── index.js
│ └── main.js
|
├── .gitattributes
├── .gitignore
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
