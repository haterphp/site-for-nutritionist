import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Railway', 'Signika', 'sans-serif'],
      },
      colors: {
        primary: {
          main: "#517047",
          dark: "#3b4f34"
        },
        secondary: {
          main: "#424242",
          dark: "#272324"
        },
      },
      gridTemplateColumns: {
        sidebar: '300px 1fr',
        "sidebar-reverse": '1fr 300px',
      }
    },
  },
  plugins: [],
};
export default config;
