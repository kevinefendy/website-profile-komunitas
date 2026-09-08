"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ZakatPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pb-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="py-5 text-[11px] text-neutral-600 sm:text-[12px]">
            <Link href="/" className="hover:text-[#214E67]">
              Beranda
            </Link>

            <span className="mx-2">&gt;</span>

            <span>Zakat</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:gap-10">
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
                <h1 className="bg-neutral-50 text-[20px] font-normal text-[#2F6690] sm:text-[22px] lg:text-[24px]">
                  Dasar Hukum Zakat Penghasilan
                </h1>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Zakat penghasilan adalah zakat yang dikenakan atas pendapatan
                  seseorang, baik bersumber dari gaji bulanan, honorarium atau
                  upah atas jasa yang ditawarkan, maupun dari usaha lainnya yang
                  menghasilkan keuntungan. Dalam Al-Qur’an, Allah Swt. telah
                  menjelaskan tujuan zakat. Allah Swt. berfirman:
                </p>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  “Ambillah zakat dari sebagian mereka (guna) membersihkan
                  mereka, dan doakanlah mereka karena sesungguhnya doamu adalah
                  ketenteraman bagi mereka. Allah Maha Mendengar lagi Maha
                  Mengetahui.” (QS. At-Taubah: 103).
                </p>

                <p className="mt-3 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Dari ayat ini, jelas menegaskan bahwa zakat berfungsi sebagai
                  penyucian harta yang kita peroleh. Sehingga harta kita menjadi
                  bersih dari hak-hak orang lain, serta untuk memastikan harta
                  yang kita miliki berkah dan dapat membawa keberkahan.
                </p>

                <p className="mt-3 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Hukum zakat penghasilan ulama fiqh berbeda pendapat. Mayoritas
                  ulama’ Madzhab empat tidak mewajibkan zakat penghasilan pada
                  saat menerima kecuali sudah mencapai nisab dan setahun (haul).
                  Namun para ulama’ mutaakhirin seperti Syekh Adurrahman Hasan,
                  Syekh Muhammad Abu Zahro, Syekh Abdul Wahhab Khallaf, Syekh
                  Yusuf Al-Qardhawi, Syekh Wahbah Az-Zuhaili, hasil kajian
                  majma’ fiqh dan fatwa MUI Nomor 3 tahun 2003 menegaskan bahwa
                  zakat penghasilan itu hukumnya wajib.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="bg-neutral-50 text-[20px] font-normal text-[#2F6690] sm:text-[22px] lg:text-[24px]">
                  Zakat Penghasilan Berapa Persen?
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Berdasarkan pendapat para ulama dan lembaga zakat di
                  Indonesia, zakat penghasilan berapa persen yang wajib
                  dikeluarkan, yaitu sebesar 2,5% dari penghasilan bersih atau
                  kotor, tergantung metode perhitungannya.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="bg-neutral-50 text-[20px] font-normal text-[#2F6690] sm:text-[22px] lg:text-[24px]">
                  Nisab Zakat Penghasilan
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Nisab adalah batas minimal harta yang wajib untuk kita
                  keluarkan zakatnya. Dalam zakat penghasilan, nisabnya
                  disamakan dengan nilai emas sebesar 85 gram emas yang telah
                  disimpan selama satu tahun. Jika dikonversikan ke dalam bentuk
                  mata uang rupiah, nilainya mengikuti harga emas yang berlaku
                  saat itu.
                </p>

                <p className="mt-3 bg-neutral-50 p-3 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Misalnya, jika harga emas per gram adalah Rp2.670.000,00
                  (harga ANTAM per tanggal 19 Februari 2026), maka nisab zakat
                  penghasilan adalah:
                  <br />
                  85 gram × Rp2.670.000,00 = Rp226.950.000 per tahun atau
                  Rp18.912.500 per bulan
                </p>

                <p className="mt-3 text-[12px] leading-5 text-neutral-600 sm:text-[13px] sm:leading-6 lg:text-[14px]">
                  Jika penghasilan kita telah mencapai atau melebihi nisab ini,
                  maka kita wajib mengeluarkan zakat sebesar 2,5%. Jika
                  penghasilan kita belum mencapai nisab, maka kita tidak
                  diwajibkan membayar zakat, tetapi tetap dianjurkan untuk
                  bersedekah.
                </p>
              </div>
            </div>

            <div className="h-fit rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <h2 className="text-[18px] font-semibold text-neutral-600 sm:text-[20px]">
                Zakat Penghasilan
              </h2>

              <p className="mt-3 text-[11px] leading-5 text-neutral-500 sm:text-[12px] lg:text-[13px]">
                Zakat penghasilan merupakan bagian dari zakat maal dan wajib
                diberikan atas pendapatan yang dimiliki
              </p>

              <div className="mt-4 border-t border-neutral-200">
                <div className="flex items-center gap-3 border-b border-neutral-200 py-3">
                  <div className="flex items-center gap-3">
                    <Icon
                      icon="material-symbols:calculate-outline"
                      className="text-[20px] text-neutral-500"
                    />

                    <span className="text-[11px] font-semibold text-neutral-600 sm:text-[12px] lg:text-[13px]">
                      Kalkulator Zakat Penghasilan
                    </span>
                  </div>
                </div>

                <div className="border-b border-neutral-200 py-3">
                  <div className="flex items-center gap-3 border-b border-neutral-200 py-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon
                          icon="material-symbols:volunteer-activism-outline"
                          className="text-[20px] text-neutral-500"
                        />

                        <span className="text-[11px] font-semibold text-neutral-600 sm:text-[12px] lg:text-[13px]">
                          Niat Zakat Penghasilan
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-neutral-500 sm:text-[12px] lg:text-[13px]">
                    نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ مَالِي فَرِيْضَةً لِلَّهِ
                    تَعَالَى
                  </p>

                  <p className="text-[11px] leading-5 text-neutral-500 sm:text-[12px] lg:text-[13px]">
                    “Nawaitu an ukhrija zakaati maali fardha lillahi ta’aala”
                  </p>

                  <p className="text-[11px] leading-5 text-neutral-500 sm:text-[12px] lg:text-[13px]">
                    Saya berniat mengeluarkan zakat harta milikku karena Allah
                    Ta’ala
                  </p>
                </div>
              </div>

              <button
                onClick={() => alert("Terima kasih telah membayar zakat.")}
                className="mt-4 w-full rounded bg-[#79bfd8] py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#69B8D3] sm:text-[13px]"
              >
                BAYAR ZAKAT
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
