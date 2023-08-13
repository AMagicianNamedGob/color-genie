import { hslToHex } from "./colorConvert";

export default function getStyleConfig(hsl, tailwind, colorRange) {
  const h = parseInt(hsl.h);
  const s = parseInt(hsl.s);
  const l = parseInt(hsl.l);
  const r = colorRange;
  // todo this should change based on the color pallet strategy //
  const factor = 180;

  const noTailwind = `
:root {
  // primary //
  --color-primary--100: ${hslToHex(h, s, l + r * 1.9)};
  --color-primary--200: ${hslToHex(h, s, l + r * 1.66)};
  --color-primary--300: ${hslToHex(h, s, l + r * 1.33)};
  --color-primary--400: ${hslToHex(h, s, l + r * 1)};
  --color-primary--500: ${hslToHex(h, s, l)};
  --color-primary--600: ${hslToHex(h, s, l - r * 1)};
  --color-primary--700: ${hslToHex(h, s, l - r * 1.33)};
  --color-primary--800: ${hslToHex(h, s, l - r * 1.66)};
  --color-primary--900: ${hslToHex(h, s, l - r * 1.9)};

  // secondary //
  --color-secondary--100: ${hslToHex(h + factor, s, l + r * 1.9)};
  --color-secondary--200: ${hslToHex(h + factor, s, l + r * 1.66)};
  --color-secondary--300: ${hslToHex(h + factor, s, l + r * 1.33)};
  --color-secondary--400: ${hslToHex(h + factor, s, l + r * 1)};
  --color-secondary--500: ${hslToHex(h + factor, s, l)};
  --color-secondary--600: ${hslToHex(h + factor, s, l - r * 1)};
  --color-secondary--700: ${hslToHex(h + factor, s, l - r * 1.33)};
  --color-secondary--800: ${hslToHex(h + factor, s, l - r * 1.66)};
  --color-secondary--900: ${hslToHex(h + factor, s, l - r * 1.9)};

  // accent colors -- //
  --color-accent-1: ${hslToHex(h + factor / 3 / 2, s, l)};
  --color-accent-2: ${hslToHex(h + factor / 3, s, l)};
  --color-accent-3: ${hslToHex(h + factor / 2, s, l)};
  --color-accent-4: ${hslToHex(h - factor / 2, s, l)};
  --color-accent-5: ${hslToHex(h - factor / 3, s, l)};
  --color-accent-6: ${hslToHex(h - factor / 3 /2, s, l)};


  // neutral colors -- remove if not needed -- //
  --color-grey-1: #f2f2f2;
  --color-grey-2: #d9d9d9;
  --color-grey-3: #b0b0b0;
  --color-grey-4: #7f7f7f;
  --color-grey-5: #666666;
  --color-grey-6: #4d4d4d;
  --color-grey-7: #333333;
  --color-grey-8: #1a1a1a;
  --color-grey-9: #0d0d0d;

  // white and black -- adjust to your preference or remove -- //
  --color-white: #ffffff;
  --color-black: #000000;
}`;

  const withTailwind = `
// tailwind.config.js

module.exports = {
// ...
  theme: {
    extend: {
      colors: {
        primary: {
          100: ${hslToHex(h, s, l + r * 1.9)},
          200: ${hslToHex(h, s, l + r * 1.66)},
          300: ${hslToHex(h, s, l + r * 1.33)},
          400: ${hslToHex(h, s, l + r * 1)},
          500: ${hslToHex(h, s, l)},
          600: ${hslToHex(h, s, l - r * 1)},
          700: ${hslToHex(h, s, l - r * 1.33)},
          800: ${hslToHex(h, s, l - r * 1.66)},
          900: ${hslToHex(h, s, l - r * 1.9)},
        },
        secondary: {
          100: ${hslToHex(h + factor, s, l + r * 1.9)},
          200: ${hslToHex(h + factor, s, l + r * 1.66)},
          300: ${hslToHex(h + factor, s, l + r * 1.33)},
          400: ${hslToHex(h + factor, s, l + r * 1)},
          500: ${hslToHex(h + factor, s, l)},
          600: ${hslToHex(h + factor, s, l - r * 1)},
          700: ${hslToHex(h + factor, s, l - r * 1.33)},
          800: ${hslToHex(h + factor, s, l - r * 1.66)},
          900: ${hslToHex(h + factor, s, l - r * 1.9)}
        },
        "accent-1": ${hslToHex(h + factor / 3 / 2, s, l)},
        "accent-2": ${hslToHex(h + factor / 3, s, l)},
        "accent-3": ${hslToHex(h + factor / 2, s, l)},
        "accent-4": ${hslToHex(h - factor / 2, s, l)},
        "accent-5": ${hslToHex(h - factor / 3, s, l)},
        "accent-6": ${hslToHex(h - factor / 3 /2, s, l)}
        },
      },
    },
  },
// ...
};`;

  return tailwind ? withTailwind : noTailwind;
}
