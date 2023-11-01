/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {import('prettier-plugin-tailwindcss').PluginOptions} TailwindcssConfig*/
/** @typedef  {import('@trivago/prettier-plugin-sort-imports').PluginConfig} SortImportConfig*/

/** @type {PrettierConfig | TailwindcssConfig | SortImportConfig} */
const config = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^~/config/(.*)$",
    "^~/lib/(.*)$",
    "^~/server/(.*)$",
    "^~/types/(.*)$",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/app/(.*)$",
    "^~/styles/(.*)$",
    "^[./]",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
