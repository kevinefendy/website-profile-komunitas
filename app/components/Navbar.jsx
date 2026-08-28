"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center px-4 sm:px-6">

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/images/logo.svg"
            alt="Amalan.com"
            width={68}
            height={68}
            priority
            className="h-[60px] w-[60px] object-contain sm:h-[68px] sm:w-[68px]"
          />

          <div className="flex flex-col items-end gap-[1px]">
            <span className="text-[20px] font-bold leading-none text-neutral-800 sm:text-[22px]">
              Amalan
            </span>

            <span className="text-[11px] font-bold leading-none text-neutral-500 sm:text-[12px]">
              .com
            </span>
          </div>
        </Link>

        <div className="mx-10 hidden flex-1 lg:block">
          <div className="relative">
            <input
              type="text"
              className="
                h-[42px]
                w-full
                rounded-[11px]
                border
                border-neutral-300
                bg-white
                pl-4
                pr-12
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
              width={23}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-neutral-400
              "
            />
          </div>
        </div>

        <div className="ml-auto hidden items-center gap-8 whitespace-nowrap text-[14px] font-semibold text-neutral-800 lg:flex">
          <Link
            href="/donasi"
            className="transition hover:text-sky-500"
          >
            Donasi
          </Link>

          <Link
            href="/event"
            className="transition hover:text-sky-500"
          >
            Event
          </Link>

          <Link
            href="/zakat"
            className="transition hover:text-sky-500"
          >
            Zakat
          </Link>

          <Link
            href="/login"
            className="
              rounded-full
              bg-[#7BC5DE]
              px-7
              py-[11px]
              font-bold
              text-neutral-800
              shadow-[0_7px_14px_rgba(0,0,0,0.12)]
              transition
              hover:bg-[#69B8D3]
            "
          >
            Galang Dana
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:hidden">

          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100"
          >
            <Icon
              icon="mdi:magnify"
              width={25}
              className="text-neutral-700"
            />
          </button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100"
          >
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              width={28}
              className="text-neutral-700"
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4">

            <div className="relative">
              <input
                type="text"
                placeholder="Cari..."
                className="
                  h-[42px]
                  w-full
                  rounded-[11px]
                  border
                  border-neutral-300
                  bg-white
                  pl-4
                  pr-12
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
                width={22}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-neutral-400
                "
              />
            </div>

            <Link
              href="/donasi"
              onClick={() => setIsOpen(false)}
              className="border-b border-neutral-100 py-2 font-semibold text-neutral-800"
            >
              Donasi
            </Link>

            <Link
              href="/event"
              onClick={() => setIsOpen(false)}
              className="border-b border-neutral-100 py-2 font-semibold text-neutral-800"
            >
              Event
            </Link>

            <Link
              href="/zakat"
              onClick={() => setIsOpen(false)}
              className="border-b border-neutral-100 py-2 font-semibold text-neutral-800"
            >
              Zakat
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
                shadow-[0_7px_14px_rgba(0,0,0,0.12)]
                transition
                hover:bg-[#69B8D3]
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