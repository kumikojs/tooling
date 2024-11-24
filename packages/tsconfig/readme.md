<div align="center">
  <img src="https://github.com/kumikojs/.github/blob/main/assets/%40kumikojs/tooling/kumiko-tsconfig.svg?raw=true" alt="KumikoJS TypeScript Configuration"  />
</div>

## Installation

```bash
pnpm add -D @kumikojs/tsconfig
```

## Usage

### Base Configuration

```json
{
  "extends": "@kumikojs/tsconfig/base.json"
}
```

### Runtime Configurations

#### Node.js

```json
{
  "extends": "@kumikojs/tsconfig/runtime/node.json"
}
```

#### Browser

```json
{
  "extends": "@kumikojs/tsconfig/runtime/browser.json"
}
```

### Framework Configurations

#### React

```json
{
  "extends": "@kumikojs/tsconfig/frameworks/react.json"
}
```

#### Vite

```json
{
  "extends": "@kumikojs/tsconfig/frameworks/vite.json"
}
```

### Library Presets

#### Base Library

```json
{
  "extends": "@kumikojs/tsconfig/presets/lib-base.json"
}
```

#### Node.js Library

```json
{
  "extends": "@kumikojs/tsconfig/presets/lib-node.json"
}
```

#### Browser Library

```json
{
  "extends": "@kumikojs/tsconfig/presets/lib-browser.json"
}
```

#### React Library

```json
{
  "extends": "@kumikojs/tsconfig/presets/lib-react.json"
}
```

## License

MIT
