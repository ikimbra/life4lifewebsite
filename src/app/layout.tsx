import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, Amiri } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

/* Display serif headings, pull quotes, the storytelling voice. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* Body and UI. Tabular figures matter on a site full of donation amounts. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Naskh for Qur'anic ayat and hadith, which run throughout the source copy.
   Loaded at 400/700 only. This face is heavy and most pages carry one quote. */
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "700"],
});

const SITE_URL = "https://www.life4liferelief.org.ug";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Life 4 Life Relief Aid | Together For Humanity",
    template: "%s · Life 4 Life Relief Aid",
  },
  description:
    "A registered Ugandan charity serving vulnerable communities in Kasese District: clean water, orphan care, food security, healthcare and education. 100% donation policy.",
  keywords: [
    "Uganda charity",
    "Kasese",
    "Islamic charity",
    "Zakat",
    "Qurbani",
    "orphan sponsorship",
    "water wells Uganda",
    "Ramadan food packs",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Life 4 Life Relief Aid",
    title: "Life 4 Life Relief Aid | Together For Humanity",
    description:
      "Serving vulnerable communities in Western Uganda since 2019. 100% of your donation reaches the people it was given for.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Children drinking from a new handpump installed by Life 4 Life Relief Aid in Kasese, Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life 4 Life Relief Aid | Together For Humanity",
    description:
      "Serving vulnerable communities in Western Uganda since 2019. 100% donation policy.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#b46000",
  width: "device-width",
  initialScale: 1,
  /* maximumScale/userScalable deliberately left at defaults restricting
     zoom fails WCAG 1.4.4 and this audience relies on it. */
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${amiri.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning applies to this element's own attributes
          only, one level deep. It does not mask mismatches in our tree.
          Needed because extensions (Grammarly, password managers, dark-mode
          add-ons) inject attributes onto <body> before React hydrates, which
          React otherwise reports as a mismatch we cannot fix from here. */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          Skip to main content
        </a>
        <StructuredData />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
