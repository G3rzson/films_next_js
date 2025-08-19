import { SingleMovie } from "@/Types/types";
import Link from "next/link";
import { CiImageOn } from "react-icons/ci";
import FavoriteBtn from "./FavoriteBtn";

type Props = {
  movies: SingleMovie[];
};

export default function MovieItem({ movies }: Props) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center my-4">
        <h2 className="text-zinc-800 text-2xl">Nincsenek filmek.</h2>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center my-4">
      {movies.map((movie) => (
        <div
          key={movie._id}
          className="bg-zinc-800 w-60 h-80 rounded-2xl p-4 flex flex-col justify-center items-center"
        >
          <Link href={`/movies/${movie._id}`}>
            <CiImageOn size={180} color="orange" />
            <h3 className="text-zinc-300 text-2xl text-center">
              {movie.title}
            </h3>
          </Link>
          <FavoriteBtn
            isFavorite={movie.isFavorite}
            id={movie._id.toString()}
          />
        </div>
      ))}
    </div>
  );
}
