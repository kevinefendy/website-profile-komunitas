import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#173F57] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[20px] font-bold">
              Amalan.com
            </h2>

            <p className="mt-5 max-w-[430px] text-[14px] leading-6 text-white/90">
              Kami telah memiliki Izin Pengumpulan Uang dan Barang untuk Non
              Bencana di Kementerian Sosial Republik Indonesia dengan no surat
              izin 15/HUK-PS/2026
            </p>

            <div className="mt-5 flex items-center gap-5">
              <Link
                href="#"
                aria-label="TikTok"
                className="transition hover:opacity-70"
              >
                <Icon icon="ic:baseline-tiktok" width={22} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="transition hover:opacity-70"
              >
                <Icon icon="mdi:instagram" width={22} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="transition hover:opacity-70"
              >
                <Icon icon="mdi:facebook" width={22} />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-[20px] font-bold">
              Tentang
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}