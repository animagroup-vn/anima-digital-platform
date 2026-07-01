import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-36">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero.jpg"
      >
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center">
        <MotionReveal className="max-w-3xl">
          <div className="mb-6 h-px w-24 bg-champagne" />

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            THE SOUL OF
            <br />
            ASSET DEVELOPMENT
          </h1>

          <p className="mt-8 max-w-xl text-lg uppercase tracking-[.18em] text-champagne">
            Transforming spaces into value. Creating legacy through time.
          </p>

          <p className="mt-8 max-w-2xl leading-8 text-stone">
            We awaken value where others only see space. We create legacy where
            others only build assets.
          </p>

          <Button href="#philosophy">
            Discover our philosophy →
          </Button>
        </MotionReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[.35em] text-stone/80">
        Scroll
      </div>
    </section>
  );
}
