"use client";

import { motion } from "framer-motion";
import BilingualHeading from "@/components/ui/BilingualHeading";
import BilingualText from "@/components/ui/BilingualText";
import MotionReveal from "@/components/ui/MotionReveal";
import { WHO_WE_ARE } from "@/lib/content/who-we-are";

export default function WhoWeAre() {
  return (
    <section className="relative bg-ivory py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-8">

        <MotionReveal>

          <BilingualHeading
            en={WHO_WE_ARE.title.en}
            vi={WHO_WE_ARE.title.vi}
          />

          <div className="mt-10">
            <BilingualText
              en={WHO_WE_ARE.statement.en}
              vi={WHO_WE_ARE.statement.vi}
            />
          </div>

          <div className="mt-8">
            <BilingualText
              en={WHO_WE_ARE.supporting.en}
              vi={WHO_WE_ARE.supporting.vi}
            />
          </div>

        </MotionReveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mx-auto mt-24 max-w-7xl px-8"
      >
        <img
          src="/images/who-we-are.jpg"
          alt="ANIMA Architecture"
          className="aspect-[16/9] w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
