"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[70px] max-w-[1280px] items-center px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Amalan.com"
            width={52}
            height={52}
            priority
            className="h-[48px] w-[48px] object-contain sm:h-[52px] sm:w-[52px]"
          />

          <div className="flex flex-col items-end gap-[1px]">
            <span className="text-[18px] font-bold leading-none text-neutral-800">
              Amalan
            </span>

            <span className="text-[9px] font-semibold leading-none text-neutral-500">
              .com
            </span>
          </div>
        </Link>

        {/* Search Desktop */}
        <div className="mx-8 hidden flex-1 lg:block">
          <div className="relative">
            <input
              type="text"
              className="
                h-[38px]
                w-full
                rounded-[10px]
                border
                border-neutral-300
                bg-white
                pl-4
                pr-10
                text-sm
                text-neutral-700
                outline-none
                transition
                focus:border-sky-400
                focus:ring-2
                focus:ring-sky-100
              "
            />

            <Icon
              icon="mdi:magnify"
              width={21}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-neutral-400
              "
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center gap-7 whitespace-nowrap text-[13px] font-semibold text-neutral-800 lg:flex">
          <Link href="/" className="transition hover:text-sky-500">
            Beranda
          </Link>

          <Link href="/zakat" className="transition hover:text-sky-500">
            Zakat
          </Link>

          <Link href="/sedekah" className="transition hover:text-sky-500">
            Sedekah
          </Link>

          <Link href="/wakaf" className="transition hover:text-sky-500">
            Wakaf
          </Link>

          <Link
            href="/login"
            className="
              rounded-full
              bg-[#7BC5DE]
              px-6
              py-[9px]
              font-bold
              text-neutral-800
              shadow-[0_5px_10px_rgba(0,0,0,0.12)]
              transition
              hover:bg-[#69B8D3]
            "
          >
            Galang Dana
          </Link>
        </div>

        {/* Mobile */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <Icon icon="mdi:magnify" width={24} className="text-neutral-700" />
          </button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              width={28}
              className="text-neutral-700"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
            {/* Search Mobile */}
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Cari..."
                className="
                  h-[42px]
                  w-full
                  rounded-[10px]
                  border
                  border-neutral-300
                  pl-4
                  pr-10
                  text-sm
                  outline-none
                  focus:border-sky-400
                "
              />

              <Icon
                icon="mdi:magnify"
                width={21}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-neutral-400
                "
              />
            </div>

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-2 font-semibold"
            >
              Beranda
            </Link>

            <Link
              href="/zakat"
              onClick={() => setIsOpen(false)}
              className="py-2 font-semibold"
            >
              Zakat
            </Link>

            <Link
              href="/sedekah"
              onClick={() => setIsOpen(false)}
              className="py-2 font-semibold"
            >
              Sedekah
            </Link>

            <Link
              href="/wakaf"
              onClick={() => setIsOpen(false)}
              className="py-2 font-semibold"
            >
              Wakaf
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="
                mt-2
                rounded-full
                bg-[#7BC5DE]
                px-6
                py-3
                text-center
                font-bold
                text-neutral-800
              "
            >
              Galang Dana
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
