import { projects } from "@/content/projects";
import { site } from "@/content/site";

/**
 * JSON-LD for search engines.
 *
 * NGO is the correct schema.org type here (a subtype of Organization) and
 * carries the registration identifiers, which is what distinguishes a real
 * registered charity from the many fraudulent donation sites that copy this
 * kind of content. Worth getting right for a charity specifically.
 */
export function StructuredData() {
  const ngo = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${site.url}/#organisation`,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.tagline,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/og.jpg`,
    foundingDate: String(site.founded),
    description:
      "A registered Ugandan charity serving vulnerable communities in Kasese District through clean water, orphan care, food security, healthcare, education and livelihoods.",
    email: site.contact.email,
    telephone: site.contact.office,
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: site.contact.poBox,
      addressLocality: site.contact.town,
      addressRegion: site.contact.district,
      addressCountry: "UG",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Uganda national registration",
        value: site.registration.national,
      },
      {
        "@type": "PropertyValue",
        name: "Community Based Organisation registration",
        value: site.registration.cbo,
      },
    ],
    founder: site.founders.map((f) => ({ "@type": "Person", name: f.name })),
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${site.contact.district} District, Uganda`,
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
    knowsAbout: projects.map((p) => p.name),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organisation` },
    inLanguage: "en-GB",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ngo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
