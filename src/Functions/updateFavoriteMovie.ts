"use server";
import { connectToDB } from "@/db/connectToDB";
import FilmModel from "@/db/filmModal";
import { revalidatePath } from "next/cache";

export async function updateFavoriteMovie(id: string, isFavorite: boolean) {
  await connectToDB();
  const updatedFavoriteMovie = await FilmModel.findByIdAndUpdate(
    id,
    { isFavorite: !isFavorite },
    { new: true }
  );
  if (!updatedFavoriteMovie) {
    throw new Error("Film not found");
  }
  revalidatePath("/");
}
