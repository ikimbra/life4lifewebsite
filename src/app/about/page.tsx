import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Life 4 Life Relief Aid began in 2019 with two people delivering COVID-19 relief in Kasese. Today it is a registered Ugandan charity running seventeen programmes.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    name: "Integrity",
    body: "We act toward ourselves and others with fairness, honesty, transparency and accountability, at all costs.",
  },
  {
    name: "Stewardship",
    body: "We manage every resource placed in our hands carefully and under supervision. Our partnerships depend on it.",
  },
  {
    name: "Compassion",
    body: "We serve all people with empathy and sensitivity, to bring comfort and hope to others.",
  },
  {
    name: "Credibility",
    body: "We operate with discipline and ethics, so that we can be believed, trusted and respected as we serve.",
  },
  {
    name: "Positivity",
    body: "We approach our work believing that a constructive, optimistic outlook makes a difference to those we serve.",
  },
  {
    name: "Collaboration",
    body: "We work as one team, building on each other's strengths, within the organisation, the community and our partners.",
  },
];

/* The founder's letter, edited for length and readability. The full text is
   preserved in the client's source document. */
const letter = [
  "When my colleague Baluku Halid and I started this journey in 2019, we had no idea that a small act of kindness during the COVID-19 pandemic would grow into the organisation you see today.",
  "The pandemic showed us what community really means. We watched families struggling without basic necessities, children going hungry, and elderly people left entirely without support. We could not stand by. With whatever little we had, we started distributing food, water and supplies to those who needed them most. The smiles on children's faces and the tears of gratitude from their mothers became our driving force.",
  "On 22 July 2024, when we received official recognition, I felt a deep sense of responsibility. This was no longer about us. It was about the thousands of people who would benefit from our expanded reach, and the generous hearts of supporters around the world.",
  "To every donor, partner and supporter: your trust is sacred to us. Our 100% donation policy is not a slogan. It is our covenant with you. We do not take administrative fees from your donations, because your generosity should reach its destination in full.",
  "We do not just want to give someone a meal; we want to help them build a livelihood. We do not just want to treat illness; we want to prevent it. We are working toward a Uganda where no child goes to bed hungry, where clean water is accessible to all, and where every person can live with dignity.",
  "Whether you contribute $1 or $1,000, sponsor an orphan, or simply share our message, you become part of a movement that is changing lives.",
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About us"
        title="It started with two people who refused to look away."
        lead="A registered Ugandan charity serving Kasese District since 2019."
        image="community/children-running"
      />

      {/* Story */}
      <section className="container-page py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Our story
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-sand-700">
            <p>
              In 2019, {site.founders[0].name} and {site.founders[1].name} formed
              a community group to deliver relief to families hit by the COVID-19
              pandemic. They worked voluntarily, distributing water, food and
              basic guidance to households across Kasese District, and that work
              saved lives.
            </p>
            <p>
              What began informally grew into something that needed a proper
              structure. On {site.registeredOn}, Life 4 Life Relief Aid was
              formally recognised by the Community Development Officer and
              licensed by the Government of Uganda as a national charitable
              organisation.
            </p>
            <p>
              Today we work across Kasese District and beyond, combining
              emergency response with the long-term projects that make
              communities resilient and self-reliant.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="border-y border-border bg-surface py-16 lg:py-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {[
            {
              t: "Our vision",
              b: "To make communities better places by providing innovative skills and transformation programmes that combat poverty and ignorance.",
              c: "border-orange-500",
            },
            {
              t: "Our mission",
              b: "To extend an inspirational message of hope to communities, offering a supportive hand to the needy and vulnerable so they can accomplish their dreams.",
              c: "border-green-500",
            },
          ].map((x) => (
            <div key={x.t} className={`border-l-4 ${x.c} pl-6`}>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {x.t}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-sand-700">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 lg:py-20">
        <h2 className="font-display text-3xl font-semibold text-foreground">
          Our core values
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-sand-700">
          The guiding principles we hold ourselves to in every programme we run.
        </p>
        <div data-reveal-group className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.name}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="font-display text-lg font-semibold text-orange-ink">
                {v.name}
              </h3>
              <p className="mt-2 leading-relaxed text-sand-700">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's letter */}
      <section
        id="vision-bearer"
        className="scroll-mt-24 border-t border-border bg-sand-900 py-16 text-white lg:py-20"
      >
        <div className="container-page mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">
            A message from our founder
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Our promise to you
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-sand-200">
            {letter.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-9 flex items-center gap-4">
            <span className="h-px w-10 bg-orange-500" aria-hidden="true" />
            <p className="text-sm">
              <span className="font-semibold text-white">
                {site.founders[0].name}
              </span>
              <span className="text-sand-400"> · {site.founders[0].role}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="container-page py-16 lg:py-20">
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Registered and accountable
          </h2>
          <p className="mt-4 leading-relaxed text-sand-700">
            {site.registration.statement}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-on-primary transition-colors duration-200 hover:bg-orange-800"
            >
              See our programmes
            </Link>
            <Link
              href="/get-involved"
              className="rounded-md border border-border-strong px-6 py-3 font-semibold text-foreground transition-colors duration-200 hover:bg-surface-sunken"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
