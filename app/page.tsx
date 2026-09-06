import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <HeroSlider />
        <CategorySection />
      </main>

      <Footer />
    </>
  );
}