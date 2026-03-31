import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from docs/BRAND-IDENTITY.md
        "circuit-blue": "#0D7ECD",
        "builder-orange": "#FF6B2B",
        "spark-green": "#00C896",
        cloud: "#F5F7FA",
        mist: "#E2E8F0",
        slate: "#718096",
        ink: "#2D3748",
        midnight: "#1A202C",
        "alert-red": "#E53E3E",
        "caution-amber": "#D69E2E",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0D7ECD, #00C896)",
      },
    },
  },
  plugins: [],
};

export default config;
