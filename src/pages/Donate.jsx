import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Icon from "../components/ui/Icon.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SpotlightCard from "../components/ui/SpotlightCard.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import { bank, email } from "../data/content.js";

const reasons = [
  {
    icon: "shield",
    strong: "Fully tax-deductible",
    body: "We are a registered deductible gift recipient, with all donations to The Melbourne Foundation being fully tax-deductible. We will issue receipts for all donations.",
  },
  {
    icon: "users",
    strong: "Everyone is a volunteer",
    body: "The Melbourne Foundation does not pay any wages — everyone who works for the Foundation is a volunteer.",
  },
  {
    icon: "chart",
    strong: "Less than 5% on administration",
    body: "The Foundation spends less than 5% of its donations on general and administrative expenses, which is world-class in the philanthropic sectors.",
  },
  {
    icon: "heart",
    strong: "A proven track record",
    body: "The performance of our past scholars has demonstrated that we have a track record of selecting outstanding, highly intelligent students.",
  },
];

const ways = [
  { icon: "heart", title: "One-off donation", body: "Every contribution, at any size, goes directly toward funding scholarships. All donations are tax-deductible." },
  { icon: "users", title: "Scholarship syndicate", body: "Groups of friends, families or colleagues can together sponsor a full scholarship — and follow their scholar's journey." },
  { icon: "building", title: "Philanthropic partners", body: "Organisations and foundations can create lasting impact through multi-year scholarship funding partnerships." },
];

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="The most powerful gift is a"
        accent="future"
        lede="The Melbourne Foundation is seeking funds from donors to increase the number of scholarships that it can offer."
      />

      {/* Why donate + bank details */}
      <section id="why" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tmf grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Why donate" title="Your dollar goes where it matters" />
            <ul className="mt-8 grid gap-5">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.strong} delay={i * 0.08} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-soft text-gold">
                    <Icon name={r.icon} className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span>
                    <strong className="block font-semibold text-navy-800">{r.strong}</strong>
                    <span className="text-[0.95rem] text-ink-soft">{r.body}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.12}>
            {/*
              IMPORTANT (for the Foundation — verify before go-live):
              These bank details were extracted from the current melbournefoundation.org
              site, which shows signs of compromise. Confirm the BSB and account number
              against the Foundation's own bank records before publishing.
            */}
            <div
              className="relative overflow-hidden rounded-[28px] p-8 text-paper shadow-lift md:p-10"
              style={{
                background:
                  "radial-gradient(120% 100% at 100% 0%, rgba(217,169,79,0.32) 0%, transparent 55%), linear-gradient(165deg,#022c55,#04182f)",
              }}
            >
              <span className="pointer-events-none absolute -bottom-16 -right-10 h-[230px] w-[190px] -rotate-12 rounded-arch border border-white/15" aria-hidden="true" />
              <h3 className="relative mb-6 text-2xl text-paper">Donate by bank transfer</h3>
              <dl className="relative grid gap-5">
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-light">Account name</dt>
                  <dd className="mt-0.5 font-serif text-xl">{bank.accountName}</dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-light">BSB</dt>
                  <dd className="mt-0.5 font-serif text-xl tracking-wide">{bank.bsb}</dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-light">Account number</dt>
                  <dd className="mt-0.5 font-serif text-xl tracking-wide">{bank.accountNumber}</dd>
                </div>
              </dl>
              <p className="relative mt-6 border-t border-white/15 pt-5 text-[0.88rem] text-paper/75">
                Please use your name as the payment reference, then email{" "}
                <a href={`mailto:${email}`} className="text-gold-light underline underline-offset-2">
                  {email}
                </a>{" "}
                so we can issue your tax-deductible receipt.
              </p>
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-gold-soft bg-gold-soft/25 px-6 py-5">
              <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={2} />
              <p className="text-[0.97rem] text-navy-700">
                We are seeking individuals, syndicates, corporations, and other philanthropic
                organisations who believe in the power of education and the goals of the Foundation to
                partner with us. If you have any questions, please contact us at{" "}
                <a href={`mailto:${email}`} className="underline decoration-gold/60 underline-offset-2">
                  {email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteSection
        quote="Education provides the best avenue to open opportunities in a person's life."
        cite="The principle the Foundation was built on — 2006"
      />

      {/* Ways to give */}
      <section className="py-20 md:py-28">
        <div className="container-tmf">
          <SectionHeading eyebrow="Ways to give" title="However you give, it counts" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-[28px] border border-navy-900/10 bg-paper-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-arch-sm bg-paper-warm text-gold">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-2xl">{w.title}</h3>
                  <p className="text-[0.97rem] text-ink-soft">{w.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
