import { hslToHex } from "./colorConvert";

export default function getStyleConfig(hsl, tailwind, ranges) {
  const h = parseInt(hsl.h);
  const s = parseInt(hsl.s);
  const l = parseInt(hsl.l);
  const lr = parseInt(ranges.lr);
  const sr = parseInt(ranges.sr);
  const hr = parseInt(ranges.hr);
  const factor = 45;

  const noTailwind = `
:root {

  // primary //
  --color-primary--100: ${hslToHex(h + hr * 2, s + sr * 2, l + lr * 2)};
  --color-primary--200: ${hslToHex(
    h + hr * 1.75,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-primary--300: ${hslToHex(h + hr * 1.5, s + sr * 1.5, l + lr * 1.5)};
  --color-primary--400: ${hslToHex(
    h + hr * 1.25,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-primary--500: ${hslToHex(h + hr, s + sr, l + lr)};
  --color-primary--600: ${hslToHex(
    h + hr / 1.25,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-primary--700: ${hslToHex(h + hr / 1.5, s + sr / 1.5, l + lr / 1.5)};
  --color-primary--800: ${hslToHex(
    h + hr / 1.75,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-primary--900: ${hslToHex(h + hr / 2, s + sr / 2, l + lr / 2)};

  // secondary //
  --color-secondary--100: ${hslToHex(
    h + hr + factor * 4,
    s + sr * 2,
    l + lr * 2
  )};
  --color-secondary--200: ${hslToHex(
    h + hr + factor * 4,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-secondary--300: ${hslToHex(
    h + hr + factor * 4,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-secondary--400: ${hslToHex(
    h + hr + factor * 4,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-secondary--500: ${hslToHex(h + hr + factor * 4, s + sr, l + lr)};
  --color-secondary--600: ${hslToHex(
    h + hr + factor * 4,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-secondary--700: ${hslToHex(
    h + hr + factor * 4,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-secondary--800: ${hslToHex(
    h + hr + factor * 4,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-secondary--900: ${hslToHex(
    h + hr + factor * 4,
    s + sr / 2,
    l + lr / 2
  )};

  // tertiary-1 //
  --color-tertiary-1--100: ${hslToHex(
    h + hr - (factor * 2),
    s + sr * 2,
    l + lr * 2
  )};
  --color-tertiary-1--200: ${hslToHex(
    h + hr - factor * 2,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-tertiary-1--300: ${hslToHex(
    h + hr - factor * 2,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-tertiary-1--400: ${hslToHex(
    h + hr - factor * 2,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-tertiary-1--500: ${hslToHex(h + hr - factor * 2, s + sr, l + lr)};
  --color-tertiary-1--600: ${hslToHex(
    h + hr - factor * 2,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-tertiary-1--700: ${hslToHex(
    h + hr - factor * 2,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-tertiary-1--800: ${hslToHex(
    h + hr - factor * 2,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-tertiary-1--900: ${hslToHex(
    h + hr - factor * 2,
    s + sr / 2,
    l + lr / 2
  )};

  // tertiary-2 //
  --color-tertiary-2--100: ${hslToHex(
    h + hr + factor * 2,
    s + sr * 2,
    l + lr * 2
  )};
  --color-tertiary-2--200: ${hslToHex(
    h + hr + factor * 2,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-tertiary-2--300: ${hslToHex(
    h + hr + factor * 2,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-tertiary-2--400: ${hslToHex(
    h + hr + factor * 2,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-tertiary-2--500: ${hslToHex(h + hr + factor * 2, s + sr, l + lr)};
  --color-tertiary-2--600: ${hslToHex(
    h + hr + factor * 2,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-tertiary-2--700: ${hslToHex(
    h + hr + factor * 2,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-tertiary-2--800: ${hslToHex(
    h + hr + factor * 2,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-tertiary-2--900: ${hslToHex(
    h + hr + factor * 2,
    s + sr / 2,
    l + lr / 2
  )};

  // accent-1 //
  --color-accent-1--100: ${hslToHex(h + hr - factor, s + sr * 2, l + lr * 2)};
  --color-accent-1--200: ${hslToHex(
    h + hr - factor,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-accent-1--300: ${hslToHex(
    h + hr - factor,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-accent-1--400: ${hslToHex(
    h + hr - factor,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-accent-1--500: ${hslToHex(h + hr - factor, s + sr, l + lr)};
  --color-accent-1--600: ${hslToHex(
    h + hr - factor,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-accent-1--700: ${hslToHex(
    h + hr - factor,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-accent-1--800: ${hslToHex(
    h + hr - factor,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-accent-1--900: ${hslToHex(h + hr - factor, s + sr / 2, l + lr / 2)};

  // accent-2 //
  --color-accent-2--100: ${hslToHex(h + hr + factor, s + sr * 2, l + lr * 2)};
  --color-accent-2--200: ${hslToHex(
    h + hr + factor,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-accent-2--300: ${hslToHex(
    h + hr + factor,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-accent-2--400: ${hslToHex(
    h + hr + factor,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-accent-2--500: ${hslToHex(h + hr + factor, s + sr, l + lr)};
  --color-accent-2--600: ${hslToHex(
    h + hr + factor,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-accent-2--700: ${hslToHex(
    h + hr + factor,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-accent-2--800: ${hslToHex(
    h + hr + factor,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-accent-2--900: ${hslToHex(h + hr + factor, s + sr / 2, l + lr / 2)};

  // accent-3 //
  --color-accent-3--100: ${hslToHex(
    h + hr - factor * 3,
    s + sr * 2,
    l + lr * 2
  )};
  --color-accent-3--200: ${hslToHex(
    h + hr - factor * 3,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-accent-3--300: ${hslToHex(
    h + hr - factor * 3,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-accent-3--400: ${hslToHex(
    h + hr - factor * 3,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-accent-3--500: ${hslToHex(h + hr - factor * 3, s + sr, l + lr)};
  --color-accent-3--600: ${hslToHex(
    h + hr - factor * 3,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-accent-3--700: ${hslToHex(
    h + hr - factor * 3,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-accent-3--800: ${hslToHex(
    h + hr - factor * 3,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-accent-3--900: ${hslToHex(
    h + hr - factor * 3,
    s + sr / 2,
    l + lr / 2
  )};

  // accent-4 //
  --color-accent-4--100: ${hslToHex(
    h + hr + factor * 3,
    s + sr * 2,
    l + lr * 2
  )};
  --color-accent-4--200: ${hslToHex(
    h + hr + factor * 3,
    s + sr * 1.75,
    l + lr * 1.75
  )};
  --color-accent-4--300: ${hslToHex(
    h + hr + factor * 3,
    s + sr * 1.5,
    l + lr * 1.5
  )};
  --color-accent-4--400: ${hslToHex(
    h + hr + factor * 3,
    s + sr * 1.25,
    l + lr * 1.25
  )};
  --color-accent-4--500: ${hslToHex(h + hr + factor * 3, s + sr, l + lr)};
  --color-accent-4--600: ${hslToHex(
    h + hr + factor * 3,
    s + sr / 1.25,
    l + lr / 1.25
  )};
  --color-accent-4--700: ${hslToHex(
    h + hr + factor * 3,
    s + sr / 1.5,
    l + lr / 1.5
  )};
  --color-accent-4--800: ${hslToHex(
    h + hr + factor * 3,
    s + sr / 1.75,
    l + lr / 1.75
  )};
  --color-accent-4--900: ${hslToHex(
    h + hr + factor * 3,
    s + sr / 2,
    l + lr / 2
  )};

  // slate //
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-400: #95a3b8;
  --color-slate-500: #64748b;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;

  // stone //
  --color-stone-100: #f5f5f4;
  --color-stone-200: #e7e5e4;
  --color-stone-300: #d6d3d1;
  --color-stone-400: #a8a29e;
  --color-stone-500: #78716c;
  --color-stone-600: #57534e;
  --color-stone-700: #44403c;
  --color-stone-800: #292524;
  --color-stone-900: #1c1917;

  // zinc //
  --color-zinc-100: #f4f4f5;
  --color-zinc-200: #e4e4e7;
  --color-zinc-300: #d4d4d8;
  --color-zinc-400: #a1a1aa;
  --color-zinc-500: #71717a;
  --color-zinc-600: #52525b;
  --color-zinc-700: #3f3f46;
  --color-zinc-800: #27272a;
  --color-zinc-900: #18181b;

  // white and black //
  --color-white: #ffffff;
  --color-black: #000000;
}`;

  const withTailwind = `
// tailwind.config.js
// https://tailwindcss.com/docs/customizing-colors#using-custom-colors

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      primary: {
        100: '${hslToHex(h + hr * 2, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr * 1.75, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr * 1.5, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr * 1.25, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr, s + sr, l + lr)}',
        600: '${hslToHex(h + hr / 1.25, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr / 1.5, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr / 1.75, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr / 2, s + sr / 2, l + lr / 2)}'
      },
      secondary: {
        100: '${hslToHex(h + hr + factor * 4, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr + factor * 4, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr + factor * 4, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr + factor * 4, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr + factor * 4, s + sr, l + lr)}',
        600: '${hslToHex(h + hr + factor * 4, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr + factor * 4, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr + factor * 4, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr + factor * 4, s + sr / 2, l + lr / 2)}'
      },
      "tertiary-1": {
        100: '${hslToHex(h + hr - factor * 2, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr - factor * 2, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr - factor * 2, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr - factor * 2, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr - factor * 2, s + sr, l + lr)}',
        600: '${hslToHex(h + hr - factor * 2, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr - factor * 2, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr - factor * 2, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr - factor * 2, s + sr / 2, l + lr / 2)}'
      },
      "tertiary-2": {
        100: '${hslToHex(h + hr + factor * 2, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr + factor * 2, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr + factor * 2, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr + factor * 2, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr + factor * 2, s + sr, l + lr)}',
        600: '${hslToHex(h + hr + factor * 2, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr + factor * 2, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr + factor * 2, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr + factor * 2, s + sr / 2, l + lr / 2)}'
      },
      "accent-1": {
        100: '${hslToHex(h + hr - factor, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr - factor, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr - factor, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr - factor, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr - factor, s + sr, l + lr)}',
        600: '${hslToHex(h + hr - factor, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr - factor, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr - factor, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr - factor, s + sr / 2, l + lr / 2)}'
      },
      "accent-2": {
        100: '${hslToHex(h + hr + factor, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr + factor, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr + factor, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr + factor, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr + factor, s + sr, l + lr)}',
        600: '${hslToHex(h + hr + factor, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr + factor, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr + factor, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr + factor, s + sr / 2, l + lr / 2)}'
      },
      "accent-3": {
        100: '${hslToHex(h + hr - factor * 3, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr - factor * 3, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr - factor * 3, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr - factor * 3, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr - factor * 3, s + sr, l + lr)}',
        600: '${hslToHex(h + hr - factor * 3, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr - factor * 3, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr - factor * 3, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr - factor * 3, s + sr / 2, l + lr / 2)}'
      },
      "accent-4": {
        100: '${hslToHex(h + hr + factor * 3, s + sr * 2, l + lr * 2)}',
        200: '${hslToHex(h + hr + factor * 3, s + sr * 1.75, l + lr * 1.75)}',
        300: '${hslToHex(h + hr + factor * 3, s + sr * 1.5, l + lr * 1.5)}',
        400: '${hslToHex(h + hr + factor * 3, s + sr * 1.25, l + lr * 1.25)}',
        500: '${hslToHex(h + hr + factor * 3, s + sr, l + lr)}',
        600: '${hslToHex(h + hr + factor * 3, s + sr / 1.25, l + lr / 1.25)}',
        700: '${hslToHex(h + hr + factor * 3, s + sr / 1.5, l + lr / 1.5)}',
        800: '${hslToHex(h + hr + factor * 3, s + sr / 1.75, l + lr / 1.75)}',
        900: '${hslToHex(h + hr + factor * 3, s + sr / 2, l + lr / 2)}'
      },
      slate: colors.slate,
      stone: colors.stone,
      zinc: colors.zinc,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent
    },
  },
};`;

  return tailwind ? withTailwind : noTailwind;
}
