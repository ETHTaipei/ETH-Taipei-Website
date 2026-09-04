import Header2026 from "@/components/Layout/Header2026";
import type { CfpPhase } from "@/components/hooks/useCfpPhase";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/public/constant/content";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import homeStyles from "@/components/HomePage/Home2026.module.css";
import styles from "./AgendaPage2026.module.css";

type AgendaText = Record<Locale, string>;
type DayId = "day1" | "day2";

const COMMUNITY_SPACE_URL = "https://luma.com/esvhpmmf?tk=bw2zRv";
const DAY_2_DEFAULT_FROM = Date.parse("2026-09-13T18:00:00+08:00");

const text = (en: string, zhHant: string): AgendaText => ({
  en,
  "zh-Hant": zhHant,
});

const localize = (value: AgendaText | string, locale: Locale) =>
  typeof value === "string" ? value : value[locale];

const TIME_RANGE = /^(\d{1,2}:\d{2})[–-](\d{1,2}:\d{2})$/;

const getSlotDurationMinutes = (
  value: AgendaText | string,
  locale: Locale,
) => {
  const match = localize(value, locale).match(TIME_RANGE);

  if (!match) return null;

  const [startHour, startMinute] = match[1].split(":");
  const [endHour, endMinute] = match[2].split(":");
  const start = Number(startHour) * 60 + Number(startMinute);
  const end = Number(endHour) * 60 + Number(endMinute);

  return end >= start ? end - start : end + 24 * 60 - start;
};

// Label for a session that runs past its own row: its own start to the end of
// the last row it covers, plus the real total. A forum talk over two 15-minute
// rows becomes "11:30–12:00 · 30 mins"; a workshop over five rows becomes
// "13:00–15:00 · 120 mins".
//
// The rows it covers are the consecutive ones flagged as continuations of the
// same column, which is what the renderer uses to leave those cells empty — so
// the label and the drawn block can't disagree.
const getSpanLabel = (
  rows: AgendaRow[],
  index: number,
  continuationKey: "forumContinuation" | "workshopContinuation",
  locale: Locale,
) => {
  const start = localize(rows[index].time, locale).match(TIME_RANGE);
  if (!start) return undefined;

  let last = index;
  let minutes = getSlotDurationMinutes(rows[index].time, locale) ?? 0;
  while (rows[last + 1]?.[continuationKey]) {
    last += 1;
    minutes += getSlotDurationMinutes(rows[last].time, locale) ?? 0;
  }
  if (!minutes) return undefined;

  const end = localize(rows[last].time, locale).match(TIME_RANGE)?.[2];
  const unit = locale === "zh-Hant" ? "分鐘" : "mins";
  return `${start[1]}–${end ?? start[2]} · ${minutes} ${unit}`;
};

type Speaker = {
  name?: string;
  localizedName?: AgendaText;
  alias?: string;
  avatar?: string;
  jobTitle?: AgendaText;
  organization?: AgendaText;
  role?: AgendaText;
  isModerator?: boolean;
  status?: "confirmed" | "pending";
};

type Session = {
  format?: AgendaText;
  title?: AgendaText;
  titleStatus?: "pending";
  speakers?: Speaker[];
};

type AgendaRow = {
  time: AgendaText | string;
  dateTime: string;
  main?: Session;
  mainColSpan?: boolean;
  forum?: Session;
  /**
   * This forum session runs across two rows. Pair it with `forumContinuation`
   * on the next row, which must not set `forum` of its own.
   */
  forumContinues?: boolean;
  shared?: Session;
  intermission?: {
    icon: string;
    title: AgendaText;
    activity?: {
      label: AgendaText;
      title: AgendaText;
      cta: AgendaText;
      href: string;
    };
  };
  transition?: AgendaText;
  mainTransition?: AgendaText;
  forumTransition?: AgendaText;
  /**
   * Set on the row a `forumContinues` session extends into. Each `.agendaRow`
   * is its own CSS grid, so a cell cannot span rows the way rowSpan would in a
   * real table: the span is drawn as a borderless cell here plus this empty
   * twin below it. Must be paired with `forumContinues` on the row above.
   */
  forumContinuation?: boolean;
  /** Third stage column. Its presence anywhere in a day adds the column. */
  workshop?: Session;
  /** Same span mechanism as `forumContinues`, but over any number of rows. */
  workshopContinues?: boolean;
  workshopContinuation?: boolean;
};

const UI_COPY: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    taiwanLogoAlt: string;
    scheduleNotice: string;
    timeHeader: string;
    dayTabsLabel: string;
    pendingSpeaker: string;
    moreSpeakersPending: string;
    detailSeparator: string;
    openParen: string;
    closeParen: string;
    labelSeparator: string;
  }
