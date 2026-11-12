import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
  ]),
]);

export default eslintConfig;
