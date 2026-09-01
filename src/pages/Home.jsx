import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aurora from "../components/ui/Aurora.jsx";
import Particles from "../components/ui/Particles.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import CountUp from "../components/ui/CountUp.jsx";
import StarBorder from "../components/ui/StarBorder.jsx";
import SpotlightCard from "../components/ui/SpotlightCard.jsx";
import Marquee from "../components/ui/Marquee.jsx";
import ArchImage from "../components/ui/ArchImage.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { SplitText, GradientText } from "../components/ui/TextEffects.jsx";
import ScholarCard from "../components/ScholarCard.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import DonateBand from "../components/DonateBand.jsx";
import { stats, scholars, selectionStages, partners } from "../data/content.js";

const stageIcons = ["target", "edit", "users"];

export default function Home() {
  return (
    <>
      {/* Hero ============================================================ */}
      <section className="relative overflow-hidden">
        <Aurora />
        <div className="container-tmf relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.9fr]">
          <div>
            <Reveal as="p" className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-navy-900/10 bg-paper-card py-1.5 pl-1.5 pr-4 text-[0.85rem] font-medium text-ink-soft shadow-soft">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-soft text-gold">
                <Icon name="clock" className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
              Scholarship registrations for 2026 have now closed
            </Reveal>

            <h1 className="text-5xl leading-[1.02] md:text-6xl lg:text-[4.3rem]">
              <SplitText text="Transforming Lives Through the" />{" "}
              <GradientText>Opportunity of Education</GradientText>
            </h1>

            <Reveal as="p" delay={0.25} className="lede mt-6 max-w-[46ch]">
              The Melbourne Foundation was established in 2006 to provide scholarships to Australian
              children from financially disadvantaged backgrounds, based on the principle that
              education provides the best avenue to open opportunities in a person's life.
            </Reveal>

            <Reveal delay={0.35} className="mt-8 flex flex-wrap items-center gap-4">
              <StarBorder to="/donate">
                Support a scholar
                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </StarBorder>
              <Link to="/scholars" className="btn btn-ghost">
                Meet our scholars
              </Link>
            </Reveal>
          </div>

          {/* Arch visual */}
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[420px]">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-arch shadow-lift"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 100%, rgba(217,169,79,0.5) 0%, transparent 55%), linear-gradient(178deg,#184c7f 0%,#022346 60%,#04182f 100%)",
              }}
            >
              <div className="absolute inset-0">
                <Particles quantity={46} />
              </div>
              <span className="absolute inset-[14px] rounded-arch-sm border border-white/20" aria-hidden="true" />
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <radialGradient id="sun" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#f2d9a0" />
                    <stop offset="60%" stopColor="#d9a94f" />
                    <stop offset="100%" stopColor="#c08a2d" />
                  </radialGradient>
                  <linearGradient id="steps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d9a94f" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c08a2d" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="rgba(245,247,250,0.13)" strokeWidth="1.2">
                  <circle cx="200" cy="512" r="120" />
                  <circle cx="200" cy="512" r="185" />
                  <circle cx="200" cy="512" r="250" />
                  <circle cx="200" cy="512" r="318" />
                </g>
                <circle cx="200" cy="168" r="46" fill="url(#sun)" />
                <g stroke="rgba(217,169,79,0.5)" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M200 96v-20" /><path d="M148 118l-14 -14" /><path d="M252 118l14 -14" />
                  <path d="M128 168h-22" /><path d="M272 168h22" />
                </g>
                <g fill="url(#steps)">
                  <rect x="40" y="452" width="66" height="48" rx="6" />
                  <rect x="114" y="424" width="66" height="76" rx="6" />
                  <rect x="188" y="392" width="66" height="108" rx="6" />
                  <rect x="262" y="356" width="66" height="144" rx="6" />
                </g>
                <path d="M73 446 C 100 380 240 340 295 300" fill="none" stroke="rgba(245,247,250,0.5)" strokeWidth="1.6" strokeDasharray="1 9" strokeLinecap="round" />
              </svg>
            </div>

            {/* floating cards */}
            <motion.div
              className="absolute -left-4 top-[8%] flex items-center gap-3 rounded-2xl border border-navy-900/10 bg-paper-card p-4 shadow-lift"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-paper-warm text-gold">
                <Icon name="cap" className="h-5 w-5" />
              </span>
              <span>
                <strong className="block font-serif text-xl text-navy-800">Since 2006</strong>
                <span className="text-[0.8rem] text-ink-soft">transforming lives</span>
              </span>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-[7%] max-w-[240px] rounded-2xl border border-navy-900/10 bg-paper-card p-4 shadow-lift"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
            >
              <p className="mb-1.5 font-serif text-[0.95rem] italic leading-snug text-navy-700">
                The belief invested in me was instrumental in everything that followed.
              </p>
              <cite className="text-[0.72rem] font-semibold uppercase not-italic tracking-[0.08em] text-gold">
                Khuzair — 2007 Scholar
              </cite>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Stats =========================================================== */}
      <section className="border-y border-navy-900/10 bg-paper-card">
        <div className="container-tmf grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`px-4 py-8 text-center md:py-11 ${i > 0 ? "md:border-l md:border-navy-900/10" : ""}`}
            >
              <strong className="block font-serif text-4xl font-medium text-navy-800 md:text-5xl">
                <CountUp to={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </strong>
              <span className="mt-2 block text-[0.85rem] font-medium tracking-wide text-ink-soft">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission ========================================================= */}
      <section className="py-20 md:py-28">
        <div className="container-tmf grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title="Opportunity should never depend on circumstance"
            />
            <Reveal as="p" delay={0.14} className="mt-6 max-w-[60ch] text-ink-soft">
              The Melbourne Foundation was established in 2006 by four friends who met while studying
              at university and wanted to make a difference in the community after they graduated. They
              chose education as their vehicle for creating opportunity.
            </Reveal>
            <Reveal as="p" delay={0.2} className="mt-4 max-w-[60ch] text-ink-soft">
              We offer scholarships to male and female students for entry into Year 9 at private
              schools in the Melbourne metropolitan area — providing transformational opportunities to
              talented, driven, yet financially disadvantaged students.
            </Reveal>
            <Reveal delay={0.28} className="mt-8">
              <Link to="/about" className="btn btn-ghost">
                Our story
                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <ArchImage seed="graduation-day" label="Photo placeholder — graduation day" icon="cap" className="mx-auto aspect-[4/4.6] w-full max-w-[440px]" />
            <p className="mx-auto mt-4 max-w-[40ch] text-center text-[0.88rem] text-ink-soft">
              Every scholarship covers tuition in full, from Year 9 through to VCE graduation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selection steps ================================================= */}
      <section className="border-y border-navy-900/10 bg-paper-warm py-20 md:py-24">
        <div className="container-tmf">
          <SectionHeading
            eyebrow="How scholars are chosen"
            title="The journey to a scholarship"
            lede="A rigorous, three-stage selection process designed to identify potential — not just current performance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {selectionStages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-[28px] border border-navy-900/10 bg-paper-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-arch-sm bg-paper-warm text-gold">
                    <Icon name={stageIcons[i]} className="h-6 w-6" />
                  </span>
                  <p className="font-serif italic text-gold">Stage {stage.n}</p>
                  <h3 className="mb-2 mt-1 text-2xl">{stage.title}</h3>
                  <p className="text-[0.97rem] text-ink-soft">{stage.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Link to="/selection" className="btn btn-primary">
              Explore the selection process
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Scholars preview ================================================ */}
      <section className="py-20 md:py-28">
        <div className="container-tmf">
          <SectionHeading
            eyebrow="Our scholars"
            title={<>From scholarship to <span className="font-serif italic text-gold">soaring</span></>}
            lede="Through our scholarship program, the Foundation has fostered the intellectual and cultural development of Australian school children."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scholars.slice(0, 3).map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1} className="[perspective:1000px]">
                <ScholarCard scholar={s} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Link to="/scholars" className="btn btn-ghost">
              Meet all our scholars
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteSection
        quote="As a result of the scholarship I received, I was exposed to a variety of experiences which I otherwise would have been denied — it has drastically altered my life by opening new doors I previously never thought possible."
        cite="Evan Avtzis — 2009 Melbourne Foundation Scholar"
      />

      {/* Partners ======================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-tmf">
          <Reveal as="p" className="eyebrow justify-center text-center">
            Supported pro bono by
          </Reveal>
        </div>
        <Marquee className="mt-8">
          {partners.map((p) => (
            <span key={p.name} className="font-serif text-2xl text-ink-soft/70 transition-colors hover:text-navy-800">
              {p.name}
            </span>
          ))}
        </Marquee>
      </section>

      <DonateBand />
    </>
  );
}
