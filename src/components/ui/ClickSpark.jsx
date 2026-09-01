import { useEffect } from "react";

// ReactBits "ClickSpark": a small burst of gold sparks radiates from each click.
export default function ClickSpark() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onClick = (e) => {
      const count = 8;
      const container = document.createElement("div");
      container.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;z-index:9999;`;
      document.body.appendChild(container);

      for (let i = 0; i < count; i++) {
        const spark = document.createElement("span");
        const angle = (Math.PI * 2 * i) / count;
        const dist = 18 + Math.random() * 10;
        spark.style.cssText = `position:absolute;width:6px;height:6px;border-radius:999px;background:#d9a94f;transform:translate(-50%,-50%);opacity:1;`;
        container.appendChild(spark);
        spark.animate(
          [
            { transform: "translate(-50%,-50%) translate(0,0) scale(1)", opacity: 1 },
            {
              transform: `translate(-50%,-50%) translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px) scale(0)`,
              opacity: 0,
            },
          ],
          { duration: 480, easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }
      setTimeout(() => container.remove(), 520);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
