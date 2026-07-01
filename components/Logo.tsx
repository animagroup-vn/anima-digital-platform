export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-4">
      <img
        src="/logo/anima-symbol.png"
        alt="A.N.I.M.A"
        className="h-14 w-auto object-contain drop-shadow-[0_0_14px_rgba(212,175,55,0.35)] transition-all duration-500 group-hover:scale-105"
      />

      <div className="leading-none">
        <div className="font-serif text-base tracking-[.38em] text-ivory">
          A.N.I.M.A
        </div>
        <div className="mt-1 text-[8px] uppercase tracking-[.18em] text-champagne/80">
          The House of Asset Transformation
        </div>
      </div>
    </a>
  );
}
