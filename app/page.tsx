import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/sections/Hero";

const essences = [
  ["A", "Awakening", "Khơi mở"],
  ["N", "Nurturing", "Nuôi dưỡng"],
  ["I", "Illumination", "Khai sáng"],
  ["M", "Mastery", "Tinh thông"],
  ["A", "Abundance", "Thịnh vượng"]
];

const pillars = ["Land", "People", "Value", "Community", "Legacy"];
const projects = ["ANIMA Legacy Residences", "ANIMA Vista", "ANIMA Retreat", "ANIMA Center"];

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <section id="about" className="section-pad bg-ivory text-midnight">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="02" title="A Letter From The Founder" />
            <p className="leading-8 text-midnight/75">
              Every place holds a soul. Every space carries a story. Within every asset lies a potential far greater than what meets the eye.
              At ANIMA Group, we exist to awaken that potential.
            </p>
          </div>
          <div className="flex items-end justify-end">
            <div>
              <div className="font-serif text-4xl italic text-midnight/70">Do Vuong Huy</div>
              <div className="mt-4 text-sm uppercase tracking-[.2em] text-midnight/55">Founder & Chairman</div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="05" title="The Five Essences of ANIMA" />
          <div className="grid gap-5 md:grid-cols-5">
            {essences.map(([letter, title, vi]) => (
              <div key={title} className="card-glass p-8 text-center">
                <div className="font-serif text-5xl text-champagne">{letter}</div>
                <div className="mt-5 text-sm uppercase tracking-[.2em]">{title}</div>
                <div className="mt-2 text-sm italic text-stone">{vi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section-pad bg-ivory text-midnight">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="07" title="Our Business Ecosystem" />
          <div className="grid gap-4 md:grid-cols-5">
            {["Design & Studio", "Build", "Development", "Apartment", "Lifestyle"].map((item) => (
              <div key={item} className="border border-midnight/15 p-8 text-center uppercase tracking-[.15em]">
                ANIMA<br /><span className="text-sm text-midnight/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="08" title="Places We Awakened" />
          <div className="grid gap-5 md:grid-cols-4">
            {projects.map((p) => (
              <div key={p} className="card-glass min-h-72 p-6 flex flex-col justify-end">
                <div className="text-sm uppercase tracking-[.18em] text-champagne">{p}</div>
                <div className="mt-3 text-xs text-stone">View Project →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
