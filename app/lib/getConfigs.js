import { hslToHex } from "./colorConvert";

export default function getStyleConfig(hsl, tailwind, ranges) {
  const h = parseInt(hsl.h);
  const s = parseInt(hsl.s);
  const l = parseInt(hsl.l);
  const lr = parseInt(ranges.lr);
  const sr = parseInt(ranges.sr);
  const hr = parseInt(ranges.hr);
  const factor = 90;

  console.log(h, s, l, lr, sr, hr);
  console.log(h + hr * 2, s + sr * 2, l + lr * 2)

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
  --color-secondary--100: ${hslToHex(h + hr + factor, s + sr, l + lr * 1.9)};
  --color-secondary--200: ${hslToHex(h + hr + factor, s + sr, l + lr * 1.66)};
  --color-secondary--300: ${hslToHex(h + hr + factor, s + sr, l + lr * 1.33)};
  --color-secondary--400: ${hslToHex(h + hr + factor, s + sr, l + lr * 1)};
  --color-secondary--500: ${hslToHex(h + hr + factor, s + sr, l)};
  --color-secondary--600: ${hslToHex(h + hr + factor, s + sr, l + lr * 1)};
  --color-secondary--700: ${hslToHex(h + hr + factor, s + sr, l + lr * 1.33)};
  --color-secondary--800: ${hslToHex(h + hr + factor, s + sr, l + lr * 1.66)};
  --color-secondary--900: ${hslToHex(h + hr + factor, s + sr, l + lr * 1.9)};

  // accent colors -- //
  --color-accent-1: ${hslToHex(h + factor / 3 / 2, s, l)};
  --color-accent-2: ${hslToHex(h + factor / 3, s, l)};
  --color-accent-3: ${hslToHex(h + factor / 2, s, l)};
  --color-accent-4: ${hslToHex(h - factor / 2, s, l)};
  --color-accent-5: ${hslToHex(h - factor / 3, s, l)};
  --color-accent-6: ${hslToHex(h - factor / 3 / 2, s, l)};


  // neutral -- //
  --color-grey-1: #f2f2f2;
  --color-grey-2: #d9d9d9;
  --color-grey-3: #b0b0b0;
  --color-grey-4: #7f7f7f;
  --color-grey-5: #666666;
  --color-grey-6: #4d4d4d;
  --color-grey-7: #333333;
  --color-grey-8: #1a1a1a;
  --color-grey-9: #0d0d0d;

  // slate -- //
  --color-slate-1: #F7FAFC;
  --color-slate-2: #EDF2F7;
  --color-slate-3: #E2E8F0;
  --color-slate-4: #CBD5E0;
  --color-slate-5: #A0AEC0;
  --color-slate-6: #718096;
  --color-slate-7: #4A5568;
  --color-slate-8: #2D3748;
  --color-slate-9: #1A202C;

  // zinc -- //
  --color-zinc-1: #F4F5F7;
  --color-zinc-2: #E8E9EC;
  --color-zinc-3: #DBDCDF;
  --color-zinc-4: #CFCFD3;
  --color-zinc-5: #B2B2B7;
  --color-zinc-6: #95959B;
  --color-zinc-7: #78787E;
  --color-zinc-8: #5C5C62;
  --color-zinc-9: #3F3F45;

  // white and black -- //
  --color-white: #ffffff;
  --color-black: #000000;
}`;

  const withTailwind = `
// tailwind.config.js

module.exports = {
// ...
  theme: {
    colors: {
      primary: {
        100: '${hslToHex(h, s, l + lr * 1.9)}',
        200: '${hslToHex(h, s, l + lr * 1.66)}',
        300: '${hslToHex(h, s, l + lr * 1.33)}',
        400: '${hslToHex(h, s, l + lr * 1)}',
        500: '${hslToHex(h, s, l)}',
        600: '${hslToHex(h, s, l - lr * 1)}',
        700: '${hslToHex(h, s, l - lr * 1.33)}',
        800: '${hslToHex(h, s, l - lr * 1.66)}',
        900: '${hslToHex(h, s, l - lr * 1.9)}',
      },
      secondary: {
        100: '${hslToHex(h + factor, s, l + lr * 1.9)}',
        200: '${hslToHex(h + factor, s, l + lr * 1.66)}',
        300: '${hslToHex(h + factor, s, l + lr * 1.33)}',
        400: '${hslToHex(h + factor, s, l + lr * 1)}',
        500: '${hslToHex(h + factor, s, l)}',
        600: '${hslToHex(h + factor, s, l - lr * 1)}',
        700: '${hslToHex(h + factor, s, l - lr * 1.33)}',
        800: '${hslToHex(h + factor, s, l - lr * 1.66)}',
        900: '${hslToHex(h + factor, s, l - lr * 1.9)}'
      },
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.neutral,
    },
  },
// ...
};`;

  return tailwind ? withTailwind : noTailwind;
}
