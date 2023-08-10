"use client";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="text-black flex flex-row flex-wrap justify-center items-center max-w-3xl p-12 my-5 mx-auto gap-5 lg:justify-around"
      onSubmit={handleSubmit((data) => console.log(data))}
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

      <input
        type="submit"
        {...register("submit")}
        value="Submit"
        className="text-white min-w-[200px] p-3 rounded-xl border-2 border-white bg-accent-3 mt-5"
      />
    </form>
  );
}
