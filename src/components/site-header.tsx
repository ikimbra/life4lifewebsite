"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* Five items plus the CTA. Anything more and the mobile sheet starts to
   scroll, which measurably hurts navigation on small screens. */
const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/zakat", label: "Zakat" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Close the sheet on navigation; otherwise it stays open over the new
     page, which reads as a broken back button. Adjusted during render rather
     than in an effect: resetting state when a value changes is the case React
     explicitly documents for this, and an effect here causes a cascading
     re-render (and a frame of the stale menu). */
  const [openedAt, setOpenedAt] = useState(pathname);
  if (pathname !== openedAt) {
    setOpenedAt(pathname);
    setOpen(false);
  }

  /* Lock scroll behind the open sheet. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Life 4 Life Relief Aid, home page"
        >
          <Image
            src="/logo.png"
            alt=""
            width={200}
            height={72}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                  active
                    ? "bg-orange-50 text-orange-ink"
                    : "text-sand-700 hover:bg-surface-sunken hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="press rounded-md bg-primary px-4 py-2.5 text-[0.9375rem] font-semibold text-on-primary shadow-sm transition-colors duration-200 hover:bg-orange-800 sm:px-5"
          >
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            /* 44px minimum touch target. */
            className="flex size-11 cursor-pointer items-center justify-center rounded-md text-sand-700 transition-colors duration-200 hover:bg-surface-sunken lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-6"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Kept mounted rather than conditionally rendered, so it can animate
          closed as well as open: an exit that snaps while the entrance
          animates reads as a bug. `inert` takes it out of the tab order and
          the accessibility tree while closed, which `pointer-events-none`
          alone would not do. */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        inert={!open}
        data-closed={!open || undefined}
        className="absolute inset-x-0 top-full origin-top border-b border-border bg-background shadow-lg transition-[opacity,transform] duration-200 ease-out data-closed:pointer-events-none data-closed:-translate-y-2 data-closed:opacity-0 lg:hidden"
      >
        <ul className="container-page py-2">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-3.5 text-base font-medium transition-colors duration-200 ${
                      active
                        ? "bg-orange-50 text-orange-ink"
                        : "text-sand-700 hover:bg-surface-sunken"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/get-involved"
                className="block rounded-md px-3 py-3.5 text-base font-medium text-sand-700 transition-colors duration-200 hover:bg-surface-sunken"
              >
                Get Involved
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
