import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import ScholarCard from "../components/ScholarCard.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import DonateBand from "../components/DonateBand.jsx";
import { scholars } from "../data/content.js";

export default function Scholars() {
  return (
    <>
      <PageHero
        eyebrow="Meet our scholars"
        title="Meet our"
        accent="Scholars"
        lede="Through our scholarship program, The Melbourne Foundation has fostered the intellectual and cultural development of Australian school children, providing transformational opportunities to talented, driven, yet financially disadvantaged students."
      />

      <section className="py-20 md:py-24">
        <div className="container-tmf">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scholars.map((s, i) => (
              <Reveal key={s.name + i} delay={(i % 3) * 0.1} className="[perspective:1000px]">
                <ScholarCard scholar={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="The Melbourne Foundation offers an education to children with the attitude and aptitude to succeed in life via a focus on high-school education. It is a privilege to be able to be part of an organisation that provides these opportunities at Melbourne's top educational facilities."
        cite="Samuel Marks — Director, The Melbourne Foundation"
      />

      <DonateBand
        title="The next scholar is waiting"
        body="The Melbourne Foundation is seeking funds from donors to increase the number of scholarships that it can offer."
        cta="Fund a future"
      />
    </>
  );
}
