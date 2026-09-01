import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import ArchImage from "../components/ui/ArchImage.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Monogram from "../components/ui/Monogram.jsx";
import PersonCard from "../components/PersonCard.jsx";
import SpotlightCard from "../components/ui/SpotlightCard.jsx";
import DonateBand from "../components/DonateBand.jsx";
import { board, team, partners } from "../data/content.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Foundation"
        title="Four friends, one"
        accent="belief"
        lede="The Melbourne Foundation was established in 2006 by four friends who met while studying at university and wanted to make a difference in the community after they graduated. They chose education as their vehicle for creating opportunity."
      />

      {/* Our story */}
      <section className="py-20 md:py-28">
        <div className="container-tmf grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <ArchImage seed="founders-university" label="Photo placeholder — our founders" icon="book" className="mx-auto aspect-[4/4.6] w-full max-w-[440px]" />
            <p className="mx-auto mt-4 max-w-[42ch] text-center text-[0.88rem] text-ink-soft">
              Founded on a shared conviction: education provides the best avenue to open opportunities
              in a person's life.
            </p>
          </Reveal>
          <div>
            <SectionHeading eyebrow="What we do" title="Transformational opportunities for talented students" />
            <Reveal as="p" delay={0.14} className="mt-6 max-w-[60ch] text-ink-soft">
              Through our scholarship program, The Melbourne Foundation has fostered the intellectual
              and cultural development of Australian school children, providing transformational
              opportunities to talented, driven, yet financially disadvantaged students.
            </Reveal>
            <Reveal as="p" delay={0.2} className="mt-4 max-w-[60ch] text-ink-soft">
              The Melbourne Foundation's scholarships were initially funded by its founders. In August
              2012, the Foundation was endorsed as a Deductible Gift Recipient and started receiving
              external donations. Scholarships are now primarily funded through contributions from the
              Foundation's management, syndicates of individuals, philanthropic organisations, and
              other members of the public.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Patron */}
      <section id="patron" className="scroll-mt-24 border-y border-navy-900/10 bg-paper-warm py-20 md:py-24">
        <div className="container-tmf">
          <Reveal as="p" className="eyebrow">Foundation Patron</Reveal>
          <Reveal delay={0.08} className="mt-6">
            <div className="grid items-start gap-8 rounded-[28px] border border-navy-900/10 bg-paper-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:gap-12 md:p-14">
              <Monogram initials="PS" tone="navy" className="w-[clamp(120px,16vw,190px)]" />
              <div>
                <h3 className="text-2xl">Paul Sheahan</h3>
                <p className="mb-4 mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-gold">
                  Patron · Former Headmaster, Melbourne Grammar School
                </p>
                <p className="max-w-[62ch] text-ink-soft">
                  Paul's career in education spanned teaching Mathematics at independent schools in
                  Victoria and the UK, nine and a half years leading The Geelong College, and fourteen
                  years as Headmaster of Melbourne Grammar School. He also represented Australia in
                  Test cricket in the late 1960s and early 1970s, and has since served on the boards of
                  not-for-profit institutions, including as President of the Melbourne Cricket Club.
                </p>
                <p className="mt-4 max-w-[62ch] text-ink-soft">
                  Paul is particularly keen to facilitate ways for people who have had a relatively
                  privileged upbringing to, in turn, provide similar opportunities for others from
                  financially disadvantaged backgrounds.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Board */}
      <section id="board" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tmf">
          <SectionHeading eyebrow="Board of Directors" title="Guided by experience, given freely" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {board.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management team */}
      <section id="team" className="scroll-mt-24 border-y border-navy-900/10 bg-paper-warm py-20 md:py-24">
        <div className="container-tmf">
          <SectionHeading eyebrow="Management team" title="An all-volunteer team — including our first scholar" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-8">
            <div className="flex max-w-3xl items-start gap-4 rounded-2xl border border-gold-soft bg-gold-soft/25 px-6 py-5">
              <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={2} />
              <p className="text-[0.97rem] text-navy-700">
                Board members Michael Cotton, Adrian Dark and Sam Marks also serve on the management
                team. Every role at the Foundation is voluntary — nobody draws a salary.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tmf">
          <SectionHeading eyebrow="Corporate partners" title="Professional support, pro bono" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <SpotlightCard className="h-full rounded-[28px] border border-navy-900/10 bg-paper-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="mb-2 text-xl">{p.name}</h3>
                  <p className="text-[0.95rem] text-ink-soft">{p.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DonateBand title="Help write the next chapter" body="Join the syndicates, philanthropists and everyday donors who fund life-changing scholarships." />
    </>
  );
}
