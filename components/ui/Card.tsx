type CardProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function Card({
  eyebrow,
  title,
  description,
}: CardProps) {
  return (
    <article className="card-glass luxury-card p-8">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[.2em] text-champagne">
          {eyebrow}
        </div>
      )}

      <h3 className="mt-4 font-serif text-3xl">
        {title}
      </h3>

      <p className="mt-4 text-stone leading-8">
        {description}
      </p>
    </article>
  );
}
