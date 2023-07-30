/** @typedef  {import("@trivago/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  tabWidth: 2,
  semi: false,
  arrowParens: "always",
  trailingComma: "all",
  singleQuote: false,
  jsxSingleQuote: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^~/config/(.*)$",
    "^~/lib/(.*)$",
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
}

module.exports = config
