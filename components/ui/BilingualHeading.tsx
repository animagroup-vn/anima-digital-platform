import BilingualText from "./BilingualText";

type Props = {
  en: string;
  vi: string;
};

export default function BilingualHeading({
  en,
  vi,
}: Props) {
  return (
    <h2 className="font-serif text-4xl leading-tight text-ivory md:text-6xl">
      <BilingualText
        en={en}
        vi={vi}
        variant="title"
      />
    </h2>
  );
}
