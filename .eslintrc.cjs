/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [{
    extends: ["plugin:storybook/recommended","next", "next/core-web-vitals", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
    files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)","*.ts", "*.tsx"],
    parserOptions: {
      project: "tsconfig.json"
    }
  }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  rules: {
    "storybook/hierarchy-separator": "error",
    "no-unused-vars": [1, {
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }],
    "@typescript-eslint/consistent-type-imports": ["warn", {
      prefer: "type-imports",
      fixStyle: "inline-type-imports"
    }],
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_"
    }]
  }
};
module.exports = config;