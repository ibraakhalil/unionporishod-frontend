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
        primary: {
          DEFAULT: "rgb(var(--primary-color))",
        },
        "subtitle-color": "rgb(var(--subtitle-color))",
      },
      fontFamily: {
        siliguri: ["Hind Siliguri"],
      },
    },
  },
  plugins: [],
};
export default config;
