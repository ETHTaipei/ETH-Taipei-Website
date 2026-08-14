export const year = "2026";
export const month = "September";
export const dateDayMonthYear = `SEP 13–14, ${year}`;

/* ------------------------------------------------------------------ *
 * English dictionary (source of truth for the key shape)
 * ------------------------------------------------------------------ */

const enCommon = {
  ethTaipei: `ETHTaipei ${year} | ${dateDayMonthYear}`,
  ethTaipeiIntro: `Welcome to ETHTaipei ${year} event held in Taiwan. With a thriving Ethereum and developer community in Taiwan, ETHTaipei ${year} brings together teams from around the world to participate in a 2-day conference focusing on the application and technology of Ethereum.`,
};

const enHomepage = {
  callToActionTitle: "Let's Buidl ETHTaipei together!",
  callToActionText:
    "ETHTaipei is hosted by the local ETH community, and we'd love to see more participants and different parties getting involved! If you have great ideas, resources, wanna host cool side events, make sure to click the Apply buttons and reach out to us through social links!",
  speakers: `${year} Speakers`,
  speakersSubtitle: "Get Ready for their expert insights!",
  beASpeaker: "Be a Speaker",
  beASponsor: "Be a Sponsor",
  venue: "The Venue",
  venueSubtitle: "POPOP Taipei · Nangang, Taipei",
  venueName: "POPOP Taipei",
  venueDescription:
    "Popop Taipei is a trending event space known for its unique atmosphere. The venue features a spacious layout and modern amenities, making it an ideal choice for hosting conferences, workshops, and social gatherings.",
  venueAddress:
    "No. 13, Section 2, Nangang Rd, Nangang District, Taipei City, 115",
  partners: "Partners",
  partnersDesc: "Stronger Together in the Ethereum Ecosystem!",
  studentClubs: "University Clubs",
  studentClubsDesc:
    "Connecting Campuses and Growing the Next Generation of Ethereum Builders.",
  organizers: "Organizers",
  organizerSubtitle: "The team that makes ETHTaipei happen!",
  communitySupport: "Community Support",
  communitySupportSubtitle: "Support from ETH Community!",
  openingAndKeynote: "Opening / Keynote Speaker",
  mediaPartners: "Media Partners",
  mediaPartnersDesc: "Bringing Web3 Stories to the World!",
  sponsors: `Sponsors`,
  sponsorSubtitle: "Backing the builders shaping Ethereum in Taiwan.",

  bannerTitle_1: "ETH",
  bannerTitle_2: "Taipei",
  bannerTitle_3: `${year}`,
  bannerSubTitle: "The annual blockchain event in Taiwan",
  bannerInfoTitle_1: "Conference",
  bannerInfoDesc_1: dateDayMonthYear,
  bannerInfoTitle_2_1: "Side Events",
  bannerInfoDesc_2_1: "Coming soon",
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

  eventTitle: `ETHTaipei ${year} Events`,
  eventSubTitle: "From Deep Dives to Fun Vibes – Experience It All!",
  eventName_1: "Conference",
  eventDesc_1:
    "Two days of talks and discussions with Ethereum researchers, builders, and industry leaders. Tracks and session details will be announced soon.",
  eventDate_1: dateDayMonthYear,
  eventBtn_1: "Request Ticket",
  eventName_3: "Side Events",
  eventDesc_3:
    "Get ready for an extra dose of fun at ETHTaipei! While the main conference takes center stage, don't forget to dive into our amazing side events! Join us for a relaxed and enjoyable time, where you can connect with fellow enthusiasts, learn cool new things, and make memories that'll last a lifetime. Don't miss out on the good vibes – come and be a part of the excitement at our side events! See you there!",
  eventDate_3: dateDayMonthYear,
  eventBtn_3: "See Events",
  eventName_4: "Community Events",
  eventDesc_4:
    "Join Taipei’s Ethereum community at our monthly TLDR and Featured Talk meetups. We also support COSCUP, Taipei Ethereum Meetup, and student builders at XueDAO—subscribe to stay updated.",
  eventDate_4: "every 1st & 3rd Wed",
  eventBtn_4: "Subscribe",

  eventName_5: "Closing Party",
  eventDesc_5:
    "This is a special closing dinner hosted by the ETHTaipei team. After two days of intense brainpower recharge, it's time to relax, unwind and hang out together :)",
  eventDate_5: "2nd April, 18:30",
  eventBtn_5: "RSVP !",

  recapTitle: "2023-2025 Recap",
  recapSubTitle: "Highlights from the unforgettable ETHTaipei!!",
  recapYoutubeCta: "Watch more on YouTube",
  recapViewMore: "Load More",
  recapHide: "Show Less",

  moreCommunityEventsSoon: "More community events coming soon",
};

