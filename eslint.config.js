import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.vitepress/cache/**',
      '**/.vitepress/dist/**',
      '**/coverage/**',
    ],
  },

  eslint.configs.recommended,

  ...eslintPluginVue.configs['flat/recommended'],

  {
    files: ['**/*.{js,mjs,cjs,vue}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      // 'no-console': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
    },
  },

  eslintConfigPrettier,
]

// import { defineConfig, globalIgnores } from 'eslint/config'

// import js from '@eslint/js'
// import skipFormatting from 'eslint-config-prettier/flat'
// import pluginOxlint from 'eslint-plugin-oxlint'
// import pluginVue from 'eslint-plugin-vue'
// import globals from 'globals'

// export default defineConfig([
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{vue,js,mjs,jsx}'],
//   },

//   globalIgnores([
//     '**/node_modules/**',
//       '**/dist/**',
//       '**/.vitepress/cache/**',
//       '**/.vitepress/dist/**',
//       '**/coverage/**',
//     ]),

//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//       },
//     },
//   },

//   js.configs.recommended,

//   ...pluginVue.configs['flat/essential'],

//   ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

//   skipFormatting,
// ])
