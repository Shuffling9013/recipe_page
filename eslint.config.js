import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["docs/**/*", "dist/**/*"],
    files: ["**/*css"],
    language: "css/css",
    plugins: { css },
    extends: ["css/recommended"],
  },
]);
