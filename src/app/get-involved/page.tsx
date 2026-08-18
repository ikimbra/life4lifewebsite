import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Partner with Life 4 Life Relief Aid, volunteer your skills, or fundraise for communities in Kasese District, Uganda.",
};

const partnership = [
  { t: "Project collaboration", b: "Co-deliver a programme with us on the ground in Kasese." },
  { t: "Resource sharing", b: "Contribute equipment, materials or logistics capacity." },
  { t: "Technical expertise", b: "Bring engineering, medical or agricultural specialism to a project." },
  { t: "Capacity building", b: "Help us strengthen the systems that make our work sustainable." },
];

const volunteering = [
  { t: "On-ground support", b: "Join distributions, builds and campaigns in Kasese District." },
  { t: "Skills training", b: "Teach a trade — tailoring, farming, construction, IT." },
  { t: "Administrative support", b: "Help with reporting, records and donor communications." },
  { t: "Fundraising events", b: "Organise an event or campaign in your own community." },
];

export default function GetInvolvedPage() {
  return (
    <main id="main">
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green-ink">
            Join us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Together for humanity
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-700">
            Partnerships are how the hardest problems in rural communities
            actually get solved. If you want to give back, you are welcome here.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div id="partner" className="scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Become a partner
            </h2>
            <p className="mt-3 leading-relaxed text-sand-700">
              We work with organisations that share our values and our
              commitment to serving communities.
            </p>
            <ul className="mt-7 space-y-4">
              {partnership.map((x) => (
                <li key={x.t} className="rounded-xl border border-border bg-background p-5">
                  <h3 className="font-semibold text-foreground">{x.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{x.b}</p>
                </li>
              ))}
            </ul>
          </div>

          <div id="volunteer" className="scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Volunteer with us
            </h2>
            <p className="mt-3 leading-relaxed text-sand-700">
              Join our team of volunteers making a direct difference in Uganda&rsquo;s
              communities.
            </p>
            <ul className="mt-7 space-y-4">
              {volunteering.map((x) => (
                <li key={x.t} className="rounded-xl border border-border bg-background p-5">
                  <h3 className="font-semibold text-foreground">{x.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{x.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-green-ink p-10 lg:p-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white">
              Ready to start?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-green-100">
              Tell us your organisation, your country, and the programme you are
              interested in — we will come back to you with the details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-white px-7 py-3.5 font-semibold text-green-ink transition-colors duration-200 hover:bg-green-50"
              >
                Get in touch
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                className="rounded-md border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
