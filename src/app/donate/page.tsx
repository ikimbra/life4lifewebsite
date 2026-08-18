import type { Metadata } from "next";
import Link from "next/link";
import { donationPolicy, site } from "@/content/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give to Life 4 Life Relief Aid by bank transfer, mobile money or international money transfer. 100% of your donation reaches the programme you chose.",
  alternates: { canonical: "/donate" },
};

/* Online card and mobile money giving activates the moment Flutterwave
   credentials are supplied. Until then the page leads with the transfer
   methods the charity already operates, rather than showing a dead button. */
const flutterwaveLive = Boolean(process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY);

export default function DonatePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={donationPolicy.headline}
        title="Every penny reaches Kasese."
        lead={donationPolicy.body}
        image="food-packs/handover-elderly"
      />

      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            {/* Online giving */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Give online
              </h2>
              {flutterwaveLive ? (
                <p className="mt-3 text-sand-700">
                  Card and mobile money payments are processed securely by
                  Flutterwave.
                </p>
              ) : (
                <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-6">
                  <p className="font-semibold text-sand-900">
                    Card and mobile money giving is arriving shortly.
                  </p>
                  <p className="mt-2 leading-relaxed text-sand-700">
                    We are completing verification with our payment provider. In
                    the meantime you can give by bank transfer, mobile money or
                    international transfer. Every method below reaches us in
                    full.
                  </p>
                </div>
              )}
            </section>

            {/* Bank transfer */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Bank transfer
              </h2>
              <p className="mt-2 text-sand-700">
                For UK, European and international donors, and for larger gifts.
              </p>
              <dl className="mt-5 overflow-hidden rounded-xl border border-border">
                {[
                  ["Account name", site.bank.accountName],
                  ["Account number", site.bank.accountNumber],
                  ["SWIFT / BIC", site.bank.swift],
                  ["Branch", site.bank.branch],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                      i % 2 ? "bg-background" : "bg-surface"
                    }`}
                  >
                    <dt className="text-sm font-medium text-muted">{k}</dt>
                    <dd className="tabular font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-muted">
                Please reference the programme you are supporting, and email{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-medium text-orange-ink underline underline-offset-2"
                >
                  {site.contact.email}
                </a>{" "}
                so we can confirm receipt and send you updates.
              </p>
            </section>

            {/* Transfer services */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Money transfer &amp; mobile money
              </h2>
              <p className="mt-2 text-sand-700">
                Often the fastest route, and familiar to donors already sending
                to East Africa.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {site.transferServices.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5"
                  >
                    <span
                      className="size-2 shrink-0 rounded-full bg-green-500"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-sand-800">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted">
                Send to <strong className="text-sand-800">{site.legalName}</strong>,{" "}
                {site.contact.town}, {site.contact.district}, {site.contact.country}. Call{" "}
                <a
                  href={`tel:${site.contact.mobile.replace(/\s/g, "")}`}
                  className="font-medium text-orange-ink underline underline-offset-2"
                >
                  {site.contact.mobile}
                </a>{" "}
                if you need the mobile money details.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Our commitment to you
              </h2>
              <ul className="mt-4 space-y-3">
                {donationPolicy.commitments.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-sand-800">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 size-4 shrink-0 text-green-ink"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-magenta-200 bg-magenta-50 p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Giving Zakat?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-sand-700">
                Work out exactly what you owe against the gold or silver nisab.
              </p>
              <Link
                href="/zakat"
                className="mt-4 inline-block rounded-md bg-magenta-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                Zakat calculator
              </Link>
            </div>

            <div className="mt-6 rounded-xl border border-border p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Registered and accountable
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                National registration {site.registration.national} · CBO{" "}
                {site.registration.cbo}. Charitable status granted by the Uganda
                Registration Services Bureau.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
