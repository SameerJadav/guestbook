/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@trivago/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^(~/utils/(.*)$)|^(~/utils)",
    "^~/components/(.*)$",
    "^~/config",
    "^~/styles/(.*)$",
    "^[./]",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
