import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationCard from "../components/DonationCard";

import donations from "@/data/donations.json";

export default function WakafPage() {
  const wakafItems = donations.filter((item) => item.section === "wakaf");

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

            <span>Wakaf</span>
          </div>

          <section>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-5">
              {wakafItems.map((item) => (
                <DonationCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
