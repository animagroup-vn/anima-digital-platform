export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-4">

      <img
        src="/logo/anima-symbol.png"
        alt="A.N.I.M.A"
        className="
          h-10
          w-auto
          object-contain
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:rotate-[2deg]
        "
      />

      <div className="leading-none">

        <div className="font-serif text-base tracking-[.42em] text-ivory">
          A.N.I.M.A
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[.32em] text-champagne">
          The House of Asset Transformation
        </div>

      </div>

    </a>
  );
}
