import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "grey-2": "#181818",
        "dark-grey": "#0C120C",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
        helvetica: ['"Helvetica"', "sans-serif"],
        serif: ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

