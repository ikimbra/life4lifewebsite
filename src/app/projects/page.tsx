import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Our programmes across Kasese District, Uganda — clean water, orphan sponsorship, hot meals, Qurbani, education, healthcare, livelihoods and more.",
};

export default function ProjectsPage() {
  const active = projects.filter((p) => p.status === "active");
  const launching = projects.filter((p) => p.status === "launching");

  return (
    <main id="main">
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-ink">
            Our work
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-foreground sm:text-5xl">
            {projects.length} programmes, one district, no overheads taken.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-700">
            Every programme below runs in and around Kasese District, Western
            Uganda. Choose the work you want to fund — 100% of it reaches that
            programme.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {active.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 3} />
          ))}
        </div>
      </section>

      {launching.length > 0 && (
        <section className="container-page pb-20">
          <div className="border-t border-border pt-12">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Launching soon
            </h2>
            <p className="mt-2 max-w-2xl text-sand-700">
              These programmes are active in the field, but we have not yet
              published photography or final costings for them. We would rather
              tell you that than show you something misleading.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {launching.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
