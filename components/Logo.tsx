export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-3">
      <img
        src="/logo/anima-symbol.png"
        alt="A.N.I.M.A Group"
        className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.28)] transition-all duration-500 group-hover:scale-105"
      />

      <div className="leading-none">
        <div className="font-serif text-sm tracking-[.35em] text-ivory">
          The House of Asset Transformation
        </div>
        <div className="mt-1 text-[8px] uppercase tracking-[.18em] text-champagne/80">
          Group
        </div>
      </div>
    </a>
  );
}
