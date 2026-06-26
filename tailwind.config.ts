import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0F1113",
        champagne: "#CBA968",
        ivory: "#F7F4EE",
        stone: "#D8D5CF"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Montserrat", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
