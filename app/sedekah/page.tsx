import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SedekahPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pb-10 sm:pb-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="py-4 text-[10px] text-neutral-600 sm:py-5 sm:text-[12px]">
            <Link href="/" className="hover:text-[#214E67]">
              Beranda
            </Link>

            <span className="mx-2">&gt;</span>

            <span>Sedekah</span>
          </div>

          <section>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/sedekah/sedekah.png"
                alt="Sedekah"
                width={1536}
                height={591}
                quality={100}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </section>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-b border-neutral-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="border-b-2 border-[#214E67] pb-2 text-[12px] font-semibold text-[#214E67]">
              Detail
            </span>
          </div>

          <Link
            href="#detail-sedekah"
            className="flex h-[42px] items-center justify-center rounded-md bg-[#79bfd8] px-6 text-[12px] font-semibold text-white transition hover:bg-[#69B8D3] sm:min-w-[280px]"
          >
            SEDEKAH SEKARANG
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
