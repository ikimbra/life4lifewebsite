"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export interface GalleryItem {
  src: string;
  category: string;
  categoryLabel: string;
  caption: string;
  w: number;
  h: number;
}

export function GalleryGrid({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: { key: string; label: string; count: number }[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [filter, items],
  );

  /* Reset the lightbox when the filter changes — otherwise the index points
     into the previous, differently-ordered list. Adjusted during render, not
     in an effect: an effect would briefly show the wrong photograph. */
  const [prevFilter, setPrevFilter] = useState(filter);
  if (filter !== prevFilter) {
    setPrevFilter(filter);
    setLightbox(null);
  }

  /* Keyboard control: Escape closes, arrows move. A lightbox that traps
     keyboard users is worse than no lightbox. */
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % shown.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? null : (i - 1 + shown.length) % shown.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, shown.length]);

  const active = lightbox !== null ? shown[lightbox] : null;

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photographs">
        <button
          type="button"
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            filter === "all"
              ? "bg-orange-ink text-white"
              : "border border-border-strong bg-background text-sand-700 hover:bg-surface-sunken"
          }`}
        >
          All <span className="tabular opacity-70">{items.length}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setFilter(c.key)}
            aria-pressed={filter === c.key}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              filter === c.key
                ? "bg-orange-ink text-white"
                : "border border-border-strong bg-background text-sand-700 hover:bg-surface-sunken"
            }`}
          >
            {c.label} <span className="tabular opacity-70">{c.count}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-surface-sunken"
            aria-label={`View: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              loading={i < 8 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sand-950/85 to-transparent p-3 pt-8 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="mt-10 text-center text-muted">
          No photographs in this category yet.
        </p>
      )}

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex flex-col bg-sand-950/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="flex items-center justify-between gap-4 text-white">
            <p className="text-sm">
              <span className="tabular">
                {(lightbox ?? 0) + 1} / {shown.length}
              </span>
              <span className="ml-3 text-sand-400">{active.categoryLabel}</span>
            </p>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="flex size-11 cursor-pointer items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-6"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.caption}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div
            className="flex items-center justify-between gap-4 pt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setLightbox((i) =>
                  i === null ? null : (i - 1 + shown.length) % shown.length,
                )
              }
              className="cursor-pointer rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              ← Previous
            </button>
            <p className="flex-1 text-center text-sm text-sand-300">
              {active.caption}
            </p>
            <button
              type="button"
              onClick={() =>
                setLightbox((i) => (i === null ? null : (i + 1) % shown.length))
              }
              className="cursor-pointer rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