> = {
  en: {
    metaTitle: "ETHTaipei 2026 | Agenda",
    metaDescription: "ETHTaipei 2026 two-day conference schedule",
    eyebrow: "ETHTAIPEI 2026 · AGENDA",
    taiwanLogoAlt: "Outline of Taiwan",
    scheduleNotice:
      "Schedule times are tentative and subject to change. Please refer to the latest announcement.",
    timeHeader: "Time",
    dayTabsLabel: "Choose an agenda day",
    pendingSpeaker: "Speaker to be announced",
    moreSpeakersPending: "TBA",
    detailSeparator: ", ",
    openParen: " (",
    closeParen: ")",
    labelSeparator: " | ",
  },
  "zh-Hant": {
    metaTitle: "ETHTaipei 2026｜議程",
    metaDescription: "ETHTaipei 2026 兩日大會議程",
    eyebrow: "ETHTAIPEI 2026 · AGENDA",
    taiwanLogoAlt: "台灣本島白色輪廓",
    scheduleNotice:
      "議程時間暫定，主辦單位將視實際情況調整，請以最新公告為準。",
    timeHeader: "時間",
    dayTabsLabel: "選擇議程日期",
    pendingSpeaker: "講者即將公布",
    moreSpeakersPending: "TBA",
    detailSeparator: "・",
    openParen: "（",
    closeParen: "）",
    labelSeparator: "｜",
  },
};

const DAY_COPY: Record<
  DayId,
  Record<
    Locale,
    {
      tabDate: string;
      tabName: string;
      title: string;
      eventDate: string;
      dateISO: string;
      scheduleLabel: string;
      sectionLabel: string;
      caption: string;
      mainStage: string;
      forumStage: string;
      /** Third stage column. Only days that schedule one set this. */
      workshopStage?: string;
      sharedStage: string;
    }
  >
> = {
  day1: {
    en: {
      tabDate: "SEP 13 · DAY 1",
      tabName: "Cryptonative Day",
      title: "Cryptonative Day",
      eventDate: "September 13, 2026",
      dateISO: "2026-09-13",
      scheduleLabel: "Day 1 Schedule",
      sectionLabel: "Cryptonative Day schedule",
      caption: "ETHTaipei 2026 Cryptonative Day schedule",
      mainStage: "Genesis Stage (Building M)",
      forumStage: "Consensus Stage (Building A2)",
      workshopStage: "Catalyst Workshop (Building G)",
      sharedStage: "Both stages",
    },
    "zh-Hant": {
      tabDate: "9 月 13 日 · DAY 1",
      tabName: "開發者日",
      title: "開發者日",
      eventDate: "2026 年 9 月 13 日",
      dateISO: "2026-09-13",
      scheduleLabel: "Day 1 議程",
      sectionLabel: "開發者日議程",
      caption: "ETHTaipei 2026 開發者日議程",
      mainStage: "Genesis Stage（M 棟）",
      forumStage: "Consensus Stage（A2 棟）",
      workshopStage: "Catalyst Workshop（G 棟）",
      sharedStage: "雙舞台共同議程",
    },
  },
  day2: {
    en: {
      tabDate: "SEP 14 · DAY 2",
      tabName: "Institution Day",
      title: "Institution Day",
      eventDate: "September 14, 2026",
      dateISO: "2026-09-14",
      scheduleLabel: "Day 2 Schedule",
      sectionLabel: "Institution Day schedule",
      caption: "ETHTaipei 2026 Institution Day schedule",
      mainStage: "Genesis Stage (Building M)",
      forumStage: "Consensus Stage (Building A2)",
      sharedStage: "Joint session",
    },
    "zh-Hant": {
      tabDate: "9 月 14 日 · DAY 2",
      tabName: "機構日",
      title: "機構日",
      eventDate: "2026 年 9 月 14 日",
      dateISO: "2026-09-14",
      scheduleLabel: "Day 2 議程",
      sectionLabel: "機構日議程",
      caption: "ETHTaipei 2026 機構日議程",
      mainStage: "Genesis Stage（M 棟）",
      forumStage: "Consensus Stage（A2 棟）",
      sharedStage: "共同議程",
    },
  },
};

type AgendaCopy = (typeof UI_COPY)[Locale] &
  (typeof DAY_COPY)[DayId][Locale];

const AGENDA_SPEAKER_AVATARS: Record<string, string> = {
  Aditya: "/images/speakers/aditya.jpg",
  "Alan Wu": "/images/speakers/alan-wu.jpg",
  "Alex Kuzmin": "/images/speakers/alex-kuzmin.jpg",
  "Alfred Lu": "/images/speakers/alfred-lu.png",
  Alice: "/images/speakers/alice.jpg",
  "Anton Cheng": "/images/speakers/anton-cheng.jpg",
  "Antonio Seveso": "/images/speakers/antonio-seveso.png",
  "CC Liang": "/images/speakers/cc-liang.png",
  "Clément Lesaege": "/images/speakers/clement-lesaege.jpg",
  "Benny_lada": "/images/speakers/benny-lada.png",
  "Denken Chen": "/images/speakers/denken-chen.png",
  "Devansh Mehta": "/images/speakers/devansh-mehta.jpg",
  "Hao Chen": "/images/speakers/hao-chen.jpg",
  Jatin: "/images/speakers/jatin.jpg",
  Martinet: "/images/speakers/martinet.jpg",
  "Matthew Keil": "/images/speakers/matthew-keil.png",
  Pol: "/images/speakers/pol-lanski.png",
  "Vitalik Buterin": "/images/speakers/vitalik.jpg",
  "Vivi Jeng": "/images/speakers/vivi-jeng.jpg",
  "Jamie Lin": "/images/speakers/jamie-lin.jpg",
  "陳念平 Neptune Chen": "/images/speakers/neptune-chen.jpg",
  Changwu: "/images/speakers/changwu.jpg",
  "Jeff Wen": "/images/speakers/jeff.jpg",
  Wayne: "/images/speakers/wayne.jpg",
  Taka: "/images/speakers/taka.jpg",
  "Reyer Chu": "/images/speakers/reyer-chu.jpg",
  "Ko-Wei (IOTA)": "/images/speakers/ko-wei.jpg",
  Benji: "/images/speakers/benji.jpg",
  Daniel: "/images/speakers/daniel.jpg",
  "Jason Kuo": "/images/speakers/jason-kuo.jpg",
  "陳鴻祺 Chris Chen": "/images/speakers/chris-chen.jpg",
  Oskar: "/images/speakers/oskar.jpg",
  Teagan: "/images/speakers/teagan.jpg",
  Ivan: "/images/speakers/ivan.jpg",
  "Jon Lin": "/images/speakers/jon-lin.jpg",
  Stamford: "/images/speakers/stamford.jpg",
  "Jason Lai": "/images/speakers/jason-lai.jpg",
  殷玉龍律師: "/images/speakers/alex-yin.jpg",
  "Ernie Ho": "/images/speakers/ernie-ho.jpg",
  "Andrew Wu 律師": "/images/speakers/andrew-wu.jpg",
  黃子庭律師: "/images/speakers/huang-tzu-ting.jpg",
};

