import { BRAND } from "@/lib/brand";

export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-3">
      <img
        src="/logo/anima-symbol.png"
        alt={BRAND.name}
        className="h-8 w-auto object-contain transition duration-500 group-hover:scale-105"
      />

      <div className="leading-none">
        <div className="font-serif text-sm tracking-[0.35em] text-ivory">
          {BRAND.name}
        </div>

        <div className="mt-1 text-[8px] uppercase tracking-[0.28em] text-champagne">
          Group
        </div>
      </div>
    </a>
  );
}
