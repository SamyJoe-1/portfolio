import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4389ca",
          dark: "#2d6ba8"
        },
        ink: {
          DEFAULT: "#070c12"
        },
        panel: {
          DEFAULT: "#111c28"
        }
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Rubik", "Poppins", "sans-serif"],
        arabic: ["Rubik", "Noto Sans Arabic", "sans-serif"]
      },
      boxShadow: {
        brand: "0 8px 40px rgba(67, 137, 202, 0.18)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4389ca 0%, #2d6ba8 100%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.65)", opacity: "0" }
        },
        "space-float-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(12px, -16px) rotate(4deg)" },
          "66%": { transform: "translate(-8px, 8px) rotate(-3deg)" }
        },
        "space-float-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(-14px, 10px) rotate(-5deg)" },
          "66%": { transform: "translate(10px, -12px) rotate(4deg)" }
        },
        "space-float-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(8px, 14px) rotate(6deg)" },
          "66%": { transform: "translate(-12px, -6px) rotate(-4deg)" }
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
        "space-float-1": "space-float-1 14s ease-in-out infinite",
        "space-float-2": "space-float-2 18s ease-in-out infinite",
        "space-float-3": "space-float-3 22s ease-in-out infinite",
        "marquee-slow": "marquee-slow 35s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
