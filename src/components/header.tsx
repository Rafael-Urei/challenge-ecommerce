"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cart } from "./icons/cart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Checkout } from "./checkout";
import { useModal } from "@/contexts/modal-context";
import { MenuIcon } from "lucide-react";
import { useMenu } from "@/contexts/menu-context";
import Menu from "./menu";
import Image from "next/image";

export function Header() {
  const actualRoute = usePathname();
  const { isCartOpen, setIsCartOpen } = useModal();
  const { cartProducts: value } = useLocalStorage("cart-items", []);
  const { isOpen, handleMenu } = useMenu();
  return (
    <>
      {isOpen && <Menu />}
      <header className="flex items-center justify-between px-4 h-24 md:mx-44 md:border-b border-slate-200">
        <div className="flex h-full items-center gap-4 md:gap-20">
          <button
            className="flex justify-center items-center md:hidden"
            onClick={handleMenu}
          >
            <MenuIcon />
          </button>
          <Link href="/" className="font-bold text-3xl text-slate-800">
            sneakers
          </Link>
          <ul className="md:flex h-full items-center justify-center gap-10 hidden">
            <li
              className={
                actualRoute === "/"
                  ? "font-medium text-slate-800 h-full flex items-center relative before:absolute before:bottom-0 before:h-1 before:w-full before:rounded before:bg-orange-400"
                  : "font-medium text-slate-600 duration-200 before:duration-200 h-full flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0"
              }
            >
              <Link href="/">Collections</Link>
            </li>
            <li
              className={
                actualRoute === "/men"
                  ? "font-medium text-slate-800 h-full flex items-center relative before:absolute before:bottom-0 before:h-1 before:w-full before:rounded before:bg-orange-400"
                  : "font-medium text-slate-600 duration-200 before:duration-200 h-full flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0"
              }
            >
              <Link href="/men">Men</Link>
            </li>
            <li
              className={
                actualRoute === "/women"
                  ? "font-medium text-slate-800 h-full flex items-center relative before:absolute before:bottom-0 before:h-1 before:w-full before:rounded before:bg-orange-400"
                  : "font-medium text-slate-600 duration-200 before:duration-200 h-full flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0"
              }
            >
              <Link href="/women">Women</Link>
            </li>
            <li
              className={
                actualRoute === "/about"
                  ? "font-medium text-slate-800 h-full flex items-center relative before:absolute before:bottom-0 before:h-1 before:w-full before:rounded before:bg-orange-400"
                  : "font-medium text-slate-600 duration-200 before:duration-200 h-full flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0"
              }
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={
                actualRoute === "/contact"
                  ? "font-medium text-slate-800 h-full flex items-center relative before:absolute before:bottom-0 before:h-1 before:w-full before:rounded before:bg-orange-400"
                  : "font-medium text-slate-600 duration-200 before:duration-200 h-full flex items-center relative hover:before:absolute hover:before:h-1 hover:before:w-full hover:before:bg-orange-400 hover:before:bottom-0"
              }
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10 relative">
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            {value.length > 0 && (
              <div className="absolute bg-orange-400 h-4 w-6 rounded-lg font-bold text-white text-xs flex items-center justify-center top-[-12px] right-[-6px]">
                {value.length}
              </div>
            )}
            <Cart />
          </div>
          <Checkout />
          <div className="rounded-full bg-slate-200 h-8 w-8 relative">
            <Image src="/images/image-avatar.png" alt="profile" fill></Image>
          </div>
        </div>
      </header>
    </>
  );
}
