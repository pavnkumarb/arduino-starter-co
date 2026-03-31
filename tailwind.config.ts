import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        // Brand primitives — from docs/DESIGN-SYSTEM.md §1
        "circuit-blue": "#0D7ECD",
        "builder-orange": "#FF6B2B",
        // Accessible variant: 4.75:1 contrast with white (WCAG AA ≥ 4.5:1)
        "builder-orange-aa": "#C44D18",
        "spark-green": "#00C896",
        // Neutral scale
        cloud: "#F5F7FA",      // neutral-50
        "neutral-100": "#EDF2F7",
        mist: "#E2E8F0",       // neutral-200
        "neutral-400": "#A0AEC0",
        slate: "#718096",      // neutral-500
        "neutral-700": "#4A5568",
        ink: "#2D3748",        // neutral-800
        midnight: "#1A202C",   // neutral-900
        // Semantic / feedback
        "alert-red": "#E53E3E",
        "caution-amber": "#D69E2E",
        // Semantic aliases — resolved via CSS custom properties in globals.css
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "color-accent": "var(--color-accent)",
        "color-text-primary": "var(--color-text-primary)",
        "color-text-secondary": "var(--color-text-secondary)",
        "color-text-heading": "var(--color-text-heading)",
        "color-text-inverse": "var(--color-text-inverse)",
        "color-text-link": "var(--color-text-link)",
        "color-bg-page": "var(--color-bg-page)",
        "color-bg-card": "var(--color-bg-card)",
        "color-bg-code": "var(--color-bg-code)",
        "color-border": "var(--color-border)",
        "color-border-focus": "var(--color-border-focus)",
        "color-interactive-primary": "var(--color-interactive-primary)",
        "color-interactive-hover": "var(--color-interactive-hover)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Type scale tokens — from docs/DESIGN-SYSTEM.md §2
        display: ["64px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        h1: ["36px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        h3: ["22px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.5" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
        label: ["13px", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "600" }],
        code: ["14px", { lineHeight: "1.6" }],
      },
      spacing: {
        // Spacing scale — from docs/DESIGN-SYSTEM.md §3 (base 4px)
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-5": "20px",
        "space-6": "24px",
        "space-8": "32px",
        "space-10": "40px",
        "space-12": "48px",
        "space-16": "64px",
        "space-20": "80px",
      },
      borderRadius: {
        // Radius tokens — from docs/DESIGN-SYSTEM.md §4
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },
      boxShadow: {
        // Elevation tokens — from docs/DESIGN-SYSTEM.md §5
        sm: "0 1px 3px rgba(0,0,0,0.08)",
        md: "0 4px 12px rgba(0,0,0,0.10)",
        lg: "0 8px 24px rgba(0,0,0,0.12)",
        focus: "0 0 0 3px rgba(13,126,205,0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0D7ECD 0%, #007055 100%)",
      },
      transitionDuration: {
        // Motion tokens — from docs/DESIGN-SYSTEM.md §8
        sm: "100ms",
        md: "200ms",
        lg: "300ms",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
