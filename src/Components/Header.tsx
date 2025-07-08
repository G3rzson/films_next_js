"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/myFilms", title: "My Films" },
  { href: "/user", title: "User" },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <header className="bg-zinc-800 text-zinc-300 flex items-center justify-between h-10">
      <Link href={"/"} className="p-2">
        Home
      </Link>
      <nav className="flex">
        {navLinks.map((link) => {
          const isActive =
            pathName === link.href ||
            (pathName.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={`${
                isActive ? "bg-zinc-300 text-zinc-800" : ""
              } h-10 flex items-center justify-center px-4 duration-300 hover:text-zinc-800 hover:bg-zinc-300`}
              href={link.href}
              key={link.title}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
