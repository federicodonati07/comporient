import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react"; // Use import instead of require

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lora: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
