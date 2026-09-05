"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const banners = [
  "/images/homepage/banner1.png",
  "/images/homepage/banner2.png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-6">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          width={1280}
          height={500}
          priority
          className="h-auto w-full object-cover"
        />

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
          aria-label="Banner sebelumnya"
        >
          <Icon icon="mdi:chevron-left" width={30} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
          aria-label="Banner berikutnya"
        >
          <Icon icon="mdi:chevron-right" width={30} />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Banner ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}