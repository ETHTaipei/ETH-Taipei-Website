// Snapshot of ACCEPTED / CONFIRMED speakers pulled from the ETHTaipei Boost CRM
// (boost.ethtaipei.org, /api/v1/speakers/applications) on 2026-07-30.
//
// This is a curated static snapshot rather than a live fetch: the Boost API key
// is a server secret that can't ship to the public client, and the roster needs
// human curation before it goes public. To refresh, re-pull from Boost and edit
// this list.
//
// The Boost API does not expose speaker headshots or company logos, so cards
// fall back to initials avatars. Fill `avatar` / `companyLogo` (paths under
// /public/images/speakers/...) once real assets are available.

export type Speaker2026 = {
  name: string;
  title?: string;
  company?: string;
  /** Optional local avatar path, e.g. "/images/speakers/aditya.png". */
  avatar?: string;
  /** Optional local company logo path, e.g. "/images/speakers/logos/polymarket.svg". */
  companyLogo?: string;
};

export const speakers2026: Speaker2026[] = [
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
    name: "Benji",
    title: "Head of Asset Strategy / Head of Partnerships",
    company: "LINE NEXT",
    avatar: "/images/speakers/benji.jpg",
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
    title: "Governance at Funding Coordination",
    company: "Ethereum Foundation",
    avatar: "/images/speakers/devansh-mehta.jpg",
  },
  {
    name: "Martinet",
    title: "Head of Developer Relations",
    company: "Quantstamp",
    avatar: "/images/speakers/martinet.jpg",
  },
  // Jason Lai & Nicholas Pai have no headshot in Boost — initials fallback.
  { name: "Jason Lai", title: "Founder", company: "PIF12" },
  { name: "Nicholas Pai", title: "Engineering Lead", company: "Across Protocol" },
  // Denken Chen (ACCEPTED) — company/title are "N/A" in Boost; add once filled in.
  { name: "Denken Chen", avatar: "/images/speakers/denken-chen.png" },
];
