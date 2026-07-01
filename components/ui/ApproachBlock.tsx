import BilingualText from "@/components/ui/BilingualText";
import MotionReveal from "@/components/ui/MotionReveal";

type ApproachBlockProps = {
  number: string;
  title: string;
  vi: string;
  statement: {
    en: string;
    vi: string;
  };
  image: string;
  reverse?: boolean;
};

export default function ApproachBlock({
  number,
  title,
  vi,
  statement,
  image,
  reverse = false,
}: ApproachBlockProps) {
  return (
    <div
      className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <MotionReveal>
        <div className="text-[11px] uppercase tracking-[0.35em] text-champagne/60">
          {number}
        </div>

        <div className="mt-6">
          <h3 className="font-serif text-4xl leading-tight text-ivory md:text-6xl">
            {title}
            <div className="mt-2 text-[16px] font-light tracking-[0.015em] text-stone-300/55 md:text-[18px]">
              {vi}
            </div>
          </h3>
        </div>

        <div className="mt-8 max-w-xl text-lg leading-8 text-stone">
          <BilingualText en={statement.en} vi={statement.vi} />
        </div>
      </MotionReveal>

      <MotionReveal delay={0.15}>
        <img
          src={image}
          alt={title}
          className="aspect-[4/5] w-full object-cover"
        />
      </MotionReveal>
    </div>
  );
}
