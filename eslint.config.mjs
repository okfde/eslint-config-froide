import typescriptEslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

export default [
  {
    ignores: ['**/node_modules', '**/static', '**/build']
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    plugins: {
      'typescript-eslint': typescriptEslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    }
  },
  prettier
]
