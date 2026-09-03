// Snapshot of ACCEPTED / CONFIRMED speakers pulled from the ETHTaipei Boost CRM
// (boost.ethtaipei.org, /api/v1/speakers/applications) on 2026-08-22.
//
// This is a curated static snapshot rather than a live fetch: the Boost API key
// is a server secret that can't ship to the public client, and the roster needs
// human curation before it goes public. To refresh, re-pull from Boost and edit
// this list.
//
// Company logos are not in Boost either, and not every speaker has a headshot;
// cards fall back to an initials avatar. Fill `avatar` / `companyLogo` (paths
// under /public/images/speakers/...) once real assets are available.
//
// Speakers are grouped by conference day. Boost can't tell us the day yet — its
// sessions are still DRAFT with no start time or track — so day membership is
// curated here by hand. The day names must match the agenda page
// (components/AgendaPage2026/index.tsx): Sep 13 is Cryptonative Day, Sep 14 is
// Institution Day.

export type Speaker2026 = {
  name: string;
  nameZhHant?: string;
  title?: string;
  company?: string;
  companyZhHant?: string;
  /** Optional local avatar path, e.g. "/images/speakers/aditya.png". */
  avatar?: string;
  /** Optional local company logo path, e.g. "/images/speakers/logos/polymarket.svg". */
  companyLogo?: string;
};

/** Day a speaker appears on. Keys into the `speakersDays` copy in content.ts. */
export type SpeakerDayId = "cryptonative" | "institution";

export type SpeakerDay = {
  id: SpeakerDayId;
  speakers: Speaker2026[];
};

const cryptonativeDay: Speaker2026[] = [
  {
    name: "Aditya",
    title: "Senior Protocol Eng",
    company: "Polymarket",
    avatar: "/images/speakers/aditya.jpg",
  },
  {
    name: "Alan Wu",
    title: "Protocol Engineer",
    company: "Uniswap",
    avatar: "/images/speakers/alan-wu.jpg",
  },
  {
    name: "Matthew Keil",
    title: "Engineering Manager / Protocol Engineer",
    company: "ChainSafe",
    avatar: "/images/speakers/matthew-keil.png",
  },
  {
    name: "Hao Chen",
    title: "Staff Scientist",
    company: "CertiK",
    avatar: "/images/speakers/hao-chen.jpg",
  },
  {
    name: "Alice",
    title: "Sr. Security Researcher",
    company: "OneSavie Labs",
    avatar: "/images/speakers/alice.jpg",
  },
  {
    name: "Devansh Mehta",
    title: "Researcher",
    company: "Independent",
    avatar: "/images/speakers/devansh-mehta.jpg",
  },
  {
    name: "Martinet",
    title: "Head of Developer Relations",
    company: "Quantstamp",
    avatar: "/images/speakers/martinet.jpg",
  },
  {
    name: "Antonio Seveso",
    title: "Co-founder / CTO",
    company: "Fluidkey",
    avatar: "/images/speakers/antonio-seveso.png",
  },
  {
    name: "Anton Cheng",
    title: "Solutions Engineer",
    company: "Morpho",
    avatar: "/images/speakers/anton-cheng.jpg",
  },
  {
    name: "Alex Kuzmin",
    title: "Engineer",
    company: "Ethereum Foundation",
    avatar: "/images/speakers/alex-kuzmin.jpg",
  },
  {
    name: "Vivi Jeng",
    title: "Developer",
    company: "Independent",
    avatar: "/images/speakers/vivi-jeng.jpg",
  },
  {
    name: "Alfred Lu",
    title: "Blockchain Developer",
    company: "imToken Labs",
    avatar: "/images/speakers/alfred-lu.png",
  },
  {
    name: "Clément Lesaege",
    // Boost has "Founder / Founder" for the two orgs; one word covers both.
    title: "Founder",
    company: "Seer / Kleros",
    avatar: "/images/speakers/clement-lesaege.jpg",
  },
  {
    name: "Benny_lada",
    title: "Vyper Core Contributor",
    company: "Vyper",
    avatar: "/images/speakers/benny-lada.png",
  },
  {
    name: "CC Liang",
    title: "Researcher",
    company: "Independent",
    avatar: "/images/speakers/cc-liang.png",
  },
  // Denken Chen (ACCEPTED) — company/title are "N/A" in Boost; add once filled in.
  { name: "Denken Chen", avatar: "/images/speakers/denken-chen.png" },
  {
    name: "Vitalik Buterin",
    company: "Ethereum Foundation",
    avatar: "/images/speakers/vitalik.jpg",
  },
  {
    name: "Jatin",
    title: "Developer Relations Manager",
    company: "Canton",
    avatar: "/images/speakers/jatin.jpg",
  },
  {
    name: "Danger",
    title: "Founder",
    company: "Today in Defi",
    avatar: "/images/speakers/danger.jpg",
  },
  {
    name: "Pol",
    title: "CEO",
    company: "Dappnode",
    avatar: "/images/speakers/pol-lanski.png",
  },
  { name: "Ryan", title: "Developer", company: "Independent" },
  { name: "Eric Lee", title: "Core Developer", company: "SigMarket" },
];

