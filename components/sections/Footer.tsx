export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t luxury-border px-6 py-12"
    >
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">

        <div>
          <div className="font-serif text-2xl">
            A.N.I.M.A
          </div>

          <p className="mt-4 text-stone">
            The House of Asset Transformation
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[.2em] text-champagne">
            Contact
          </div>

          <p className="mt-4 text-stone">
            info@animagroup.vn
          </p>

          <p className="text-stone">
            Ho Chi Minh City
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[.2em] text-champagne">
            Social
          </div>

          <p className="mt-4 text-stone">
            LinkedIn
          </p>

          <p className="text-stone">
            Facebook
          </p>

          <p className="text-stone">
            Instagram
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[.2em] text-champagne">
            Copyright
          </div>

          <p className="mt-4 text-stone">
            © 2026 A.N.I.M.A
          </p>
        </div>

      </div>
    </footer>
  );
}
