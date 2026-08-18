import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Our programmes across Kasese District, Uganda: clean water, orphan sponsorship, hot meals, Qurbani, education, healthcare, livelihoods and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const active = projects.filter((p) => p.status === "active");
  const launching = projects.filter((p) => p.status === "launching");

  return (
    <main id="main">
      <PageHero
        eyebrow="Our work"
        title={`${projects.length} programmes, one district, no overheads taken.`}
        lead="Every programme below runs in and around Kasese District, Western Uganda. Choose the work you want to fund, and 100% of it reaches that programme."
        image="hot-meals/serving-the-children"
      />

      <section className="container-page py-16 lg:py-20">
        <div data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div data-reveal-group className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
