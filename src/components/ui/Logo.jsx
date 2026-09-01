// Arch brand mark — doorway of opportunity, in navy + gold.
export default function Logo({ className = "h-11 w-11", navy = "#003366", gold = "#c08a2d" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 45V23C6 13.06 14.06 5 24 5s18 8.06 18 18v22"
        stroke={navy}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M15 45V26a9 9 0 0 1 18 0v19" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="20" r="2.6" fill={gold} />
    </svg>
  );
}
