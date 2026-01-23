import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    ignores: ["**/dist/**"],
    rules: {
      "dot-notation": [
        "error",
        {
          allowPattern: "^[a-z0-9]+(_[a-z0-9]+)+$",
        },
      ],
      "no-console": "error",
      camelcase: ["error"],
      curly: "error",
      eqeqeq: ["error", "smart"],
    },
  },
  {
    files: ["**/*.{ts,mts,cts}"],
    plugins: { tseslint },
    extends: ["tseslint/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
    ignores: ["package-lock.json", "package.json", "tsconfig.json"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    extends: ["markdown/recommended"],
  },
]);
