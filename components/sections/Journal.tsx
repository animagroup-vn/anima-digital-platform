import SectionTitle from "@/components/ui/SectionTitle";

const articles = [
  "The Future of Asset Development",
  "Building Communities That Last",
  "Designing Value Beyond Space",
];

export default function Journal() {
  return (
    <section id="journal" className="section-pad">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="09"
          title="Latest Journal"
        />

        <div className="grid gap-5 md:grid-cols-3">

          {articles.map((article) => (
            <article
              key={article}
              className="card-glass p-8"
            >
              <div className="text-xs uppercase tracking-[.2em] text-champagne">
                Journal
              </div>

              <h3 className="mt-5 font-serif text-2xl">
                {article}
              </h3>

              <p className="mt-5 text-stone">
                Read article
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
