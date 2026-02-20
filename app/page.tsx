import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import QuoteCarousel from "@/components/sections/QuoteCarousel";
import Gallery from "@/components/sections/Gallery";
import DownloadApp from "@/components/sections/DownloadApp";
import Newsletter from "@/components/sections/Newsletter";
import Technology from "@/components/sections/Technology";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <QuoteCarousel />
      <Gallery />
      <DownloadApp />
      <Newsletter />
      <Technology />
      <Pricing />
      <Footer />
    </main>
  );
}
