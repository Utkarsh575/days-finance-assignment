import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#292D61",
        secondary: "#AEB7FF",
        active: "#41466A",
        tertiary: "#17192F",
        dark: "#0F0F0F",
      },
    },
  },
  plugins: [],
} satisfies Config;
