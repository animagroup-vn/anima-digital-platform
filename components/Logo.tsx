export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-3">
      <img
        src="/logo/anima-symbol.png"
        alt="A.N.I.M.A Group"
        className="h-8 w-auto object-contain transition duration-500 group-hover:scale-105"
      />

      <div className="leading-none">
        <div className="font-serif text-sm tracking-[.35em] text-ivory">
          A.N.I.M.A
        </div>
        <div className="mt-1 text-[8px] uppercase tracking-[.28em] text-champagne">
          Group
        </div>
      </div>
    </a>
  );
}
