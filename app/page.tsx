import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import DonationCard from "./components/DonationCard";

import donations from "@/data/donations.json";

const categories = [
  {
    name: "Donasi",
    href: "/donasi",
    icon: "/images/homepage/c-donasi.png",
  },
  {
    name: "Sedekah",
    href: "/sedekah",
    icon: "/images/homepage/c-sedekah.png",
  },
  {
    name: "Wakaf",
    href: "/wakaf",
    icon: "/images/homepage/c-wakaf.png",
  },
  {
    name: "Zakat",
    href: "/zakat",
    icon: "/images/homepage/c-zakat.png",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: "/images/homepage/c-blog.png",
  },
];

export default function Home() {
  const mariBantu = donations.filter((item) => item.section === "mari-bantu");

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <div className="space-y-12 pb-14">
          <section>
            <HeroSlider />
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <div className="rounded-2xl bg-white px-4 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:px-6">
              <h2 className="text-[16px] font-bold text-neutral-800 sm:text-[20px] lg:text-[24px]">
                BerAmal untuk mereka yang membutuhkan
              </h2>

              <p className="mt-1 text-[12px] text-neutral-700 sm:text-[14px] lg:text-[16px]">
                Pilih kategori favorit kamu
              </p>

              <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="group flex min-w-0 flex-col items-center gap-2"
                  >
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#7BC5DE] transition group-hover:scale-105 sm:h-[58px] sm:w-[58px] lg:h-[70px] lg:w-[70px]">
                      <Image
                        src={category.icon}
                        alt={category.name}
                        width={50}
                        height={50}
                        className="h-[34px] w-[34px] object-contain sm:h-[42px] sm:w-[42px] lg:h-[50px] lg:w-[50px]"
                      />
                    </div>

                    <span className="text-center text-[10px] font-medium text-neutral-700 sm:text-[11px] lg:text-[13px]">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-neutral-800 sm:text-[20px] lg:text-[22px]">
                Mari Bantu Mereka
              </h2>

              <Link
                href="/donasi"
                className="rounded-full bg-[#214E67] px-3 py-2 text-[10px] text-white transition hover:bg-[#173F57] sm:px-4 sm:text-[11px]"
              >
                Lihat lainnya
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-5">
              {mariBantu.map((item) => (
                <DonationCard key={item.id} {...item} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex items-center gap-5 rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="flex h-[110px] w-[90px] shrink-0 items-center justify-center">
                  <Icon
                    icon="solar:hand-heart-linear"
                    width={82}
                    className="text-neutral-800"
                  />
                </div>

                <div>
                  <h3 className="text-[14px] font-bold text-neutral-800 sm:text-[16px]">
                    Masih ingin berdonasi lebih banyak untuk mereka
                  </h3>

                  <Link
                    href="/donasi"
                    className="mt-4 inline-block rounded-md border border-[#214E67] px-4 py-2 text-[13px] font-bold text-[#214E67] transition hover:bg-[#214E67] hover:text-white"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="flex h-[110px] w-[90px] shrink-0 items-center justify-center">
                  <Icon
                    icon="solar:gift-linear"
                    width={82}
                    className="text-neutral-800"
                  />
                </div>

                <div>
                  <h3 className="text-[14px] font-bold text-neutral-800 sm:text-[16px]">
                    #BerAmalan bagi mereka yang membutuhkan
                  </h3>

                  <Link
                    href="/login"
                    className="mt-4 inline-block rounded-md border border-[#214E67] px-4 py-2 text-[13px] font-bold text-[#214E67] transition hover:bg-[#214E67] hover:text-white"
                  >
                    Galang Dana
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
