import SectionTitle from "@/components/SectionTitle";

const ecosystem = [
  "Design & Studio",
  "Build",
  "Development",
  "Apartment",
  "Lifestyle",
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-pad bg-ivory text-midnight">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="07"
          title="Our Business Ecosystem"
        />

        <div className="grid gap-4 md:grid-cols-5">
          {ecosystem.map((item) => (
            <div
              key={item}
              className="border border-midnight/15 p-8 text-center uppercase tracking-[.15em]"
            >
              ANIMA
              <br />
              <span className="text-sm text-midnight/60">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
