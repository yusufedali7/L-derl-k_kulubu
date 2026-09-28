import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Mirrors the --color-* variables in globals.css; hex here so /opacity modifiers work.
      colors: {
        ink: "#0F1A2E",
        navy: "#113275",
        "navy-deep": "#0A1D45",
        pulse: "#D1263B",
        paper: "#F4F6FB",
        line: "#D3DAE7",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
