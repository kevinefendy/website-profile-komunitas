import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#173F57] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-28">
          <div>
            <h2 className="text-[20px] font-bold">Amalan.com</h2>

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

            <div className="mt-6 h-px max-w-[420px] bg-white/10" />

            <div className="mt-5">
              <h3 className="text-[20px] font-bold">Bahasa</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-white/70 px-4 py-1 text-[14px] transition hover:bg-white hover:text-[#173F57]"
                >
                  English
                </button>

                <button
                  type="button"
                  className="rounded-full border border-white/70 px-4 py-1 text-[14px] transition hover:bg-white hover:text-[#173F57]"
                >
                  Bahasa Indonesia
                </button>
              </div>
            </div>

            <p className="mt-16 text-[14px] text-white/90">
              © Yayasan Amalan Peduli Indonesia 2026
            </p>
          </div>

          <div className="lg:pl-6">
            <h2 className="text-[20px] font-bold">Tentang</h2>

            <div className="mt-5 flex flex-col gap-2 text-[14px] text-white/90">
              <Link href="/tentang" className="hover:underline">
                Amalan
              </Link>

              <Link href="/syarat-ketentuan" className="hover:underline">
                Syarat & Ketentuan
              </Link>

              <Link href="/kontak" className="hover:underline">
                Hubungi Kami
              </Link>

              <Link href="/partner" className="hover:underline">
                Partner Kami
              </Link>

              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>

              <Link href="/blog" className="hover:underline">
                Blog
              </Link>

              <Link href="/child-safety" className="hover:underline">
                Child Safety Standards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
