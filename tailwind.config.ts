import { grayDark, blue, red, yellow } from "@radix-ui/colors";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", ...fontFamily.sans],
      },
      colors: {
        gray: {
          1: grayDark.gray1,
          2: grayDark.gray2,
          3: grayDark.gray3,
          4: grayDark.gray4,
          5: grayDark.gray5,
          6: grayDark.gray6,
          7: grayDark.gray7,
          8: grayDark.gray8,
          9: grayDark.gray9,
          10: grayDark.gray10,
          11: grayDark.gray11,
          12: grayDark.gray12,
        },
        blue: {
          1: blue.blue1,
          2: blue.blue2,
          3: blue.blue3,
          4: blue.blue4,
          5: blue.blue5,
          6: blue.blue6,
          7: blue.blue7,
          8: blue.blue8,
          9: blue.blue9,
          10: blue.blue10,
          11: blue.blue11,
          12: blue.blue12,
        },
        red: {
          1: red.red1,
          2: red.red2,
          3: red.red3,
          4: red.red4,
          5: red.red5,
          6: red.red6,
          7: red.red7,
          8: red.red8,
          9: red.red9,
          10: red.red10,
          11: red.red11,
          12: red.red12,
        },
        yellow: {
          1: yellow.yellow1,
          2: yellow.yellow2,
          3: yellow.yellow3,
          4: yellow.yellow4,
          5: yellow.yellow5,
          6: yellow.yellow6,
          7: yellow.yellow7,
          8: yellow.yellow8,
          9: yellow.yellow9,
          10: yellow.yellow10,
          11: yellow.yellow11,
          12: yellow.yellow12,
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

export default config;
