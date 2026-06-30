type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "gold" | "outline";
};

export default function Button({
  children,
  href = "#",
  variant = "gold",
}: ButtonProps) {
  const classes =
    variant === "gold"
      ? "luxury-button inline-block px-6 py-4 text-xs uppercase tracking-[.2em]"
      : "inline-block border luxury-border px-6 py-4 text-xs uppercase tracking-[.2em] text-champagne transition-all duration-500 hover:bg-champagne hover:text-midnight";

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
