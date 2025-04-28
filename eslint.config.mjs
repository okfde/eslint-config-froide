import typescriptEslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import eslint from '@eslint/js'

export default typescriptEslint.config(
  {
    ignores: [
      '**/node_modules',
      '**/static',
      '**/build',
      '*.d.ts',
      '**/coverage',
      '**/htmlcov'
    ]
  },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/strongly-recommended']
    ],
    files: ['**/*.ts', '**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
        sourceType: 'module'
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase']
    }
  },
  eslintConfigPrettier
)
