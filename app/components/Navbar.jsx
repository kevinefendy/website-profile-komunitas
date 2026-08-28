import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Amalan.com"
            width={68}
            height={68}
            priority
            className="h-[68px] w-[68px] object-contain"
          />

          <div className="flex flex-col items-end gap-[1px]">
            <span className="text-[22px] font-bold leading-none text-neutral-800">
              Amalan
            </span>

            <span className="text-[12px] font-bold leading-none text-neutral-500">
              .com
            </span>
          </div>
        </Link>

        {/* Search */}
        <div className="mx-10 flex-1">
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

        {/* Menu */}
        <div className="flex shrink-0 items-center gap-9 whitespace-nowrap text-[14px] font-semibold text-neutral-800">
          <Link href="/donasi" className="transition hover:text-sky-500">
            Donasi
          </Link>

          <Link href="/event" className="transition hover:text-sky-500">
            Event
          </Link>

          <Link href="/zakat" className="transition hover:text-sky-500">
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
      </div>
    </nav>
  );
}
