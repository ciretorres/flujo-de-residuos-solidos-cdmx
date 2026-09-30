import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginOxlint from 'eslint-plugin-oxlint'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: [
      '**/.git',
      '**/.nuxt',

      '**/dist/**',
      '**/dist-ssr/**',
      '**/.vitepress/cache/**',
      '**/.vitepress/dist/**',

      '**/node_modules/**',
      '**/package.json',
      '**/package-lock.json',
      '**/coverage/**',
      '**/libs',

      '**/deprecated/**',
    ],
  },

  eslint.configs.recommended,

  ...eslintPluginVue.configs['flat/recommended'],

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  {
    files: ['**/*.{vue,js,jsx,mjs,cjs,ts,tsx}'],

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
