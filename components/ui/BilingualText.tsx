type BilingualTextProps = {
  en: string;
  vi: string;
  variant?: "title" | "subtitle" | "body" | "button";
};

export default function BilingualText({
  en,
  vi,
  variant = "body",
}: BilingualTextProps) {
  if (variant === "title") {
    return (
      <>
        {en}
        <div className="mt-2 text-[16px] font-light tracking-[0.015em] text-stone-300/55 md:text-[18px]">
          {vi}
        </div>
      </>
    );
  }

  if (variant === "subtitle") {
    return (
      <>
        {en}
        <div className="mt-1 text-[10px] font-light uppercase tracking-[0.08em] text-champagne/45 md:text-[11px]">
          {vi}
        </div>
      </>
    );
  }

  if (variant === "button") {
    return (
      <>
        {en}
        <span className="mt-0.5 block text-[9px] font-light tracking-[0.04em] text-stone-400/55 md:text-[10px]">
          {vi}
        </span>
      </>
    );
  }

  return (
    <>
      <p>{en}</p>
      <p className="mt-1 text-[12px] font-light leading-7 text-stone-300/50 md:text-[13px]">
        {vi}
      </p>
    </>
  );
}
