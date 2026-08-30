import Header2026 from "@/components/Layout/Header2026";
import type { CfpPhase } from "@/components/hooks/useCfpPhase";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/public/constant/content";
import Head from "next/head";

import homeStyles from "@/components/HomePage/Home2026.module.css";
import styles from "./AgendaPage2026.module.css";

type AgendaText = Record<Locale, string>;

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
  status?: "confirmed" | "pending";
};

type Session = {
  format: AgendaText;
  title: AgendaText;
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
};

const UI_COPY: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    eventDate: string;
    scheduleLabel: string;
    scheduleNotice: string;
    sectionLabel: string;
    caption: string;
    timeHeader: string;
    mainStage: string;
    forumStage: string;
    sharedStage: string;
    pendingSpeaker: string;
    moreSpeakersPending: string;
    detailSeparator: string;
    openParen: string;
    closeParen: string;
    labelSeparator: string;
  }
> = {
  en: {
    metaTitle: "ETHTaipei 2026 | Institution Day",
    metaDescription: "ETHTaipei 2026 Institution Day schedule",
    eyebrow: "ETHTAIPEI 2026",
    title: "Institution Day",
    eventDate: "September 14, 2026",
    scheduleLabel: "Schedule",
    scheduleNotice:
      "Schedule times are tentative and subject to change. Please refer to the latest announcement.",
    sectionLabel: "Institution Day schedule",
    caption: "ETHTaipei 2026 Institution Day schedule",
    timeHeader: "Time",
    mainStage: "Main Hall (Building M)",
    forumStage: "Forum Hall (Building A2)",
    sharedStage: "Joint session",
    pendingSpeaker: "Speaker to be announced",
    moreSpeakersPending: "More speakers to be announced",
    detailSeparator: ", ",
    openParen: " (",
    closeParen: ")",
    labelSeparator: " | ",
  },
  "zh-Hant": {
    metaTitle: "ETHTaipei 2026｜機構日",
    metaDescription: "ETHTaipei 2026 機構日議程",
    eyebrow: "ETHTAIPEI 2026",
    title: "機構日",
    eventDate: "2026 年 9 月 14 日",
    scheduleLabel: "當日議程",
    scheduleNotice:
      "議程時間暫定，主辦單位將視實際情況調整，請以最新公告為準。",
    sectionLabel: "機構日議程",
    caption: "ETHTaipei 2026 機構日議程",
    timeHeader: "時間",
    mainStage: "主舞台（M 棟）",
    forumStage: "論壇舞台（A2 棟）",
    sharedStage: "共同議程",
    pendingSpeaker: "講者即將公布",
    moreSpeakersPending: "更多講者即將公布",
    detailSeparator: "・",
    openParen: "（",
    closeParen: "）",
    labelSeparator: "｜",
  },
};