const speakerSession = (
  name: string,
  organization?: string,
  alias?: string,
  format = text("Talk", "演講"),
  sessionTitle?: string,
): Session => ({
  format,
  title: sessionTitle
    ? text(sessionTitle, sessionTitle)
    : text("Topic to be announced", "講題即將公布"),
  ...(sessionTitle ? {} : { titleStatus: "pending" as const }),
  speakers: [
    {
      name,
      alias,
      avatar: AGENDA_SPEAKER_AVATARS[name],
      ...(organization
        ? { organization: text(organization, organization) }
        : {}),
    },
  ],
});

const DAY_1_AGENDA_ROWS: AgendaRow[] = [
  {
    time: "10:00–10:20",
    dateTime: "2026-09-13T10:00:00+08:00",
    main: {
      title: text("Opening", "開幕"),
    },
    forum: {
      title: text(
        "Live from Genesis Stage",
        "同步轉播 Genesis Stage",
      ),
    },
  },
  {
    time: "10:20–11:00",
    dateTime: "2026-09-13T10:20:00+08:00",
    mainColSpan: true,
    main: speakerSession(
      "Vitalik Buterin",
      "Ethereum Foundation",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "11:00–11:30",
    dateTime: "2026-09-13T11:00:00+08:00",
    main: speakerSession(
      "Martinet",
      "Quantstamp",
      undefined,
      text("Talk", "演講"),
      "Operational Security Workshop",
    ),
    forum: speakerSession(
      "Devansh Mehta",
      "Independent",
      undefined,
      text("Talk", "演講"),
      "Prediction Markets for Participatory Budgeting",
    ),
  },
  {
    time: "11:30–11:45",
    dateTime: "2026-09-13T11:30:00+08:00",
    main: speakerSession(
      "Matthew Keil",
      "ChainSafe",
      undefined,
      undefined,
      "The Root of Trust: A Case for Optimism in Ethereum's Future",
    ),
    forum: speakerSession(
      "CC Liang",
      "Independent",
      undefined,
      undefined,
      "The Weird Nature of Crypto Projects",
    ),
    forumContinues: true,
  },
  {
    time: "11:45–12:00",
    dateTime: "2026-09-13T11:45:00+08:00",
    main: speakerSession(
      "Hao Chen",
      "CertiK",
      undefined,
      undefined,
      "Beyond Finding Bugs: Proving DeFi Safe",
    ),
    forumContinuation: true,
  },
  {
    time: "12:00–13:00",
    dateTime: "2026-09-13T12:00:00+08:00",
    intermission: {
      icon: "🍽️",
      title: text("Lunch", "午餐時間"),
      activity: {
        label: text("Community Space", "COMMUNITY SPACE"),
        title: text(
          "Community meetups and networking (Building B)",
          "社群小聚與交流活動（B 棟）",
        ),
        cta: text("View details", "查看詳情"),
        href: COMMUNITY_SPACE_URL,
      },
    },
  },
  {
    time: "13:00–13:30",
    dateTime: "2026-09-13T13:00:00+08:00",
    // Runs to 15:00, i.e. through the four rows below — each of which carries
    // workshopContinuation so this cell reads as one block.
    workshop: {
      format: text("Workshop", "工作坊"),
      title: text("Topic to be announced", "講題即將公布"),
      titleStatus: "pending",
      speakers: [
        { name: "Vivi Jeng", organization: text("Independent", "獨立") },
        { name: "Denken Chen", organization: text("Independent", "獨立") },
      ],
    },
    workshopContinues: true,
    mainColSpan: true,
    main: speakerSession(
      "Vitalik Buterin",
      "Ethereum Foundation",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "13:30–14:00",
    dateTime: "2026-09-13T13:30:00+08:00",
    workshopContinuation: true,
    main: speakerSession(
      "Alan Wu",
      "Uniswap",
      undefined,
      text("Talk", "演講"),
      "Life of a Fill: How Market Makers Work on UniswapX",
    ),
    forum: speakerSession(
      "Alex Kuzmin",
      "Ethereum Foundation",
      undefined,
      text("Talk", "演講"),
      "The Other Post-Quantum Migration: Ethereum's ZK Application Layer",
    ),
  },
  {
    time: "14:00–14:15",
    dateTime: "2026-09-13T14:00:00+08:00",
    workshopContinuation: true,
    main: speakerSession(
      "Anton Cheng",
      "Morpho",
      undefined,
      undefined,
      "How to design contracts that institutions want",
    ),
    forum: speakerSession(
      "Jatin",
      "Canton",
      undefined,
      undefined,
      "Selective Disclosure Is the Missing Primitive for Global State Chains: The Quadrillion Dollar Unlock",
    ),
  },
  {
    time: "14:15–14:30",
    dateTime: "2026-09-13T14:15:00+08:00",
    workshopContinuation: true,
    main: speakerSession(
      "Danger",
      "Today in Defi",
      undefined,
      undefined,
      "Catching the Rug Before It Pulls: Using AI Proactively to Mitigate Risk for DeFi",
    ),
    forum: speakerSession(
      "Pol",
      "Dappnode",
      undefined,
      undefined,
      "The hack that broke Ethereum comes back to save it - The DAO Returns",
    ),
  },
  {
    time: "14:30–15:00",
    dateTime: "2026-09-13T14:30:00+08:00",
    workshopContinuation: true,
    main: speakerSession(
      "Antonio Seveso",
      "Fluidkey",
      undefined,
      text("Talk", "演講"),
      "Privacy on Chain: What Stealth Addresses Solve, and What’s Still Ahead",
    ),
    forum: speakerSession(
      "Clément Lesaege",
      "Seer/Kleros",
      undefined,
      text("Talk", "演講"),
      "From Event Markets to Information Finance",
    ),
  },
  {
    time: "15:00–15:15",
    dateTime: "2026-09-13T15:00:00+08:00",
    // Runs to 17:00, past the last stage session at 16:00.
    workshop: {
      format: text("Workshop", "工作坊"),
      title: text("Topic to be announced", "講題即將公布"),
      titleStatus: "pending",
      speakers: [
        { name: "Benny_lada", organization: text("Vyper", "Vyper") },
      ],
    },
    workshopContinues: true,
    main: speakerSession(
      "Aditya",
      "Polymarket",
      undefined,
      undefined,
      "Derive, don't store: rebuilding Polymarket's protocol from the conditional tokens up",
    ),
    forum: speakerSession("Ryan", "Independent"),
  },
  {
    time: "15:15–15:30",
    dateTime: "2026-09-13T15:15:00+08:00",
    workshopContinuation: true,
    main: speakerSession(
      "Eric Lee",
      "SigMarket",
      undefined,
      undefined,
      "Beyond x·y = k: Designing an AMM for Decentralized Prediction Markets",
    ),
    // Consensus Stage talk for this slot isn't announced yet — a placeholder
    // session (no speaker) rather than an empty cell.
    forum: {
      format: text("Talk", "演講"),
      title: text("Topic to be announced", "講題即將公布"),
      titleStatus: "pending",
    },
  },
  {
    time: "15:30–16:00",
    dateTime: "2026-09-13T15:30:00+08:00",
    workshopContinuation: true,
    main: speakerSession(
      "Alfred Lu",
      "imToken Labs",
      undefined,
      text("Talk", "演講"),
      "Assets First, Proofs Later: Building Verifiable Cross-Chain Intents with OIF",
    ),
    forum: speakerSession(
      "Alice",
      "OneSavie Labs",
      undefined,
      text("Talk", "演講"),
      "Evaluating LLM Tools for Smart Contract Vulnerability Identification in Web3",
    ),
  },
  // The stages finish at 16:00; this row exists so workshop #2 can run to its
  // real 17:00 end rather than being clipped at the table's edge.
  {
    time: "16:00–17:00",
    dateTime: "2026-09-13T16:00:00+08:00",
    workshopContinuation: true,
  },
];

const DAY_2_AGENDA_ROWS: AgendaRow[] = [
  {
    time: "10:00–10:05",
    dateTime: "2026-09-14T10:00:00+08:00",
    mainColSpan: true,
    main: {
      title: text("Opening", "開幕"),
    },
  },
  {
    time: "10:05–10:30",
    dateTime: "2026-09-14T10:05:00+08:00",
    main: {
      format: text("Talk", "演講"),
      title: text("Taiwan's Crypto Adoption Vision", "台灣的 crypto adoption 願景"),
      speakers: [
        {
          name: "Jamie Lin",
          localizedName: text("Jamie Lin", "林之晨"),
          organization: text("Taiwan Mobile", "台灣大哥大"),
        },
      ],
    },
    forum: {
      title: text("Live from Genesis Stage", "同步轉播 Genesis Stage"),
    },
  },
  {
    time: "10:30–11:00",
    dateTime: "2026-09-14T10:30:00+08:00",
    main: {
      format: text("Talk", "演講"),
      title: text(
        "Compliance Readiness and Capabilities for Banks Entering Virtual Asset Markets",
        "銀行進入虛擬資產市場的合規準備與能力建置",
      ),
      speakers: [
        { name: "陳念平 Neptune Chen", organization: text("PwC", "PwC") },
      ],
    },
    forum: {
      format: text("Talk", "演講"),
      title: text(
        "What Ethereum Must Build for Global Finance",
        "以太坊要如何支撐全球金融？",
      ),
      speakers: [
        { name: "Changwu", organization: text("imToken", "imToken") },
      ],
    },
  },
  {
    time: "11:00–11:45",
    dateTime: "2026-09-14T11:00:00+08:00",
    main: {
      format: text("Panel", "座談"),
      title: text("The Future of Stablecoins", "穩定幣的未來發展"),
      speakers: [
        {
          name: "Reyer Chu",
          localizedName: text("Reyer Chu", "瞿孝洋"),
          role: text("Moderator", "主持人"),
          isModerator: true,
          organization: text("RWA Nexus", "睿亦富"),
        },
        {
          name: "Jeff Wen",
          organization: text("Hayek Technology", "Hayek Technology"),
        },
        {
          name: "Wayne",
          organization: text("XREX", "XREX"),
        },
      ],
    },
    forum: {
      format: text("Panel", "座談"),
      title: text(
        "Programmable Compliance",
        "Programmable Compliance",
      ),
      speakers: [
        {
          name: "Taka",
          role: text("Moderator", "主持人"),
          isModerator: true,
          organization: text("TABEI", "TABEI"),
        },
        {
          name: "Changwu",
          organization: text("imToken", "imToken"),
        },
        {
          name: "Jason Kuo",
          organization: text("Zodia", "Zodia"),
        },
      ],
    },
  },
  {
    time: "11:45–13:00",
    dateTime: "2026-09-14T11:45:00+08:00",
    intermission: {
      icon: "🍽️",
      title: text("Lunch", "午餐時間"),
    },
  },
  {
    time: "13:00–13:30",
    dateTime: "2026-09-14T13:00:00+08:00",
    mainColSpan: true,
    main: {
      format: text("Talk", "演講"),
      title: text(
        "Security Issues in Virtual Assets and Smart Contracts",
        "虛擬資產與智能合約之資安議題",
      ),
      speakers: [
        { name: "Martinet", organization: text("Quantstamp", "Quantstamp") },
      ],
    },
  },
  {
    time: "13:30–14:00",
    dateTime: "2026-09-14T13:30:00+08:00",
    main: {
      format: text("Talk", "演講"),
      title: text("Introduction to ETHSystem", "ETHSystem 介紹"),
      speakers: [
        { name: "Oskar", organization: text("ETHSystem", "ETHSystem") },
      ],
    },
    forum: {
      format: text("Talk", "演講"),
      title: text(
        "From Onchain to Bankable: Global Governance Practices for Institutional-Grade RWA",
        "從 Onchain 到 Bankable：全球機構級 RWA 的治理實務",
      ),
      speakers: [
        {
          name: "陳鴻祺 Chris Chen",
          organization: text("Deloitte", "Deloitte"),
        },
      ],
    },
  },
  {
    time: "14:00–14:45",
    dateTime: "2026-09-14T14:00:00+08:00",
    main: {
      format: text("Panel", "座談"),
      title: text(
        "Private vs. Public Chains: The Key Decision Axes for Institutions",
        "私有鏈 vs. 公有鏈：機構選鏈的關鍵決策軸",
      ),
      speakers: [
        {
          name: "Martinet",
          role: text("Moderator", "主持人"),
          isModerator: true,
          organization: text("Quantstamp", "Quantstamp"),
        },
        {
          name: "Ko-Wei (IOTA)",
        },
        {
          name: "Benji",
          organization: text("LINE", "LINE"),
        },
        {
          name: "Teagan",
          organization: text("Canton", "Canton"),
        },
      ],
    },
    forum: {
      format: text("Panel", "座談"),
      title: text("Digital Asset Custody", "虛擬資產保管"),
      speakers: [
        {
          name: "Ivan",
          role: text("Moderator", "主持人"),
          isModerator: true,
          organization: text("TAAS", "TAAS"),
        },
        {
          name: "TBA",
          organization: text("Bitgo", "Bitgo"),
        },
        {
          name: "Jon Lin",
          organization: text("KPMG", "KPMG"),
        },
        {
          name: "Stamford",
          organization: text(
            "Taishin Shin Kong Financial Holding",
            "台新新光金控",
          ),
        },
      ],
    },
  },
  {
    time: "14:45–15:30",
    dateTime: "2026-09-14T14:45:00+08:00",
    main: {
      format: text("Panel", "座談"),
      title: text(
        "Privacy and Security: Key Issues Before Financial Institutions Adopt Blockchain",
        "隱私與安全：金融機構導入區塊鏈前的關鍵議題",
      ),
      speakers: [
        {
          name: "Daniel",
          role: text("Moderator", "主持人"),
          isModerator: true,
          organization: text("BSOS", "BSOS"),
        },
        {
          name: "Oskar",
          organization: text("ETHSystem", "ETHSystem"),
        },
        {
          name: "Changwu",
          organization: text("imToken", "imToken"),
        },
        { status: "pending" },
      ],
    },
    forum: {
      format: text("Panel", "座談"),
      title: text(
        "Virtual Asset Legislation and Institutional Participation: Risks and Opportunities",
        "虛擬資產專法與法人進場：風險與機會",
      ),
      speakers: [
        {
          name: "Jason Lai",
          role: text("Moderator", "主持人"),
          isModerator: true,
          organization: text("PIF12 | Legal Builder", "PIF12 | Legal Builder"),
        },
        {
          name: "殷玉龍律師",
          organization: text(
            "Tsar & Tsai Law Firm",
            "Tsar & Tsai Law Firm",
          ),
        },
        {
          name: "Ernie Ho",
          jobTitle: text("Former Senior Legal Advisor at MaiCoin", "前 MaiCoin 資深法務"),
        },
        {
          name: "Andrew Wu 律師",
          organization: text("Cathay Financial Holdings", "國泰金控"),
        },
        {
          name: "黃子庭律師",
          organization: text("Guoju Law Firm", "國巨律師事務所"),
        },
      ],
    },
  },
];

const SpeakerList = ({
  speakers,
  locale,
  copy,
  stacked = false,
  prominentAvatar = false,
  panelLayout = false,
}: {
  speakers?: Speaker[];
  locale: Locale;
  copy: (typeof UI_COPY)[Locale];
  stacked?: boolean;
  prominentAvatar?: boolean;
  panelLayout?: boolean;
}) => {
  if (!speakers?.length) return null;

  const renderSpeakerCopy = (speaker: Speaker) => (
    <span className={styles.speakerCopy}>
      {speaker.status === "pending" ? (
        <>
          {speaker.organization
            ? `${localize(speaker.organization, locale)}${copy.labelSeparator}${copy.pendingSpeaker}`
            : copy.moreSpeakersPending}
        </>
      ) : (
        <>
          {speaker.role && (
            <span className={styles.speakerRole}>
              {localize(speaker.role, locale)}
              {copy.labelSeparator}
            </span>
          )}
          <span className={speaker.isModerator ? styles.moderatorName : ""}>
            {speaker.localizedName
              ? localize(speaker.localizedName, locale)
              : speaker.name}
            {speaker.alias &&
              `${copy.openParen}${speaker.alias}${copy.closeParen}`}
          </span>
          {(speaker.jobTitle || speaker.organization) && (
            <span className={styles.organization}>
              {copy.openParen}
              {[
                speaker.jobTitle && localize(speaker.jobTitle, locale),
                speaker.organization && localize(speaker.organization, locale),
              ]
                .filter(Boolean)
                .join(copy.detailSeparator)}
              {copy.closeParen}
            </span>
          )}
        </>
      )}
    </span>
  );

  const renderSpeakerAvatar = (speaker: Speaker) => {
    const avatar =
      speaker.avatar ??
      (speaker.name ? AGENDA_SPEAKER_AVATARS[speaker.name] : undefined);

    return avatar ? (
      <Image
        className={styles.speakerAvatar}
        src={avatar}
        alt=""
        width={68}
        height={68}
        sizes="68px"
        quality={72}
        loading="lazy"
      />
    ) : (
      <span className={styles.speakerAvatarPlaceholder} aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.75 19c.55-3.55 2.65-5.5 6.25-5.5s5.7 1.95 6.25 5.5" />
        </svg>
      </span>
    );
  };

  if (panelLayout) {
    return (
      <div className={`${styles.speakers} ${styles.panelSpeakerList}`}>
        <div className={styles.panelSpeakerCopies}>
          {speakers.map((speaker, index) => (
            <span
              className={speaker.status === "pending" ? styles.pendingSpeaker : ""}
              key={`${speaker.name ?? "pending"}-copy-${index}`}
            >
              {renderSpeakerCopy(speaker)}
            </span>
          ))}
        </div>
        <div className={styles.panelSpeakerAvatars}>
          {speakers.map((speaker, index) => (
            <span key={`${speaker.name ?? "pending"}-avatar-${index}`}>
              {renderSpeakerAvatar(speaker)}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <p
      className={`${styles.speakers} ${
        prominentAvatar ? styles.prominentSpeakerList : ""
      }`}
    >
      {speakers.map((speaker, index) => {
        return (
          <span
            className={speaker.status === "pending" ? styles.pendingSpeaker : ""}
            key={`${speaker.name ?? "pending"}-${
              speaker.organization
                ? localize(speaker.organization, locale)
                : index
            }`}
          >
            {index > 0 && !prominentAvatar && (stacked ? <br /> : " · ")}
            <span className={styles.speakerIdentity}>
              {renderSpeakerAvatar(speaker)}
              {renderSpeakerCopy(speaker)}
            </span>
          </span>
        );
      })}
    </p>
  );
};

const isMultiSpeaker = (session: Session) =>
  session.format?.en === "Panel" || (session.speakers?.length ?? 0) > 1;

const SessionCard = ({
  session,
  stage,
  locale,
  copy,
  spanLabel,
}: {
  session: Session;
  stage: "main" | "forum" | "workshop" | "shared";
  locale: Locale;
  copy: (typeof UI_COPY)[Locale];
  /**
   * Set when this session runs longer than its own row. The row's time column
   * still reads "11:30–11:45 (15 mins)" because the other stage really does
   * change at 11:45, so the card has to state its own span or a 30-minute talk
   * looks like a 15-minute one.
   */
  spanLabel?: string;
}) => (
  <article
    className={`${styles.session} ${
      stage === "forum" ? styles.forumSession : ""
    } ${stage === "workshop" ? styles.workshopSession : ""} ${
      stage === "shared" ? styles.sharedSession : ""
    }`}
  >
    {(session.format || spanLabel) && (
      <div className={styles.sessionMeta}>
        {session.format && <span>{localize(session.format, locale)}</span>}
        {spanLabel && <span className={styles.sessionSpan}>{spanLabel}</span>}
      </div>
    )}
    {session.title && (
      <h3 className={session.titleStatus === "pending" ? styles.pendingTitle : ""}>
        {localize(session.title, locale)}
      </h3>
    )}
    <SpeakerList
      speakers={session.speakers}
      locale={locale}
      copy={copy}
      // A single speaker gets the large avatar; a panel or a co-hosted
      // workshop lists its people instead, so two names don't fight over one
      // avatar slot.
      stacked={isMultiSpeaker(session)}
      prominentAvatar={session.speakers?.length === 1}
      panelLayout={isMultiSpeaker(session)}
    />
  </article>
);

const ScheduleRow = ({
  rows,
  index,
  locale,
  copy,
  hasWorkshopColumn,
}: {
  rows: AgendaRow[];
  index: number;
  locale: Locale;
  copy: AgendaCopy;
  /** True for a day that schedules a third stage, widening every row. */
  hasWorkshopColumn: boolean;
}) => {
  const row = rows[index];
  const isTransition = Boolean(
    row.transition || row.mainTransition || row.forumTransition,
  );
  const durationMinutes = getSlotDurationMinutes(row.time, locale);
  const forumSpanLabel = row.forumContinues
    ? getSpanLabel(rows, index, "forumContinuation", locale)
    : undefined;
  const workshopSpanLabel = row.workshopContinues
    ? getSpanLabel(rows, index, "workshopContinuation", locale)
    : undefined;
  // A span over more than two rows has intermediate continuation cells, and
  // each one would otherwise draw its own bottom border and cut the block into
  // slices. Only the last cell of a run keeps its border.
  const forumSpanRunsOn = Boolean(rows[index + 1]?.forumContinuation);
  const workshopSpanRunsOn = Boolean(rows[index + 1]?.workshopContinuation);

  return (
    <tr
      className={`${styles.agendaRow} ${
        hasWorkshopColumn ? styles.threeStage : ""
      } ${isTransition ? styles.transitionRow : ""}`}
    >
      <th className={styles.time} scope="row">
        <time dateTime={row.dateTime}>
          <strong>{localize(row.time, locale)}</strong>
          {durationMinutes !== null && (
            <span className={styles.timeDuration}>
              ({durationMinutes} {locale === "zh-Hant" ? "分鐘" : "mins"})
            </span>
          )}
        </time>
      </th>

      {row.transition && (
        <td
          className={`${styles.transition} ${styles.wideTransition}`}
          colSpan={2}
        >
          <span className={styles.transitionIcon} aria-hidden="true">
            ⏳
          </span>
          {localize(row.transition, locale)}
        </td>
      )}

      {row.mainTransition && (
        <td className={`${styles.transition} ${styles.mainCell}`}>
          <span className={styles.transitionIcon} aria-hidden="true">
            ⏳
          </span>
          {localize(row.mainTransition, locale)}
        </td>
      )}

      {row.forumTransition && (
        <td className={`${styles.transition} ${styles.forumCell}`}>
          <span className={styles.transitionIcon} aria-hidden="true">
            ⏳
          </span>
          {localize(row.forumTransition, locale)}
        </td>
      )}

      {row.intermission && (
        <td className={styles.intermission} colSpan={2}>
          <div className={styles.intermissionCopy}>
            <span className={styles.intermissionIcon} aria-hidden="true">
              {row.intermission.icon}
            </span>
            <div>
              <h3>{localize(row.intermission.title, locale)}</h3>
            </div>
          </div>
          {row.intermission.activity && (
            <a
              className={styles.intermissionCommunity}
              href={row.intermission.activity.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.intermissionCommunityCopy}>
                <span className={styles.intermissionCommunityLabel}>
                  {localize(row.intermission.activity.label, locale)}
                </span>
                <strong>
                  {localize(row.intermission.activity.title, locale)}
                </strong>
              </span>
              <span className={styles.intermissionCommunityCta}>
                {localize(row.intermission.activity.cta, locale)}
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          )}
        </td>
      )}

      {row.shared && (
        <td
          className={`${styles.sessionCell} ${styles.wideCell}`}
          colSpan={2}
          data-stage-label={copy.sharedStage}
        >
          <SessionCard
            session={row.shared}
            stage="shared"
            locale={locale}
            copy={copy}
          />
        </td>
      )}
      {row.main && (
        <td
          className={`${styles.sessionCell} ${styles.mainCell} ${
            row.mainColSpan ? styles.wideCell : ""
          }`}
          colSpan={row.mainColSpan ? 2 : undefined}
          data-stage-label={row.mainColSpan ? copy.sharedStage : copy.mainStage}
        >
          <SessionCard
            session={row.main}
            stage="main"
            locale={locale}
            copy={copy}
          />
        </td>
      )}
      {row.forum && (
        <td
          className={`${styles.sessionCell} ${styles.forumCell} ${
            row.forumContinues ? styles.continuesBelow : ""
          }`}
          data-stage-label={copy.forumStage}
        >
          <SessionCard
            session={row.forum}
            stage="forum"
            locale={locale}
            copy={copy}
            spanLabel={forumSpanLabel}
          />
        </td>
      )}
      {row.forumContinuation && (
        <td
          className={`${styles.sessionCell} ${styles.forumCell} ${
            styles.continuationCell
          } ${forumSpanRunsOn ? styles.continuesBelow : ""}`}
          aria-hidden="true"
        >
          <div
            className={`${styles.session} ${styles.forumSession} ${styles.continuationSession}`}
          />
        </td>
      )}
      {row.workshop && (
        <td
          className={`${styles.sessionCell} ${styles.workshopCell} ${
            row.workshopContinues ? styles.continuesBelow : ""
          }`}
          data-stage-label={copy.workshopStage}
        >
          <SessionCard
            session={row.workshop}
            stage="workshop"
            locale={locale}
            copy={copy}
            spanLabel={workshopSpanLabel}
          />
        </td>
      )}
      {row.workshopContinuation && (
        <td
          className={`${styles.sessionCell} ${styles.workshopCell} ${
            styles.continuationCell
          } ${workshopSpanRunsOn ? styles.continuesBelow : ""}`}
          aria-hidden="true"
        >
          <div
            className={`${styles.session} ${styles.workshopSession} ${styles.continuationSession}`}
          />
        </td>
      )}
    </tr>
  );
};

const AgendaPage2026 = ({
  initialCfpPhase,
}: {
  initialCfpPhase: CfpPhase;
}) => {
  const { locale } = useLanguage();
  const [activeDay, setActiveDay] = useState<DayId>("day1");

  useEffect(() => {
    if (Date.now() >= DAY_2_DEFAULT_FROM) {
      setActiveDay("day2");
    }
  }, []);

  const agendaContentLocale: Locale = activeDay === "day1" ? "en" : locale;
  const copy = { ...UI_COPY[locale], ...DAY_COPY[activeDay][locale] };
  const agendaContentCopy = {
    ...UI_COPY[agendaContentLocale],
    ...DAY_COPY[activeDay][agendaContentLocale],
  };
  const agendaRows =
    activeDay === "day1" ? DAY_1_AGENDA_ROWS : DAY_2_AGENDA_ROWS;
  // Derived from the rows rather than configured per day: a day gets the third
  // column exactly when something is scheduled in it.
  const hasWorkshopColumn = agendaRows.some((row) => Boolean(row.workshop));

  return (
    <div
      className={`${homeStyles.page} ${styles.page}`}
      data-locale={locale}
      data-day={activeDay}
    >
      <Head>
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.metaDescription} />
      </Head>

      <Header2026 activeHref="/agenda" initialCfpPhase={initialCfpPhase} />

      <main
        className={styles.main}
        id="agenda"
        lang={locale === "en" ? "en" : "zh-Hant"}
      >
        <div className={styles.shell}>
          <section className={styles.hero} aria-labelledby="page-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h1 id="page-title" className={styles.title}>
                {copy.title}
              </h1>
              <time className={styles.eventDate} dateTime={copy.dateISO}>
                {copy.eventDate}
              </time>
            </div>
            <Image
              className={styles.taiwanMark}
              src="/edm/2026/institution-day/assets/taiwan-outline-white.png"
              alt={copy.taiwanLogoAlt}
              width={320}
              height={476}
              sizes="(max-width: 640px) 72px, 116px"
              priority
            />
          </section>

          <div
            className={styles.dayTabs}
            role="tablist"
            aria-label={copy.dayTabsLabel}
          >
            {(Object.keys(DAY_COPY) as DayId[]).map((dayId) => {
              const day = DAY_COPY[dayId][locale];

              return (
                <button
                  className={styles.dayTab}
                  type="button"
                  role="tab"
                  id={`agenda-${dayId}-tab`}
                  aria-controls="agenda-day-panel"
                  aria-selected={activeDay === dayId}
                  onClick={() => setActiveDay(dayId)}
                  key={dayId}
                >
                  <span className={styles.dayTabDate}>{day.tabDate}</span>
                  <span className={styles.dayTabName}>{day.tabName}</span>
                </button>
              );
            })}
          </div>

          <section
            className={styles.agendaSection}
            id="agenda-day-panel"
            key={activeDay}
            role="tabpanel"
            aria-labelledby={`agenda-${activeDay}-tab`}
            aria-label={copy.sectionLabel}
          >
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionKicker}>{copy.scheduleLabel}</p>
              </div>
              <p className={styles.scheduleNotice}>{copy.scheduleNotice}</p>
            </div>

            <table className={styles.agendaTable}>
              <caption className={styles.visuallyHidden}>{copy.caption}</caption>
              <thead className={styles.agendaHead}>
                <tr
                  className={`${styles.agendaHeadRow} ${
                    hasWorkshopColumn ? styles.threeStage : ""
                  }`}
                >
                  <th className={styles.headCell} scope="col">
                    {copy.timeHeader}
                  </th>
                  <th className={styles.headCell} scope="col">
                    {copy.mainStage}
                  </th>
                  <th className={styles.headCell} scope="col">
                    {copy.forumStage}
                  </th>
                  {hasWorkshopColumn && (
                    <th className={styles.headCell} scope="col">
                      {copy.workshopStage}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody
                className={styles.agendaBody}
                lang={agendaContentLocale === "en" ? "en" : "zh-Hant"}
              >
                {agendaRows.map((row, index) => (
                  <ScheduleRow
                    rows={agendaRows}
                    index={index}
                    locale={agendaContentLocale}
                    copy={agendaContentCopy}
                    hasWorkshopColumn={hasWorkshopColumn}
                    key={row.dateTime}
                  />
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AgendaPage2026;
