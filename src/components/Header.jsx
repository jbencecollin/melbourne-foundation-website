import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "../data/content.js";
import Logo from "./ui/Logo.jsx";
import Icon from "./ui/Icon.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-[0.95rem] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded after:bg-gold after:transition-all after:duration-300 ${
      isActive
        ? "text-navy-800 after:right-0"
        : "text-ink-soft after:right-full hover:text-navy-800 hover:after:right-0"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-900/10 bg-paper/80 shadow-[0_6px_24px_rgba(2,35,70,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-paper/60 backdrop-blur-md"
      }`}
    >
      <div className="container-tmf flex items-center justify-between gap-4 py-3.5">
        <Link to="/" className="flex items-center gap-3" aria-label="The Melbourne Foundation — home">
          <Logo className="h-11 w-11 shrink-0" />
          <span className="font-serif text-[1.12rem] font-medium leading-tight text-navy-800">
            The Melbourne Foundation
            <small className="mt-0.5 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Est. 2006 · Melbourne, Victoria
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/donate" className="btn btn-gold px-6 py-2.5 text-[0.9rem]">
            Donate
          </Link>
        </nav>

        <button
          className="p-2 text-navy-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile"
          >
            <div className="container-tmf flex flex-col gap-2 border-t border-navy-900/10 bg-paper pb-6 pt-2">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy-900/5 py-3 font-serif text-xl text-navy-800"
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to="/donate" onClick={() => setOpen(false)} className="btn btn-gold mt-3 self-start">
                Donate
                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
