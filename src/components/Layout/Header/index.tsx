"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import Drawer from "@/components/Drawer";

export const headerLinks = [
  { label: "Услуги", path: "services" },
  { label: "Продукция", path: "products" },
  { label: "Документация", path: "documents" },
  { label: "О нас", path: "about" },
  { label: "Контакты", path: "contacts" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <Fragment>
      <header className="basis-[112px] z-1 flex justify-between items-center py-4 md:py-8">
        <Link href={"/"}>
          <Image
            className="cursor-pointer w-30 h-12 md:w-40 md:h-16"
            src="/logo.png"
            width={162}
            height={64}
            alt="logo"
          />
        </Link>
        {/**desktop menu */}
        <div className="hidden xl:block">
          {headerLinks.map((link) => (
            <Link
              href={`/${link.path}`}
              className="mr-8 cursor-pointer text-white  text-lg hover:text-[#004C97]"
              key={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="inline-flex items-center p-2 w-12.5 h-12.5 md:w-15 md:h-15 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={openMenu}>
          <span className="sr-only">Open mobile menu</span>
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </header>
      {/**mobile menu */}
      <Drawer open={open} onClose={closeMenu}>
        {headerLinks.map((link) => (
          <Link
            href={`/${link.path}`}
            className="mr-8 cursor-pointer text-white  text-lg hover:text-[#004C97]"
            key={link.path}>
            {link.label}
          </Link>
        ))}
      </Drawer>
    </Fragment>
  );
};

export default Header;