// Strings baked into the 2026 hero (components/HomePage/Home2026.tsx).
const enHero = {
  eyebrow: "ETHTAIPEI.ORG · TAIWAN",
  callForSpeakers: "Call for Speakers",
  callForSpeakersDeadline: "Applications close Aug 20, 23:59 AoE",
  lede: "Two days where Taiwan's builders meet the global Ethereum stack, from core protocol research and DeFi to custody, real-world assets (RWA), and institutional-grade applications.",
  applyToSpeak: "Apply to Speak",
  requestTicket: "Request Ticket",
  sponsorInquiry: "Sponsor Inquiry",
  countdownDays: "Days",
  countdownHours: "Hours",
  countdownMins: "Mins",
  countdownSecs: "Secs",
  venueTag: "Venue",
  builderSignalLabel: "Builder signal",
  builderSignalText:
    "Protocol labs, L2 teams, wallet designers, ZK researchers, app founders, and local Taipei communities in one venue.",
  institutionSignalLabel: "Institution signal",
  institutionSignalText:
    "A dedicated day for banks and financial institutions — sessions and panels on custody and RWA, with closed-door discussion. Where enterprise meets the builders.",
  ticker: [
    "PROTOCOL RESEARCH",
    "ZK & PRIVACY",
    "WALLETS & ACCOUNT ABSTRACTION",
    "SECURITY",
    "DEFI & ONCHAIN FINANCE",
  ],
  nav: {
    home: "Home",
    agenda: "Agenda",
    speakers: "Speakers",
    events: "Events",
    apply: "Apply",
    venue: "Venue",
    community: "Community",
    visa: "Visa",
    about: "About",
    what: "What is ETHTaipei",
    recap: "Recap",
    sponsors: "Sponsors",
    partners: "Partners",
    tba: "TBA",
  },
};

const enNavs = {
  home: "Home",
  ticket: "Ticket",
  agenda: "Agenda",
  apply: "Apply",
  toSpeak: "to Speak",
  toSponsor: "to Sponsor",
  sideEvent: "Side Event",
  faq: "Info",
  goldcard: "Gold Card",
  visaInfo: "Visa Info",
  venue: "Venue",
  brand: "Brand",
  event: "Events",
  community: "Community",
};

