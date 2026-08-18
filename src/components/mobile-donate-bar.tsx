import Link from "next/link";
import { formatAmount, lowestAmount, type Project } from "@/content/projects";

const accentBg: Record<Project["accent"], string> = {
  orange: "bg-orange-ink",
  green: "bg-green-ink",
  blue: "bg-blue-ink",
  magenta: "bg-magenta-ink",
};

/**
 * On desktop the giving panel is sticky alongside the narrative. On mobile it
 * falls below several screens of copy, so the donate action would be off-screen
 * for the entire read. This pins it to the bottom instead.
 *
 * Sits above the iOS home indicator via env(safe-area-inset-bottom).
 */
export function MobileDonateBar({ project }: { project: Project }) {
  const from = lowestAmount(project);

  return (
    <div
      data-donate-bar
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container-page flex items-center justify-between gap-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {project.name}
          </p>
          <p className="text-xs text-muted">
            {from !== null ? (
              <>
                From <span className="tabular font-semibold">{formatAmount(from)}</span> · 100%
                delivered
              </>
            ) : (
              "100% of your gift delivered"
            )}
          </p>
        </div>
        <Link
          href="/donate"
          className={`tap shrink-0 rounded-md ${accentBg[project.accent]} px-5 py-3 text-sm font-semibold text-white shadow-sm`}
        >
          Donate
        </Link>
      </div>
    </div>
  );
}
