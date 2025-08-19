import FilmModel from "@/db/filmModal";
import MovieItem from "./MovieItem";
import { connectToDB } from "@/db/connectToDB";

export default async function MovieList() {
  await connectToDB();
  const movies = await FilmModel.find();
  //console.log(movies);
  return <MovieItem movies={movies} />;
}
