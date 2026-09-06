import Link from "next/link";
import Image from "next/image";

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

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-6">
      <div className="rounded-2xl bg-white px-4 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:px-6">
        <h2 className="text-[16px] font-bold text-neutral-800 sm:text-[20px] lg:text-[24px]">
          BerAmal untuk mereka yang membutuhkan
        </h2>

        <p className="mt-1 text-[12px] text-neutral-700 sm:text-[14px] lg:text-[16px]">
          Pilih kategori favorit kamu
        </p>

        <div className="mt-6 grid grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
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

              <span className="text-center text-[10px] font-medium text-neutral-700 transition group-hover:text-sky-500 sm:text-[12px] lg:text-[15px]">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}