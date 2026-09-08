import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import DonationCard from "../components/DonationCard";

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
export default function ZakatPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <div className="mx-auto max-w-[900px] px-5">
          <div className="py-5 text-[11px] text-neutral-600">
            <Link href="/" className="hover:text-[#214E67]">
              Beranda
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Zakat</span>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[570px_287px]">
            <div>
              <Image
                src="/images/zakat/zakat.jfif"
                alt="Zakat Penghasilan"
                width={570}
                height={355}
                quality={100}
                className="h-auto w-full object-cover"
              />
              <div className="mt-5">
                <h1 className="bg-neutral-50 px-0 text-[20px] font-normal text-[#2F6690]">
                  Dasar Hukum Zakat Penghasilan
                </h1>
                <p className="mt-2 text-[11px] leading-5 text-neutral-600">
                  Zakat penghasilan adalah zakat yang dikenakan atas pendapatan
                  seseorang, baik bersumber dari gaji bulanan, honorarium atau
                  upah atas jasa yang ditawarkan, maupun dari usaha lainnya yang
                  menghasilkan keuntungan.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[18px] font-semibold text-neutral-500">
                Zakat Penghasilan
              </h2>
              <p className="mt-3 text-[11px] leading-5 text-neutral-500">
                Zakat penghasilan merupakan bagian dari zakat maal dan wajib
                diberikan atas pendapatan yang dimiliki
              </p>
              <div className="mt-4 border-t border-neutral-200">
                <div className="flex items-center gap-3 border-b border-neutral-200 py-3">
                  <span className="text-[18px] text-neutral-500">▣</span>

                  <span className="text-[11px] font-semibold text-neutral-600">
                    Kalkulator Zakat Penghasilan
                  </span>
                </div>
                <div className="border-b border-neutral-200 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[18px] text-neutral-500">♧</span>
                    <span className="text-[11px] font-semibold text-neutral-600">
                      Niat Zakat Penghasilan
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-neutral-500">
                    نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ مَالِي فَرِيْضَةً لِلَّهِ
                    تَعَالَى
                  </p>
                  <p className="text-[11px] leading-5 text-neutral-500">
                    “Nawaitu an ukhrija zakaati maali fardha lillahi ta’aala”
                  </p>
                  <p className="text-[11px] leading-5 text-neutral-500">
                    Saya berniat mengeluarkan zakat harta milikku karena Allah
                    Ta’ala
                  </p>
                </div>
              </div>
              <button className="mt-4 w-full rounded bg-[#79bfd8] py-2 text-[11px] font-semibold text-white">
                BAYAR ZAKAT
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
