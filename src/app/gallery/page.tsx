import type { Metadata } from "next";
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid";
import manifest from "@/content/gallery-manifest.json";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from Life 4 Life Relief Aid's work across Kasese District, Uganda — water wells, hot meals, Qurbani, orphan care, wheelchairs and masjid construction.",
};

const CATEGORY_LABELS: Record<string, string> = {
  water: "Clean water",
  masjid: "Masjid construction",
  "hot-meals": "Hot meals",
  ramadan: "Ramadan",
  "food-packs": "Food packs",
  qurbani: "Qurbani",
  wheelchairs: "Wheelchairs",
  education: "Education",
  orphans: "Orphan care",
  livelihoods: "Livelihoods",
  quran: "Qur'an & Da'wah",
  zakat: "Zakat",
  community: "Community",
};

/* Turns `filling-jerrycans-clean` into `Filling jerrycans clean`, then we
   prefix the programme so every image has a meaningful, non-duplicated alt
   text rather than a filename. */
function toCaption(slug: string, category: string) {
  const words = slug.replace(/-/g, " ");
  const label = CATEGORY_LABELS[category] ?? category;
  return `${label}: ${words.charAt(0).toUpperCase()}${words.slice(1)}`;
}

type Manifest = Record<string, { slug: string; w: number; h: number }[]>;

export default function GalleryPage() {
  const data = manifest as Manifest;

  const items: GalleryItem[] = Object.entries(data).flatMap(([category, list]) =>
    list.map((img) => ({
      src: `/images/${category}/${img.slug}.jpg`,
      category,
      categoryLabel: CATEGORY_LABELS[category] ?? category,
      caption: toCaption(img.slug, category),
      w: img.w,
      h: img.h,
    })),
  );

  const categories = Object.entries(data)
    .map(([key, list]) => ({
      key,
      label: CATEGORY_LABELS[key] ?? key,
      count: list.length,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <main id="main">
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-ink">
            From the field
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-700">
            Photographs taken by our team across Kasese District. Every image is
            our own, shared with the consent of the people pictured.
          </p>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <GalleryGrid items={items} categories={categories} />
      </section>
    </main>
  );
}
