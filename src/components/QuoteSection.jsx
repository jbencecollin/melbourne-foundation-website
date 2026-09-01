import Reveal from "./ui/Reveal.jsx";

// Navy quote block with a faint arch-colonnade pattern behind it.
export default function QuoteSection({ quote, cite }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(90% 120% at 85% 0%, rgba(217,169,79,0.5) 0%, transparent 45%)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#f5f7fa" strokeWidth="1.5">
          <path d="M-40 420V180a120 120 0 0 1 240 0v240" />
          <path d="M260 420V140a150 150 0 0 1 300 0v280" />
          <path d="M640 420V190a110 110 0 0 1 220 0v230" />
          <path d="M920 420V150a140 140 0 0 1 280 0v270" />
        </g>
      </svg>
      <div className="container-tmf relative">
        <Reveal as="blockquote" className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-2xl leading-snug text-paper md:text-4xl">
            <span className="text-gold-light">“</span>
            {quote}
            <span className="text-gold-light">”</span>
          </p>
          <cite className="mt-6 block text-[0.85rem] font-semibold uppercase not-italic tracking-[0.16em] text-gold-light">
            {cite}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
