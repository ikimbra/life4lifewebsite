import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Life 4 Life Relief Aid in ${site.contact.town}, ${site.contact.district}, Uganda by phone, email or post.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        lead="Questions about a programme, a donation, or partnering with us? We answer every message."
        image="community/women-of-the-community"
      />

      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Send us a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Speak to us directly
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-muted">Office</dt>
                  <dd>
                    <a
                      href={`tel:${site.contact.office.replace(/\s/g, "")}`}
                      className="tap-link tabular font-semibold text-orange-ink"
                    >
                      {site.contact.office}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Mobile</dt>
                  <dd>
                    <a
                      href={`tel:${site.contact.mobile.replace(/\s/g, "")}`}
                      className="tap-link tabular font-semibold text-orange-ink"
                    >
                      {site.contact.mobile}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="tap-link break-all font-semibold text-orange-ink"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Our address
              </h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-sand-700">
                {site.legalName}
                <br />
                {site.contact.poBox}
                <br />
                {site.contact.town}
                <br />
                {site.contact.district}, {site.contact.country}
              </address>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Registration
              </h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">National</dt>
                  <dd className="tabular font-medium">{site.registration.national}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">CBO</dt>
                  <dd className="tabular font-medium">{site.registration.cbo}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
