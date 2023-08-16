"use client";
import { useState, useEffect, Suspense } from "react";
import clsx from "clsx";
import { useDebouncyEffect } from "use-debouncy";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { hexToHSL } from "../lib/colorConvert";
import ThemeToggle from "./ThemeToggle";
import styles from "./Form.module.css";
import Output from "./Output";

export default function Form() {
  // ? can useRef ? //
  const [hexColor, setHexColor] = useState("#701397");
  const [lRange, setLRange] = useState("15");
  const [hRange, setHRange] = useState("6");
  const [sRange, setSRange] = useState("75");
  const [hsl, setHsl] = useState({ h: 282, s: 78, l: 33 });

  // toggles and triggers
  const [hexColorEffect, setHexColorEffect] = useState("#701397");
  const [picker, setPicker] = useState(false);
  const [settings, setSettings] = useState(false);
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
    root.style.setProperty("--lRange", `${lRange}%`);
    root.style.setProperty("--sRange", `${sRange}%`);
    root.style.setProperty("--hRange", `${hRange}`);
  }, [hexColor, lRange, hRange, sRange]);

  function onSubmit(e: any) {
    e.preventDefault();
    if (e.nativeEvent.submitter.value === "Reset") return onReset(e);
    setSubmitted(true);
  }

  function onReset(e: any) {
    e.preventDefault();
    setSubmitted(false);
    setHexColorEffect("#701397");
    setLRange("15");
    setHRange("6");
    setSRange("75");
    setTailwindSelected(false);
  }

  function togglePicker(e: any) {
    e.preventDefault();
    setPicker(!picker);
  }

  function toggleSettings(e: any) {
    e.preventDefault();
    setSettings(!settings);
  }

  return (
    <>
      <section className="max-w-3xl mx-auto">
        {submitted && (
          <div>
            <div className="py-12">
              <h2>{tailwindSelected ? "Tailwind" : "CSS"}</h2>
              <input
                name="showTailwind"
                type="checkbox"
                className="mr-2"
                checked={tailwindSelected}
                onChange={(e) => setTailwindSelected(e.target.checked)}
              />
              <label htmlFor="showTailwind" className="uppercase">
                use tailwind
              </label>
              <input
                type="reset"
                value="Reset Form"
                onClick={(e) => onReset(e)}
                className="block my-2 underline hover:cursor-pointer hover:text-black dark:hover:text-white"
              />
              <Output
                submitted={submitted}
                hsl={hsl}
                lRange={lRange}
                hRange={hRange}
                sRange={sRange}
                tailwindSelected={tailwindSelected}
              />
            </div>
          </div>
        )}
      </section>
      <form
        className="text-black flex flex-row flex-wrap justify-center items-center max-w-3xl mx-auto gap-5 lg:justify-around"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="flex flex-col justify-center items-center w-full py-3">
          <label htmlFor="hexColor" className="text-xs self-start text-zinc-600 dark:text-zinc-300 ml-2">
          Hex Code</label>
          <HexColorInput
            className="bg-zinc-300 border-2 border-zinc-500 font-semibold tracking-wide uppercase rounded-xl w-[183px] self-start focus:border-accent-500 p-2 mb-2"
            color={hexColor}
            onChange={setHexColorEffect}
            name="hexColor"
            />
          <div className="flex flex-row flex-wrap justify-between items-center w-full mb-2">
            <button
              className="w-14 h-14 flex justify-center items-center text-2xl text-black border-2 border-zinc-500 shadow-inner shadow-white bg-gradient-to-br from-primary-900 to-secondary-100 hover:cursor-pointer hover:from-primary-100 hover:to-primary-900"
              onClick={(e) => togglePicker(e)}
              role="presentation"
            >
              🎨
            </button>

            <button
              className="w-14 h-14 text-4xl flex justify-center items-center text-zinc-800 border-2 border-zinc-500 shadow-inner shadow-white bg-gradient-to-br from-primary-900 to-secondary-100 hover:cursor-pointer hover:from-primary-100 hover:to-primary-900"
              onClick={(e) => toggleSettings(e)}
              role="presentation"
            >
              ⚙{" "}
            </button>
            <ThemeToggle />

            <input
              type="submit"
              value={submitted ? "Reset" : "Generate Code"}
              className="h-14 w-9/12 rounded-xl border-2 border-zinc-500 font-bold tracking-widest uppercase shadow-inner shadow-white bg-gradient-to-br from-primary-900 to-secondary-100 hover:cursor-pointer hover:from-primary-100 hover:to-primary-900"
            />
          </div>

          <div className="w-full">
            {picker && (
              <HexColorPicker
                className={styles["react-colorful"]}
                color={hexColor}
                onChange={setHexColorEffect}
                role="presentation"
              />
            )}

            {settings && (
              <div className="flex flex-row flex-wrap justify-between items-center w-full border-2 border-zinc-500 rounded-xl mt-2 pb-8">
                <span className="w-full text-xs text-gray-500 dark:text-gray-400 flex flex-col mt-9 mx-1 md:px-3 md:mx-0 md:w-1/3">
                  <label htmlFor="hueRange">Adjust Hue</label>
                  <input
                    type="range"
                    onChange={(e) => setHRange(e.target.value)}
                    value={hRange}
                    min="1"
                    max="11"
                    id="hueRange"
                  />
                </span>
                <span className="w-full text-xs text-gray-500 dark:text-gray-400 flex flex-col mt-9 mx-1 md:px-3 md:mx-0 md:w-1/3">
                  <label htmlFor="satRange">Adjust Saturation</label>
                  <input
                    type="range"
                    onChange={(e) => setSRange(e.target.value)}
                    value={sRange}
                    min="0"
                    max="100"
                    step="5"
                    id="satRange"
                  />
                </span>
                <span className="w-full text-xs text-gray-500 dark:text-gray-400 flex flex-col mt-9 mx-1 md:px-3 md:mx-0 md:w-1/3 ">
                  <label htmlFor="lightRange">Adjust Luminesce</label>
                  <input
                    type="range"
                    onChange={(e) => setLRange(e.target.value)}
                    value={lRange}
                    min="1"
                    max="31"
                    id="lightRange"
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
