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

  /* Tracking parameters stripped from the shared links: they identify the
     person who sent them and would follow every visitor who clicks. The
     Facebook entry stays a /share/ redirect because that is the only form
     the client has supplied. */
  social: {
    facebook: "https://www.facebook.com/share/19LfBdToLY/",
    instagram: "https://www.instagram.com/life4_liferelief",
    tiktok: "https://www.tiktok.com/@life4liferelief",
    youtube: "https://www.youtube.com/@Life4liferelief",
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
 * The people who run the organisation.
 *
 * Names and roles are taken from the client's management photographs. Two of
 * the seven are volunteers rather than staff, so they are grouped separately
 * rather than presented as leadership.
 */
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  group: "leadership" | "volunteers";
}

export const team: TeamMember[] = [
  { slug: "halid-baluku", name: "Halid Baluku", role: "Chief Executive Officer", group: "leadership" },
  { slug: "yasin-ahmed", name: "Yasin Ahmed", role: "Director & Head of Operations", group: "leadership" },
  { slug: "dada-janet", name: "Dada Janet", role: "Patron & Head of Fundraising", group: "leadership" },
  { slug: "isabirye-hassan", name: "Isabirye Hassan", role: "Head of Finance", group: "leadership" },
  { slug: "kabugho-gevinah", name: "Kabugho Gevinah", role: "Projects Manager", group: "leadership" },
  { slug: "isingoma-hassan", name: "Isingoma Hassan", role: "Volunteer", group: "volunteers" },
  { slug: "ismail-shabani", name: "Ismail Shabani", role: "Volunteer", group: "volunteers" },
];

/**
 * Core objectives, from the organisation's 2025 profile document.
 * Rewritten for grammar; the substance of each is unchanged.
 */
export const objectives: string[] = [
  "Promote, teach and spread the light and beauty of Islam, and the miraculous nature of the Qur'an.",
  "Improve access to health, education, livelihoods and living standards for young people, women, children and people with disabilities.",
  "Lead a front line fight against ignorance and poverty through proven programmes that reach the needy and vulnerable.",
  "Connect and extend a helping hand to groups and individual projects, contributing to the communities Uganda wants to build.",
  "Research the social, economic and health pressures on the people we serve, and offer solutions for better living.",
  "Improve food security, nutrition and modern commercial farming in the communities we work in.",
  "Extend guidance and counselling to individuals, young people, women and families.",
];

/**
 * Headline impact figures.
 *
 * All four are figures the organisation stands behind, confirmed by the
 * client in September 2026. The reach figure rests on more than 3,000 hot
 * meals served, plus the food packs, Qurbani shares, wells, wheelchairs and
 * sponsorships delivered across every programme.
 *
 * Charity-sector guidance treats unevidenced impact claims as a primary
 * trust risk. Do not add a figure here that the client has not confirmed.
 */
export interface Stat {
  value: string;
  label: string;
  /** Count up on scroll. False for the founding year: counting a date up
   *  from zero is meaningless and reads as a glitch. */
  animate: boolean;
}

export const stats: Stat[] = [
  { value: "2019", label: "Serving Kasese since", animate: false },
  /* Derived, so the headline figure can never drift from the actual list. */
  { value: String(projects.length), label: "Programmes", animate: true },
  { value: "100%", label: "Of your donation delivered", animate: true },
  { value: "5,000+", label: "People reached", animate: true },
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
