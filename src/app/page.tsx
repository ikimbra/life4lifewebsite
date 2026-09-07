import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { ProjectCard } from "@/components/project-card";
import { featuredSlugs, getProject, projects } from "@/content/projects";
import { donationPolicy, site, stats } from "@/content/site";
import { PageHero } from "@/components/page-hero";

const featured = featuredSlugs
  .map(getProject)
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function Home() {
  return (
    <main id="main">
      <PageHero
        eyebrow={site.tagline}
        title="Clean water, a hot meal, a child kept in school."
        lead="We serve the most vulnerable communities of Kasese District in Western Uganda, and 100% of what you give reaches them."
        image="water/children-drinking-at-tap"
        size="lg"
        actions={
          <>
            <Link
              href="/donate"
              className="press rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-on-primary shadow-lg transition-colors duration-200 hover:bg-orange-800"
            >
              Donate now
            </Link>
            <Link
              href="/projects"
              className="press rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
            >
              See our work
            </Link>
          </>
        }
      />

      {/* ─────────────────── Trust bar ───────────────────
          Placed immediately below the hero: the 100% policy is this
          charity's strongest differentiator and belongs above the fold-line
          on mobile, not buried on an About page. */}
      <section className="border-b border-orange-200 bg-orange-50">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {donationPolicy.commitments.map((c) => (
            <div key={c} className="flex items-start gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 size-5 shrink-0 text-orange-ink"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium leading-snug text-sand-800">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── Who we are ─────────────────── */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-ink">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              It began with two people and a pandemic.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-sand-700">
              <p>
                In 2019, {site.founders[0].name} and {site.founders[1].name}{" "}
                began delivering water, food and supplies to families hit by
                COVID-19, with no funding, and no organisation behind them.
              </p>
              <p>
                On {site.registeredOn}, that work became a charity licensed by
                the Government of Uganda. Today it runs {projects.length} programmes
                across Kasese District: wells, orphan sponsorship, hot meals,
                healthcare, schooling and livelihoods.
              </p>
            </div>
            <Link
              href="/about"
              className="tap mt-6 inline-flex items-center gap-1.5 py-2 font-semibold text-orange-ink transition-colors duration-200 hover:text-orange-800"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Stats. Provisional figures are labelled, never presented as
              audited unevidenced impact claims are the fastest way for a
              charity site to lose a donor's trust. */}
          <div data-reveal-group className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-surface p-6"
              >
                {s.animate ? (
                  <CountUp
                    value={s.value}
                    className="tabular block font-display text-4xl font-semibold text-orange-ink"
                  />
                ) : (
                  <p className="tabular font-display text-4xl font-semibold text-orange-ink">
                    {s.value}
                  </p>
                )}
                <p className="mt-1.5 text-sm font-medium leading-snug text-sand-700">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── The water story ───────────────────
          The one programme with a complete photographic arc, so it gets the
          full-width treatment: the problem, then the result. */}
      <section className="bg-sand-900 py-20 text-white lg:py-24">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
            Clean water &amp; sanitation
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            This is what $2,000 changes.
          </h2>

          <div data-reveal-group className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                img: "collecting-from-stream-before",
                tag: "Before",
                tagClass: "bg-sand-800 text-sand-200",
                copy: "Families draw water from open streams: the same water that carries the illnesses we spend the rest of the year treating.",
              },
              {
                img: "filling-jerrycans-clean",
                tag: "After",
                tagClass: "bg-blue-500 text-white",
                copy: "A hand-dug, brick-lined well with a capped handpump. Clean water, minutes from home, for decades.",
              },
            ].map((b) => (
              <figure key={b.img} className="overflow-hidden rounded-xl bg-sand-800">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={`/images/water/${b.img}.jpg`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${b.tagClass}`}
                  >
                    {b.tag}
                  </span>
                </div>
                <figcaption className="p-5 text-[0.9375rem] leading-relaxed text-sand-300">
                  {b.copy}
                </figcaption>
              </figure>
            ))}
          </div>

          <Link
            href="/projects/clean-water"
            className="tap mt-8 inline-flex items-center gap-1.5 py-2 font-semibold text-blue-300 transition-colors duration-200 hover:text-blue-200"
          >
            Follow a well from first dig to first drink
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ─────────────────── Featured programmes ─────────────────── */}
      <section className="container-page py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-ink">
              Where your giving goes
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Choose a programme
            </h2>
          </div>
          <Link
            href="/projects"
            className="tap inline-flex items-center py-2 font-semibold text-orange-ink transition-colors duration-200 hover:text-orange-800"
          >
            All {projects.length} programmes <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div data-reveal-group className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* ─────────────────── Founder's word ─────────────────── */}
      <section className="border-y border-border bg-surface py-20 lg:py-24">
        <div data-reveal className="container-page max-w-4xl">
          <figure>
            <blockquote className="font-display text-2xl leading-[1.4] text-foreground sm:text-3xl">
              &ldquo;Charity is not about pity. It is about recognising our
              shared humanity. When we lift others, we lift ourselves.&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="h-px w-10 bg-orange-500" aria-hidden="true" />
              <span className="text-sm">
                <span className="font-semibold text-foreground">
                  {site.founders[0].name}
                </span>
                <span className="text-muted"> · {site.founders[0].role}</span>
              </span>
            </figcaption>
          </figure>
          <Link
            href="/about#vision-bearer"
            className="tap mt-7 inline-flex items-center gap-1.5 py-2 font-semibold text-orange-ink transition-colors duration-200 hover:text-orange-800"
          >
            Read the full message
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ─────────────────── Closing CTA ─────────────────── */}
      <section className="container-page py-20 lg:py-24">
        <div className="overflow-hidden rounded-2xl bg-orange-ink">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {donationPolicy.headline}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-orange-100">
                {donationPolicy.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="press rounded-md bg-white px-7 py-3.5 font-semibold text-orange-ink shadow-sm transition-colors duration-200 hover:bg-orange-50"
                >
                  Donate now
                </Link>
                <Link
                  href="/zakat"
                  className="rounded-md border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Calculate your Zakat
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image
                src="/images/hot-meals/children-seated-meal.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
