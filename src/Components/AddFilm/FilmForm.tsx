"use client";

import { addFilm } from "@/Functions/addFilm";
import { FilmFormData, filmFormSchema } from "@/Validation/filmForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FilmForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FilmFormData>({
    resolver: zodResolver(filmFormSchema),
    defaultValues: {
      title: "",
      content: "",
      isFavorite: false,
    },
  });

  async function onSubmit(data: FilmFormData) {
    const result = await addFilm(data);
    if (result.error) {
      setError("title", { message: result.error });
      return;
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="formField">
        <label htmlFor="title">Cím:</label>
        <input
          {...register("title")}
          className="formInput"
          type="text"
          name="title"
          id="title"
        />
        {errors.title && (
          <span className="errorMsg">{errors.title.message}</span>
        )}
      </div>

      <div className="formField">
        <label htmlFor="content">Leírás:</label>
        <textarea
          {...register("content")}
          className="formInput"
          name="content"
          id="content"
          rows={8}
        />
        {errors.content && (
          <span className="errorMsg">{errors.content.message}</span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-600 hover:bg-green-500 text-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400 p-2 cursor-pointer w-full rounded mt-3"
      >
        Hozzáadás
      </button>
    </form>
  );
}
