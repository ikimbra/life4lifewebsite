import type { Metadata } from "next";
import { ZakatCalculator } from "@/components/zakat-calculator";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Zakat Calculator",
  description:
    "Calculate your Zakat at 2.5% against the gold or silver nisab, and give it as an amanah to the poor, destitute, widows, orphans and elderly of Kasese, Uganda.",
  alternates: { canonical: "/zakat" },
};

export default function ZakatPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="The third pillar"
        title="Calculate your Zakat"
        lead="Zakat is obligatory on every adult Muslim whose wealth exceeds the nisab threshold: 2.5% of qualifying wealth, given once a year. It is not charity you choose to give; it is a right the poor hold over your wealth."
        image="zakat/zakat-handover"
      />

      <section className="container-page py-16 lg:py-20">
        <ZakatCalculator />
      </section>
    </main>
  );
}
