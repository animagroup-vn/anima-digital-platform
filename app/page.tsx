import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Ecosystem from "@/components/sections/Ecosystem";
import Projects from "@/components/sections/Projects";

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

      <section id="investors" className="section-pad bg-ivory text-midnight">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="10" title="Investor Center" />
            <p className="leading-8 text-midnight/70">
              Building value. Delivering trust. Creating long-term returns.
            </p>
          </div>
          <div className="border border-midnight/15 p-10">
            <div className="text-3xl font-serif">Investor Portal</div>
            <p className="mt-5 text-midnight/65">Private access for partners, reports, project documents and future investment opportunities.</p>
            <button className="mt-8 border border-midnight/25 px-6 py-4 text-sm uppercase tracking-[.18em]">Coming Soon</button>
          </div>
        </div>
      </section>

      <section id="journal" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="09" title="Latest Journal" />
          <div className="grid gap-5 md:grid-cols-3">
            {["The Future of Asset Development", "Building Communities That Last", "Designing Value Beyond Space"].map((j) => (
              <article key={j} className="card-glass p-8">
                <div className="text-xs uppercase tracking-[.2em] text-champagne">Journal</div>
                <h3 className="mt-5 font-serif text-2xl">{j}</h3>
                <p className="mt-5 text-stone">Read article →</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