const enCommunity = {
  title: "Community",
  subtitle: "Ethereum in Taipei is alive all year round",
  intro1: `ETHTaipei is the annual flagship gathering, but it is only one chapter of a much bigger story. Taiwan's Ethereum scene is one of the most active in Asia — grassroots, volunteer-driven, and deeply technical. Developers, researchers, students, and enthusiasts meet every month, publish technical writing, curate conference tracks, and onboard the next generation of builders.`,
  intro2: `This page gathers the communities, events, and publications that keep the ecosystem buzzing between conferences. Come say hi — everyone is welcome.`,

  meetupsTitle: "Monthly Meetups",
  meetupsIntro: `We host two regular meetups in Taipei every month, free and open to everyone:`,
  tldrName: "TLDR Meetup",
  tldrDate: "1st Wednesday of every month",
  tldrDesc: `Short, digestible sessions where community members break down what they have been reading and building — protocol changes, DeFi mechanisms, security incidents, and fresh research, summarized so you don't have to read everything yourself.`,
  featuredName: "Featured Talk Meetup",
  featuredDate: "3rd Wednesday of every month",
  featuredDesc: `A deeper technical session with invited speakers from the local and international Ethereum community — the same spirit as the talks on the ETHTaipei stage, all year round.`,
  meetupsOutro1: `Want to join us? `,
  meetupsSubscribe: "Subscribe on Luma",
  meetupsOutro2: ` to get notified about every upcoming meetup, and browse the calendar for what we've hosted before.`,

  coscupTitle: "COSCUP — Blockchain & Distributed Ledger Track",
  coscupDesc1: `Every summer, the community also curates the Blockchain and Distributed Ledger track at `,
  coscupLink: "COSCUP",
  coscupDesc2: `, Asia's largest open-source community conference, held annually in Taipei. COSCUP is free to attend and entirely community-organized — a natural home for Ethereum in Taiwan, where the open-source movement and the blockchain community have always grown side by side.`,

  mediumTitle: "Taipei Ethereum Meetup — Medium Column",
  mediumDesc1: `Running since 2016, Taipei Ethereum Meetup is one of Taiwan's earliest and most enduring Ethereum communities, and its `,
  mediumLink: "Medium column",
  mediumDesc2: ` has grown into a library of technical writing in Chinese and English: protocol deep dives, EIP explainers, meetup recaps, and research summaries contributed by the community.`,
  mediumLatest: "Latest articles",

  newsletterTitle: "Newsletter",
  newsletterDesc1: `Can't make it in person? The `,
  newsletterName: "ETHTaipei x TEM newsletter",
  newsletterDesc2: ` collects the materials shared at each meetup, plus additional technical articles and ecosystem news — a monthly snapshot of what the Taipei community is reading, building, and debating.`,
  newsletterLatest: "Latest issues",
  newsletterSubscribe: "Subscribe to the newsletter",

  coverageTitle: "Featured by Local Ethereum",
  coverageDesc: `Taiwan's ecosystem has also caught international attention — Local Ethereum, the publication mapping Ethereum communities around the world, profiled our scene in depth:`,
  coverageCardSource: "Local Ethereum · March 2026",
  coverageCardTitle: "Taiwan Ethereum Ecosystem Overview",
  coverageCardBody: `A deep dive into Taiwan's grassroots communities, builders, developer talent, and digital-democracy culture — and why its Ethereum scene stands out for its community ownership and volunteer spirit rather than corporate dominance.`,
  coverageCardCta: "Read the full article →",

  xuedaoTitle: "XueDAO",
  xuedaoDesc1: `The community here is bigger than any single organization. `,
  xuedaoLink: "XueDAO",
  xuedaoDesc2: ` is Taiwan's first student-led developer community, on a mission to show the world that Taiwanese students can BUIDL. With contributors from 12+ universities, XueDAO runs study groups, networking events, and the student-only XueDAO CONNECT hackathon — the on-ramp for the next generation of Taiwanese builders.`,

  thanksTitle: "Thank You",
  thanksDesc1: `These year-round community programs are made possible by the generous support of the `,
  thanksEF: "Ethereum Foundation",
  thanksDesc2: ` and `,
  thanksGeode: "Geode Labs",
  thanksDesc3: ` — a spin-out of the Ethereum Foundation dedicated to growing local Ethereum ecosystems around the world, and the team behind Local Ethereum. Thank you for helping the Taipei community thrive.`,
};

const enCallToAction = {
  applyToSpeak: "Apply to Speak",
  applyToSponsor: "Apply to Sponsor",
  addSideEvent: "Add Side Event",
};

