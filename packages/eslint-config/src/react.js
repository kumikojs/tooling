/**
 * @type {import('eslint').Linter.Config}
 * @property {import('eslint').Linter.RulesRecord} rules
 */
export default {
  extends: [
    "./typescript.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/hook-use-state": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-no-useless-fragment": "error",
  },
};
