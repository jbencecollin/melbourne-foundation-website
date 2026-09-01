import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, lede, center = false, className = "" }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal as="p" className={`eyebrow ${center ? "justify-center" : ""}`}>
          {eyebrow}
        </Reveal>
      )}
      {title && (
        <Reveal as="h2" delay={0.06} className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem]">
          {title}
        </Reveal>
      )}
      {lede && (
        <Reveal as="p" delay={0.12} className="lede mt-4">
          {lede}
        </Reveal>
      )}
    </div>
  );
}
