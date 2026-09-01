import { useState } from "react";
import Icon from "./Icon.jsx";

// Arch-framed image placeholder. Loads a stock photo (Lorem Picsum) purely as a
// stand-in, tinted with a navy duotone so it reads as intentional and on-brand.
// If the network image fails, it degrades gracefully to the gradient + icon.
//
// NOTE: replace these with real, consented photography before go-live.
export default function ArchImage({
  seed = "tmf",
  w = 900,
  h = 1100,
  label = "Photo placeholder",
  icon = "cap",
  className = "",
}) {
  const [ok, setOk] = useState(true);
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

  return (
    <div
      className={`relative overflow-hidden rounded-arch shadow-lift ${className}`}
      style={{ background: "linear-gradient(178deg,#184c7f 0%,#022346 60%,#04182f 100%)" }}
    >
      {ok && (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-luminosity"
        />
      )}
      {/* navy duotone wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,35,70,0.35) 0%, rgba(2,24,47,0.75) 100%)",
        }}
      />
      <span className="absolute inset-[12px] rounded-arch-sm border border-white/25" aria-hidden="true" />
      <div className="absolute inset-0 grid place-content-center place-items-center gap-3 p-6 text-center">
        <Icon name={icon} className="h-9 w-9 text-white/85" strokeWidth={1.4} />
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/75">
          {label}
        </span>
      </div>
    </div>
  );
}
