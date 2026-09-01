// ReactBits "Aurora": soft, slowly drifting light blooms behind content.
// Pure CSS/transform based — cheap and GPU-friendly.
export default function Aurora({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -left-[10%] -top-[20%] h-[55vw] w-[55vw] rounded-full opacity-70 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(24,76,127,0.55), transparent 60%)" }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[50vw] w-[50vw] rounded-full opacity-60 blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(217,169,79,0.45), transparent 60%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] h-[48vw] w-[48vw] rounded-full opacity-50 blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(2,44,85,0.6), transparent 60%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
