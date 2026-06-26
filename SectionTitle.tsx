export default function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="mb-3 text-sm tracking-[.35em] text-champagne">{eyebrow}</div>
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}
