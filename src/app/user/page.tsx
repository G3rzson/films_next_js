import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-row flex-wrap gap-8 items-center justify-center mt-16 sm:mt-40 ">
      <div className="bg-zinc-800 text-zinc-300 p-4 rounded-xl w-60 h-60 flex flex-col justify-between">
        <p className="text-2xl italic">Do you have an accont?</p>
        <Link
          className="bg-amber-500 hover:bg-amber-300 cursor-pointer w-full rounded text-zinc-800 p-2 text-center"
          href={"/user/login"}
        >
          Login
        </Link>
      </div>

      <div className="bg-zinc-800 text-zinc-300 p-4 rounded-xl w-60 h-60 flex flex-col justify-between">
        <p className="text-2xl italic">Do you want to create an accont?</p>
        <Link
          className="bg-amber-500 hover:bg-amber-300 cursor-pointer w-full rounded text-zinc-800 p-2 text-center"
          href={"/user/register"}
        >
          Registration
        </Link>
      </div>
    </div>
  );
}
