/**
 * The sixteen programmes Life 4 Life Relief Aid runs.
 *
 * Copy is rewritten from the client's source documents for grammar and donor
 * clarity; every fact, price, hadith and statistic is preserved as supplied.
 * Figures the client has not yet provided are marked `enquire` rather than
 * invented; see `donations[].amount`.
 *
 * This module's shape intentionally mirrors the Sanity schema it will migrate
 * to, so swapping the data source later is a fetch change, not a refactor.
 */

export type Accent = "orange" | "green" | "blue" | "magenta";

/** `active` = running, with photography. `launching` = real programme, no
 *  delivery imagery yet; the UI states this honestly rather than faking it. */
export type ProjectStatus = "active" | "launching";

export interface DonationOption {
  label: string;
  /** USD. `null` means the cost varies and the donor is invited to enquire. */
  amount: number | null;
  note?: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Short line for cards and nav. */
  tagline: string;
  /** The one-sentence promise, used in card and hero. */
  summary: string;
  /** Why this programme exists: the situation it responds to. */
  challenge?: string;
  /** Body copy, one string per paragraph. */
  body: string[];
  quote?: { text: string; attribution: string; arabic?: string };
  donations: DonationOption[];
  imageCategory: string;
  /** Ordered image slugs; first is the card/hero image. */
  images: string[];
  accent: Accent;
  status: ProjectStatus;
  /** Shown on `launching` programmes to set expectations honestly. */
  launchNote?: string;
}

