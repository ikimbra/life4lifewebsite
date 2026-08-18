import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Donation Policy",
  description:
    "Terms of use and donation policy for Life 4 Life Relief Aid Kasese Ltd.",
  robots: { index: false, follow: true },
};

/* DRAFT. A published donation and refund policy is a condition of merchant
   approval with most payment providers, including Flutterwave. Client and
   legal review required before launch. */

export default function TermsPage() {
  return (
    <main id="main" className="container-page py-16 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-md border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-medium text-sand-800">
          Draft: pending review by {site.legalName} before launch.
        </div>

        <h1 className="mt-8 font-display text-4xl font-semibold text-foreground">
          Terms &amp; Donation Policy
        </h1>

        <div className="mt-8 space-y-6 leading-relaxed text-sand-700">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              100% donation policy
            </h2>
            <p className="mt-2">
              All funds are used strictly for the purpose and intention for
              which they were donated. We do not deduct administrative costs
              from your donation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              How donations are allocated
            </h2>
            <p className="mt-2">
              Where you give to a specific programme, your donation is applied
              to that programme. If a programme is fully funded or cannot
              proceed, we will contact you before reallocating your gift to
              work of a similar nature.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Refunds
            </h2>
            <p className="mt-2">
              If you have made a donation in error, contact us within 14 days at{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium text-orange-ink underline underline-offset-2"
              >
                {site.contact.email}
              </a>{" "}
              and we will refund it, provided the funds have not already been
              disbursed to the field.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Zakat
            </h2>
            <p className="mt-2">
              Zakat donations are distributed only to those eligible to receive
              Zakat. Nothing is deducted for administration. Where you specify a
              category, we honour it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Reporting
            </h2>
            <p className="mt-2">
              We provide regular progress reports, with photographs and video
              from the field. Orphan sponsors additionally receive a full annual
              report on their sponsored child.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Governing law
            </h2>
            <p className="mt-2">
              These terms are governed by the laws of the Republic of Uganda.{" "}
              {site.registration.statement}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
