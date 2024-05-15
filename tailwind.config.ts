import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(to right, #b3ffab, #12fff7);",
      },
      colors: {
        // darkmode
        "primary-dark": "#F3F4F6",
        "secondary-dark": "#E5E7EB",
        // lightmode
        "primary-light": "#1F2937",
        "secondary-light": "#374151",
        // gradient
        "primary-gradient": "#B3FFAB",
        "secondary-gradient": "#12FFF7",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flying: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0.8rem)" },
          "100%": { transform: "translateY(0)" },
        },
        badge: {
          "100%": {
            transform: "scaleY(1.7) scaleX(1.25)",
            opacity: "0",
          },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "90%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInfinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300%)" },
        },
        rainArrow: {
          "0%": { transform: "translateY(-100%)" },
          "40%": { transform: "translateY(-20%)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "flying-card": "flying 3s infinite normal",
        "badge-pulse": "badge 1.5s ease-out infinite",
        "slide-card": "slide 3s 1s ease-in-out",
        "slide-infinite": "slideInfinite 100s linear infinite",
        "rain-arrow": "rainArrow 1s ease-out infinite",
      },
      cursor: {
        pointer: "url(/new-tab.png), pointer",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
