"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GabungPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      "Permintaan bergabung berhasil dikirim. Admin akan menghubungi kamu untuk konfirmasi.",
    );

    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 py-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ILUSTRASI KIRI */}
          <div className="hidden items-center justify-end lg:flex">
            <Image
              src="/images/gabung/gabung.png"
              alt="Ilustrasi berbagi"
              width={850}
              height={700}
              priority
              className="w-full max-w-[650px] object-contain"
            />
          </div>

          {/* CARD KANAN */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[550px] rounded-md border border-neutral-200 bg-white px-8 py-10 shadow-sm sm:px-10">
              {/* LOGO */}
              <div className="flex justify-center">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/logo.png"
                    alt="Amalan.com"
                    width={64}
                    height={64}
                    priority
                    className="h-[64px] w-[64px] object-contain"
                  />

                  <div className="flex flex-col justify-center">
                    <span className="text-[20px] font-bold leading-none text-neutral-800">
                      Amalan
                    </span>

                    <span className="mt-[2px] self-end text-[9px] font-semibold leading-none text-neutral-500">
                      .com
                    </span>
                  </div>
                </div>
              </div>

              {/* JUDUL */}
              <div className="mt-6 text-center">
                <h1 className="text-[20px] font-bold text-[#172B3A] sm:text-[22px]">
                  Gabung Komunitas
                </h1>

                <p className="mx-auto mt-2 max-w-[320px] text-[12px] leading-5 text-neutral-500 sm:text-[13px]">
                  Isi data di bawah, admin akan menghubungimu
                  <br className="hidden sm:block" />
                  untuk konfirmasi.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label className="mb-2 block text-[12px] font-medium text-[#172B3A] sm:text-[13px]">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="h-[42px] w-full rounded-md border border-neutral-300 px-3 text-[12px] text-neutral-700 outline-none transition placeholder:text-neutral-300 focus:border-[#2F6690] sm:text-[13px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-medium text-[#172B3A] sm:text-[13px]">
                    Nama
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Nama Kamu"
                    className="h-[42px] w-full rounded-md border border-neutral-300 px-3 text-[12px] text-neutral-700 outline-none transition placeholder:text-neutral-300 focus:border-[#2F6690] sm:text-[13px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-medium text-[#172B3A] sm:text-[13px]">
                    Motivasi Join
                  </label>

                  <textarea
                    required
                    rows={4}
                    placeholder="Ceritakan Alasanmu"
                    className="w-full resize-none rounded-md border border-neutral-300 px-3 py-3 text-[12px] text-neutral-700 outline-none transition placeholder:text-neutral-300 focus:border-[#2F6690] sm:text-[13px]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-[42px] w-full rounded-md bg-[#1F506D] text-[12px] font-semibold text-white transition hover:bg-[#173F57] sm:text-[13px]"
                >
                  Ajukan Gabung
                </button>
              </form>

              {/* INFO */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="text-[15px] text-neutral-400">◷</span>

                <p className="text-[11px] text-neutral-500 sm:text-[12px]">
                  Permintaan akan direview admin dalam 1x24 jam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}