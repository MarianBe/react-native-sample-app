module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "prettier",
    "prettier/standard"
  ],
  plugins: ["react"],
  // add your custom rules here
  rules: {
    camelcase: ["off", { properties: "never" }],
    "array-element-newline": ["error", "never"],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    quotes: ["error", "single"],
    semi: ["error", "never"]
  },
  globals: {}
}
