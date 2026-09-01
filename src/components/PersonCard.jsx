import SpotlightCard from "./ui/SpotlightCard.jsx";
import Monogram from "./ui/Monogram.jsx";

export default function PersonCard({ person }) {
  return (
    <SpotlightCard className="h-full rounded-[28px] border border-navy-900/10 bg-paper-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Monogram initials={person.initials} tone={person.tone} size="avatar" className="mb-5" />
      <h3 className="text-xl">{person.name}</h3>
      <p className="mb-3 mt-0.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-gold">
        {person.role}
      </p>
      <p className="text-[0.93rem] text-ink-soft">{person.body}</p>
    </SpotlightCard>
  );
}
