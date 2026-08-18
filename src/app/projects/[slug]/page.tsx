import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects, type Project } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} · Life 4 Life Relief Aid`,
      description: project.summary,
      images: [`/images/${project.imageCategory}/${project.images[0]}.jpg`],
    },
  };
}

const accent: Record<
  Project["accent"],
  { text: string; bg: string; softBg: string; softBorder: string; rule: string }
> = {
  orange: {
    text: "text-orange-ink",
    bg: "bg-orange-ink",
    softBg: "bg-orange-50",
    softBorder: "border-orange-200",
    rule: "bg-orange-500",
  },
  green: {
    text: "text-green-ink",
    bg: "bg-green-ink",
    softBg: "bg-green-50",
    softBorder: "border-green-200",
    rule: "bg-green-500",
  },
  blue: {
    text: "text-blue-ink",
    bg: "bg-blue-ink",
    softBg: "bg-blue-50",
    softBorder: "border-blue-200",
    rule: "bg-blue-500",
  },
  magenta: {
    text: "text-magenta-ink",
    bg: "bg-magenta-ink",
    softBg: "bg-magenta-50",
    softBorder: "border-magenta-200",
    rule: "bg-magenta-500",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const a = accent[project.accent];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const gallery = project.images.slice(1);

  return (
    <main id="main">
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src={`/images/${project.imageCategory}/${project.images[0]}.jpg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sand-950/92 via-sand-950/75 to-sand-950/40" />
        </div>

        <div className="container-page py-20 lg:py-24">
          <Link
            href="/projects"
            className="text-sm font-medium text-sand-300 transition-colors duration-200 hover:text-white"
          >
            ← All programmes
          </Link>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-sand-200">
            {project.summary}
          </p>
          {project.status === "launching" && (
            <p className="mt-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              Programme launching
            </p>
          )}
        </div>
      </section>

      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          {/* Narrative */}
          <div>
            {project.challenge && (
              <div
                className={`rounded-xl border ${a.softBorder} ${a.softBg} p-6`}
              >
                <h2
                  className={`text-sm font-semibold uppercase tracking-[0.14em] ${a.text}`}
                >
                  The challenge
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-sand-800">
                  {project.challenge}
                </p>
              </div>
            )}

            <div className="mt-10 space-y-5 text-lg leading-relaxed text-sand-700">
              {project.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            {project.launchNote && (
              <div className="mt-10 rounded-xl border border-border bg-surface p-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Why there are no photographs here yet
                </h2>
                <p className="mt-2 leading-relaxed text-sand-700">
                  {project.launchNote}
                </p>
              </div>
            )}

            {project.quote && (
              <figure className="mt-12 border-l-4 border-l-current pl-6 [border-left-color:var(--color-orange-500)]">
                {project.quote.arabic && (
                  <p className="font-arabic mb-4 text-foreground" lang="ar">
                    {project.quote.arabic}
                  </p>
                )}
                <blockquote className="font-display text-xl leading-relaxed text-foreground">
                  &ldquo;{project.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm font-medium text-muted">
                  — {project.quote.attribution}
                </figcaption>
              </figure>
            )}

            {/* Gallery */}
            {gallery.length > 0 && (
              <div className="mt-14">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  From the field
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {gallery.map((img, i) => (
                    <div
                      key={img}
                      className={`relative overflow-hidden rounded-lg bg-surface-sunken ${
                        i === 0 && gallery.length > 3
                          ? "aspect-[3/2] sm:col-span-2"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={`/images/${project.imageCategory}/${img}.jpg`}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted">
                  Photographs taken by our field team in Kasese District, shared
                  with the consent of those pictured.
                </p>
              </div>
            )}
          </div>

          {/* Giving panel */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-background shadow-md">
              <div className={`h-1.5 rounded-t-xl ${a.rule}`} />
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Support this programme
                </h2>
                <p className="mt-1.5 text-sm text-muted">
                  100% of your gift reaches this work.
                </p>

                <ul className="mt-5 divide-y divide-border border-y border-border">
                  {project.donations.map((d) => (
                    <li
                      key={d.label}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <span className="text-sm text-sand-800">
                        {d.label}
                        {d.note && (
                          <span className="block text-xs text-muted">
                            {d.note}
                          </span>
                        )}
                      </span>
                      <span
                        className={`tabular shrink-0 text-sm font-semibold ${
                          d.amount === null ? "text-muted" : a.text
                        }`}
                      >
                        {d.amount === null ? "Enquire" : `$${d.amount}`}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/donate"
                  className={`mt-6 block rounded-md ${a.bg} px-5 py-3.5 text-center font-semibold text-white shadow-sm transition-opacity duration-200 hover:opacity-90`}
                >
                  Donate to {project.name}
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 block rounded-md border border-border-strong px-5 py-3 text-center text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-sunken"
                >
                  Ask us about this work
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Other ways to help
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCardLite key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectCardLite({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex gap-4 rounded-xl border border-border bg-background p-4 transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-surface-sunken">
        <Image
          src={`/images/${project.imageCategory}/${project.images[0]}.jpg`}
          alt=""
          fill
          loading="lazy"
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-display font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{project.tagline}</p>
      </div>
    </Link>
  );
}
