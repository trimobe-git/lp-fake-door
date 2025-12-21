import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        "primary-hover": "#1e293b",
        "accent-green": "#4ade80",
        "accent-purple": "#c084fc",
        "background-light": "#ffffff",
        "background-dark": "#020617",
        "surface-light": "#f8fafc",
        "surface-dark": "#0f172a",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 40px -10px rgba(139, 92, 246, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
