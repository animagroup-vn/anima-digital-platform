import SectionTitle from "@/components/SectionTitle";

const essences = [
  ["A", "Awakening", "Khơi mở"],
  ["N", "Nurturing", "Nuôi dưỡng"],
  ["I", "Illumination", "Khai sáng"],
  ["M", "Mastery", "Tinh thông"],
  ["A", "Abundance", "Thịnh vượng"],
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="05" title="The Five Essences of ANIMA" />

        <div className="grid gap-5 md:grid-cols-5">
          {essences.map(([letter, title, vi]) => (
            <div key={title} className="card-glass p-8 text-center">
              <div className="font-serif text-5xl text-champagne">
                {letter}
              </div>
              <div className="mt-5 text-sm uppercase tracking-[.2em]">
                {title}
              </div>
              <div className="mt-2 text-sm italic text-stone">{vi}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
