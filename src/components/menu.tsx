"use client";

import Link from "next/link";
import { Close } from "./icons/close";
import { X } from "lucide-react";
import { useMenu } from "@/contexts/menu-context";

export default function Menu() {
  const { handleMenu } = useMenu();
  return (
    <nav className="h-screen w-screen fixed bg-zinc-800 bg-opacity-50 z-30">
      <div className="h-full w-[250px] bg-white ">
        <button className="mx-4 my-6 scale-90" onClick={handleMenu}>
          <Close />
        </button>
        <ul className="flex flex-col gap-6 p-6">
          <li className="text-xl font-bold text-slate-800 duration-200 before:duration-200 flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0">
            <Link href="/">Collections</Link>
          </li>
          <li className="text-xl font-bold text-slate-800 duration-200 before:duration-200 flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0">
            <Link href="/men">Men</Link>
          </li>
          <li className="text-xl font-bold text-slate-800 duration-200 before:duration-200 flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0">
            <Link href="/women">Women</Link>
          </li>
          <li className="text-xl font-bold text-slate-800 duration-200 before:duration-200 flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0">
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl font-bold text-slate-800 duration-200 before:duration-200 flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
