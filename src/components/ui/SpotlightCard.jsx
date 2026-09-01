import { useRef, useState } from "react";

// ReactBits "SpotlightCard": a soft radial glow follows the pointer across the card.
export default function SpotlightCard({
  children,
  className = "",
  spotlight = "rgba(217,169,79,0.16)",
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(320px circle at ${pos.x}% ${pos.y}%, ${spotlight}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
