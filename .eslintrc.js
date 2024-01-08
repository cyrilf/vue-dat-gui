module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    semi: 0,
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
      },
    ],
  },
};
