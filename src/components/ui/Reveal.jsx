import { motion } from "framer-motion";

// Skiper-UI-style scroll reveal: content rises and fades in when it enters view.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 26,
  className = "",
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
