import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const hexToRgb = (hex: string) => {
  hex = hex.replace("#", "");
  hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    containr: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "500px",
        mdp: "900px",
        "3xl": "1800px",
      },
      typography: ({ theme }) => ({
        char: {
          css: {
            "--tw-prose-body": theme("colors.char[700]"),
            "--tw-prose-headings": theme("colors.char[900]"),
            "--tw-prose-lead": theme("colors.char[600]"),
            "--tw-prose-links": theme("colors.char[900]"),
            "--tw-prose-bold": theme("colors.char[900]"),
            "--tw-prose-counters": theme("colors.char[500]"),
            "--tw-prose-bullets": theme("colors.char[300]"),
            "--tw-prose-hr": theme("colors.char[200]"),
            "--tw-prose-quotes": theme("colors.char[900]"),
            "--tw-prose-quote-borders": theme("colors.char[200]"),
            "--tw-prose-captions": theme("colors.char[500]"),
            "--tw-prose-kbd": theme("colors.char[900]"),
            "--tw-prose-kbd-shadows": hexToRgb(theme("colors.char[900]")),
            "--tw-prose-code": theme("colors.char[900]"),
            "--tw-prose-pre-code": theme("colors.char[200]"),
            "--tw-prose-pre-bg": theme("colors.char[800]"),
            "--tw-prose-th-borders": theme("colors.char[300]"),
            "--tw-prose-td-borders": theme("colors.char[200]"),
            "--tw-prose-invert-body": theme("colors.char[300]"),
            "--tw-prose-invert-headings": colors.white,
            "--tw-prose-invert-lead": theme("colors.char[400]"),
            "--tw-prose-invert-links": colors.white,
            "--tw-prose-invert-bold": colors.white,
            "--tw-prose-invert-counters": theme("colors.char[400]"),
            "--tw-prose-invert-bullets": theme("colors.char[600]"),
            "--tw-prose-invert-hr": theme("colors.char[700]"),
            "--tw-prose-invert-quotes": theme("colors.char[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.char[700]"),
            "--tw-prose-invert-captions": theme("colors.char[400]"),
            "--tw-prose-invert-kbd": colors.white,
            "--tw-prose-invert-kbd-shadows": hexToRgb(colors.white),
            "--tw-prose-invert-code": colors.white,
            "--tw-prose-invert-pre-code": theme("colors.char[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.char[600]"),
            "--tw-prose-invert-td-borders": theme("colors.char[700]"),
          },
        },
      }),

      boxShadow: {
        box: "var(--shadow)",
        "box-hov": "var(--shadow-hover)",
        "box-hov-lg": "var(--shadow-box-hover)",
      },
      colors: {
        char: {
          "50": "#e7e7e7",
          "100": "#d1d1d1",
          "200": "#b0b0b0",
          "300": "#888888",
          "400": "#6d6d6d",
          "500": "#5d5d5d",
          "600": "#4f4f4f",
          "700": "#454545",
          "800": "#3d3d3d",
          "900": "#313131",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
