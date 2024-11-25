<div align="center">
  <img src="https://github.com/kumikojs/.github/blob/main/assets/%40kumikojs/tooling/kumiko-tooling.svg?raw=true" alt="KumikoJS Tooling"  />
</div>

## Packages

| Package                                                 | Version                                                                                                                       | Downloads                                                                                                                      |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [@kumikojs/eslint-config](./packages/eslint-config)     | [![npm](https://img.shields.io/npm/v/@kumikojs/eslint-config.svg)](https://www.npmjs.com/package/@kumikojs/eslint-config)     | [![npm](https://img.shields.io/npm/dm/@kumikojs/eslint-config.svg)](https://www.npmjs.com/package/@kumikojs/eslint-config)     |
| [@kumikojs/prettier-config](./packages/prettier-config) | [![npm](https://img.shields.io/npm/v/@kumikojs/prettier-config.svg)](https://www.npmjs.com/package/@kumikojs/prettier-config) | [![npm](https://img.shields.io/npm/dm/@kumikojs/prettier-config.svg)](https://www.npmjs.com/package/@kumikojs/prettier-config) |
| [@kumikojs/tsconfig](./packages/tsconfig)               | [![npm](https://img.shields.io/npm/v/@kumikojs/tsconfig.svg)](https://www.npmjs.com/package/@kumikojs/tsconfig)               | [![npm](https://img.shields.io/npm/dm/@kumikojs/tsconfig.svg)](https://www.npmjs.com/package/@kumikojs/tsconfig)               |

## Quick Start

```bash
# Install all configs (using pnpm)
pnpm add -D @kumikojs/eslint-config @kumikojs/prettier-config @kumikojs/tsconfig
```

### ESLint Configuration

```javascript
// .eslintrc.js
export default {
  extends: [
    "@kumikojs/eslint-config/typescript",
    "@kumikojs/eslint-config/prettier", // Always last!
  ],
};
```

Available configs:

- `@kumikojs/eslint-config/base` - Base JavaScript configuration
- `@kumikojs/eslint-config/typescript` - TypeScript configuration
- `@kumikojs/eslint-config/react` - React + TypeScript configuration
- `@kumikojs/eslint-config/node` - Node.js + TypeScript configuration
- `@kumikojs/eslint-config/next` - Next.js configuration
- `@kumikojs/eslint-config/prettier` - Prettier integration

### Prettier Configuration

```javascript
// prettier.config.js
export default {
  ...(await import("@kumikojs/prettier-config").then((m) => m.default)),
};
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "extends": "@kumikojs/tsconfig/base.json"
}
```

Available configs:

- Base: `@kumikojs/tsconfig/base.json`
- Runtime:
  - Node.js: `@kumikojs/tsconfig/runtime/node.json`
  - Browser: `@kumikojs/tsconfig/runtime/browser.json`
- Frameworks:
  - React: `@kumikojs/tsconfig/frameworks/react.json`
  - Vite: `@kumikojs/tsconfig/frameworks/vite.json`
- Library Presets:
  - Base: `@kumikojs/tsconfig/presets/lib-base.json`
  - Node.js: `@kumikojs/tsconfig/presets/lib-node.json`
  - Browser: `@kumikojs/tsconfig/presets/lib-browser.json`
  - React: `@kumikojs/tsconfig/presets/lib-react.json`

## License

[MIT](LICENSE) © KumikoJS
