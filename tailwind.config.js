/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Rich navy blue, matching the current melbournefoundation.org site
        navy: {
          DEFAULT: "#003366",
          50: "#eef3f9",
          100: "#d3e0ee",
          200: "#a6c0dc",
          300: "#6f97c1",
          400: "#3d6ca0",
          500: "#184c7f",
          600: "#0b3a68",
          700: "#022c55",
          800: "#022346",
          900: "#04182f",
          950: "#020f1f",
        },
        gold: {
          DEFAULT: "#c08a2d",
          soft: "#ecd9ae",
          light: "#d9a94f",
          bright: "#f2d9a0",
        },
        paper: {
          DEFAULT: "#f5f7fa",
          warm: "#eef2f7",
          card: "#ffffff",
        },
        ink: "#1f2a37",
        "ink-soft": "#5a6675",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "-apple-system", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        arch: "999px 999px 26px 26px",
        "arch-sm": "999px 999px 16px 16px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(2, 35, 70, 0.06), 0 12px 30px rgba(2, 35, 70, 0.08)",
        lift: "0 6px 16px rgba(2, 35, 70, 0.10), 0 28px 60px rgba(2, 35, 70, 0.16)",
        glow: "0 0 0 1px rgba(217, 169, 79, 0.35), 0 18px 50px rgba(192, 138, 45, 0.28)",
      },
      keyframes: {
        aurora: {
          "0%,100%": { transform: "translate(-10%, -10%) rotate(0deg)" },
          "50%": { transform: "translate(10%, 10%) rotate(180deg)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "star-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        shine: "shine 6s linear infinite",
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
