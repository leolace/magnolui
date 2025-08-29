import eslintJs from "@eslint/js";
import eslintImport from "eslint-plugin-import";
import eslintPrettier from "eslint-plugin-prettier/recommended";
import eslintReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import eslintTypescript from "typescript-eslint";

export default eslintTypescript.config([
  reactHooks.configs["recommended-latest"],
  eslintTypescript.configs.recommended,
  eslintPrettier,
  eslintReact.configs.flat["jsx-runtime"],
  storybook.configs["flat/recommended"],
  eslintJs.configs.recommended,

  // Rules for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2026,
      },
    },
    plugins: {
      import: eslintImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "never",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/newline-after-import": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
]);
