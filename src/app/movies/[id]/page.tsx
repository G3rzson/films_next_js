import FilmModel from "@/db/filmModal";
import { CiImageOn } from "react-icons/ci";
import { SingleMovie } from "@/Types/types";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function Movie({ params }: Props) {
  const movieId = (await params).id;

  const singleMovie: SingleMovie | null = await FilmModel.findById(movieId);

  if (!singleMovie) {
    return notFound();
  }

  return (
    <>
      <Link
        href="/"
        className="text-zinc-300 bg-zinc-800 hover:bg-zinc-700 duration-300 block rounded-2xl p-4 my-4 mx-auto w-4/5 text-center"
      >
        Vissza
      </Link>
      <div className="bg-zinc-800 rounded-2xl p-4 my-4 mx-auto w-4/5 flex flex-col justify-center items-center">
        <CiImageOn size={180} color="orange" />
        <h3 className="text-zinc-300 text-2xl">{singleMovie.title}</h3>
        <p className="text-zinc-300 text-sm my-4">{singleMovie.content}</p>
      </div>
    </>
  );
}
