"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "@/db/connectToDB";
import { FilmFormData, filmFormSchema } from "@/Validation/filmForm";
import FilmModel from "@/db/filmModal";

export async function addFilm(data: FilmFormData) {
  const parsed = filmFormSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Hibás adat." };
  }

  const { title, content } = parsed.data;

  try {
    await connectToDB();

    const existingFilmTitle = await FilmModel.findOne({ title });

    if (existingFilmTitle) {
      return { error: "Film cím már létezik!" };
    }

    await FilmModel.create({
      title,
      content,
    });
  } catch (error) {
    console.error("Hiba a létrehozás során:", error);
    return { error: "Valami hiba történt. Próbáld újra később." };
  }

  redirect("/");
}