const AGENDA_ROWS: AgendaRow[] = [
  {
    time: "10:00–10:30",
    dateTime: "2026-09-14T10:00:00+08:00",
    shared: {
      format: text("Keynote", "主題演講"),
      title: text("Taiwan's Crypto Adoption Vision", "台灣加密產業的下一步"),
      speakers: [
        {
          name: "Jamie Lin",
          organization: text("Taiwan Mobile", "台灣大哥大"),
        },
      ],
    },
  },
  {
    time: "10:30–10:35",
    dateTime: "2026-09-14T10:30:00+08:00",
    transition: text("Break", "休息時間"),
  },
  {
    time: "10:35–11:05",
    dateTime: "2026-09-14T10:35:00+08:00",
    main: {
      format: text("Talk", "專題演講"),
      title: text(
        "Stablecoin Risk Classification and Accounting Recognition",
        "穩定幣有哪些風險？會計上怎麼認列？",
      ),
      speakers: [{ name: "陳念平", organization: text("PwC", "PwC") }],
    },
    forum: {
      format: text("Talk", "專題演講"),
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
    time: "11:05–11:10",
    dateTime: "2026-09-14T11:05:00+08:00",
    transition: text("Break", "休息時間"),
  },
  {
    time: "11:10–11:55",
    dateTime: "2026-09-14T11:10:00+08:00",
    main: {
      format: text("Fireside Chat", "爐邊對談"),
      title: text("The Future of Stablecoins", "穩定幣接下來會怎麼發展？"),
      speakers: [
        {
          name: "温宏駿",
          organization: text("Hayek Technology", "海耶克科技"),
        },
        { name: "Wayne", organization: text("XREX", "XREX") },
      ],
    },
    forum: {
      format: text("Introduction + Panel", "主題介紹＋座談"),
      title: text(
        "Programmable Compliance: Bringing Institutional Policy Onchain",
        "可程式化合規：如何把機構政策帶上鏈？",
      ),
      speakers: [
        { name: "Taka" },
        { name: "Changwu", organization: text("imToken", "imToken") },
        { name: "Jason Kuo", organization: text("Zodia", "Zodia") },
      ],
    },
  },
  {
    time: "11:55–13:30",
    dateTime: "2026-09-14T11:55:00+08:00",
    intermission: {
      icon: "🍽️",
      title: text("Lunch", "午餐時間"),
    },
  },
  {
    time: "13:30–14:00",
    dateTime: "2026-09-14T13:30:00+08:00",
    main: {
      format: text("Talk", "專題演講"),
      title: text(
        "Cybersecurity Risks in Virtual Assets and Smart Contracts",
        "虛擬資產與智能合約有哪些資安風險？",
      ),
      speakers: [
        { name: "Martinet", organization: text("Quantstamp", "Quantstamp") },
      ],
    },
    forum: {
      format: text("Talk", "專題演講"),
      title: text("Topic to be announced", "議題即將公布"),
      speakers: [
        { organization: text("O-Bank", "王道銀行"), status: "pending" },
      ],
    },
  },
  {
    time: "14:00–14:05",
    dateTime: "2026-09-14T14:00:00+08:00",
    transition: text("Break", "休息時間"),
  },
  {
    time: "14:05–14:35",
    dateTime: "2026-09-14T14:05:00+08:00",
    main: {
      format: text("Talk", "專題演講"),
      title: text(
        "ETHSystem: An Introduction to Institutional-Grade Ethereum Infrastructure",
        "認識 ETHSystem：機構級 Ethereum 基礎設施",
      ),
      speakers: [
        { name: "Oskar", organization: text("ETHSystem", "ETHSystem") },
      ],
    },
    forum: {
      format: text("Talk", "專題演講"),
      title: text("An RWA Risk-Control Framework", "RWA 的風險該怎麼管？"),
      speakers: [
        { name: "陳鴻祺", organization: text("Deloitte", "Deloitte") },
      ],
    },
  },
  {
    time: "14:35–14:40",
    dateTime: "2026-09-14T14:35:00+08:00",
    transition: text("Break", "休息時間"),
  },
  {
    time: "14:40–15:25",
    dateTime: "2026-09-14T14:40:00+08:00",
    main: {
      format: text("Panel", "座談"),
      title: text(
        "Public, Private, or Hybrid Chains: How Institutions Should Choose",
        "公鏈、私有鏈還是混合架構？機構該怎麼選？",
      ),
      speakers: [
        { name: "Martinet", organization: text("Quantstamp", "Quantstamp") },
        { name: "Ko-Wei", organization: text("IOTA", "IOTA") },
        { name: "Benji", organization: text("LINE NEXT", "LINE NEXT") },
        { name: "Teagan", organization: text("Canton", "Canton") },
      ],
    },
    forum: {
      format: text("Panel", "座談"),
      title: text(
        "Digital Asset Custody: Governance, Security, and Accountability",
        "虛擬資產該怎麼保管？治理、資安與責任怎麼分？",
      ),
      speakers: [
        { name: "Danny", organization: text("TAAS", "TAAS") },
        { organization: text("BitGo", "BitGo"), status: "pending" },
        { organization: text("KPMG", "KPMG"), status: "pending" },
        { name: "Stamford", organization: text("Taishin", "Taishin") },
      ],
    },
  },
  {
    time: "15:25–15:30",
    dateTime: "2026-09-14T15:25:00+08:00",
    transition: text("Break", "休息時間"),
  },
  {
    time: "15:30–16:15",
    dateTime: "2026-09-14T15:30:00+08:00",
    main: {
      format: text("Panel", "座談"),
      title: text(
        "Tokenization at Traditional Financial Institutions: From Pilots to Market Adoption",
        "傳統金融如何推動代幣化？從試辦走向市場",
      ),
      speakers: [
        { name: "Daniel", organization: text("BSOS", "BSOS") },
        { name: "陳品", organization: text("BSOS", "BSOS") },
        { status: "pending" },
      ],
    },
    forum: {
      format: text("Panel", "座談"),
      title: text(
        "Virtual Asset Regulatory Readiness: What's Still Missing?",
        "虛擬資產法規準備好了嗎？市場還缺哪一塊？",
      ),
      speakers: [
        { name: "Liying" },
        { name: "Jason Lai" },
        { name: "Ernie" },
        { status: "pending" },
      ],
    },
  },
  {
    time: text("From 16:15", "16:15 起"),
    dateTime: "2026-09-14T16:15:00+08:00",
    intermission: {
      icon: "🤝",
      title: text("Networking", "自由交流"),
    },
  },
];

const SpeakerList = ({
  speakers,
  locale,
  copy,
}: {
  speakers?: Speaker[];
  locale: Locale;
  copy: (typeof UI_COPY)[Locale];
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
          {index > 0 && " · "}
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
              {speaker.name}
              {speaker.alias &&
                `${copy.openParen}${speaker.alias}${copy.closeParen}`}
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
    <h3>{localize(session.title, locale)}</h3>
    <SpeakerList speakers={session.speakers} locale={locale} copy={copy} />
  </article>
);

const ScheduleRow = ({
  row,
  locale,
  copy,
}: {
  row: AgendaRow;
  locale: Locale;
  copy: (typeof UI_COPY)[Locale];
}) => {
  const isTransition = Boolean(row.transition);

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
        <td className={styles.transition} colSpan={2}>
          <span className={styles.transitionIcon} aria-hidden="true">
            ⏳
          </span>
          {localize(row.transition, locale)}
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
        <td className={styles.sessionCell} data-stage-label={copy.mainStage}>
          <SessionCard
            session={row.main}
            stage="main"
            locale={locale}
            copy={copy}
          />
        </td>
      )}
      {row.forum && (
        <td className={styles.sessionCell} data-stage-label={copy.forumStage}>
          <SessionCard
            session={row.forum}
            stage="forum"
            locale={locale}
            copy={copy}
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
  const copy = UI_COPY[locale];

  return (
    <div
      className={`${homeStyles.page} ${styles.page}`}
      data-locale={locale}
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
            <div>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h1 id="page-title" className={styles.title}>
                {copy.title}
              </h1>
              <time className={styles.eventDate} dateTime="2026-09-14">
                {copy.eventDate}
              </time>
            </div>
          </section>

          <section className={styles.agendaSection} aria-label={copy.sectionLabel}>
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
                {AGENDA_ROWS.map((row) => (
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
