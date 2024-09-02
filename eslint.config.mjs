import typescriptEslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

export default [
  {
    ignores: ['**/node_modules', '**/static', '**/build']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  ...typescriptEslint.configs.recommended,
  prettier
]
