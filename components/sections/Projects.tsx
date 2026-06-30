import SectionTitle from "@/components/SectionTitle";

const projects = [
  "ANIMA Legacy Residences",
  "ANIMA Vista",
  "ANIMA Retreat",
  "ANIMA Center",
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="08"
          title="Places We Awakened"
        />

        <div className="grid gap-5 md:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project}
              className="card-glass min-h-72 p-6 flex flex-col justify-end"
            >
              <div className="text-sm uppercase tracking-[.18em] text-champagne">
                {project}
              </div>

              <div className="mt-3 text-xs text-stone">
                View Project →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
