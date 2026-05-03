import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        success: "var(--success-color)",
        danger: "var(--danger-color)",
        warning: "var(--warning-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;