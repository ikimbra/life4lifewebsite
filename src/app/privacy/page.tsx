import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How Life 4 Life Relief Aid collects, uses and protects your personal information.`,
  robots: { index: false, follow: true },
};

/* DRAFT. This must be reviewed by the client and, ideally, a legal adviser
   before launch — a payment provider will also require a published privacy
   and refund policy as a condition of merchant approval. */

export default function PrivacyPage() {
  return (
    <main id="main" className="container-page py-16 lg:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-md border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-medium text-sand-800">
          Draft — pending review by {site.legalName} before launch.
        </div>

        <h1 className="mt-8 font-display text-4xl font-semibold text-foreground">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-6 leading-relaxed text-sand-700">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Who we are
            </h2>
            <p className="mt-2">
              {site.registration.statement}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              What we collect
            </h2>
            <p className="mt-2">
              When you donate, contact us, volunteer or subscribe to our
              newsletter, we collect the details you provide — typically your
              name, email address, telephone number and, for donations, the
              payment information required to process your gift.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              How we use it
            </h2>
            <p className="mt-2">
              We use your information to process and acknowledge donations, to
              send you the reports and updates we promise donors, and to answer
              your enquiries. We do not sell or rent your personal information
              to anyone.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Your choices
            </h2>
            <p className="mt-2">
              We will always treat your personal information with the utmost
              care and respect, and keep it private. You can opt out of
              communications at any time by using the unsubscribe link in any
              email, by contacting us on{" "}
              <a
                href={`tel:${site.contact.mobile.replace(/\s/g, "")}`}
                className="font-medium text-orange-ink underline underline-offset-2"
              >
                {site.contact.mobile}
              </a>
              , or by emailing{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium text-orange-ink underline underline-offset-2"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Photography
            </h2>
            <p className="mt-2">
              All photographs on this site were taken by our own team. We obtain
              the consent of those pictured, and we do not publish images that
              compromise a person&rsquo;s dignity or safety.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Contact
            </h2>
            <address className="mt-2 not-italic">
              {site.legalName}
              <br />
              {site.contact.poBox}, {site.contact.town}
              <br />
              {site.contact.district}, {site.contact.country}
              <br />
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium text-orange-ink underline underline-offset-2"
              >
                {site.contact.email}
              </a>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
