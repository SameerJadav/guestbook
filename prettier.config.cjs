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
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    "@trivago/prettier-plugin-sort-imports",
  ],
  // plugin's options
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^~/lib/(.*)$",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/app/(.*)$",
    "^~/styles/(.*)$",
    "^[./]",
  ],
  importOrderCaseInsensitive: true,
}

module.exports = config
