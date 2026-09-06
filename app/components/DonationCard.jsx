import Image from "next/image";
import Link from "next/link";

export default function DonationCard({
  image,
  title,
  category,
  collected,
  target,
  unlimited,
  organizer,
  buttonText,
  href,
}) {
  const progress =
    !unlimited && target
      ? Math.min((collected / target) * 100, 100)
      : 100;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="h-[220px] w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-[14px] font-bold text-neutral-800">
            {title}
          </h3>

          <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-1 text-[9px] text-neutral-600">
            {category}
          </span>
        </div>

        <div className="mt-4 h-[6px] w-full overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full rounded-full bg-green-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-[11px] text-neutral-500">
          <span className="font-semibold text-green-600">
            Rp {collected.toLocaleString("id-ID")}
          </span>{" "}
          terkumpul dari{" "}
          {unlimited
            ? "∞ tidak terbatas"
            : `Rp ${target.toLocaleString("id-ID")}`}
        </p>

        <p className="mt-4 text-[11px] text-neutral-600">
          {organizer}
        </p>

        <Link
          href={href}
          className="mt-4 block rounded-md bg-[#7BC5DE] py-2 text-center text-[13px] font-medium text-white"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}