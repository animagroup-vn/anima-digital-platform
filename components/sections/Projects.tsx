import SectionTitle from "@/components/ui/SectionTitle";

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
          eyebrow="07"
          title="Selected Projects"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project}
              className="card-glass p-8"
            >
              <div className="text-xs uppercase tracking-[.2em] text-champagne">
                Project
              </div>

              <h3 className="mt-4 font-serif text-3xl">
                {project}
              </h3>

              <p className="mt-4 text-stone">
                A curated destination where architecture,
                hospitality and investment converge into
                enduring value.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
