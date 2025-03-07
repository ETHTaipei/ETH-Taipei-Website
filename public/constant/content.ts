// for transition period; remove when 2025 version is live
const lastYear = "2024";
const lastMonth = "April";
const lastDayDuration = "21-22";

export const year = "2025";
export const month = "April";
const dayDuration = "1st-2nd";
export const dateDayMonthYear = `${dayDuration} ${month}, ${year}`;
export const dateDayMonthLastYear = `${lastDayDuration} ${lastMonth}, ${lastYear}`;
// const welcomeEdition = `Welcome to ETHTaipei, the ${year} edition!!!`;

const common = {
  ethTaipei: `ETHTaipei ${year} | ${month} ${dayDuration}`,
  ethTaipeiIntro:
    // "Welcome to ETHTaipei ${year} event held in Taiwan. With a thriving Ethereum and developer community in Taiwan, ETHTaipei ${year} has brought together teams from around the world to participate in a 3-day hackathon and 2-day conference focusing on the application and technology of Ethereum.",
    `Welcome to ETHTaipei ${year} event held in Taiwan. With a thriving Ethereum and developer community in Taiwan, ETHTaipei ${year} has brought together teams from around the world to participate in a 2-day conference focusing on the application and technology of Ethereum.`,
};

const homepage = {
  // hackathonIntro: `The ETHTaipei hackathon is a three-day event inviting developers to compete for prizes sponsored by industry leaders. Participants will collaborate in teams to develop innovative blockchain applications using the most cutting-edge technology, tools or packages. Attendance is free and includes workshops and talks from industry experts. Don't miss this chance to gain hands-on experience and connect with Ethereum enthusiasts from Taiwan and beyond.`,
  // hackathonDateWithDays: `${month} 1 (Tue) → ${month} 2 (Wed)`,
  // hackathonBtnText: "Join",
  callToActionTitle: "Let's Buidl ETHTaipei together!",
  callToActionText:
    "ETHTaipei is hosted by the local ETH community, and we'd love to see more participants and different parties getting involved! If you have great ideas, resources, wanna host cool side events, make sure to click the Apply buttons and reach out to us through social links!",
  speakers: `${year} Speakers`,
  speakersIntro: "Have an idea in mind that you want to share in ETHTaipei?",
  beASpeaker: "Be a Speaker",
  beASponsor: "Be a Sponsor",
  recap: "Watch ETHTaipei 2023 Recap!",
  venue: "The Venue",
  venueName: "POPOP Taipei",
  venueDescription:
    "Popop Taipei is a trending event space known for its unique atmosphere. The venue features a spacious layout and modern amenities, making it an ideal choice for hosting conferences, workshops, and social gatherings.",
  venueCapacity: "Capacity: 700 people",
  venueAddress:
    "No. 13, Section 2, Nangang Rd, Nangang District, Taipei City, 115",
  partners: "Partners",
  partnersDesc: "Stronger Together in the Ethereum Ecosystem!",
  organizers: "Organizers",
  communitySupport: "Community Support",
  communitySupportSubtitle: "Support from ETH Organizations!",
  openingAndKeynote: "Opening / Keynote Speaker",
  mediaPartners: "Media Partners",
  mediaPartnersDesc: "Bringing Web3 Stories to the World!",
  sponsors: `Sponsors`,

  bannerTitle_1: "ETH",
  bannerTitle_2: "Taipei",
  bannerTitle_3: `${year}`,
  bannerSubTitle: "Unleashing a New Era of Blockchain in Taiwan",
  bannerInfoTitle_1: "Conference",
  bannerInfoDesc_1: dateDayMonthYear,
  // bannerInfoTitle_2: "Hackathon",
  // bannerInfoDesc_2: dateDayMonthYear,
  bannerInfoTitle_2_1: "Side Events",
  bannerInfoDesc_2_1: "Click to see 10+ events",
  bannerInfoTitle_2_2: "ETHGlobal Pragma",
  bannerInfoDesc_2_2: "3rd April, 2025",
  bannerInfoTitle_2_3: "ETHGlobal Hackathon",
  bannerInfoDesc_2_3: "4th-6th April, 2025",
  bannerInfoTitle_3: "POPOP Taipei",
  bannerInfoDesc_3:
    "No. 13, Section 2, Nangang Rd, Nangang District, Taipei City",

  introductionTitle: "What is ETHTaipei?",
  introductionSubtitle: "where Builders, Dreamers, and Innovators connect.",
  introductionCardTitle_1: "Insights from Experts & Hands-on Experiences",
  introductionCardDesc_1: `At ETHTaipei, you'll hear from renowned experts, scholars, and industry leaders as they discuss the latest trends and applications of Ethereum. Beyond the talks, you can also participate in hands-on workshops and side events, gaining unique experiences while connecting and collaborating with fellow attendees.`,
  introductionCardTitle_2: "Global Connection, Taiwan's Spotlight",
  introductionCardDesc_2:
    "ETHTaipei brings together Ethereum-focused teams from around the world, uniting local Ethereum and developer communities while highlighting Taiwan as a vibrant hub for Ethereum ecosystem. It also provides a platform for Taiwanese developers and teams to connect with the global community and gain greater visibility.",
  introductionCardTitle_3: "A Frontier Platform for Learning & Collaboration",
  introductionCardDesc_3_1:
    "ETHTaipei offers an unparalleled opportunity to explore cutting-edge Ethereum technology and applications while connecting with local communities in Taiwan. We look forward to your participation to build and advance Ethereum together!",

  activityTitle: `ETHTaipei ${year} Events`,
  activitySubTitle: "From Deep Dives to Fun Vibes – Experience It All!",
  activityName_1: "Conference",
  activityDesc_1:
    "The ETHTaipei conference is a two-day event offering two distinct tracks: DeFi and Protocol. The DeFi track delves into decentralized finance and security topics, while the Protocol track explores various subjects, including clients, ZK Proofs and Layer 2. This event brings together industry experts and trailblazers to examine the latest advancements in Ethereum. Tickets grant access to both tracks.",
  activityDate_1: dateDayMonthYear,
  activityBtn_1: "Ticket",
  // activityName_2: "Hackathon",
  // activityDesc_2:
  //   "The ETHTaipei hackathon is a three-day event inviting developers to compete for prizes sponsored by industry leaders. Participants will collaborate in teams to develop innovative blockchain applications using the most cutting-edge technology, tools or packages. Attendance is free and includes workshops and talks from industry experts. Don't miss this chance to gain hands-on experience and connect with Ethereum enthusiasts from Taiwan and beyond.",
  // activityDate_2: dateDayMonthYear,
  // activityBtn_2: "View Now",
  activityName_3: "SideEvent",
  activityDesc_3:
    // "Get ready for an extra dose of fun at ETHTaipei! While the main conference and hackathon take center stage, don't forget to dive into our amazing side events! Join us for a relaxed and enjoyable time, where you can connect with fellow enthusiasts, learn cool new things, and make memories that'll last a lifetime. Don't miss out on the good vibes – come and be a part of the excitement at our side events! See you there!",
    "Get ready for an extra dose of fun at ETHTaipei! While the main conference takes center stage, don't forget to dive into our amazing side events! Join us for a relaxed and enjoyable time, where you can connect with fellow enthusiasts, learn cool new things, and make memories that'll last a lifetime. Don't miss out on the good vibes – come and be a part of the excitement at our side events! See you there!",
  activityDate_3: dateDayMonthYear,
  activityBtn_3: "See Events",

  recapTitle: "Recap! 2024 Edition",
  recapSubTitle: "Highlights from the unforgettable ETHTaipei 2024!!",
  recapViewMore: "Load More",
  recapHide: "Show Less",
};

