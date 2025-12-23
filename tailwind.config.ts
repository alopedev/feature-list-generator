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
        // Japanese Minimalist Palette - Monochromatic Base
        'ink-black': '#000000',
        'charcoal': '#2d2d2d',
        'ash-gray': '#6b7280',
        'mist-gray': '#e5e7eb',
        'rice-paper': '#fafaf9',
        'pure-white': '#ffffff',

        // Single Accent Color - Vermillion (朱色 Shu-iro)
        'vermillion': '#dd4124',
        'vermillion-light': '#f7ebe8',

        // Keep Next.js defaults
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Primary: Noto Serif JP - Elegant, Japanese-designed
        serif: ['var(--font-noto-serif-jp)', 'Georgia', 'serif'],
        // Secondary: Inter - Minimal usage for UI elements
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Only 2 shadows - Subtle, NO dramatic depth
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        // Minimal rounded corners
        'sm': '2px',
        DEFAULT: '4px',
        'md': '6px',
        'lg': '8px',
      },
      transitionDuration: {
        // Japanese minimalism - Calm, measured transitions
        'fast': '150ms',
        'base': '250ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        // Smooth, natural easing
        'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
