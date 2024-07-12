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
          DEFAULT: "rgb(var(--color-primary))",
          bg: "rgb(var(--color-primary-bg))",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          bg: "rgb(var(--color-secondary-bg))",
        },
        title: "rgb(var(--color-title))",
        subtitle: "rgb(var(--color-subtitle))",
        pure: "#ffffff",
        dark: "#000000",
      },
      fontFamily: {
        siliguri: ["Hind Siliguri"],
      },
    },
  },
  plugins: [],
};
export default config;
