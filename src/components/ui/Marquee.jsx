// Skiper-UI / UIverse style infinite marquee. Duplicates its children so the
// track can scroll seamlessly, and pauses on hover.
export default function Marquee({ children, className = "" }) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {children}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
