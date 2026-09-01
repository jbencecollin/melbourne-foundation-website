import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import ArchImage from "../components/ui/ArchImage.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SpotlightCard from "../components/ui/SpotlightCard.jsx";
import DonateBand from "../components/DonateBand.jsx";
import { selectionStages, email } from "../data/content.js";

const eligibility = [
  { strong: "Current Year 8 students", span: "Male and female students, for entry into Year 9." },
  { strong: "Melbourne metropolitan area", span: "Students who live in the Melbourne metropolitan area." },
  {
    strong: "Currently attending public school",
    span: "Whose families are unable to cover the cost of private school education.",
  },
];

export default function Selection() {
  return (
    <>
      <PageHero
        eyebrow="Selection process"
        title="Looking for"
        accent="potential, not polish"
        lede="Our selection process is unique amongst scholarship providers. Our potential candidates must undertake a rigorous selection process comprising aptitude tests, a written application, and a series of interviews with both candidates and their families."
      />

      {/* Eligibility */}
      <section className="py-20 md:py-28">
        <div className="container-tmf grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who can apply?" title="Eligibility" />
            <Reveal as="p" delay={0.12} className="mt-6 max-w-[60ch] text-ink-soft">
              The Melbourne Foundation's scholarships are open to current Year 8 male and female
              students who live in the Melbourne metropolitan area and are currently attending public
              school. Scholarships are open to students whose families are unable to cover the cost of
              private school education.
            </Reveal>
            <ul className="mt-6 grid gap-4">
              {eligibility.map((e, i) => (
                <Reveal as="li" key={e.strong} delay={0.14 + i * 0.08} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-soft text-gold">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <span>
                    <strong className="block font-semibold text-navy-800">{e.strong}</strong>
                    <span className="text-[0.95rem] text-ink-soft">{e.span}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.4} className="mt-6">
              <div className="flex items-start gap-4 rounded-2xl border border-gold-soft bg-gold-soft/25 px-6 py-5">
                <Icon name="clock" className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={2} />
                <p className="text-[0.97rem] text-navy-700">
                  <strong>Registrations for 2026 scholarships have now closed.</strong> To be notified
                  when the next intake opens, contact us at{" "}
                  <a href={`mailto:${email}`} className="underline decoration-gold/60 underline-offset-2">
                    {email}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <ArchImage seed="assessment-day" label="Photo placeholder — candidates at assessment day" icon="target" className="mx-auto aspect-[4/4.6] w-full max-w-[420px]" />
            <p className="mx-auto mt-4 max-w-[42ch] text-center text-[0.88rem] text-ink-soft">
              We aim to identify deserving candidates with the ability to make the most of the
              opportunities our scholarships provide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-navy-900/10 bg-paper-warm py-20 md:py-24">
        <div className="container-tmf">
          <SectionHeading eyebrow="Three stages" title="The path to a scholarship" />
          <div className="relative mt-12 grid gap-6">
            <span className="pointer-events-none absolute bottom-6 left-[1.55rem] top-6 hidden w-px bg-gradient-to-b from-gold to-navy-900/10 md:block" aria-hidden="true" />
            {selectionStages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 0.1} className="grid gap-5 md:grid-cols-[3.2rem_1fr]">
                <div className="relative z-10 grid h-[3.2rem] w-[3.2rem] place-items-center rounded-full border border-navy-900/10 bg-paper-card font-serif italic text-gold shadow-soft">
                  {stage.n}
                </div>
                <SpotlightCard className="rounded-[20px] border border-navy-900/10 bg-paper-card p-7 shadow-soft">
                  <h3 className="mb-1.5 text-2xl">{stage.title}</h3>
                  <p className="max-w-[62ch] text-ink-soft">{stage.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What scholars receive */}
      <section className="py-20 md:py-28">
        <div className="container-tmf grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="What scholars receive" title="A fully-funded education" />
            <Reveal as="p" delay={0.12} className="mt-6 max-w-[60ch] text-ink-soft">
              Successful candidates receive a scholarship for entry into Year 9 at a private school in
              the Melbourne metropolitan area, fully funded through to graduation — along with the
              co-curricular life that comes with it: sport, music, leadership, camps and community
              programs.
            </Reveal>
          </div>
          <div className="grid gap-6">
            {[
              { icon: "cap", title: "Five years of tuition", body: "Year 9 through to VCE, at a leading private school in Melbourne." },
              { icon: "star", title: "Every opportunity that follows", body: "Sport, leadership, camps, mentoring — the full life of the school, not just the classroom." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={0.12 + i * 0.1}>
                <SpotlightCard className="rounded-[28px] border border-navy-900/10 bg-paper-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-arch-sm bg-paper-warm text-gold">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mb-1.5 text-xl">{c.title}</h3>
                  <p className="text-[0.95rem] text-ink-soft">{c.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DonateBand
        title="Open a door for the next scholar"
        body="Scholarships are funded by donors, syndicates and philanthropic partners — people like you."
      />
    </>
  );
}
