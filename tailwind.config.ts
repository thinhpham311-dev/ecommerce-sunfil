import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6',
    'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5', 'md:grid-cols-6',
    'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5', 'lg:grid-cols-6',
    '2xl:grid-cols-1', '2xl:grid-cols-2', '2xl:grid-cols-3', '2xl:grid-cols-4', '2xl:grid-cols-5', '2xl:grid-cols-6'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1440px',
        },
      },
      colors: {
        primary: {
          DEFAULT: "#025FCA",
          dark: "#013065",
          base: "#0155C6",
          light: "#37CFFF", // Added a new 'light' shade to primary color
        },
        white: "#FFFFFF",
        black: {
          DEFAULT: "#1C252E",
          secondary: "#637381"
        },
        secondary: "#E6F1FF",
        "text-primary": "#1C252E",
        "text-secondary": "#637381",
        danger: { DEFAULT: "#B71D18", dark: "#7A0916" },
        warning: {
          DEFAULT: "#FFAB00",
          light: "#FFD666",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#024897',
      },
      fontFamily: {
        epilogue: ['var(--font-epilogue)', 'sans-serif'],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      backgroundImage: {
        'footer-pattern': "url('/images/footer/footer-bg-pattern.jpg')",
      },
      boxShadow: {
        'card': '0px 8px 16px 0px #919EAB29',
      },
      clipPath: {
        'triangle-br': 'polygon(0 0, 100% 0, 100% 100%)', // tên tùy chọn
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".bg-badge-gradient": {
          background: "linear-gradient(90deg, #FFD666, #FFAB00)",
        },
        ".bg-primary-gradient": {
          background:
            "linear-gradient(135deg, #0D57C6, #37CFFF, #0F5ED6)",
        },
      });
    },
    require('tailwind-clip-path'),

  ],
} satisfies Config;
