import Image from "next/image";
import Link from "next/link";

export default function DonationCard({
  image,
  title,
  category,
  subCategory,
  collected,
  target,
  unlimited,
  organizer,
  buttonText,
  href,
}) {
  const progress =
    !unlimited && target ? Math.min((collected / target) * 100, 100) : 100;

  const getCategoryStyle = (category) => {
    switch (category) {
      case "Zakat":
        return "bg-green-500 text-white";

      case "Kerohanian":
        return "bg-slate-500 text-white";

      case "Olahraga":
        return "bg-neutral-500 text-white";

      case "Sosial":
        return "bg-neutral-500 text-white";

      case "Donasi":
        return "bg-sky-500 text-white";

      default:
        return "bg-neutral-200 text-neutral-700";
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex min-h-[44px] items-start justify-between gap-3">
          <h3 className="line-clamp-2 flex-1 text-[15px] font-bold leading-5 text-neutral-800">
            {title}
          </h3>

          <div className="flex shrink-0 items-center gap-1">
            {category && (
              <span
                className={`rounded-full px-2 py-1 text-[9px] font-medium ${getCategoryStyle(
                  category,
                )}`}
              >
                {category}
              </span>
            )}

            {subCategory && (
              <span
                className={`rounded-full px-2 py-1 text-[9px] font-medium ${getCategoryStyle(
                  subCategory,
                )}`}
              >
                {subCategory}
              </span>
            )}
          </div>
        </div>

        <div className="mt-2 h-[7px] w-full overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full rounded-full bg-green-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="min-h-[36px]">
          <p className="mt-2 text-[11px] text-neutral-600">
            <span className="font-semibold text-green-600">
              Rp {collected.toLocaleString("id-ID")}
            </span>{" "}
            terkumpul dari{" "}
            {unlimited
              ? "∞ tidak terbatas"
              : `Rp ${target.toLocaleString("id-ID")}`}
          </p>
        </div>

        <div className="mt-auto pt-3">
          <p className="mb-4 text-[12px] font-medium text-neutral-900">
            {organizer}
          </p>

          <Link
            href={href}
            className="flex h-[38px] w-full items-center justify-center rounded-md bg-[#7BC5DE] text-[15px] font-medium text-white transition hover:bg-[#69B8D3]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