const agenda = `${lastYear} Agenda`;

const navs = {
  home: "Home",
  ticket: "Ticket",
  // hackathon: "Hackathon",
  agenda: agenda,
  agenda2025: "Agenda",
  apply: "Apply",
  toSpeak: "to Speak",
  toSponsor: "to Sponsor",
  sideEvent: "Side Event",
  faq: "Info",
  goldcard: "Gold Card",
  visaInfo: "Visa Info",
  venue: "Venue",
  brand: "Brand",
};

const participation = {
  applyToSpeak: "Apply to Speak",
  applyToSponsor: "Apply to Sponsor",
  addSideEvent: "Add Side Event",
};

const sponsorHighlight = {
  sponsorHighlightTitle: "Sponsor Highlights",
  readMore: "Read more",
  sponsorSubtitle: "These Sponsors Make ETHTaipei Possible!",
};

const visa = {
  visaTitle: "Info",
  visaQuestion1: "Do I need a visa to enter Taiwan?",
  visaAnswer1Part1:
    "Taiwan grants a visa exemption to visitors from 65 countries for stays of 14-90 days. Please visit the website of the ",
  BureauOfConsularAffairs: "Bureau of Consular Affairs website",
  visaAnswer1Part2: " for more details.",
  visaQuestion2: "What if I need a visa?",
  visaAnswer2Part1:
    "ETHTaipei can provide invitation letters for business visas.",

  visaAnswer2Part2: "If you need an invitation letter, please first fill ",
  form: "this form",
  visaAnswer2Part3: ", and contact us via ",
  telegram: "Telegram",
  visaAnswer2Part4: ". We'll get back to you within a week.",
};

