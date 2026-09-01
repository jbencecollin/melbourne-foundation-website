import { Link } from "react-router-dom";
import Logo from "./ui/Logo.jsx";
import { email } from "../data/content.js";

const cols = [
  {
    heading: "Foundation",
    links: [
      { to: "/about", label: "About us" },
      { to: "/about#board", label: "Board & team" },
      { to: "/about#patron", label: "Our patron" },
      { to: "/scholars", label: "Our scholars" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { to: "/donate", label: "Donate" },
      { to: "/donate#why", label: "Why donate" },
      { to: "/selection", label: "Selection process" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-900 text-paper/70">
      <div className="container-tmf py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3">
              <Logo className="h-11 w-11" navy="#f5f7fa" gold="#d9a94f" />
              <span className="font-serif text-[1.12rem] font-medium leading-tight text-paper">
                The Melbourne Foundation
                <small className="mt-0.5 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-light">
                  Est. 2006 · Melbourne, Victoria
                </small>
              </span>
            </Link>
            <p className="max-w-xs text-[0.95rem]">
              Transforming lives through the opportunity of education — fully-funded private school
              scholarships for financially disadvantaged students.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-paper">
                {col.heading}
              </h4>
              <ul className="grid gap-2.5 text-[0.95rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="transition-colors hover:text-gold-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-paper">
              Contact
            </h4>
            <ul className="grid gap-2.5 text-[0.95rem]">
              <li>
                <a href={`mailto:${email}`} className="transition-colors hover:text-gold-light">
                  {email}
                </a>
              </li>
              <li>Melbourne, Victoria, Australia</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[0.83rem] text-paper/50">
          <span>© {new Date().getFullYear()} The Melbourne Foundation. All rights reserved.</span>
          <span>Registered Deductible Gift Recipient since 2012.</span>
        </div>
      </div>
    </footer>
  );
}
