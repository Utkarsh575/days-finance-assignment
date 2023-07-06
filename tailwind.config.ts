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
        accent:"#4E505E66",
        ribbon:"#1D1E32",
        placeholder:"#10122D",
        card:"rgba(34, 48, 65, 0.31)"
      },
    },
  },
  plugins: [],
} satisfies Config;
