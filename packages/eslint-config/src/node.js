/** @type {import('eslint').Linter.Config} */
export default {
  extends: ["./typescript"],
  env: {
    node: true,
  },
  rules: {
    "no-process-exit": "error",
    "no-sync": "warn",
    "handle-callback-err": "error",
  },
};
