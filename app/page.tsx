import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import SocialStickers from "./components/SocialStickers";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Marquee />

      {/* Hindi Slogan Section for Homepage */}
      <section className="bg-white py-12 md:py-20 text-center px-4 mt-16 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-green-700 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            प्रधानमंत्री सूर्य घर मुफ्त बिजली योजना
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-orange-600 mb-8">
            सोलर पैनल लगवाएं, बिजली का बिल बचाएं!
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xl md:text-2xl font-semibold">
            <span className="bg-green-100 text-green-800 px-6 py-2 rounded-full border border-green-200 shadow-sm">
              सब्सिडी गारंटी: ₹1,08,000/-
            </span>
            <span className="bg-orange-100 text-orange-800 px-6 py-2 rounded-full border border-orange-200 shadow-sm">
              सिर्फ ₹5000/- में रजिस्ट्रेशन
            </span>
          </div>
        </div>
      </section>

      <Features />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />

      {/* Floating Elements */}
      <Popup />
      <SocialStickers />
    </main>
  );
}
