import type { Metadata } from "next";
import { ZakatCalculator } from "@/components/zakat-calculator";

export const metadata: Metadata = {
  title: "Zakat Calculator",
  description:
    "Calculate your Zakat at 2.5% against the gold or silver nisab, and give it as an amanah to the poor, destitute, widows, orphans and elderly of Kasese, Uganda.",
};

export default function ZakatPage() {
  return (
    <main id="main">
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-ink">
            The third pillar
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Calculate your Zakat
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-700">
            Zakat is obligatory on every adult Muslim whose wealth exceeds the
            nisab threshold — 2.5% of qualifying wealth, given once a year. It
            is not charity you choose to give; it is a right the poor hold over
            your wealth.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <ZakatCalculator />
      </section>
    </main>
  );
}
