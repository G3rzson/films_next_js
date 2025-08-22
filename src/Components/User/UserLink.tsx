import Link from "next/link";

type Props = {
  path: string;
  linkTitle: string;
  cardText: string;
};

export default function UserLink({ path, linkTitle, cardText }: Props) {
  return (
    <div className="bg-zinc-800 text-zinc-300 p-4 rounded-xl w-60 h-60 flex flex-col justify-between">
      <p className="text-2xl italic text-center">{cardText}</p>
      <Link
        className="bg-amber-500 hover:bg-amber-300 cursor-pointer w-full rounded text-zinc-800 p-2 text-center"
        href={path}
      >
        {linkTitle}
      </Link>
    </div>
  );
}
