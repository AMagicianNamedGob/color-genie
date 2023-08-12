"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";
import { useDebouncyEffect } from "use-debouncy";
import { HexColorPicker, HexColorInput } from "react-colorful";
import hexToHSL from "../lib/hexToHsl";

import styles from "./styles/Form.module.css";

export default function Form() {
  const [hexColor, setHexColor] = useState("#40bfbf");
  const [hexColorEffect, setHexColorEffect] = useState("#40bfbf");
  const [colorRange, setColorRange] = useState("5");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useDebouncyEffect(() => setHexColor(hexColorEffect), 200, [hexColorEffect]);

  useEffect(() => {
    const root = document.documentElement;
    const { h, s, l }: any = hexToHSL(hexColor);

    root.style.setProperty("--primary-color-h", `${h}`);
    root.style.setProperty("--primary-color-s", `${s}%`);
    root.style.setProperty("--primary-color-l", `${l}%`);
    root.style.setProperty("--darken", `-${colorRange}%`);
    root.style.setProperty("--lighten", `${colorRange}%`);
  });

  function onSubmit(data: any) {
    const { h, s, l }: any = hexToHSL(hexColor);

    alert([h, s, l, colorRange]);
  }

  return (
    <form
      className="text-black flex flex-row flex-wrap justify-center items-center max-w-3xl p-12 my-5 mx-auto gap-5 lg:justify-around"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="flex flex-col justify-center items-center w-full py-3">
          <label htmlFor="hexColor" className="text-secondary-100 text-sm uppercase self-start ml-2 mb-1">
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
          Adjust Shades Distance
        </label>
        <input
          type="range"
          {...register("colorRange")}
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
          {...register("submit")}
          value="Submit"
          className={clsx(
            hexToHSL(hexColor).l > 55 ? "text-black" : "text-white",
            "min-w-[200px] p-3 rounded-xl border-2 border-white bg-primary-500 mt-5 "
          )}
        />
      </div>
    </form>
  );
}
