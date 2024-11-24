# @kumikojs/tsconfig

Shareable TypeScript configurations for different types of projects.

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

## Available Configurations

### Runtime

- `runtime/node.json`: Node.js runtime configuration
- `runtime/browser.json`: Browser runtime configuration

### Frameworks

- `frameworks/react.json`: React framework configuration
- `frameworks/vite.json`: Vite framework configuration

### Presets

- `presets/lib-base.json`: Base library configuration
- `presets/lib-node.json`: Node.js library configuration
- `presets/lib-browser.json`: Browser library configuration
- `presets/lib-react.json`: React library configuration

## Features

- Strict type checking enabled by default
- Modern ECMAScript features
- Optimized configurations for different environments
- Specialized presets for library development
- Framework-specific configurations
- Sensible defaults for modern development

## License

MIT
