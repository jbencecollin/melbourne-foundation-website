import { motion } from "framer-motion";

// ReactBits "GradientText": text painted with an animated gradient sweep.
export function GradientText({ children, className = "" }) {
  return (
    <span
      className={`bg-[length:200%_auto] bg-clip-text text-transparent animate-shine ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg,#c08a2d 0%,#f2d9a0 25%,#d9a94f 50%,#f2d9a0 75%,#c08a2d 100%)",
      }}
    >
      {children}
    </span>
  );
}

// ReactBits "ShinyText": muted text with a highlight that slides across it.
export function ShinyText({ children, className = "" }) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0.55) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.55) 60%)",
        backgroundSize: "200% 100%",
        animation: "shine 5s linear infinite",
      }}
    >
      {children}
    </span>
  );
}

// ReactBits "SplitText": words rise into place one after another.
export function SplitText({ text, className = "", delay = 0, wordDelay = 0.08 }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * wordDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
