import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center flex flex-col gap-8 items-center justify-center mt-40">
      <h1 className="text-3xl">404 | Page not found</h1>
      <Link
        href={"/"}
        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:underline duration-300 cursor-pointer rounded py-2 px-4 text-2xl"
      >
        Go to the Home page
      </Link>
    </div>
  );
}
