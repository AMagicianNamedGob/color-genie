"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchFields = watch(["hue", "saturation", "lightness", "colorRangeLight", "colorRangeDark"]);

  useEffect(() => {
    const subscription = watch((data) => {
      const { hue, saturation, lightness, colorRangeLight, colorRangeDark } = data;
      console.log(data);
      const root = document.documentElement;
      root.style.setProperty("--primary-color-h", hue || 180);
      root.style.setProperty(
        "--primary-color-s",
        saturation.length > 0 ? saturation + "%" : "50%"
      );
      root.style.setProperty(
        "--primary-color-l",
        lightness.length > 0 ? lightness + "%" : "50%"
      );
      root.style.setProperty("--darken", "-" + colorRangeDark + "%");
      root.style.setProperty("--lighten", colorRangeLight + "%");
      console.log(root.style.getPropertyValue("--darken"), root.style.getPropertyValue("--lighten"));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  function onSubmit(data: any) {
    const { hue, saturation, lightness, colorRangeLight, colorRangeDark } = data;
    const root = document.documentElement;
    root.style.setProperty("--primary-color-h", hue);
    root.style.setProperty("--primary-color-s", saturation + "%");
    root.style.setProperty("--primary-color-l", lightness + "%");
          root.style.setProperty("--darken", "-" + colorRangeDark + "%");
      root.style.setProperty("--lighten", colorRangeLight + "%");
  }

  return (
    <form
      className="text-black flex flex-row flex-wrap justify-center items-center max-w-3xl p-12 my-5 mx-auto gap-5 lg:justify-around"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label htmlFor="hue" className="text-secondary-100 uppercase">
          Hue
        </label>
        <input
          type="number"
          {...register("hue", { required: true })}
          placeholder="Hue"
          min="0"
          max="360"
          className="min-w-[200px] p-3 rounded-xl m-2"
        />
        {errors.hue && (
          <span className="text-primary-100 absolute -bottom-2">
            This field is required
          </span>
        )}
      </div>

      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label htmlFor="saturation" className="text-secondary-100 uppercase">
          Saturation
        </label>

        <input
          type="number"
          {...register("saturation", { required: true })}
          placeholder="Saturation"
          min="0"
          max="100"
          className="w-full p-3 rounded-xl m-2"
        />

        {errors.saturation && (
          <span className="text-primary-100 absolute -bottom-2">
            This field is required
          </span>
        )}
      </div>

      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label htmlFor="lightness" className="text-secondary-100 uppercase">
          lightness
        </label>

        <input
          type="number"
          {...register("lightness", { required: true })}
          placeholder="Lightness"
          min="0"
          max="100"
          className="min-w-[200px] p-3 rounded-xl m-2"
        />
        {errors.lightness && (
          <span className="text-primary-100 absolute -bottom-2">
            This field is required
          </span>
        )}
      </div>

      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label htmlFor="colorRangeLight" className="text-secondary-100 uppercase">
          Lights Range
        </label>
        <input
          type="range"
          {...register("colorRangeLight")}
          min="1"
          max="20"
          className="min-w-[200px] rounded-xl m-2"
        />
      </div>

      <div className="min-w-[200px] flex flex-col justify-center items-center relative py-3">
        <label htmlFor="colorRangeDark" className="text-secondary-100 uppercase">
          Darks Range
        </label>
        <input
          type="range"
          {...register("colorRangeDark")}
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
