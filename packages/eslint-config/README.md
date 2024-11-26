<div align="center">
  <img src="https://github.com/kumikojs/.github/blob/main/assets/%40kumikojs/tooling/kumiko-eslint-config.svg?raw=true" alt="KumikoJS ESLint Config"  />
</div>

## Installation

```bash
pnpm add -D eslint @kumikojs/eslint-config
```

## Usage

Create `.eslintrc.js` (ESM format):

```js
// Basic JavaScript/TypeScript
export default {
  extends: [
    '@kumikojs/eslint-config-experimental/typescript'
  ]
}

// React + TypeScript
export default {
  extends: [
    '@kumikojs/eslint-config-experimental/react'
  ]
}

// Node.js + TypeScript
export default {
  extends: [
    '@kumikojs/eslint-config-experimental/node'
  ]
}

// With Prettier (add last)
export default {
  extends: [
    '@kumikojs/eslint-config-experimental/typescript',
    '@kumikojs/eslint-config-experimental/prettier'
  ]
}
```

## Available Configs

- `@kumikojs/eslint-config/base` - Base JavaScript/TypeScript rules
- `@kumikojs/eslint-config/node` - Node.js specific rules
- `@kumikojs/eslint-config/prettier` - Prettier integration (must be last)
- `@kumikojs/eslint-config/react` - React and JSX rules
- `@kumikojs/eslint-config/typescript` - TypeScript specific rules

## Git Integration

Create `.eslintignore`:

```gitignore
# Distributions
dist
build

# Dependencies
node_modules

# Package Manager Files
pnpm-lock.yaml
package-lock.json
yarn.lock

# Cache
.cache
.next
.nuxt

# Coverage Reports
coverage

# Editor
.vscode
.idea
```

## License

MIT © KumikoJS
