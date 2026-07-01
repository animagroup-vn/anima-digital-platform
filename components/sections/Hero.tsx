"use client";

import { HERO } from "@/lib/content/hero";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-36">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.jpg.png"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center">
        <MotionReveal className="max-w-3xl">
          <div className="mb-6 h-px w-24 bg-champagne" />

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            {HERO.title.en}

            <div className="mt-5 text-[18px] font-light tracking-[0.03em] text-stone-300/60">
              {HERO.title.vi}
            </div>
          </h1>

          <div className="mt-8 max-w-xl text-lg uppercase tracking-[.18em] text-champagne">
            {HERO.subtitle.en}

            <div className="mt-3 text-[12px] font-light tracking-[0.08em] uppercase text-champagne/55">
              {HERO.subtitle.vi}
            </div>
          </div>

          <div className="mt-8 max-w-2xl leading-8 text-stone">
            <p>{HERO.description.en}</p>

            <p className="mt-3 text-[13px] font-light leading-7 text-stone-300/55">
              {HERO.description.vi}
            </p>
          </div>

          <div className="mt-10">
            <Button href="#philosophy" variant="outline">
              {HERO.button.en}
              <span className="mt-1 block text-[10px] font-light tracking-[0.05em] text-stone-400/60">
                {HERO.button.vi}
              </span>
            </Button>
          </div>
        </MotionReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[.35em] text-stone/80">
        Scroll
      </div>
    </section>
  );
}
