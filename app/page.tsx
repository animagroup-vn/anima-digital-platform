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

     <Footer />
    </main>
  );
}
