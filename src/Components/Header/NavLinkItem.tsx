"use client";
import { navLinks } from "@/Constans/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinkItem() {
  const pathName = usePathname();
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto">
      {navLinks.map((link) => {
        const isActive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={`${
              isActive ? "bg-zinc-300 text-zinc-800" : ""
            } p-3 duration-300 block text-center w-full sm:w-auto text-zinc-300 hover:text-zinc-800 hover:bg-zinc-300`}
            href={link.href}
            key={link.title}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
