"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function UserLink() {
  const pathName = usePathname();
  return (
    <Link
      href={"/user"}
      className={`${
        pathName === "/user" ? "bg-zinc-300 text-zinc-800" : ""
      } p-3 text-zinc-300 duration-300 w-full text-center sm:w-auto border-b-2 sm:border-0 hover:text-zinc-800 hover:bg-zinc-300`}
    >
      Felhasználó
    </Link>
  );
}
