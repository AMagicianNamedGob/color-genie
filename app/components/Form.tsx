"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { HslColorPicker } from "react-colorful";

export default function Form() {
  const [color, setColor] = useState({ h: 180, s: 50, l: 50 });
  const [colorRangeLight, setColorRangeLight] = useState("10");
  const [colorRangeDark, setColorRangeDark] = useState("10");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--primary-color-h", `${color.h}`);
    root.style.setProperty("--primary-color-s", `${color.s}%`);
    root.style.setProperty("--primary-color-l", `${color.l}%`);
    root.style.setProperty("--darken", `-${colorRangeDark}%`);
    root.style.setProperty("--lighten", `${colorRangeLight}%`);
  });

  function onSubmit(data: any) {
    alert([color.h, color.s, color.l, colorRangeLight, colorRangeDark]);
  }

  return (
    <form
      className="text-black flex flex-row flex-wrap justify-center items-center max-w-3xl p-12 my-5 mx-auto gap-5 lg:justify-around"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="flex flex-col justify-center items-center relative py-3">
        <HslColorPicker color={color} onChange={setColor} />
      </div>

      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label
          htmlFor="colorRangeLight"
          className="text-secondary-100 uppercase"
        >
          Lights Range
        </label>
        <input
          type="range"
          {...register("colorRangeLight")}
          onChange={(e) => setColorRangeLight(e.target.value)}
          value={colorRangeLight}
          min="1"
          max="20"
          className="min-w-[200px] rounded-xl m-2"
        />
      </div>

      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label
          htmlFor="colorRangeDark"
          className="text-secondary-100 uppercase"
        >
          Darks Range
        </label>
        <input
          type="range"
          {...register("colorRangeDark")}
          onChange={(e) => setColorRangeDark(e.target.value)}
          value={colorRangeDark}
          min="1"
          max="20"
          className="min-w-[200px] rounded-xl m-2"
        />
      </div>

      <div className="w-full text-center">
        <input
          type="submit"
          {...register("submit")}
          value="Submit"
          className="text-white min-w-[200px] p-3 rounded-xl border-2 border-white bg-accent-3 mt-5"
        />
      </div>
    </form>
  );
}
