import js from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    plugins: {
      js,
      prettier: pluginPrettier,
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-var": "error",
    },
  },
]);
