import TiltedCard from "./ui/TiltedCard.jsx";
import SpotlightCard from "./ui/SpotlightCard.jsx";
import Monogram from "./ui/Monogram.jsx";

export default function ScholarCard({ scholar }) {
  return (
    <TiltedCard className="h-full">
      <SpotlightCard className="flex h-full flex-col rounded-[28px] border border-navy-900/10 bg-paper-card p-5 shadow-soft transition-shadow duration-300 hover:shadow-lift">
        <Monogram initials={scholar.initials} tone={scholar.tone} className="mb-6" />
        <div className="px-1">
          <h3 className="text-xl">{scholar.name}</h3>
          <p className="mb-3 mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-gold">
            {scholar.meta}
          </p>
          <p className="text-[0.95rem] text-ink-soft">{scholar.body}</p>
          {scholar.quote && (
            <p className="mt-4 border-l-2 border-gold/50 pl-3 font-serif text-[0.98rem] italic text-navy-700">
              “{scholar.quote}”
            </p>
          )}
        </div>
      </SpotlightCard>
    </TiltedCard>
  );
}
