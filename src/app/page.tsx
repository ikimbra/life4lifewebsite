/* Temporary token-system proof page. Replaced by the real homepage once
   content structure and Sanity schemas land. */

const brands = [
  { name: "Orange — primary", fill: "bg-orange-500", ink: "text-orange-ink", solid: "bg-orange-ink" },
  { name: "Green — livelihoods", fill: "bg-green-500", ink: "text-green-ink", solid: "bg-green-ink" },
  { name: "Blue — water", fill: "bg-blue-500", ink: "text-blue-ink", solid: "bg-blue-ink" },
  { name: "Magenta — accent", fill: "bg-magenta-500", ink: "text-magenta-ink", solid: "bg-magenta-ink" },
];

export default function Home() {
  return (
    <main id="main" className="container-page py-16">
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-orange-ink">
        Together For Humanity
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold text-foreground sm:text-6xl">
        Life 4 Life Relief Aid
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Design token foundation. Brand fills, accessible ink variants, warm
        neutrals, and the three-face type system.
      </p>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-foreground">Palette</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b.name}
              className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm"
            >
              <div className={`h-16 ${b.fill}`} />
              <div className={`px-4 py-3 text-sm font-medium text-on-primary ${b.solid}`}>
                White text passes AA
              </div>
              <div className="px-4 py-3">
                <p className={`text-sm font-semibold ${b.ink}`}>{b.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-foreground">Typography</h2>
        <div className="mt-5 space-y-5 rounded-lg border border-border bg-surface p-6">
          <p className="font-display text-3xl">
            Newsreader carries the storytelling.
          </p>
          <p className="max-w-2xl">
            Inter sets body copy and interface text, with tabular figures so
            amounts like <span className="tabular font-semibold">$2,000</span>{" "}
            and <span className="tabular font-semibold">$45</span> stay aligned.
          </p>
          <p className="font-arabic" lang="ar">
            مَنْ كَفَلَ يَتِيمًا فَأَنَا وَهُوَ فِي الْجَنَّةِ كَهَاتَيْنِ
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-foreground">Interactive</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-md bg-primary px-5 py-3 font-semibold text-on-primary shadow-sm transition-colors duration-200 hover:bg-orange-800"
          >
            Donate now
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-md border border-border-strong bg-background px-5 py-3 font-semibold text-foreground transition-colors duration-200 hover:bg-surface-sunken"
          >
            Our projects
          </button>
        </div>
      </section>
    </main>
  );
}
