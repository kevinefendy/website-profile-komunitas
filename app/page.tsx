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

  const campaignMendesak = donations.filter(
    (item) => item.section === "campaign-mendesak",
  );

  const pilihanAyoBantu = donations.filter(
    (item) => item.section === "pilihan-ayobantu",
  );

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <div className="space-y-10 pb-14 sm:space-y-8 lg:space-y-12">
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:gap-4 sm:p-5 lg:gap-5">
                <div className="flex h-[76px] w-[64px] shrink-0 items-center justify-center sm:h-[90px] sm:w-[74px] lg:h-[110px] lg:w-[90px]">
                  <Icon
                    icon="solar:hand-heart-linear"
                    className="text-[58px] text-neutral-800 sm:text-[68px] lg:text-[82px]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[12px] font-bold leading-4 text-neutral-800 sm:text-[14px] sm:leading-5 lg:text-[16px]">
                    Masih ingin berdonasi lebih banyak untuk mereka
                  </h3>

                  <Link
                    href="/donasi"
                    className="mt-3 inline-block rounded-md border border-[#214E67] px-3 py-2 text-[10px] font-bold text-[#214E67] transition hover:bg-[#214E67] hover:text-white sm:px-4 sm:text-[12px] lg:text-[13px]"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:gap-4 sm:p-5 lg:gap-5">
                <div className="flex h-[76px] w-[64px] shrink-0 items-center justify-center sm:h-[90px] sm:w-[74px] lg:h-[110px] lg:w-[90px]">
                  <Icon
                    icon="solar:gift-linear"
                    className="text-[58px] text-neutral-800 sm:text-[68px] lg:text-[82px]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[12px] font-bold leading-4 text-neutral-800 sm:text-[14px] sm:leading-5 lg:text-[16px]">
                    #BerAmalan bagi mereka yang membutuhkan
                  </h3>

                  <Link
                    href="/login"
                    className="mt-3 inline-block rounded-md border border-[#214E67] px-3 py-2 text-[10px] font-bold text-[#214E67] transition hover:bg-[#214E67] hover:text-white sm:px-4 sm:text-[12px] lg:text-[13px]"
                  >
                    Galang Dana
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <Link href="/donasi" className="block overflow-hidden rounded-xl">
              <Image
                src="/images/homepage/banner3.png"
                alt="Ayo Berbagi di Bantu Makan"
                width={1240}
                height={475}
                quality={100}
                unoptimized
                className="h-auto w-full"
              />
            </Link>
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-neutral-800 sm:text-[20px] lg:text-[22px]">
                Campaign Mendesak Minggu Ini
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-5">
              {campaignMendesak.map((item) => (
                <DonationCard key={item.id} {...item} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-neutral-800 sm:text-[20px] lg:text-[22px]">
                Pilihan AyoBantu
              </h2>

              <Link
                href="/donasi"
                className="rounded-full bg-[#214E67] px-3 py-2 text-[10px] text-white transition hover:bg-[#173F57] sm:px-4 sm:text-[11px]"
              >
                Lihat lainnya
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-5">
              {pilihanAyoBantu.map((item) => (
                <DonationCard key={item.id} {...item} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-[1280px] px-6">
            <div className="rounded-2xl bg-white px-5 py-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:px-8 sm:py-10">
              <div className="text-center">
                <h2 className="text-[24px] font-bold leading-tight text-neutral-800 sm:text-[28px] lg:text-[32px]">
                  Kenapa Berbagi
                  <br />
                  Bersama Amalan?
                </h2>

                <p className="mt-2 text-[12px] text-neutral-500 sm:text-[14px]">
                  #BerAmal untuk yang membutuhkan
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:mt-12 lg:gap-10">
                <div className="flex flex-col items-center text-center">
                  <Icon
                    icon="solar:heart-linear"
                    className="text-[48px] text-[#214E67] sm:text-[56px] lg:text-[64px]"
                  />

                  <h3 className="mt-4 text-[15px] font-bold text-neutral-800 sm:text-[17px] lg:text-[18px]">
                    Bantu
                  </h3>

                  <p className="mt-2 max-w-[210px] text-[11px] leading-5 text-neutral-600 sm:text-[12px] lg:text-[13px]">
                    #AyoBantu sesama yang membutuhkan
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Icon
                    icon="solar:smartphone-linear"
                    className="text-[48px] text-[#214E67] sm:text-[56px] lg:text-[64px]"
                  />

                  <h3 className="mt-4 text-[15px] font-bold text-neutral-800 sm:text-[17px] lg:text-[18px]">
                    Praktis
                  </h3>

                  <p className="mt-2 max-w-[210px] text-[11px] leading-5 text-neutral-600 sm:text-[12px] lg:text-[13px]">
                    Bantu sesama dari mana pun, cukup gunakan HP kita
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Icon
                    icon="solar:target-linear"
                    className="text-[48px] text-[#214E67] sm:text-[56px] lg:text-[64px]"
                  />

                  <h3 className="mt-4 text-[15px] font-bold text-neutral-800 sm:text-[17px] lg:text-[18px]">
                    Tepat Sasaran
                  </h3>

                  <p className="mt-2 max-w-[210px] text-[11px] leading-5 text-neutral-600 sm:text-[12px] lg:text-[13px]">
                    Program penggalangan dana dipertanggungjawabkan kebenarannya
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Icon
                    icon="solar:magnifer-linear"
                    className="text-[48px] text-[#214E67] sm:text-[56px] lg:text-[64px]"
                  />

                  <h3 className="mt-4 text-[15px] font-bold text-neutral-800 sm:text-[17px] lg:text-[18px]">
                    Transparan
                  </h3>

                  <p className="mt-2 max-w-[210px] text-[11px] leading-5 text-neutral-600 sm:text-[12px] lg:text-[13px]">
                    Penyaluran dana dilakukan secara transparan
                  </p>
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
