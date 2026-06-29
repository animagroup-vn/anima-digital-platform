export default function Hero() {
  return (
    <section className="hero-bg min-h-screen px-6 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl pt-24">
          <div className="mb-6 h-px w-24 bg-champagne" />

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            THE SOUL OF
            <br />
            ASSET DEVELOPMENT
          </h1>

          <p className="mt-8 max-w-xl text-lg uppercase tracking-[.18em] text-champagne">
            Transforming spaces into value. Creating legacy through time.
          </p>

          <p className="mt-8 max-w-2xl text-stone">
            We awaken value where others only see space. We create legacy where
            others only build assets.
          </p>

          <a
            href="#philosophy"
            className="mt-10 inline-block border luxury-border px-6 py-4 text-xs uppercase tracking-[.2em] text-champagne"
          >
            Discover our philosophy →
          </a>
        </div>
      </div>
    </section>
  );
}
