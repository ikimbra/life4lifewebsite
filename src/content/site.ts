/**
 * Organisation-wide facts, contact details and headline figures.
 *
 * Registration numbers, banking details, addresses and phone numbers are
 * reproduced exactly as supplied by the client. Do not "tidy" them.
 */

import { projects } from "./projects";

export const site = {
  name: "Life 4 Life Relief Aid",
  legalName: "Life 4 Life Relief Aid Kasese Ltd",
  tagline: "Together For Humanity",
  founded: 2019,
  registeredOn: "22 July 2024",
  url: "https://www.life4liferelief.org.ug",

  registration: {
    national: "80034576645945",
    cbo: "CBO/323",
    statement:
      "Life 4 Life Relief Aid Kasese is a Company Limited by Guarantee and Not Having a Share Capital, registered in Uganda under number 80034576645945, granted charitable status by the Uganda Registration Services Bureau (URSB), and registered as a Community Based Organisation under number CBO/323.",
  },

  contact: {
    poBox: "P.O. Box 430774",
    town: "Mpondwe Lhubiriha Town Council",
    district: "Kasese",
    country: "Uganda",
    office: "+256 200 935 860",
    mobile: "+256 700 911 122",
    email: "info@life4liferelief.org.ug",
  },

  social: {
    youtube: "https://www.youtube.com/@Life4liferelief",
    facebook: "https://www.facebook.com/KhamedRelief/",
    instagram: "https://www.instagram.com/life4_liferelief/",
  },

  bank: {
    accountName: "LIFE 4 LIFE RELIEF AID KASESE LTD",
    accountNumber: "01660016626041",
    swift: "DFCUUGKA",
    branch: "Kampala, Uganda",
  },

  transferServices: [
    "RIA Money Transfer",
    "Western Union",
    "MoneyGram",
    "WorldRemit",
    "Mobile Money",
  ],

  founders: [
    { name: "Yasin Ahmed", role: "Co-Founder & Vision Bearer" },
    { name: "Baluku Halid", role: "Co-Founder" },
  ],
} as const;

/**
 * Headline impact figures.
 *
 * PROVISIONAL. These are placeholders pending verified numbers from the
 * client. Every entry is flagged so they can be found and replaced in one
 * pass, and the UI labels them rather than presenting them as audited.
 *
 * Charity-sector guidance treats unevidenced impact claims as a primary
 * trust risk, so do NOT remove the flag before the real figures arrive.
 */
export interface Stat {
  value: string;
  label: string;
  provisional: boolean;
  /** Count up on scroll. False for the founding year: counting a date up
   *  from zero is meaningless and reads as a glitch. */
  animate: boolean;
}

export const stats: Stat[] = [
  { value: "2019", label: "Serving Kasese since", provisional: false, animate: false },
  /* Derived, so the headline figure can never drift from the actual list. */
  { value: String(projects.length), label: "Programmes", provisional: false, animate: true },
  { value: "100%", label: "Of your donation delivered", provisional: false, animate: true },
  { value: "5,000+", label: "People reached", provisional: true, animate: true },
];

/** The claim the whole site rests on. Worth stating plainly and often. */
export const donationPolicy = {
  headline: "100% Donation Policy",
  body: "Every pound, dollar and euro you give reaches the programme you gave it for. We do not take administrative costs out of your donation.",
  commitments: [
    "100% of your donation reaches its intended purpose",
    "Transparent use of funds",
    "Regular progress reports",
    "Photo and video updates from the field",
  ],
} as const;
