import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section-pad bg-ivory text-midnight">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="02" title="A Letter From The Founder" />

          <p className="leading-8 text-midnight/75">
            Every place holds a soul. Every space carries a story. Within every
            asset lies a potential far greater than what meets the eye. At
            ANIMA Group, we exist to awaken that potential.
          </p>
        </div>

        <div className="flex items-end justify-end">
          <div>
            <div className="font-serif text-4xl italic text-midnight/70">
              Do Vuong Huy
            </div>
            <div className="mt-4 text-sm uppercase tracking-[.2em] text-midnight/55">
              Founder & Chairman
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
