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

      <main className="bg-white pb-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="py-5 text-[12px] text-neutral-600">
            <Link href="/" className="hover:text-[#214E67]">
              Beranda
            </Link>

            <span className="mx-2">&gt;</span>

            <span>Wakaf</span>
          </div>

          <section>
            <div className="grid grid-cols-4 gap-5">
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
