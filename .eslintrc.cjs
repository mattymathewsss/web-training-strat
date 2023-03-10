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
    "react/no-unescaped-entities": 0 ,
    "storybook/hierarchy-separator": "error",
    "no-unused-vars": [1, {
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }],
    "@typescript-eslint/no-empty-interface": [
      0,
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/consistent-type-imports": [0, {
      prefer: "type-imports",
      fixStyle: "inline-type-imports"
    }],
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_"
    }]
  }
};
module.exports = config;