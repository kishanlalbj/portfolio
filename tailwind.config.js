import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "shoot-left": {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(120vw)", opacity: "0" }
        }
      },
      animation: {
        shoot: "shoot var(--duration, 2s) linear var(--delay, 0s) infinite"
      },
      colors: {
        primary: "var(--color-primary)",
        background: "var(--bg-space)",
        secondary: "var(--bg-space-secondary)"
      }
    }
  },
  plugins: []
});
