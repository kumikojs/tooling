<div align="center">
  <img src="https://github.com/kumikojs/.github/blob/main/assets/%40kumikojs/tooling/kumiko-prettier-config.svg?raw=true" alt="KumikoJS Prettier Config"  />
</div>

## Installation

```bash
pnpm add -D prettier @kumikojs/prettier-config
```

## Usage

Add to `package.json`:

```json
{
  "prettier": "@kumikojs/prettier-config"
}
```

## Configuration

```js
/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // No semicolons
  singleQuote: true, // Use single quotes
  tabWidth: 2, // 2 spaces indentation
  trailingComma: "none", // No trailing commas
  printWidth: 80, // Line length
  bracketSpacing: true, // Spaces in object literals
  bracketSameLine: false, // Brackets on new lines
  arrowParens: "always", // Parentheses around arrow function parameters
  endOfLine: "lf", // Unix-style line endings
  singleAttributePerLine: true, // HTML/JSX attributes on new lines
};
```

## Module System

### Why CommonJS?

We use `module.exports` instead of ESM because the `"prettier"` field in `package.json` is designed to work with CommonJS modules.

### ESM Override

```js
// prettier.config.js
/** @type {import("prettier").Config} */
export default {
  ...(await import("@kumikojs/prettier-config", { assert: { type: "json" } }))
    .default,
  // Your overrides
  semi: true,
};
```

## Editor Integration

### VSCode

1. Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Git Integration

Create `.prettierignore`:

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

## Requirements

- Node.js >= 20.0.0
- Prettier >= 3.3.3

## License

MIT © KumikoJS
