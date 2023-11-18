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
        red: "#FF5555",
        blue: "#1125D6",
        green: "#00BB8F",
        yellow: "#FFB21E",
        "light-blue": "#CAC9FF",
        "dark-navy": "#303B59",
        "very-light-blue": "#ECF2FF",
      },
      fontFamily: {
        hanken: [
          "var('--font-hanken-grotesk')",
          { fontFeatureSettings: "'clig' off, 'liga' off" },
        ],
      },
      boxShadow: {
        score: "0px 30px 60px 0px rgba(61, 108, 236, 0.15)",
        container: "0px 30px 60px 0px rgba(61, 108, 236, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
