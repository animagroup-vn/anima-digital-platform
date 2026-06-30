import Card from "@/components/ui/Card";
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
            <Card
              key={project}
              eyebrow="Project"
              title={project}
              description="A curated destination where architecture, hospitality and investment converge into enduring value."
        />
          ))}
        </div>
      </div>
    </section>
  );
}
