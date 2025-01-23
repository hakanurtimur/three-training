import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixefilly: ["PixefillySans", "sans-serif"],
      },
      colors: {
        primary: colors.slate,
        secondary: colors.zinc,
        "midnight-blue": "#2C3E50",
        "space-gray": "#34495E",
        "star-white": "#ECF0F1",
        "solar-gold": "#F1C40F",
        "meteor-red": "#E74C3C",
        "comet-cyan": "#1ABC9C",
        "nebula-purple": "#9B59B6",
        "lunar-light": "#BDC3C7",
        "asteroid-silver": "#95A5A6",
        "void-black": "#2C3E50",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