const goldcard = {
  goldcardTitle: "Taiwan Gold Card",
  goldcardIntro_1:
    "The 4-in-1 Card: Work Visa + Residence Permit + Alien Resident Certificate + Re-entry Permit",
  goldcardIntro_2:
    "With Airfare and Accommodation Incentives for Digital-Industry Exchanges",
  goldcardSubtitle: "Next Stop, Taiwan! Your Home in Asia.",
  goldcard1on1BtnText: "Get 1:1 Help with your Gold Card Application",

  goldcardSubsidyTitle: `For Gold Card holders working in the digital economy from now until October ${year}`,
  goldcardSubsidySubtitle:
    "Receive a $1300 - $2750 USD  travel incentive to Taiwan for industry exchange",
  goldcardSubsidyDesc:
    // "A qualifying trip may include exhibiting, speaking, or participating in the hackathon during ETHTaipei!",
    "A qualifying trip may include exhibiting or speaking during ETHTaipei!",
  goldcardSubsidyOrganization_1: "Organized by the ",
  goldcardSubsidyOrganization_2: "Administration of Digital Industries (moda)",
  goldcardSubsidyOrganization_3: " and ",
  goldcardSubsidyOrganization_4: "Taipei Computer Association",
  goldcardSubsidyApplyBtn: "Apply for Subsidy",
  goldcardSubsidyGuidelines: "Official Terms, Conditions, and Guidelines",
  goldcardSubsidyPressRelease: "Press Release",

  goldcardApplicationTitle: "DIGI Gold Card Community",
  goldcardApplicationDesc_1:
    "In May 2023, the Taiwan Ministry of Digital Affairs announced a new category for Gold Card applicants to attract international talent in the Digital Economy. This new category has new qualification criteria tailored towards those working at startups and in emerging technology.",
  goldcardApplicationDesc_2:
    "Applicants must fulfill at least one of the following requirements:",
  goldcardApplicationDesc_Item1:
    "8 years of relevant experience in the digital economy fields",
  goldcardApplicationDesc_Item2:
    "Currently or previously hold a job in the digital economy fields with salary of at least NT $160,000 (~$5,000 USD) per month",
  goldcardApplicationDesc_Item3:
    "Has a doctorate degree from one of the top 500 universities in the world",
  goldcardApplicationDesc_Item4:
    "Has expertise in the digital field, a doctorate degree, and 4 years of relevant professional experience",
  goldcardApplicationLearnMore_1: "Learn more in ",
  goldcardApplicationLearnMore_2: "English",
  goldcardApplicationLearnMore_3: " or ",
  goldcardApplicationLearnMore_4: "Chinese",
  goldcardApplyBtn: "Apply for Gold Card",

  goldcardFAQTitle: "FAQ",
  goldcardFAQQuestion1: "Why Gold Card?",
  goldcardFAQAnswer1_1:
    "The Gold Card is an Alien Residence Certificate that grants the holder the right to freely work for any employer in Taiwan or abroad and live in Taiwan for up to 3 years. The card also grants unlimited re-entries into Taiwan.",
  goldcardFAQAnswer1_2: "Some other benefits include:",
  goldcardFAQAnswer1_2_1: "Access to National Health Insurance",
  goldcardFAQAnswer1_2_2:
    "Reduced income taxes in Taiwan for the first 5 years",
  goldcardFAQAnswer1_2_3: "Ability to lease and own property in Taiwan",
  goldcardFAQAnswer1_2_4: "Resident visas for immediate family members",
  goldcardFAQAnswer1_2_5: "Ability to open a Taiwanese bank account",
  goldcardFAQAnswer1_2_6: "E-Gate and special immigration lanes at the airport",
  goldcardFAQAnswer1_2_7:
    "A Taiwanese identity card and ID number to sign up for various services",
  goldcardFAQAnswer1_3:
    "These benefits may still be useful for people who do not wish to permanently reside in Taiwan but might often travel to Taiwan.",

  goldcardFAQQuestion2: "What are the qualification requirements?",
  goldcardFAQAnswer2_1:
    "There are a many different professional fields for which applicants can qualify for including sports, law, art, finance, and more in addition to the digital field. Please see the official website for more details about ",
  goldcardFAQAnswer2_2: "qualification requirements",
  goldcardFAQAnswer2_3: ".",

  goldcardFAQQuestion3: "How long does the process take?",
  goldcardFAQAnswer3_1:
    "In general, the process takes about 4-8 weeks from initial application to approval. For overseas applications, your passport will have to be inspected by the Bureau of Consular Affairs or an ROC overseas mission/office. If you need to expedite the application process for a smooth entry to Taiwan during ETHTaipei, please contact the Gold Card team below to confirm the relevant procedures.",

  goldcardFAQQuestion4: "How much does the Gold Card cost?",
  goldcardFAQAnswer4_1:
    "The cost is dependent on country of citizenship and duration of the Gold Card. For US Citizens, the cost is NT $7,235-9,235 ($250-300 USD). For residents of Hong Kong and Macau, the price is NT $3,100 ($750 HKD). For everyone else, the cost is NT $3,700-5,700 ($100-200 USD).",
  goldcardFAQAnswer4_2: "Refer to the",
  goldcardFAQAnswer4_3:
    "Gold Card application information page for more details",

  goldcardFAQQuestion5: "Who can I contact about the Gold Card?",
  goldcardFAQAnswer5_1: "LinkedIn:",
  goldcardFAQAnswer5_2: "DIGI Gold Card Community",
  goldcardFAQAnswer5_3: "Gold Card Questions:",
  goldcardFAQAnswer5_4: "Contact here",
  goldcardFAQAnswer5_5: "hello@digigoldcard.tw",

  goldcardFAQQuestion6: "How do I get this industry exchange travel subsidy?",
  goldcardFAQAnswer6_1:
    "An application for the subsidy must be submitted 15 days before the start of the business trip and may take up to a week for approval. Documentation for reimbursement includes flight boarding passes, receipts, and invoices.",
  goldcardFAQAnswer6_2:
    "For hotel and other expenses incurred in Taiwan, the expenses must be paid directly to the hotel or to a Taiwanese travel agency and not via a foreign agency or platform. The Tax ID 04170821 (Taipei Computer Association) must be applied to the receipt.",
  goldcardFAQAnswer6_3:
    "Other eligible expenses for reimbursement includes SIM cards, exhibition and expo tickets, or public transportation.",
  goldcardFAQAnswer6_4:
    "All expenses paid to foreign platforms or without the Tax ID will incur a 20% tax from the reimbursed amount.",
  goldcardFAQAnswer6_5:
    "For new Gold Card applicants, you will receive the Gold Card UI Number in your approval email. You may apply for the travel subsidy using your application number while your Gold Card application is processing.",
  goldcardFAQAnswer6_6: "Refer to the",
  goldcardFAQAnswer6_7: "subsidy application guidelines",
  goldcardFAQAnswer6_8: " and ",
  goldcardFAQAnswer6_9: "press release",
  goldcardFAQAnswer6_10: " for more detail",
};

const t = {
  common,
  homepage,
  navs,
  participation,
  visa,
  goldcard,
  sponsorHighlight,
};

export default t;
