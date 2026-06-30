import SectionTitle from "@/components/ui/SectionTitle";

export default function Investors() {
  return (
    <section
      id="investors"
      className="section-pad bg-ivory text-midnight"
    >
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

        <div>
          <SectionTitle
            eyebrow="10"
            title="Investor Center"
          />

          <p className="leading-8 text-midnight/70">
            Building value. Delivering trust. Creating long-term returns.
          </p>
        </div>

        <div className="border border-midnight/15 p-10">

          <div className="text-3xl font-serif">
            Investor Portal
          </div>

          <p className="mt-5 text-midnight/65">
            Private access for partners, reports,
            project documents and future investment
            opportunities.
          </p>

          <button
            className="mt-8 border border-midnight/25
                       px-6 py-4 text-sm uppercase
                       tracking-[.18em]"
          >
            Coming Soon
          </button>

        </div>

      </div>
    </section>
  );
}
