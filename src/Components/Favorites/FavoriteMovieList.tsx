import FilmModel from "@/db/filmModal";
import FavoriteMovieItem from "./FavoriteMovieItem";
import { connectToDB } from "@/db/connectToDB";

export default async function FavoriteMovieList() {
  await connectToDB();
  const movies = await FilmModel.find({ isFavorite: true });
  //console.log(movies);
  return <FavoriteMovieItem movies={movies} />;
}
