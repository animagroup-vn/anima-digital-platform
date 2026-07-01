import BilingualHeading from "@/components/ui/BilingualHeading";
import MotionReveal from "@/components/ui/MotionReveal";
import ApproachBlock from "@/components/ui/ApproachBlock";
import { OUR_APPROACH } from "@/lib/content/our-approach";

export default function OurApproach() {
  return (
    <section id="approach" className="relative bg-midnight py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-8">
        <MotionReveal className="max-w-3xl">
          <BilingualHeading
            en={OUR_APPROACH.title.en}
            vi={OUR_APPROACH.title.vi}
          />
        </MotionReveal>

        <div className="mt-24 space-y-32 md:mt-32 md:space-y-44">
          {OUR_APPROACH.items.map((item, index) => (
            <ApproachBlock
              key={item.title}
              number={item.number}
              title={item.title}
              vi={item.vi}
              statement={item.statement}
              image={item.image}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
