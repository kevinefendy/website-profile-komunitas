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

      default:
        return "bg-neutral-500 text-white";
    }
  };

  return (
    <>
      <Link
        href={href}
        className="flex gap-3 border-b border-neutral-200 py-4 lg:hidden"
      >
        <div className="relative h-[105px] w-[105px] shrink-0 overflow-hidden rounded-md sm:h-[120px] sm:w-[120px]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[12px] font-bold leading-4 text-neutral-800 sm:text-[14px] sm:leading-5">
            {title}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-1">
            {category && (
              <span
                className={`rounded-md px-1.5 py-[3px] text-[8px] font-medium sm:text-[9px] ${getCategoryStyle(
                  category,
                )}`}
              >
                {category}
              </span>
            )}

            {subCategory && (
              <span
                className={`rounded-md px-1.5 py-[3px] text-[8px] font-medium sm:text-[9px] ${getCategoryStyle(
                  subCategory,
                )}`}
              >
                {subCategory}
              </span>
            )}
          </div>

          <p className="mt-2 text-[10px] font-medium text-neutral-900 sm:text-[12px]">
            {organizer}
          </p>

          <div className="mt-2 h-[5px] w-full overflow-hidden rounded-full bg-neutral-200 sm:h-[6px]">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <p className="text-[8px] text-neutral-500 sm:text-[10px]">
                Terkumpul
              </p>

              <p className="text-[10px] font-bold text-green-600 sm:text-[12px]">
                Rp {collected.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[8px] text-neutral-400 sm:text-[10px]">
                Target:
                {unlimited
                  ? " ∞ tidak terbatas"
                  : ` Rp ${target.toLocaleString("id-ID")}`}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="hidden h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] lg:flex">
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
                  className={`rounded-lg px-1 py-1 text-[9px] font-medium ${getCategoryStyle(
                    category,
                  )}`}
                >
                  {category}
                </span>
              )}

              {subCategory && (
                <span
                  className={`rounded-lg px-1 py-1 text-[9px] font-medium ${getCategoryStyle(
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
    </>
  );
}
