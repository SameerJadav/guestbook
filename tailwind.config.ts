import { amberDark, grayDark, redDark } from "@radix-ui/colors";
import { type Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...grayDark,
        ...amberDark,
        ...redDark,
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...theme.fontFamily.sans],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
