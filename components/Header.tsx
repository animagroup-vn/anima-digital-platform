import Logo from "./Logo";

const nav = ["About", "Philosophy", "Ecosystem", "Projects", "Investors", "Journal", "Contact"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b luxury-border bg-midnight/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />
        {nav.map((item) => (
  <a
    key={item}
    href={`#${item.toLowerCase()}`}
    className="
      group
      relative
      flex
      flex-col
      items-center
      transition-all
      duration-500
    "
  >
    <span className="text-[11px] uppercase tracking-[.24em] text-stone-300 transition duration-300 group-hover:text-champagne">
      {item}
    </span>

    <span className="mt-1 text-[8px] tracking-[.12em] text-stone-500 group-hover:text-stone-300">
      {{
        About:"Giới thiệu",
        Philosophy:"Triết lý",
        Ecosystem:"Hệ sinh thái",
        Projects:"Dự án",
        Investors:"Đầu tư",
        Journal:"Nhật ký",
        Contact:"Liên hệ"
      }[item]}
    </span>

    <span
      className="
        absolute
        -bottom-3
        h-px
        w-0
        bg-champagne
        transition-all
        duration-500
        group-hover:w-full
      "
    />
  </a>
))}
        </nav>
        <a href="#investors" className="border luxury-border px-4 py-2 text-[11px] uppercase tracking-[.18em] text-champagne">
          Investor Portal
        </a>
      </div>
    </header>
  );
}
