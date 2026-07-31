/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        "ink-soft": "#17171A",
        "ink-line": "#2A2A2C",
        paper: "#FAF8F4",
        "paper-dim": "#F1EEE6",
        gold: {
          DEFAULT: "#B8912F",
          light: "#D4B45E",
          pale: "#E9DBB0",
          deep: "#8A6A1E",
        },
        slate: {
          DEFAULT: "#6B6A66",
          light: "#93918A",
        },
        hairline: "#E4E0D6",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Public Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(11,11,12,0.06)",
        card: "0 8px 30px rgba(11,11,12,0.08)",
        "card-hover": "0 16px 40px rgba(11,11,12,0.14)",
        gold: "0 8px 24px rgba(184,145,47,0.25)",
      },
      backgroundImage: {
        "ink-panel":
          "linear-gradient(180deg, #0B0B0C 0%, #17171A 100%)",
      },
      keyframes: {
        "seal-in": {
          "0%": { transform: "scale(0.6) rotate(-8deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "seal-in": "seal-in 0.6s cubic-bezier(0.2,0.8,0.2,1) forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
