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

const DAY_2_DEFAULT_FROM = new Date("2026-09-13T18:00:00+08:00").getTime();

const getDefaultAgendaDay = (now = Date.now()): DayId =>
  now >= DAY_2_DEFAULT_FROM ? "day2" : "day1";

const text = (en: string, zhHant: string): AgendaText => ({
  en,
  "zh-Hant": zhHant,
});

const localize = (value: AgendaText | string, locale: Locale) =>
  typeof value === "string" ? value : value[locale];

type Speaker = {
  name?: string;
  alias?: string;
  jobTitle?: AgendaText;
  organization?: AgendaText;
  role?: AgendaText;
  isModerator?: boolean;
  status?: "confirmed" | "pending";
};

type Session = {
  format: AgendaText;
  title?: AgendaText;
  titleStatus?: "pending";
  speakers?: Speaker[];
};

type AgendaRow = {
  time: AgendaText | string;
  dateTime: string;
  main?: Session;
  forum?: Session;
  shared?: Session;
  intermission?: {
    icon: string;
    title: AgendaText;
  };
  transition?: AgendaText;
  mainTransition?: AgendaText;
  forumTransition?: AgendaText;
  forumContinuation?: boolean;
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

const speakerSession = (
  name: string,
  organization?: string,
  alias?: string,
  format = text("Talk", "演講"),
): Session => ({
  format,
  title: text("Topic to be announced", "講題即將公布"),
  titleStatus: "pending",
  speakers: [
    {
      name,
      alias,
      ...(organization
        ? { organization: text(organization, organization) }
        : {}),
    },
  ],
});

const DAY_1_AGENDA_ROWS: AgendaRow[] = [
  {
    time: "10:00–10:10",
    dateTime: "2026-09-13T10:00:00+08:00",
    main: {
      format: text("Program", "大會流程"),
      title: text("Opening", "開幕"),
    },
    forum: {
      format: text("Live", "直播"),
      title: text(
        "Live from Genesis Stage",
        "同步轉播 Genesis Stage",
      ),
    },
  },
  {
    time: "10:10–10:20",
    dateTime: "2026-09-13T10:10:00+08:00",
    mainTransition: text("Stage transition", "舞台轉場"),
    forumContinuation: true,
  },
  {
    time: "10:20–10:55",
    dateTime: "2026-09-13T10:20:00+08:00",
    forumContinuation: true,
    main: speakerSession(
      "Vitalik",
      "Ethereum Foundation",
      undefined,
      text("Keynote", "主題演講"),
    ),
  },
  {
    time: "10:55–11:00",
    dateTime: "2026-09-13T10:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "11:00–11:25",
    dateTime: "2026-09-13T11:00:00+08:00",
    main: speakerSession(
      "Martinet",
      "Quantstamp",
      undefined,
      text("Talk", "演講"),
    ),
    forum: speakerSession(
      "Devansh Mehta",
      "Independent",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "11:25–11:30",
    dateTime: "2026-09-13T11:25:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "11:30–11:40",
    dateTime: "2026-09-13T11:30:00+08:00",
    main: speakerSession("Matthew Keil", "ChainSafe"),
    forum: speakerSession(
      "CC Liang",
      "Independent",
      undefined,
      text("Talk · 11:30–11:55", "演講 · 11:30–11:55"),
    ),
  },
  {
    time: "11:40–11:45",
    dateTime: "2026-09-13T11:40:00+08:00",
    mainTransition: text("Stage transition", "舞台轉場"),
    forumContinuation: true,
  },
  {
    time: "11:45–11:55",
    dateTime: "2026-09-13T11:45:00+08:00",
    main: speakerSession("Hao Chen", "CertiK"),
    forumContinuation: true,
  },
  {
    time: "11:55–12:00",
    dateTime: "2026-09-13T11:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "12:00–13:00",
    dateTime: "2026-09-13T12:00:00+08:00",
    intermission: {
      icon: "🍽️",
      title: text("Lunch", "午餐時間"),
    },
  },
  {
    time: "13:00–13:25",
    dateTime: "2026-09-13T13:00:00+08:00",
    main: speakerSession(
      "Vitalik",
      "Ethereum Foundation",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "13:25–13:30",
    dateTime: "2026-09-13T13:25:00+08:00",
    mainTransition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "13:30–13:55",
    dateTime: "2026-09-13T13:30:00+08:00",
    main: speakerSession(
      "Alan Wu",
      "Uniswap",
      undefined,
      text("Talk", "演講"),
    ),
    forum: speakerSession(
      "Alex Kuzmin",
      "Ethereum Foundation",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "13:55–14:00",
    dateTime: "2026-09-13T13:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "14:00–14:10",
    dateTime: "2026-09-13T14:00:00+08:00",
    main: speakerSession("Anton Cheng", "Morpho"),
    forum: speakerSession("Jatin", "Canton"),
  },
  {
    time: "14:10–14:15",
    dateTime: "2026-09-13T14:10:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "14:15–14:25",
    dateTime: "2026-09-13T14:15:00+08:00",
    main: speakerSession("Danger", "Today in Defi"),
    forum: speakerSession("Pol", "Dappnode"),
  },
  {
    time: "14:25–14:30",
    dateTime: "2026-09-13T14:25:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "14:30–14:55",
    dateTime: "2026-09-13T14:30:00+08:00",
    main: speakerSession(
      "Antonio Seveso",
      "Fluidkey",
      undefined,
      text("Talk", "演講"),
    ),
    forum: speakerSession(
      "Clément Lesaege",
      "Seer/Kleros",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "14:55–15:00",
    dateTime: "2026-09-13T14:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "15:00–15:10",
    dateTime: "2026-09-13T15:00:00+08:00",
    main: speakerSession("Aditya", "Polymarket"),
    forum: speakerSession(
      "Ryan",
      undefined,
      undefined,
      text("Talk · 15:00–15:25", "演講 · 15:00–15:25"),
    ),
  },
  {
    time: "15:10–15:15",
    dateTime: "2026-09-13T15:10:00+08:00",
    mainTransition: text("Stage transition", "舞台轉場"),
    forumContinuation: true,
  },
  {
    time: "15:15–15:25",
    dateTime: "2026-09-13T15:15:00+08:00",
    main: speakerSession("Eric Lee", "SigMarket"),
    forumContinuation: true,
  },
  {
    time: "15:25–15:30",
    dateTime: "2026-09-13T15:25:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "15:30–15:55",
    dateTime: "2026-09-13T15:30:00+08:00",
    main: speakerSession(
      "Alfred Lu",
      "imToken Labs",
      undefined,
      text("Talk", "演講"),
    ),
    forum: speakerSession(
      "Alice",
      "OneSavie Labs",
      undefined,
      text("Talk", "演講"),
    ),
  },
  {
    time: "15:55–16:00",
    dateTime: "2026-09-13T15:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
];

const DAY_2_AGENDA_ROWS: AgendaRow[] = [
  {
    time: "10:05–10:25",
    dateTime: "2026-09-14T10:05:00+08:00",
    main: {
      format: text("Talk", "演講"),
      title: text("Taiwan's Crypto Adoption Vision", "台灣的 crypto adoption 願景"),
      speakers: [
        {
          name: "Jamie Lin",
          organization: text("Taiwan Mobile", "台灣大哥大"),
        },
      ],
    },
    forum: {
      format: text("Live", "直播"),
      title: text("Live from Genesis Stage", "同步轉播 Genesis Stage"),
    },
  },
  {
    time: "10:25–10:30",
    dateTime: "2026-09-14T10:25:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "10:30–10:55",
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
    time: "10:55–11:00",
    dateTime: "2026-09-14T10:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "11:00–11:45",
    dateTime: "2026-09-14T11:00:00+08:00",
    main: {
      format: text("Panel", "座談"),
      title: text("Stablecoins: Fireside Chat", "穩定幣：爐邊對談"),
      speakers: [
        {
          name: "派大星",
          alias: "Jeff",
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
    time: "13:00–13:25",
    dateTime: "2026-09-14T13:00:00+08:00",
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
    time: "13:25–13:30",
    dateTime: "2026-09-14T13:25:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "13:30–13:55",
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
    time: "13:55–14:00",
    dateTime: "2026-09-14T13:55:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
  },
  {
    time: "14:00–14:40",
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
          name: "Ko-wei",
          organization: text("IOTA", "IOTA"),
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
    time: "14:40–14:45",
    dateTime: "2026-09-14T14:40:00+08:00",
    transition: text("Stage transition", "舞台轉場"),
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
        },
        {
          name: "殷玉龍律師",
          organization: text(
            "Formosan Brothers Attorneys-at-Law",
            "常在國際法律事務所",
          ),
        },
        {
          name: "Ernie Ho",
          jobTitle: text("Former Senior Legal Counsel at MaiCoin", "前 MaiCoin 資深法務"),
        },
        {
          name: "Andrew Wu 律師",
          organization: text("Cathay Financial Holding", "國泰金控"),
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
}: {
  speakers?: Speaker[];
  locale: Locale;
  copy: (typeof UI_COPY)[Locale];
  stacked?: boolean;
}) => {
  if (!speakers?.length) return null;

  return (
    <p className={styles.speakers}>
      {speakers.map((speaker, index) => (
        <span
          className={speaker.status === "pending" ? styles.pendingSpeaker : ""}
          key={`${speaker.name ?? "pending"}-${
            speaker.organization
              ? localize(speaker.organization, locale)
              : index
          }`}
        >
          {index > 0 && (stacked ? <br /> : " · ")}
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
                {speaker.name}
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
      ))}
    </p>
  );
};

const SessionCard = ({
  session,
  stage,
  locale,
  copy,
}: {
  session: Session;
  stage: "main" | "forum" | "shared";
  locale: Locale;
  copy: (typeof UI_COPY)[Locale];
}) => (
  <article
    className={`${styles.session} ${
      stage === "forum" ? styles.forumSession : ""
    } ${stage === "shared" ? styles.sharedSession : ""}`}
  >
    <div className={styles.sessionMeta}>
      <span>{localize(session.format, locale)}</span>
    </div>
    {session.title && (
      <h3 className={session.titleStatus === "pending" ? styles.pendingTitle : ""}>
        {localize(session.title, locale)}
      </h3>
    )}
    <SpeakerList
      speakers={session.speakers}
      locale={locale}
      copy={copy}
      stacked={session.format.en === "Panel"}
    />
  </article>
);

const ScheduleRow = ({
  row,
  locale,
  copy,
}: {
  row: AgendaRow;
  locale: Locale;
  copy: AgendaCopy;
}) => {
  const isTransition = Boolean(
    row.transition || row.mainTransition || row.forumTransition,
  );

  return (
    <tr
      className={`${styles.agendaRow} ${
        isTransition ? styles.transitionRow : ""
      }`}
    >
      <th className={styles.time} scope="row">
        <time dateTime={row.dateTime}>
          <strong>{localize(row.time, locale)}</strong>
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
          className={`${styles.sessionCell} ${styles.mainCell}`}
          data-stage-label={copy.mainStage}
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
          className={`${styles.sessionCell} ${styles.forumCell}`}
          data-stage-label={copy.forumStage}
        >
          <SessionCard
            session={row.forum}
            stage="forum"
            locale={locale}
            copy={copy}
          />
        </td>
      )}
      {row.forumContinuation && (
        <td
          className={`${styles.sessionCell} ${styles.forumCell} ${styles.continuationCell}`}
          aria-hidden="true"
        >
          <div
            className={`${styles.session} ${styles.forumSession} ${styles.continuationSession}`}
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
  const copy = { ...UI_COPY[locale], ...DAY_COPY[activeDay][locale] };
  const agendaRows =
    activeDay === "day1" ? DAY_1_AGENDA_ROWS : DAY_2_AGENDA_ROWS;

  useEffect(() => {
    setActiveDay(getDefaultAgendaDay());
  }, []);

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
                <tr className={styles.agendaHeadRow}>
                  <th className={styles.headCell} scope="col">
                    {copy.timeHeader}
                  </th>
                  <th className={styles.headCell} scope="col">
                    {copy.mainStage}
                  </th>
                  <th className={styles.headCell} scope="col">
                    {copy.forumStage}
                  </th>
                </tr>
              </thead>
              <tbody className={styles.agendaBody}>
                {agendaRows.map((row) => (
                  <ScheduleRow
                    row={row}
                    locale={locale}
                    copy={copy}
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
