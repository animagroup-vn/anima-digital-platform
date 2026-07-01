import Logo from "./Logo";

const nav = ["About", "Philosophy", "Ecosystem", "Projects", "Investors", "Journal", "Contact"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b luxury-border bg-midnight/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[.18em] text-stone lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-champagne"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#investors"
          className="border luxury-border px-4 py-2 text-[11px] uppercase tracking-[.18em] text-champagne"
        >
          Investor Portal
        </a>
      </div>
    </header>
  );
}
