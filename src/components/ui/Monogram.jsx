// Gradient monogram avatar in an arch frame. Used in place of real people photos
// (which need consent) — a tasteful, on-brand placeholder.
const tones = {
  navy: "linear-gradient(160deg,#184c7f,#022346)",
  gold: "linear-gradient(160deg,#d9a94f,#a06f1e)",
  clay: "linear-gradient(160deg,#c47a52,#8e4526)",
  sage: "linear-gradient(160deg,#8d9c82,#5b6b52)",
};

export default function Monogram({ initials, tone = "navy", className = "", size = "portrait" }) {
  const shape =
    size === "portrait"
      ? "aspect-[1/1.05] rounded-arch text-5xl"
      : "h-[4.4rem] w-[4.6rem] rounded-arch-sm text-2xl";
  return (
    <div
      className={`relative grid place-items-center overflow-hidden ${shape} ${className}`}
      style={{ background: tones[tone] || tones.navy }}
    >
      <span className="absolute inset-[10px] rounded-arch-sm border border-white/30" aria-hidden="true" />
      <span className="font-serif italic text-white/95">{initials}</span>
    </div>
  );
}
