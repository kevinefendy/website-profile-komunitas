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

          <div className="mt-5 flex flex-col gap-4 border-b border-neutral-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="border-b-2 border-[#214E67] pb-2 text-[13px] font-semibold text-[#214E67]">
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

          <section id="detail-sedekah" className="mt-8">
            <div className="max-w-[900px]">
              <p className="text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                Di balik setiap angka kemiskinan yang kita lihat di berita, ada
                nama, ada senyuman, dan ada harapan yang sedang bertahan.
                Sedekah Anda hari ini adalah perpanjangan tangan yang memastikan
                mereka tidak berjuang sendirian.
              </p>

              <p className="mt-4 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                Seringkali, kita melihat berkat dalam hidup kita sebagai hal
                yang biasa: sepiring makanan hangat di meja, malam yang nyenyak
                tanpa suara perut yang keroncongan, atau senyum anak-anak yang
                bisa belajar tanpa cemas besok harus putus sekolah.
              </p>

              <p className="mt-4 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                Namun, di sudut lain, ada seorang ibu yang harus membagi satu
                porsi makanan untuk tiga anaknya. Ada seorang ayah yang menatap
                langit malam, berharap esok hari ada keajaiban yang bisa ia bawa
                pulang untuk keluarganya.
              </p>

              <p className="mt-4 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                Mereka bukan sekadar angka statistik. Mereka adalah kita, yang
                kebetulan sedang diuji dengan garis takdir yang berbeda.
              </p>

              <h2 className="mt-8 text-[18px] font-normal leading-tight text-[#2F6690] sm:text-[22px] lg:text-[24px]">
                Mengapa Sedekah Anda Begitu Berarti?
              </h2>

              <p className="mt-3 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                Sedekah bukan tentang seberapa besar nominal yang Anda
                keluarkan, melainkan tentang seberapa besar cinta dan kepedulian
                yang ikut mengalir di dalamnya. Ketika Anda menyisihkan sebagian
                rezeki, Anda sedang mengirimkan pesan kuat kepada mereka: “Kamu
                didengar, kamu dilihat, dan kamu tidak sendirian.”
              </p>

              <p className="mt-4 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                Mari lupakan sejenak jarak dan perbedaan. Mari kembali pada
                hakikat kita sebagai manusia yang saling menjaga dan saling
                menguatkan. Satu langkah kecil dari Anda hari ini dapat menjadi
                bantuan besar bagi seseorang yang membutuhkan.
              </p>

              <div className="mt-6 rounded-lg bg-neutral-50 p-4">
                <p className="text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  “Tangan yang memberi tidak akan pernah kekurangan, dan hati
                  yang berbagi akan selalu menemukan kedamaian.”
                </p>
              </div>

              <p className="mt-5 text-[12px] font-semibold text-[#2F6690] sm:text-[13px] lg:text-[14px]">
                Yuk, mulai berbagi kebaikan melalui sedekah.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
