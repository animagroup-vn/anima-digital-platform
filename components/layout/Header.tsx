"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const nav = [
  "About",
  "Philosophy",
  "Ecosystem",
  "Projects",
  "Investors",
  "Journal",
  "Contact",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b px-6 transition-all duration-500 ${
        scrolled
          ? "border-champagne/20 bg-midnight/75 py-4 backdrop-blur-xl"
          : "border-transparent bg-midnight/20 py-6 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
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
          className="hidden border border-champagne/40 px-5 py-3 text-[11px] uppercase tracking-[.18em] text-champagne transition hover:bg-champagne hover:text-midnight md:inline-block"
        >
          Investor Portal
        </a>
      </div>
    </header>
  );
}
