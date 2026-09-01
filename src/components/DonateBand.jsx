import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal.jsx";
import Magnet from "./ui/Magnet.jsx";
import Icon from "./ui/Icon.jsx";

export default function DonateBand({
  title = "Give the gift of an education",
  body = "Every dollar is tax-deductible, and with administration costs under 5%, your donation goes where it matters — a scholar's future.",
  cta = "Donate today",
}) {
  return (
    <section className="py-16">
      <div className="container-tmf">
        <Reveal className="relative grid items-center gap-8 overflow-hidden rounded-[28px] p-10 md:grid-cols-[1.4fr_auto] md:p-14"
          style={{
            background:
              "radial-gradient(120% 150% at 12% 110%, rgba(217,169,79,0.28) 0%, transparent 55%), linear-gradient(120deg,#022c55,#003366 55%,#022346)",
            boxShadow: "0 30px 60px rgba(2,35,70,0.28)",
          }}
        >
          <span
            className="pointer-events-none absolute -right-16 -top-20 h-[340px] w-[280px] rotate-[14deg] rounded-arch border border-white/20"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-3xl text-paper md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-[46ch] text-paper/85">{body}</p>
          </div>
          <Magnet className="relative">
            <Link to="/donate" className="btn btn-light shadow-lift">
              {cta}
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </Magnet>
        </Reveal>
      </div>
    </section>
  );
}
