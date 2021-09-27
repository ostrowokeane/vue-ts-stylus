module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/valid-v-for": "off",
    "vue/require-v-for-key": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "all",
        vueIndentScriptAndStyle: false,
      },
    ],
  },
};
