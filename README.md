# Froide ESLint Config

Shared ESLint config for Froide and related projects.

## Setup and Usage

Install the config and its peer dependencies:

```sh
pnpm add -D eslint prettier prettier-config-standard @okfde/eslint-config-froide
```

Then, create an `eslint.config.mjs` file:

```js
import config from '@okfde/eslint-config-froide'
export default config
```

That should be it!

```sh
pnpm eslint
```