const enVisa = {
  eyebrow: "ETHTAIPEI · TRAVEL INFO",
  titleMain: "Visa",
  titleAccent: "Info",
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

const en = {
  common: enCommon,
  homepage: enHomepage,
  hero: enHero,
  navs: enNavs,
  callToAction: enCallToAction,
  visa: enVisa,
  community: enCommunity,
};

export type Dictionary = typeof en;

/* ------------------------------------------------------------------ *
 * Traditional Chinese dictionary
 * (machine-drafted — review before treating as final copy)
 * ------------------------------------------------------------------ */

const zhCommon: Dictionary["common"] = {
  ethTaipei: `ETHTaipei ${year} | ${dateDayMonthYear}`,
  ethTaipeiIntro: `歡迎來到在台灣舉辦的 ETHTaipei ${year}。台灣擁有蓬勃的以太坊與開發者社群，ETHTaipei ${year} 匯聚來自世界各地的團隊，參與這場聚焦以太坊應用與技術的兩天大會。`,
};

const zhHomepage: Dictionary["homepage"] = {
  callToActionTitle: "一起 BUIDL ETHTaipei！",
  callToActionText:
    "ETHTaipei 由在地以太坊社群共同舉辦，我們期待更多夥伴與不同角色一同參與！如果你有很棒的點子、資源，或想舉辦有趣的周邊活動，記得點擊 Apply 按鈕，並透過社群連結與我們聯繫！",
  speakers: `${year} 講者`,
  speakersSubtitle: "準備好迎接他們的專業洞見！",
  beASpeaker: "成為講者",
  beASponsor: "成為贊助商",
  venue: "活動場地",
  venueSubtitle: "POPOP Taipei・台北南港",
  venueName: "POPOP Taipei",
  venueDescription:
    "POPOP Taipei 是備受矚目的活動空間，以獨特的氛圍聞名。場地寬敞、設備現代，是舉辦大會、工作坊與社交聚會的理想選擇。",
  venueAddress: "115 台北市南港區南港路二段 13 號",
  partners: "合作夥伴",
  partnersDesc: "在以太坊生態中攜手同行，一起更強大！",
  studentClubs: "校園社團",
  studentClubsDesc: "串連校園社群，培育下一代以太坊 Builder！",
  organizers: "主辦團隊",
  organizerSubtitle: "讓 ETHTaipei 成真的團隊！",
  communitySupport: "社群支持",
  communitySupportSubtitle: "來自以太坊社群的支持！",
  openingAndKeynote: "開場 / 主題演講",
  mediaPartners: "媒體夥伴",
  mediaPartnersDesc: "把 Web3 的故事帶向世界！",
  sponsors: "贊助商",
  sponsorSubtitle: "支持台灣 Ethereum 生態持續成長的夥伴。",

  bannerTitle_1: "ETH",
  bannerTitle_2: "Taipei",
  bannerTitle_3: `${year}`,
  bannerSubTitle: "台灣年度區塊鏈盛會",
  bannerInfoTitle_1: "大會",
  bannerInfoDesc_1: dateDayMonthYear,
  bannerInfoTitle_2_1: "周邊活動",
  bannerInfoDesc_2_1: "即將公布",
  bannerInfoTitle_3: "POPOP Taipei",
  bannerInfoDesc_3: "台北市南港區南港路二段 13 號",

  introductionTitle: "什麼是 ETHTaipei？",
  introductionSubtitle: "開發者、夢想家與創新者交會之處。",
  introductionCardTitle_1: "專家洞見與實作體驗",
  introductionCardDesc_1:
    "在 ETHTaipei，你將聽見知名專家、學者與產業領袖分享以太坊的最新趨勢與應用。除了演講，你還能參與實作工作坊與周邊活動，在與其他與會者交流、協作的同時，獲得獨一無二的體驗。",
  introductionCardTitle_2: "連結全球，聚焦台灣",
  introductionCardDesc_2:
    "ETHTaipei 匯聚來自世界各地、專注於以太坊的團隊，凝聚在地的以太坊與開發者社群，讓台灣成為以太坊生態中充滿活力的樞紐，也為台灣的開發者與團隊提供與全球社群連結、提升能見度的舞台。",
  introductionCardTitle_3: "學習與協作的前沿平台",
  introductionCardDesc_3_1:
    "ETHTaipei 提供無可比擬的機會，讓你探索最前沿的以太坊技術與應用，並與台灣在地社群連結。我們期待你的參與，一起打造並推進以太坊！",

  eventTitle: `ETHTaipei ${year} 活動`,
  eventSubTitle: "從硬核深談到歡樂氛圍，一次體驗！",
  eventName_1: "大會",
  eventDesc_1:
    "兩天與以太坊研究者、開發者與產業領袖的演講與討論。議程與場次細節將盡快公布。",
  eventDate_1: dateDayMonthYear,
  eventBtn_1: "申請票券",
  eventName_3: "周邊活動",
  eventDesc_3:
    "在 ETHTaipei，準備好迎接更多樂趣！主會議是舞台焦點，但別忘了投入我們精彩的周邊活動！和同好們一起輕鬆同樂、學習新知，留下難忘回憶。別錯過這份好氛圍——快來一起加入周邊活動的熱鬧！我們在那裡見！",
  eventDate_3: dateDayMonthYear,
  eventBtn_3: "查看活動",
  eventName_4: "社群活動",
  eventDesc_4:
    "加入台北以太坊社群每月的 TLDR 與 Featured Talk 聚會。我們也支持 COSCUP、Taipei Ethereum Meetup 與 XueDAO 的學生開發者——訂閱以掌握最新消息。",
  eventDate_4: "每月第一、三個週三",
  eventBtn_4: "訂閱",

  eventName_5: "閉幕派對",
  eventDesc_5:
    "這是由 ETHTaipei 團隊舉辦的特別閉幕晚宴。經過兩天密集的腦力激盪後，是時候放鬆、充電，一起同樂 :)",
  eventDate_5: "4 月 2 日 18:30",
  eventBtn_5: "報名 !",

  recapTitle: "2023-2025 回顧",
  recapSubTitle: "難忘 ETHTaipei 的精彩回顧！！",
  recapYoutubeCta: "到 YouTube 看更多回顧",
  recapViewMore: "載入更多",
  recapHide: "收合",

  moreCommunityEventsSoon: "更多社群活動即將公布",
};

const zhHero: Dictionary["hero"] = {
  eyebrow: "ETHTAIPEI.ORG · 台灣",
  callForSpeakers: "講者徵求",
  callForSpeakersDeadline: "申請截止：8 月 20 日 23:59 AoE",
  lede: "為期兩天，台灣開發者與全球以太坊技術棧接軌——從核心協議研究、DeFi，到資產託管、真實世界資產（RWA）與機構級應用。",
  applyToSpeak: "講者申請",
  requestTicket: "申請票券",
  sponsorInquiry: "贊助洽詢",
  countdownDays: "天",
  countdownHours: "時",
  countdownMins: "分",
  countdownSecs: "秒",
  venueTag: "場地",
  builderSignalLabel: "開發者亮點",
  builderSignalText:
    "各大協議核心開發實驗室、L2 團隊、錢包設計者、ZK 研究者、去中心化應用程式創辦人，以及台北在地社群，齊聚一堂。",
  institutionSignalLabel: "機構亮點",
  institutionSignalText:
    "為銀行與金融機構打造的專屬一天——保管與 RWA 的演講與座談，以及閉門討論。企業與開發者交會之處。",
  ticker: [
    "協議研究",
    "ZK 與隱私",
    "錢包與帳戶抽象",
    "資安",
    "DeFi 與鏈上金融",
  ],
  nav: {
    home: "首頁",
    agenda: "議程",
    speakers: "講者",
    events: "活動",
    apply: "申請",
    venue: "場地",
    community: "社群",
    visa: "簽證",
    about: "關於",
    what: "什麼是 ETHTaipei",
    recap: "活動回顧",
    sponsors: "贊助商",
    partners: "合作夥伴",
    tba: "即將公布",
  },
};

const zhNavs: Dictionary["navs"] = {
  home: "首頁",
  ticket: "票券",
  agenda: "議程",
  apply: "申請",
  toSpeak: "演講",
  toSponsor: "贊助",
  sideEvent: "周邊活動",
  faq: "資訊",
  goldcard: "就業金卡",
  visaInfo: "簽證資訊",
  venue: "場地",
  brand: "品牌",
  event: "活動",
  community: "社群",
};

const zhCommunity: Dictionary["community"] = {
  title: "社群",
  subtitle: "台北的以太坊，全年不打烊",
  intro1:
    "ETHTaipei 是每年的旗艦盛會，但它只是更大故事中的一個篇章。台灣的以太坊圈是亞洲最活躍的社群之一——草根、由志工驅動，且技術底蘊深厚。開發者、研究者、學生與愛好者每月聚會、發表技術文章、策劃會議議程，並帶領下一代開發者入門。",
  intro2:
    "這個頁面匯集了在會議之間讓生態持續熱絡的社群、活動與出版物。來打聲招呼吧——歡迎每一個人。",

  meetupsTitle: "每月聚會",
  meetupsIntro: "我們每月在台北舉辦兩場固定聚會，免費且開放給所有人：",
  tldrName: "TLDR Meetup",
  tldrDate: "每月第一個週三",
  tldrDesc:
    "簡短、好消化的分享，社群成員在此拆解他們最近閱讀與打造的內容——協議變更、DeFi 機制、資安事件與最新研究，替你整理好重點，讓你不必自己讀完所有東西。",
  featuredName: "Featured Talk Meetup",
  featuredDate: "每月第三個週三",
  featuredDesc:
    "更深入的技術場次，邀請來自在地與國際以太坊社群的講者——與 ETHTaipei 舞台上相同的精神，全年不間斷。",
  meetupsOutro1: "想加入我們嗎？",
  meetupsSubscribe: "在 Luma 訂閱",
  meetupsOutro2:
    " 以掌握每場即將到來的聚會，也可以瀏覽行事曆看看我們過去舉辦過的活動。",

  coscupTitle: "COSCUP — 區塊鏈與分散式帳本議程",
  coscupDesc1: "每年夏天，社群也會在 ",
  coscupLink: "COSCUP",
  coscupDesc2:
    " 策劃區塊鏈與分散式帳本議程。COSCUP 是亞洲最大的開源社群會議，每年於台北舉辦，免費參加、完全由社群籌辦——是以太坊在台灣的自然歸屬，開源運動與區塊鏈社群一直在此並肩成長。",

  mediumTitle: "Taipei Ethereum Meetup — Medium 專欄",
  mediumDesc1:
    "自 2016 年營運至今，Taipei Ethereum Meetup 是台灣最早、也最持久的以太坊社群之一，其 ",
  mediumLink: "Medium 專欄",
  mediumDesc2:
    " 已成長為一座中英文技術寫作的資料庫：協議深入解析、EIP 解說、聚會回顧，以及社群貢獻的研究摘要。",
  mediumLatest: "最新文章",

  newsletterTitle: "電子報",
  newsletterDesc1: "無法親自到場嗎？",
  newsletterName: "ETHTaipei x TEM 電子報",
  newsletterDesc2:
    " 收錄每場聚會分享的資料，以及額外的技術文章與生態新聞——每月一覽台北社群正在閱讀、打造與討論的內容。",
  newsletterLatest: "最新期數",
  newsletterSubscribe: "訂閱電子報",

  coverageTitle: "獲 Local Ethereum 專題報導",
  coverageDesc:
    "台灣的生態也吸引了國際目光——描繪全球以太坊社群的出版物 Local Ethereum 深入報導了我們的圈子：",
  coverageCardSource: "Local Ethereum · 2026 年 3 月",
  coverageCardTitle: "台灣以太坊生態總覽",
  coverageCardBody:
    "深入探討台灣的草根社群、開發者、開發人才與數位民主文化——以及為何它的以太坊圈以社群共有與志工精神脫穎而出，而非由企業主導。",
  coverageCardCta: "閱讀完整文章 →",

  xuedaoTitle: "XueDAO",
  xuedaoDesc1: "這裡的社群大於任何單一組織。",
  xuedaoLink: "XueDAO",
  xuedaoDesc2:
    " 是台灣第一個學生主導的開發者社群，致力於向世界證明台灣學生也能 BUIDL。成員來自 12 所以上的大學，XueDAO 舉辦讀書會、交流活動，以及僅限學生參加的 XueDAO CONNECT 黑客松——是下一代台灣開發者的入門起點。",

  thanksTitle: "感謝",
  thanksDesc1: "這些全年的社群計畫得以實現，要感謝 ",
  thanksEF: "以太坊基金會",
  thanksDesc2: " 與 ",
  thanksGeode: "Geode Labs",
  thanksDesc3:
    " 的慷慨支持——Geode Labs 是以太坊基金會的分支，致力於在世界各地培育在地以太坊生態，也是 Local Ethereum 背後的團隊。感謝你們幫助台北社群蓬勃發展。",
};

const zhCallToAction: Dictionary["callToAction"] = {
  applyToSpeak: "講者申請",
  applyToSponsor: "申請贊助",
  addSideEvent: "新增周邊活動",
};

const zhVisa: Dictionary["visa"] = {
  eyebrow: "ETHTAIPEI · 旅遊資訊",
  titleMain: "簽證",
  titleAccent: "資訊",
  visaQuestion1: "入境台灣需要簽證嗎？",
  visaAnswer1Part1:
    "台灣對 65 個國家的旅客提供 14–90 天的免簽證待遇。更多細節請參閱",
  BureauOfConsularAffairs: "外交部領事事務局網站",
  visaAnswer1Part2: "。",
  visaQuestion2: "如果我需要簽證怎麼辦？",
  visaAnswer2Part1: "ETHTaipei 可以為商務簽證提供邀請函。",
  visaAnswer2Part2: "如果你需要邀請函，請先填寫",
  form: "此表單",
  visaAnswer2Part3: "，並透過",
  telegram: "Telegram",
  visaAnswer2Part4: "與我們聯繫。我們會在一週內回覆你。",
};

const zhHant: Dictionary = {
  common: zhCommon,
  homepage: zhHomepage,
  hero: zhHero,
  navs: zhNavs,
  callToAction: zhCallToAction,
  visa: zhVisa,
  community: zhCommunity,
};

/* ------------------------------------------------------------------ *
 * Exports
 * ------------------------------------------------------------------ */

export const dictionaries = {
  en,
  "zh-Hant": zhHant,
};

export type Locale = keyof typeof dictionaries;

// Default export stays English so non-reactive / SSR usages (e.g. <head>
// metadata) keep working. Reactive components read the active locale via
// useT() from the language context.
const t = en;

export default t;