const institutionDay: Speaker2026[] = [
  {
    name: "Andrew Wu",
    company: "Cathay Financial Holding",
    avatar: "/images/speakers/andrew-wu.jpg",
  },
  {
    name: "Benji",
    company: "LINE",
    avatar: "/images/speakers/benji.jpg",
  },
  {
    name: "Changwu",
    company: "imToken",
    avatar: "/images/speakers/changwu.jpg",
  },
  {
    name: "Daniel",
    company: "BSOS",
    avatar: "/images/speakers/daniel.jpg",
  },
  {
    name: "Ernie Ho",
    title: "Former Senior Legal Advisor at MaiCoin",
    avatar: "/images/speakers/ernie-ho.jpg",
  },
  {
    name: "Ivan",
    company: "TAAS",
    avatar: "/images/speakers/ivan.jpg",
  },
  {
    name: "Jamie Lin",
    nameZhHant: "林之晨",
    company: "Taiwan Mobile",
    companyZhHant: "台灣大哥大",
    avatar: "/images/speakers/jamie-lin.jpg",
  },
  {
    name: "Jason Kuo",
    company: "Zodia",
    avatar: "/images/speakers/jason-kuo.jpg",
  },
  {
    name: "Jason Lai",
    avatar: "/images/speakers/jason-lai.jpg",
  },
  {
    name: "Jon Lin",
    company: "KPMG",
    avatar: "/images/speakers/jon-lin.jpg",
  },
  {
    name: "Ko-Wei",
    company: "IOTA",
    avatar: "/images/speakers/ko-wei.jpg",
  },
  {
    name: "Martinet",
    company: "Quantstamp",
    avatar: "/images/speakers/martinet.jpg",
  },
  {
    name: "Oskar",
    company: "ETHSystem",
    avatar: "/images/speakers/oskar.jpg",
  },
  {
    name: "Reyer Chu",
    nameZhHant: "瞿孝洋",
    company: "RWA Nexus",
    companyZhHant: "睿亦富",
    avatar: "/images/speakers/reyer-chu.jpg",
  },
  {
    name: "Stamford",
    company: "Taishin Shin Kong Financial Holding",
    avatar: "/images/speakers/stamford.jpg",
  },
  {
    name: "Taka",
    company: "TABEI",
    avatar: "/images/speakers/taka.jpg",
  },
  {
    name: "Teagan",
    company: "Canton",
    avatar: "/images/speakers/teagan.jpg",
  },
  {
    name: "Wayne",
    company: "XREX",
    avatar: "/images/speakers/wayne.jpg",
  },
  {
    name: "殷玉龍",
    company: "Formosan Brothers Attorneys-at-Law",
    avatar: "/images/speakers/alex-yin.jpg",
  },
  {
    name: "Jeff Wen",
    company: "Hayek Technology",
    avatar: "/images/speakers/jeff.jpg",
  },
  {
    name: "陳念平 Neptune Chen",
    company: "PwC",
    avatar: "/images/speakers/neptune-chen.jpg",
  },
  {
    name: "陳鴻祺 Chris Chen",
    company: "Deloitte",
    avatar: "/images/speakers/chris-chen.jpg",
  },
  {
    name: "黃子庭",
    company: "Guoju Law Firm",
    avatar: "/images/speakers/huang-tzu-ting.jpg",
  },
];

export const speakers2026ByDay: SpeakerDay[] = [
  { id: "cryptonative", speakers: cryptonativeDay },
  { id: "institution", speakers: institutionDay },
];
