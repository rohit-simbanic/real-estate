import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        teal: {
          600: "#4dc0b5",
        },
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        round: "50%",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  safelist: [
    "bg-teal-600",
    "border-0",
    "border-2",
    "hover:bg-transparent",
    "hover:bg-blue-600",
    "border-blue-600",
    "dark:bg-black",
    "dark:text-white",
    "capitalize",
    "py-8",
    "bg-blue-500",
  ],
  plugins: [],
};
export default config;
