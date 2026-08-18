import Image from "next/image";
import Link from "next/link";
import { formatAmount, lowestAmount, type Project } from "@/content/projects";

/* Accent is resolved through a lookup rather than string interpolation —
   Tailwind cannot see dynamically built class names at build time. */
const accentBar: Record<Project["accent"], string> = {
  orange: "bg-orange-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  magenta: "bg-magenta-500",
};

const accentText: Record<Project["accent"], string> = {
  orange: "text-orange-ink",
  green: "text-green-ink",
  blue: "text-blue-ink",
  magenta: "text-magenta-ink",
};

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const from = lowestAmount(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunken">
        <Image
          src={`/images/${project.imageCategory}/${project.images[0]}.jpg`}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {project.status === "launching" && (
          <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-sand-700 shadow-sm">
            Programme launching
          </span>
        )}
      </div>

      <div className={`h-1 ${accentBar[project.accent]}`} />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <p
          className={`mt-4 text-sm font-semibold ${accentText[project.accent]}`}
        >
          {from !== null ? (
            <>
              From <span className="tabular">{formatAmount(from)}</span>
            </>
          ) : (
            "Learn more"
          )}
          <span
            aria-hidden="true"
            className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