export const projects: Project[] = [
  {
    slug: "clean-water",
    name: "Clean Water & Sanitation",
    tagline: "A well changes everything",
    summary:
      "Hand-dug wells and handpumps that put safe drinking water within reach of whole villages.",
    challenge:
      "Children and mothers still walk long distances for water, carrying jerrycans on their heads and backs. The nearest sources (ponds, rivers and open wells) carry the bacteria and pathogens behind much of the illness we treat.",
    body: [
      "Water is a basic necessity and a fundamental human right, yet communities across Kasese still draw theirs from open streams. The walk drains women and children physically, keeps girls out of school, and delivers water that is unsafe before it even reaches the home.",
      "We dig, line and case wells by hand, cap them with a concrete apron and fit a handpump. What was a full morning's walk to a muddy stream becomes a two-minute walk to clean water, and the illnesses that follow dirty water stop arriving.",
      "A well serves a village for decades. It is the single most durable thing a donor can fund with us.",
    ],
    donations: [
      { label: "Sponsor a complete water well", amount: 2000, note: "Serves an entire village" },
      { label: "Hygiene kits", amount: null },
      { label: "Community hygiene workshop", amount: null },
    ],
    imageCategory: "water",
    images: [
      "children-drinking-at-tap",
      "collecting-from-stream-before",
      "child-carrying-jerrycan",
      "well-shaft-excavation",
      "brick-lined-shaft",
      "wellhead-brick-collar",
      "pump-apron-poured",
      "completed-handpump",
      "filling-jerrycans-clean",
      "collecting-clean-water",
    ],
    accent: "blue",
    status: "active",
  },
  {
    slug: "orphan-care",
    name: "Orphan Care Sponsorship",
    tagline: "Sponsor a child, and know them",
    summary:
      "Full sponsorship for an orphaned child covering food, healthcare, schooling and clothing, with a named child and reports back to you.",
    challenge:
      "Uganda has over 1.7 million orphaned children. One in three Ugandan families has taken in an orphan. Children without support are exposed to abuse and exploitation.",
    body: [
      "We regard the care of orphans as among the greatest of deeds. Sponsorship covers what any parent would provide: food on the table, medical care when a child is sick, school fees and materials, and clothes that fit.",
      "Sponsorship is not anonymous. For every child you sponsor you receive a full profile and photograph, an agreement setting out terms and objectives, and a detailed annual report covering their growth, schooling, health and livelihood, with photographs, video correspondence and validated receipts.",
      "Orphans are part of this society and can help transform it, if they are protected, educated and kept in good health.",
    ],
    quote: {
      text: "Whoever takes care of an orphan, he and I will be together in Paradise like this, and he held up his two fingers together.",
      attribution: "Prophet Muhammad ﷺ",
    },
    donations: [
      { label: "Food for a month", amount: 2 },
      { label: "Clothing", amount: 15 },
      { label: "Generous gifts", amount: 10 },
      { label: "Scholastic materials", amount: 20 },
      { label: "Healthcare", amount: 25 },
      { label: "School fees", amount: 35 },
      { label: "Aqiqah", amount: null },
    ],
    imageCategory: "orphans",
    images: ["orphans-shared-meal", "children-gathered", "large-group-children"],
    accent: "magenta",
    status: "active",
  },
  {
    slug: "hot-meals",
    name: "Hot Meal Project",
    tagline: "Two dollars, one hot meal",
    summary:
      "Fresh meals cooked and served to children, orphans, the elderly and anyone going hungry.",
    body: [
      "We cook on site, in the community, and serve while the food is hot. For many of the children who sit down to eat with us, it is the only full meal of their day.",
      "We have served more than 3,000 hot meals so far. It is the simplest thing we do and the most immediate. Two dollars puts a nourishing meal in front of someone who would otherwise go without.",
    ],
    donations: [{ label: "Sponsor a hot meal", amount: 2 }],
    imageCategory: "hot-meals",
    images: [
      "children-seated-meal",
      "cooking-cauldron",
      "plated-meals-laid-out",
      "stirring-the-pot",
      "serving-the-children",
      "large-gathering-meal",
      "children-eating",
      "communal-meal",
    ],
    accent: "orange",
    status: "active",
  },
  {
    slug: "food-packs",
    name: "Food Pack Project",
    tagline: "A month of meals for a family",
    summary:
      "Family parcels of maize flour, rice, beans, sugar, cooking oil and salt, delivered to the door.",
    body: [
      "Each hamper carries the staples a household cooks with every day: maize flour, sugar, cooking oil, rice, beans and salt. We deliver to the home, which matters for elderly and disabled recipients who cannot travel to a distribution point.",
      "Packs are distributed equally and without conditions, to families enduring either long-term hardship or a sudden emergency.",
    ],
    donations: [
      { label: "Bread distribution", amount: 1 },
      { label: "Family hamper", amount: 20 },
      { label: "Meat distribution", amount: 45 },
    ],
    imageCategory: "food-packs",
    images: [
      "handover-elderly",
      "delivery-to-home",
      "doorstep-delivery",
      "recipient-with-maize-flour",
      "smiling-recipient",
      "pack-handover-banner",
    ],
    accent: "orange",
    status: "active",
  },
  {
    slug: "ramadan",
    name: "Ramadan Project",
    tagline: "Iftar for those who break their fast alone",
    summary:
      "Iftar meals and Ramadan food packs for families who cannot afford to break their fast properly.",
    body: [
      "Through Ramadan we cook and distribute iftar to masjids across the district, and deliver food packs so families have something for suhur as well as iftar.",
      "The need is greatest here precisely when attendance is highest: congregations swell, and most of those gathering cannot afford a decent meal after a long day of fasting. Every Ramadan, with our donors, we have been there.",
    ],
    quote: {
      text: "Whoever gives food to a fasting person to break his fast shall have the same reward as him, without decreasing anything from the reward of the fasting person.",
      attribution: "Prophet Muhammad ﷺ",
    },
    donations: [
      { label: "Provide one iftar meal", amount: 1 },
      { label: "Ramadan family food pack", amount: 20 },
    ],
    imageCategory: "ramadan",
    images: [
      "ramadan-food-pack-sack",
      "packs-ready-distribution",
      "ramadan-distribution",
      "pack-handover",
      "food-packs-field",
      "carrying-packs-home",
      "iftar-plates",
    ],
    accent: "green",
    status: "active",
  },
  {
    slug: "qurbani",
    name: "Qurbani",
    tagline: "Meat for families who go a year without it",
    summary:
      "Your Qurbani sacrificed and distributed fresh to widows, orphans and elderly families in Kasese.",
    body: [
      "Each Eid al-Adha we fulfil the Sunnah of Ibrahim (AS) on your behalf, and share the meat among the neediest households: mothers with orphans, widows, and the elderly who struggle.",
      "For families who go an entire year without meat, this is not ritual. It is nourishment they badly need, and a day of dignity.",
      "We distribute fresh, on your behalf, and reach the households we already know are struggling.",
    ],
    quote: {
      text: "It is the Sunnah of your father Ibrahim (AS), and for every hair of the Qurbani you receive a reward from Allah.",
      attribution: "Prophet Muhammad ﷺ, al-Tirmidhi",
    },
    donations: [
      { label: "Sheep", amount: 40 },
      { label: "Goat", amount: 45 },
      { label: "Cow (shared)", amount: 300 },
    ],
    imageCategory: "qurbani",
    images: [
      "children-with-goats",
      "qurbani-share",
      "goat-handover",
      "meat-prepared",
      "qurbani-placard",
    ],
    accent: "green",
    status: "active",
  },
  {
    slug: "zakat",
    name: "Zakat",
    tagline: "Your Zakat, delivered as an amanah",
    summary:
      "We distribute your Zakat to the categories Allah specified: the poor, the destitute, widows, orphans and the elderly.",
    body: [
      "Zakat is obligatory on every adult Muslim who meets the Nisab threshold: 2.5% of qualifying wealth, given annually. It is distinct from voluntary sadaqah. It is a right the poor hold over your wealth.",
      "We treat your Zakat as an amanah. It goes to the category you specify, or to whoever needs it most, and it is never absorbed into running costs.",
      "Zakat purifies wealth from greed, redistributes it toward those enduring hardship, and binds a society together across the gap between rich and poor.",
    ],
    donations: [
      { label: "Calculate and give your Zakat", amount: null, note: "Use our Zakat calculator" },
    ],
    imageCategory: "zakat",
    images: ["zakat-handover"],
    accent: "magenta",
    status: "active",
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Keeping a poor child in school",
    summary:
      "School fees, uniforms, books and mobility equipment for disadvantaged children, orphans and children with disabilities.",
    body: [
      "We equip children with what school actually requires (books, pens, mathematical sets, bags and uniforms), because a child without materials is a child who drops out.",
      "We also fund wheelchairs. A child who cannot get to school will not be educated, however many books they own, and mobility is the difference between a life at home and a life in the classroom.",
      "Our focus is the children most likely to be left behind: orphans, girls, and children with physical disabilities.",
    ],
    donations: [
      { label: "Books, pens and pencils", amount: null },
      { label: "School bags", amount: null },
      { label: "Mathematical sets", amount: null },
      { label: "School uniform", amount: null },
      { label: "Mobility wheelchair", amount: null },
      { label: "School fees", amount: null },
    ],
    imageCategory: "education",
    images: [
      "scholastic-materials",
      "school-supplies-handover",
      "books-and-materials",
      "children-studying",
    ],
    accent: "blue",
    status: "active",
  },
  {
    slug: "wheelchairs",
    name: "Mobility & Wheelchairs",
    tagline: "Mobility restored",
    summary:
      "Wheelchairs fitted and delivered to children and adults for whom immobility means isolation.",
    body: [
      "A wheelchair is not equipment. For a child who has been carried or left at home, it is the first independent movement of their life, and the start of an education.",
      "We source, assemble and fit each chair to its recipient, and follow up as children grow.",
    ],
    donations: [{ label: "Sponsor a wheelchair", amount: null }],
    imageCategory: "wheelchairs",
    images: [
      "child-in-new-wheelchair",
      "wheelchair-recipient",
      "wheelchair-handover",
      "mobility-restored",
      "fitting-the-chair",
    ],
    accent: "blue",
    status: "active",
  },
  {
    slug: "livelihoods",
    name: "Livelihoods",
    tagline: "From aid to independence",
    summary:
      "Goats, sewing machines, market stalls and poultry: assets that turn a supported family into a self-reliant one.",
    /* Sourced figure from the organisation's 2025 profile, citing the Uganda
       National Household Survey 2021/22. Attributed in the copy rather than
       stated bare, since an unattributed statistic is worth nothing to a
       donor who checks. */
    challenge:
      "21.9% of Ugandans live below the absolute poverty line, according to the Uganda National Household Survey for 2021/22, taken after the pandemic. For the families we work with, the gap between relief and independence is a single productive asset.",
    body: [
      "Delivering relief matters, but changing a family's trajectory matters more. A goat breeds. A sewing machine earns. A market stall trades. Each one moves a household off aid and onto its own income.",
      "We select families in genuine destitution, provide the asset and the training to use it, and stay in contact as the income builds.",
      "This is the work that eventually makes our other programmes unnecessary for that family, which is the point.",
    ],
    donations: [
      { label: "Goat rearing", amount: null },
      { label: "Chicken farming", amount: null },
      { label: "Sewing and tailoring machine", amount: null },
      { label: "Retail stall setup", amount: null },
      { label: "Cash crop farming", amount: null },
    ],
    imageCategory: "livelihoods",
    images: [
      "goat-herd",
      "sewing-workshop",
      "retail-stall",
      "tailoring-machine",
      "produce-stall",
      "poultry",
      "livestock",
      "farming",
      "cash-crop-field",
    ],
    accent: "green",
    status: "active",
  },
  {
    slug: "food-security",
    name: "Food Aid & Food Security",
    tagline: "Beyond the next meal",
    summary:
      "Land, seeds, equipment and seasonal cultivation support so communities grow their own food supply.",
    challenge:
      "Approximately 870 million people in Africa experience moderate food insecurity. Climate change, conflict, natural disasters and economic inequality have made supply unstable.",
    body: [
      "Food aid answers today. Food security answers next year. We fund land acquisition, seeds, equipment, crop spraying and harvesting so that families and communities produce their own yields.",
      "The aim is resilience: households that can absorb a bad season without falling into hunger.",
    ],
    donations: [
      { label: "Seeds", amount: null },
      { label: "Seasonal cultivation", amount: null },
      { label: "Equipment support", amount: null },
      { label: "Crop spraying", amount: null },
      { label: "Harvesting support", amount: null },
      { label: "Land acquisition", amount: null },
    ],
    imageCategory: "livelihoods",
    images: ["farming", "cash-crop-field", "produce-stall"],
    accent: "green",
    status: "active",
  },
  {
    slug: "quran-dawah",
    name: "Qur'an & Da'wah",
    tagline: "Learning that lasts a lifetime",
    summary:
      "Qur'an distribution, madrassa sponsorship, meals for students and support for teachers.",
    body: [
      "Madrassa and da'wah shape how young people understand their deen, their purpose and their responsibilities to those around them.",
      "We distribute Qur'an and Yassarnal Qur'an primers, sponsor madrassa places, provide meals for students, and support the teachers who hold these schools together.",
      "A child who learns and understands their deen carries that light for the rest of their life.",
    ],
    donations: [
      { label: "Qur'an distribution", amount: null },
      { label: "Madrassa sponsorship", amount: null },
      { label: "Sponsor a hafiz", amount: null },
      { label: "Meals for students", amount: null },
    ],
    imageCategory: "quran",
    images: ["quran-distribution", "madrassa-students", "community-gathering"],
    accent: "green",
    status: "active",
  },
  {
    slug: "masjid-construction",
    name: "Masjid Construction",
    tagline: "Sadaqah jariyah that outlives us all",
    summary:
      "Building masjids in communities that have none, or whose current structure is no longer sound.",
    body: [
      "In many rural communities here, the nearest masjid is a long walk away, or the existing structure has decayed past repair. We build in the places where that gap is widest.",
      "A masjid is never only a prayer space. It becomes the education hub, the meeting place, and the point where a scattered community holds together.",
      "We are currently building: clearing the site, laying brick, and preparing timber for the roof. The photographs below are from that work in progress.",
    ],
    quote: {
      text: "Whoever builds a house for Allah, Allah will build for him a house in Paradise.",
      attribution: "Prophet Muhammad ﷺ",
    },
    donations: [
      { label: "Small masjid", amount: null },
      { label: "Medium masjid", amount: null },
      { label: "Large masjid", amount: null },
    ],
    imageCategory: "masjid",
    images: [
      "brickwork-progress",
      "brick-site-survey",
      "foundation-and-tank",
      "site-walkthrough",
      "handling-bricks",
      "timber-for-roofing",
      "timber-transport",
      "completed-masjid",
      "masjid-exterior",
    ],
    accent: "orange",
    status: "active",
  },
  {
    slug: "youth-women-empowerment",
    name: "Youth & Women's Empowerment",
    tagline: "Skills that pay",
    summary:
      "Tailoring, farming, livestock, design and career guidance for young people and women entering work.",
    body: [
      "Youth unemployment is the constraint on almost everything else here. We train in tailoring and fashion, livestock husbandry, cash crop farming and craft: trades with real local demand.",
      "Alongside the skills we run career guidance and peer counselling, because knowing the trade and knowing how to build a living from it are different things.",
    ],
    donations: [
      { label: "Sewing and tailoring machines", amount: null },
      { label: "Livestock husbandry training", amount: null },
      { label: "Fashion and design training", amount: null },
      { label: "Career guidance programme", amount: null },
    ],
    imageCategory: "livelihoods",
    images: ["sewing-workshop", "tailoring-machine", "retail-stall"],
    accent: "magenta",
    status: "active",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Sight, and the diseases we can prevent",
    summary:
      "Cataract surgery, malaria prevention, hepatitis B screening and conjunctivitis treatment for people who cannot afford care.",
    challenge:
      "Cataracts cause approximately 57.7% of blindness in Uganda. Over 90% of the population is at risk of malaria. Hepatitis B chronically affects around 6% of Ugandans and caused 1,300 recorded deaths in 2022.",
    body: [
      "Cataract blindness is treatable with surgery, and surgery is available in Uganda's referral hospitals, but the elderly, widows and disabled people we work with cannot pay for it. We identify patients, arrange screening, and support them through surgery and recovery until their sight returns.",
      "Alongside that we run malaria prevention with mosquito net distribution, hepatitis B screening and awareness, and treatment campaigns for the conjunctivitis outbreaks that recur across Kasese and keep children out of school.",
      "We work under the guidance of referral hospital clinicians and ophthalmologists, with local health workers and community leaders.",
    ],
    donations: [
      { label: "Cataract surgery", amount: null },
      { label: "Malaria mosquito nets", amount: null },
      { label: "Hepatitis B screening", amount: null },
      { label: "Community health seminar", amount: null },
    ],
    imageCategory: "community",
    images: ["community-gathering"],
    accent: "blue",
    status: "launching",
    launchNote:
      "This programme is running, but we have not yet published photography from our health campaigns. We will not use images of patients without their explicit consent.",
  },
  {
    slug: "housing",
    name: "Housing",
    tagline: "Not a house: a home",
    summary:
      "Building homes for destitute families, widows, the elderly and people with disabilities.",
    body: [
      "We build for households living in structures that no longer keep the weather out: widows, the elderly, orphaned families, and people with physical disabilities who need accessible housing.",
      "It is not only shelter. It is an address, a stability, and the foundation on which the rest of a family's recovery is built.",
    ],
    donations: [
      { label: "2 bedroom house", amount: null },
      { label: "3 bedroom house", amount: null },
      { label: "4 bedroom house", amount: null },
    ],
    imageCategory: "community",
    images: ["community-gathering"],
    accent: "orange",
    status: "launching",
    launchNote:
      "Housing costs move with the seasonal price of materials, so we quote each build individually. Contact us and we will send current costings.",
  },
  {
    slug: "environment",
    name: "Environmental Conservation",
    tagline: "Keep the land and water alive",
    summary:
      "Tree planting, nursery beds, community cleanups and environmental education across Kasese.",
    body: [
      "Conservation here is not abstract. The same degraded land and polluted water that damages the ecosystem is what makes our water and food programmes necessary in the first place.",
      "We plant trees, raise nursery beds, run community cleanups, and teach reduce-reuse-recycle in schools and community groups, balancing what people need now against what the land can carry.",
    ],
    donations: [
      { label: "Tree planting", amount: null },
      { label: "Nursery bed", amount: null },
      { label: "Community cleanup", amount: null },
      { label: "Environmental workshop", amount: null },
    ],
    imageCategory: "livelihoods",
    images: ["cash-crop-field"],
    accent: "green",
    status: "launching",
    launchNote:
      "Our conservation work is being scheduled for the coming planting season. Photography will follow from the first tree planting campaign.",
  },
];

/**
 * Formats a USD donation amount for display.
 *
 * Thousands separators matter here: "$2000" reads as a typo next to the
 * "$2,000" used in prose, and inconsistent money formatting on a donation
 * page undermines exactly the credibility the page is trying to build.
 */
export const formatAmount = (amount: number) => `$${amount.toLocaleString("en-GB")}`;

/** Lowest concrete price in a project, or null if every option is "Enquire". */
export const lowestAmount = (p: Project): number | null => {
  const amounts = p.donations
    .map((d) => d.amount)
    .filter((a): a is number => typeof a === "number");
  return amounts.length ? Math.min(...amounts) : null;
};

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const activeProjects = projects.filter((p) => p.status === "active");

/** Homepage feature set: the four with the strongest evidence behind them. */
export const featuredSlugs = ["clean-water", "orphan-care", "hot-meals", "qurbani"];
