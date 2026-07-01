import SectionTitle from "@/components/SectionTitle";
import MotionSection from "@/components/ui/MotionSection";

export default function About() {
  return (
    <MotionSection id="about" className="section-pad bg-ivory text-midnight">
     <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
  <div className="relative">
    <div className="overflow-hidden rounded-[32px] luxury-card">
      <video
        className="aspect-[4/5] h-full w-full object-cover luxury-image"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/about.mp4" type="video/mp4" />
      </video>
    </div>
  </div>

  <div>
    <SectionTitle eyebrow="02" title="A Letter From The Founder" />

    <p className="mt-10 leading-8 text-midnight/75">
      Every place holds a soul. Every forgotten asset carries hidden potential.
      ANIMA exists to awaken that value through architecture, investment and
      timeless hospitality.
    </p>

    <div className="mt-16">
      <div className="font-serif text-4xl italic">Do Vuong Huy</div>

      <div className="mt-3 text-sm uppercase tracking-[.25em] text-midnight/60">
        Founder & Chairman
      </div>
    </div>
  </div>
</div>
    </MotionSection>
  );
}
