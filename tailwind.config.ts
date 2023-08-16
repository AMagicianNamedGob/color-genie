/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    colors: {
      primary: {
        100: "hsl(var(--color-primary--max-light) / 1)",
        200: "hsl(var(--color-primary--lightest) / 1)",
        300: "hsl(var(--color-primary--lighter) / 1)",
        400: "hsl(var(--color-primary--light) / 1)",
        500: "hsl(var(--color-primary) / 1)",
        600: "hsl(var(--color-primary--dark) / 1)",
        700: "hsl(var(--color-primary--darker) / 1)",
        800: "hsl(var(--color-primary--darkest) / 1)",
        900: "hsl(var(--color-primary--max-dark) / 1)",
      },
      secondary: {
        100: "hsl(var(--color-secondary--max-light) / 1)",
        200: "hsl(var(--color-secondary--lightest) / 1)",
        300: "hsl(var(--color-secondary--lighter) / 1)",
        400: "hsl(var(--color-secondary--light) / 1)",
        500: "hsl(var(--color-secondary) / 1)",
        600: "hsl(var(--color-secondary--dark) / 1)",
        700: "hsl(var(--color-secondary--darker) / 1)",
        800: "hsl(var(--color-secondary--darkest) / 1)",
        900: "hsl(var(--color-secondary--max-dark) / 1)",
      },
      tertiary: {
        100: "hsl(var(--color-tertiary--max-light) / 1)",
        200: "hsl(var(--color-tertiary--lightest) / 1)",
        300: "hsl(var(--color-tertiary--lighter) / 1)",
        400: "hsl(var(--color-tertiary--light) / 1)",
        500: "hsl(var(--color-tertiary) / 1)",
        600: "hsl(var(--color-tertiary--dark) / 1)",
        700: "hsl(var(--color-tertiary--darker) / 1)",
        800: "hsl(var(--color-tertiary--darkest) / 1)",
        900: "hsl(var(--color-tertiary--max-dark) / 1)",
      },
      contrast: {
        100: "hsl(var(--color-contrast--max-light) / 1)",
        200: "hsl(var(--color-contrast--lightest) / 1)",
        300: "hsl(var(--color-contrast--lighter) / 1)",
        400: "hsl(var(--color-contrast--light) / 1)",
        500: "hsl(var(--color-contrast) / 1)",
        600: "hsl(var(--color-contrast--dark) / 1)",
        700: "hsl(var(--color-contrast--darker) / 1)",
        800: "hsl(var(--color-contrast--darkest) / 1)",
        900: "hsl(var(--color-contrast--max-dark) / 1)",
      },
      "accent-1": {
        100: "hsl(var(--color-accent-1--max-light) / 1)",
        200: "hsl(var(--color-accent-1--lightest) / 1)",
        300: "hsl(var(--color-accent-1--lighter) / 1)",
        400: "hsl(var(--color-accent-1--light) / 1)",
        500: "hsl(var(--color-accent-1) / 1)",
        600: "hsl(var(--color-accent-1--dark) / 1)",
        700: "hsl(var(--color-accent-1--darker) / 1)",
        800: "hsl(var(--color-accent-1--darkest) / 1)",
        900: "hsl(var(--color-accent-1--max-dark) / 1)",
      },
      "accent-2": {
        100: "hsl(var(--color-accent-2--max-light) / 1)",
        200: "hsl(var(--color-accent-2--lightest) / 1)",
        300: "hsl(var(--color-accent-2--lighter) / 1)",
        400: "hsl(var(--color-accent-2--light) / 1)",
        500: "hsl(var(--color-accent-2) / 1)",
        600: "hsl(var(--color-accent-2--dark) / 1)",
        700: "hsl(var(--color-accent-2--darker) / 1)",
        800: "hsl(var(--color-accent-2--darkest) / 1)",
        900: "hsl(var(--color-accent-2--max-dark) / 1)",
      },
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.neutral,
      transparent: colors.transparent,
    },
  },
  safelist: [
    {
      pattern:
        /((bg|text)-(primary|secondary|tertiary|contrast|accent-1|accent-2)-(100|200|300|400|500|600|700|800|900))/,
    },
  ],

  plugins: [],
};
