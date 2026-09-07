import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

const socials = [
  {
    href: site.social.facebook,
    label: "Facebook",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    href: site.social.instagram,
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    href: site.social.tiktok,
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z",
  },
  {
    href: site.social.youtube,
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-sand-900 text-sand-300">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-lg bg-white p-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={200}
                height={72}
                className="h-11 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A registered Ugandan charity serving vulnerable communities in
              Kasese District since {site.founded}.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="flex size-11 items-center justify-center rounded-md text-sand-400 transition-colors duration-200 hover:bg-sand-800 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h2 className="font-display text-base font-semibold text-white">
              Programmes
            </h2>
            <ul className="mt-3 space-y-0.5 text-sm">
              {projects.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="tap-link transition-colors duration-200 hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="tap-link font-medium text-orange-400 transition-colors duration-200 hover:text-orange-300"
                >
                  All programmes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h2 className="font-display text-base font-semibold text-white">
              Organisation
            </h2>
            <ul className="mt-3 space-y-0.5 text-sm">
              {[
                ["/about", "About us"],
                ["/about#team", "Our team"],
                ["/about#vision-bearer", "Message from our founder"],
                ["/get-involved", "Partner with us"],
                ["/get-involved#volunteer", "Volunteer"],
                ["/donate", "Ways to give"],
                ["/zakat", "Zakat calculator"],
                ["/gallery", "Photo gallery"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="tap-link transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-base font-semibold text-white">
              Contact
            </h2>
            <address className="mt-3 space-y-2 text-sm not-italic">
              <p>
                {site.contact.poBox}
                <br />
                {site.contact.town}
                <br />
                {site.contact.district}, {site.contact.country}
              </p>
              <p>
                <a
                  href={`tel:${site.contact.office.replace(/\s/g, "")}`}
                  className="tap-link transition-colors duration-200 hover:text-white"
                >
                  {site.contact.office}
                </a>
                <br />
                <a
                  href={`tel:${site.contact.mobile.replace(/\s/g, "")}`}
                  className="tap-link transition-colors duration-200 hover:text-white"
                >
                  {site.contact.mobile}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="tap-link break-all transition-colors duration-200 hover:text-white"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Legal registration status is a trust signal, so it is stated in
            full rather than reduced to two numbers. */}
        <div className="mt-12 border-t border-sand-800 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-sand-400">
            {site.registration.statement}
          </p>
          <div className="mt-5 flex flex-col gap-3 text-xs text-sand-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="tap-link transition-colors duration-200 hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="tap-link transition-colors duration-200 hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
