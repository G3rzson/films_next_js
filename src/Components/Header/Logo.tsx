import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="text-zinc-300 sm:px-4 px-0 py-2 text-2xl font-bold"
    >
      Filmek
    </Link>
  );
}
