module.exports = {
  ignorePatterns: ['bin', 'node_modules'],
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "prettier", "@typescript-eslint"],
  rules: {
    // prettier
    "prettier/prettier": ["error"],
    // TypeScript
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-member-accessibility": [ "off", { "accessibility": "explicit" } ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": 
    [ "error", 
      { 
        "multiline": { "delimiter": "semi",  "requireLast": true },
        "singleline": { "delimiter": "semi", "requireLast": false }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE"]
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    // v4 changes
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // import
    "import/no-deprecated": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
};
