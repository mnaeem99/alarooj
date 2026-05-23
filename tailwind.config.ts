import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#050b18",
          black: "#0a1424",
          navy: "#0a2540",
          slate: "#1a2942",
        },
        secondary: {
          emerald: "#00D4AA",
          teal: "#00C9B7",
          cyan: "#00D9FF",
          electric: "#22e0ff",
        },
        accent: {
          orange: "#FF6B35",
          amber: "#FFB347",
          gold: "#D4AF37",
          yellow: "#FFD700",
        },
        neutral: {
          light: "#F5F7FA",
          mid: "#cbd5e1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(34,224,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,224,255,0.07) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 30% 20%, rgba(34,224,255,0.18), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,107,53,0.12), transparent 50%)",
        "hero-overlay":
          "linear-gradient(to right, rgba(5,11,24,0.92) 0%, rgba(10,37,64,0.7) 50%, rgba(5,11,24,0.5) 100%)",
        "card-dark":
          "linear-gradient(145deg, rgba(26,41,66,0.9) 0%, rgba(10,20,36,0.95) 100%)",
        "shimmer":
          "linear-gradient(110deg, transparent 30%, rgba(34,224,255,0.18) 50%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "kenburns": "kenburns 14s ease-out infinite alternate",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.12) translate(-1%, -1%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,224,255,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(34,224,255,0)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 0 1px rgba(34,224,255,0.4), 0 10px 40px -10px rgba(34,224,255,0.45)",
        "neon-orange": "0 0 0 1px rgba(255,107,53,0.4), 0 10px 40px -10px rgba(255,107,53,0.45)",
        "soft-up": "0 -10px 30px -15px rgba(0,0,0,0.25)",
        "card-hover": "0 30px 60px -20px rgba(10,37,64,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
