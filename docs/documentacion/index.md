
En una página Markdown de VitePress se pueden importar y renderizar componentes Vue dentro del bloque `<script setup>`.

## 7. `package.json`

Añade estos scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
