import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Ecosystem from "@/components/sections/Ecosystem";
import Projects from "@/components/sections/Projects";
import Investors from "@/components/sections/Investors";
import Journal from "@/components/sections/Journal";
import Footer from "@/components/sections/Footer";

const essences = [
  ["A", "Awakening", "Khơi mở"],
  ["N", "Nurturing", "Nuôi dưỡng"],
  ["I", "Illumination", "Khai sáng"],
  ["M", "Mastery", "Tinh thông"],
  ["A", "Abundance", "Thịnh vượng"],
];

const pillars = ["Land", "People", "Value", "Community", "Legacy"];
const projects = ["ANIMA Legacy Residences", "ANIMA Vista", "ANIMA Retreat", "ANIMA Center"];

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <About />

      <Philosophy />

      <Ecosystem />

      <Projects />

      <Investors />

      <Journal />

      <footer id="contact" className="border-t luxury-border px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="font-serif tracking-[.35em]">A.N.I.M.A</div>
            <div className="mt-3 text-xs uppercase tracking-[.2em] text-champagne">The House of Asset Transformation</div>
          </div>
          <div className="text-sm text-stone">contact@animagroup.vn</div>
          <div className="text-sm text-stone">www.animagroup.vn</div>
          <div className="text-sm text-stone">Ho Chi Minh City, Vietnam</div>
        </div>
      </footer>
    </main>
  );
}
