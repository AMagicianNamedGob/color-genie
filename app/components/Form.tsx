"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";
import { useDebouncyEffect } from "use-debouncy";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { hexToHSL } from "../lib/colorConvert";

import styles from "./styles/Form.module.css";
import Output from "./Output";

export default function Form() {
  const [hexColor, setHexColor] = useState("#40bfbf");
  const [hexColorEffect, setHexColorEffect] = useState("#40bfbf");
  const [colorRange, setColorRange] = useState("5");
  const [hsl, setHsl] = useState({ h: 180, s: 50, l: 50 });
  const [submitted, setSubmitted] = useState(false);
  const [tailwindSelected, setTailwindSelected] = useState(false);

  useDebouncyEffect(() => setHexColor(hexColorEffect), 200, [hexColorEffect]);

  useEffect(() => {
    const root = document.documentElement;
    const { h, s, l } = hexToHSL(hexColor);
    setHsl({ h, s, l });

    root.style.setProperty("--primary-color-h", `${h}`);
    root.style.setProperty("--primary-color-s", `${s}%`);
    root.style.setProperty("--primary-color-l", `${l}%`);
    root.style.setProperty("--darken", `-${colorRange}%`);
    root.style.setProperty("--lighten", `${colorRange}%`);
  }, [hexColor, colorRange]);

  function onSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="max-w-3xl p-12 mx-auto">
        {submitted && (
          <div>
            <Output
              submitted={submitted}
              hsl={hsl}
              colorRange={colorRange}
              tailwindSelected={tailwindSelected}
            />
            <input
              name="showTailwind"
              type="checkbox"
              className="mr-2"
              checked={tailwindSelected}
              onChange={(e) => setTailwindSelected(e.target.checked)}
            />
            <label
              htmlFor="showTailwind"
              className="text-secondary-100 uppercase"
            >
              Show Tailwind Config
            </label>
          </div>
        )}
      </section>
      <form
        className="text-black flex flex-row flex-wrap justify-center items-center max-w-3xl mx-auto gap-5 lg:justify-around"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="flex flex-col justify-center items-center w-full py-3">
          <label
            htmlFor="hexColor"
            className="text-secondary-100 text-sm uppercase self-start ml-2 mb-1"
          >
            Hex Code
          </label>
          <div className="flex flex-row justify-between items-start w-full">
            <HexColorInput
              className={clsx(
                "border-2 border-transparent focus:border-primary-500",
                styles.hexInput
              )}
              color={hexColor}
              onChange={setHexColorEffect}
              name="hexColor"
            />
            <ThemeToggle />
          </div>
          <HexColorPicker
            className={styles["react-colorful"]}
            color={hexColor}
            onChange={setHexColorEffect}
          />
        </div>

        <div className="min-w-[200px] flex flex-col justify-center items-center py-3">
          <label htmlFor="colorRange" className="text-secondary-100 uppercase">
            Adjust Shades Range
          </label>
          <input
            type="range"
            onChange={(e) => setColorRange(e.target.value)}
            value={colorRange}
            min="1"
            max="10"
            className="min-w-[200px] rounded-xl m-2"
          />
        </div>

        <div className="w-full text-center">
          <input
            type="submit"
            value="Submit"
            className={clsx(
              hexToHSL(hexColor).l > 50 ? "text-black" : "text-white",
              "min-w-[200px] p-3 rounded-xl border-2 border-white bg-primary-500 mt-5 "
            )}
          />
        </div>
      </form>
    </>
  );
}
