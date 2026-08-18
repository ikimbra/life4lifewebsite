import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The single hero treatment used by every page.
 *
 * Previously narrative pages carried a photograph and utility pages a flat
 * colour band. The reasoning was defensible but the result was not: a donor
 * moving between Projects and Donate just experiences it as the site changing
 * character. One component, one scrim, one layout.
 *
 * `size="lg"` is reserved for the homepage. Interior pages all share `md`, so
 * the only variation across the site is the deliberate step up on the landing
 * page.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  size = "md",
  backHref,
  backLabel,
  badge,
  actions,
  priority = true,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Path under /images, e.g. "water/children-drinking-at-tap". */
  image: string;
  imageAlt?: string;
  size?: "md" | "lg";
  backHref?: string;
  backLabel?: string;
  badge?: string;
  actions?: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src={`/images/${image}.jpg`}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Two stop scrim: dense at the left so text clears AA against any
            frame, clearing to the right so the photograph still reads. */}
        <div className="absolute inset-0 bg-gradient-to-r from-sand-950/92 via-sand-950/75 to-sand-950/40" />
      </div>

      <div
        className={`container-page flex flex-col justify-center ${
          size === "lg"
            ? "min-h-[34rem] py-20 sm:min-h-[40rem] lg:py-28"
            : "min-h-[20rem] py-16 sm:min-h-[24rem] lg:py-20"
        }`}
      >
        {backHref && (
          <Link
            href={backHref}
            className="tap mb-4 inline-flex w-fit items-center py-2 text-sm font-medium text-sand-300 transition-colors duration-200 hover:text-white"
          >
            {backLabel}
          </Link>
        )}

        <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">
          {eyebrow}
        </p>

        <h1
          className={`mt-4 max-w-3xl font-display font-semibold leading-[1.08] text-white ${
            size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {title}
        </h1>

        {lead && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand-200">
            {lead}
          </p>
        )}

        {badge && (
          <p className="mt-6 inline-block w-fit rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            {badge}
          </p>
        )}

        {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
