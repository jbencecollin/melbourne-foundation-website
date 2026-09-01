import { Link } from "react-router-dom";

// ReactBits "StarBorder": a button wrapped in a slowly travelling glow border.
export default function StarBorder({
  as = "link",
  to = "/",
  href,
  children,
  className = "",
  color = "#d9a94f",
}) {
  const inner = (
    <>
      <span
        className="absolute inset-0 opacity-60"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${color} 12%, transparent 24%)`,
          animation: "star-spin 4s linear infinite",
        }}
        aria-hidden="true"
      />
      <span className="relative z-10 m-[2px] flex items-center justify-center gap-2 rounded-full bg-navy-800 px-7 py-3 font-semibold text-paper">
        {children}
      </span>
    </>
  );

  const wrapClass = `relative inline-flex overflow-hidden rounded-full p-px transition-transform duration-300 hover:-translate-y-0.5 ${className}`;

  if (as === "a") {
    return (
      <a href={href} className={wrapClass} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={wrapClass}>
      {inner}
    </Link>
  );
}
