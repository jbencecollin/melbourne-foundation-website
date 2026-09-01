import Aurora from "./ui/Aurora.jsx";
import Reveal from "./ui/Reveal.jsx";
import { SplitText } from "./ui/TextEffects.jsx";

// Interior-page hero with a soft aurora wash.
export default function PageHero({ eyebrow, title, accent, lede }) {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10">
      <Aurora className="opacity-40" />
      <div className="container-tmf relative py-16 md:py-24">
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
        <h1 className="mt-4 max-w-[18ch] text-4xl leading-[1.05] md:text-6xl">
          <SplitText text={title} />{" "}
          {accent && <span className="font-serif italic text-gold">{accent}</span>}
        </h1>
        {lede && (
          <Reveal as="p" delay={0.2} className="lede mt-6 max-w-2xl">
            {lede}
          </Reveal>
        )}
      </div>
    </section>
  );
}
