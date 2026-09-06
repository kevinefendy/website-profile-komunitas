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
    <section className="mx-auto max-w-[1280px] px-6">
      <div className="rounded-2xl bg-white px-6 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <h2 className="text-[24px] font-bold text-neutral-800">
          BerAmal untuk mereka yang membutuhkan
        </h2>

        <p className="mt-1 text-[16px] text-neutral-700">
          Pilih kategori favorit kamu
        </p>

        <div className="mt-7 grid grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center gap-3"
            >
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#7BC5DE] transition group-hover:scale-105">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] object-contain"
                />
              </div>

              <span className="text-[15px] font-medium text-neutral-700 transition group-hover:text-sky-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}