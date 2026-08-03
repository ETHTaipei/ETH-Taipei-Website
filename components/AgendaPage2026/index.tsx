import Header2026 from "@/components/Layout/Header2026";
import type { CfpPhase } from "@/components/hooks/useCfpPhase";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/public/constant/content";
import { type ReactNode, useState } from "react";

import homeStyles from "@/components/HomePage/Home2026.module.css";
import styles from "./AgendaPage2026.module.css";

type DayId = "day1" | "day2";

type Pillar = {
  n: string;
  title: string;
  desc: string;
};

type Slot = {
  time: string;
  dur: string;
  title: string;
  desc: string;
  format: "talk" | "panel";
  tag: string;
};

type Session = {
  heading: string;
  range: string;
  slots: Slot[];
};

type AgendaCopy = {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  fmtTalk: string;
  fmtPanel: string;
  days: { id: DayId; date: string; name: string }[];
  day1: {
    bandTag: string;
    bandName: string;
    bandSub: string;
    sectionLabel: string;
    pillars: Pillar[];
    note: ReactNode;
  };
  day2: {
    bandTag: string;
    bandName: string;
    bandSub: string;
    breakLabel: string;
    sessions: Session[];
    note: ReactNode;
  };
};

const MORNING_RANGE = "10:00 – 12:00";

const COPY: Record<Locale, AgendaCopy> = {
  en: {
    eyebrow: "ETHTAIPEI 2026 · AGENDA",
    title: "Agenda",
    lede: (
      <>
        Two days at ETHTaipei 2026: <b>Sep 13 — Cryptonative Day</b> belongs to
        the Ethereum builder community; <b>Sep 14 — Institution Day</b> is built
        for banks and financial institutions. This is a draft — topics and timing
        may change.
      </>
    ),
    fmtTalk: "Talk",
    fmtPanel: "Panel",
    days: [
      { id: "day1", date: "SEP 13", name: "Cryptonative Day" },
      { id: "day2", date: "SEP 14", name: "Institution Day" },
    ],
    day1: {
      bandTag: "Day 01 · Sep 13 · Main Stage",
      bandName: "Cryptonative Day",
      bandSub:
        "A day for the Ethereum builder community — from core protocol to consumer apps. Full schedule and speaker lineup in progress.",
      sectionLabel: "What to Expect",
      pillars: [
        {
          n: "01",
          title: "Protocol & Core Dev",
          desc: "Consensus, execution- and consensus-layer clients, EIPs, and the road to the next hard fork.",
        },
        {
          n: "02",
          title: "L2s & Scaling",
          desc: "Rollups, shared sequencing, interop, data availability, and seamless cross-L2 UX.",
        },
        {
          n: "03",
          title: "ZK & Privacy",
          desc: "Proving systems, zkEVMs, coprocessors, and privacy-preserving applications.",
        },
        {
          n: "04",
          title: "Wallets & Account Abstraction",
          desc: "Smart accounts, ERC-4337 / 7702, passkeys, and gasless UX.",
        },
        {
          n: "05",
          title: "DeFi",
          desc: "AMMs, lending, stablecoins, intents, and on-chain risk management.",
        },
        {
          n: "06",
          title: "Consumer & Social",
          desc: "On-chain social, gaming, payments, and apps built for everyday users.",
        },
        {
          n: "07",
          title: "Security",
          desc: "Auditing, formal verification, MEV, and keeping users and protocols safe.",
        },
        {
          n: "08",
          title: "Infra & Tooling",
          desc: "RPC, indexing, dev frameworks, and oracles — the plumbing builders rely on.",
        },
      ],
      note: (
        <>
          <b>Schedule in progress.</b> The full timetable, talk titles, and
          speakers will be announced once the lineup is confirmed. Above are the
          themes this day is expected to cover.
        </>
      ),
    },
    day2: {
      bandTag: "Day 02 · Sep 14 · Main Stage",
      bandName: "Institution Day",
      bandSub:
        "A one-day track built for banks and financial institutions — the morning on institutional-grade custody and wallet architecture, the afternoon on RWA and tokenized-equity practice and chain selection. Single track · Main Stage.",
      breakLabel: "Lunch & Networking",
      sessions: [
        {
          heading: "Morning · Custody / Wallet",
          range: MORNING_RANGE,
          slots: [
            {
              time: "10:00",
              dur: "30 min",
              title:
                "From Smart Accounts to Compliant Accounts: The Future of Institutional Wallets",
              desc: "How the wallet stack is evolving — authentication, roles and permissions, transaction policy, real-time risk checks, audit trails, and compliance modules — into the next generation of institutional wallets.",
              format: "talk",
              tag: "Custody / Wallets",
            },
            {
              time: "10:30",
              dur: "30 min",
              title: "Security in Digital Assets & Smart Contracts",
              desc: "Web3 security across the stack — from safeguarding assets and hardening smart contracts to securing surrounding infrastructure and protecting staff from social engineering.",
              format: "talk",
              tag: "Security",
            },
            {
              time: "11:00",
              dur: "60 min",
              title:
                "Panel — Stablecoin Types & Risk Management: USDC / USDT / OUSD / DAI / USDe",
              desc: "Perspectives on the major stablecoins in the market, their stability mechanisms, and how to classify their risks.",
              format: "panel",
              tag: "Stablecoins",
            },
          ],
        },
        {
          heading: "Afternoon · RWA / Tokenized Stocks",
          range: "13:00 – 16:00",
          slots: [
            {
              time: "13:00",
              dur: "30 min",
              title:
                "How Are Tokenized US Stocks Issued? Three Models, from Ondo to xStocks",
              desc: "Using Ondo Global Markets as the anchor case — compared with Backed Finance (xStocks) and Dinari — we break down three key differences behind tokenized US equities: collateral & custody architecture, regulatory jurisdiction, and investor eligibility & liquidity design.",
              format: "talk",
              tag: "RWA / Stocks",
            },
            {
              time: "13:30",
              dur: "30 min",
              title:
                "Positioning for the Trillion-Dollar “Machine Finance” Market of Autonomous AI Agents",
              desc: "Starting from x402 (backed by the Linux Foundation and others), how autonomous AI agents pay and transact on-chain — and what this “machine finance” market means for financial institutions.",
              format: "talk",
              tag: "AI / Machine Finance",
            },
            {
              time: "14:00",
              dur: "60 min",
              title: "Panel — Tokenization Progress at Traditional Finance Giants",
              desc: "Representatives from traditional financial infrastructure — NYSE, Nasdaq, SWIFT and others — share where they are on tokenization, the regulatory and technical challenges they face, and their outlook for the next 3–5 years.",
              format: "panel",
              tag: "Tokenization",
            },
            {
              time: "15:00",
              dur: "60 min",
              title:
                "Panel — Private vs. Public Chains: The Real Decision Axes for Institutions",
              desc: "Breaking the debate into the axes that actually matter — data privacy, regulatory control, finality guarantees, liquidity access, and vendor lock-in — rather than a vague notion of “security.” Where Besu / Canton / Prividium / public chains each stand.",
              format: "panel",
              tag: "Chain Selection",
            },
          ],
        },
      ],
      note: (
        <>
          <b>Tentative schedule.</b> Topics and timing may change; the speaker
          lineup will be announced once confirmed.
        </>
      ),
    },
  },

  "zh-Hant": {
    eyebrow: "ETHTAIPEI 2026 · 議程",
    title: "議程",
    lede: (
      <>
        ETHTaipei 2026 的兩天：<b>9/13 Cryptonative Day</b> 屬於以太坊開發者社群；
        <b>9/14 Institution Day</b> 為銀行與金融機構打造。以下為草稿，講題與時間可能調整。
      </>
    ),
    fmtTalk: "演講",
    fmtPanel: "座談",
    days: [
      { id: "day1", date: "SEP 13", name: "開發者日" },
      { id: "day2", date: "SEP 14", name: "機構日" },
    ],
    day1: {
      bandTag: "Day 01 · 9/13 · 主舞台",
      bandName: "Cryptonative Day · 開發者的一天",
      bandSub:
        "屬於以太坊開發者社群的一天——從核心協議到消費級應用。完整時間表與講者陣容建構中，陸續公布。",
      sectionLabel: "主題方向",
      pillars: [
        {
          n: "01",
          title: "協議與核心開發",
          desc: "共識、執行層與共識層客戶端、EIP，以及邁向下一個硬分叉的路線圖。",
        },
        {
          n: "02",
          title: "L2 與擴容",
          desc: "Rollups、共享排序、跨鏈互通、資料可用性，以及無縫跨 L2 的使用體驗。",
        },
        {
          n: "03",
          title: "零知識證明與隱私",
          desc: "證明系統、zkEVM、coprocessor，以及保護隱私的鏈上應用。",
        },
        {
          n: "04",
          title: "錢包與帳戶抽象",
          desc: "智能帳戶、ERC-4337 / 7702、passkey，以及無 gas 的使用體驗。",
        },
        {
          n: "05",
          title: "去中心化金融 DeFi",
          desc: "AMM、借貸、穩定幣、intent 交易，以及鏈上風險管理。",
        },
        {
          n: "06",
          title: "消費級與社交應用",
          desc: "鏈上社交、遊戲、支付，以及為日常用戶打造的應用。",
        },
        {
          n: "07",
          title: "資安",
          desc: "稽核、形式化驗證、MEV，以及如何守護用戶與協議的安全。",
        },
        {
          n: "08",
          title: "基礎設施與工具",
          desc: "RPC、索引、開發框架、預言機——開發者仰賴的底層管線。",
        },
      ],
      note: (
        <>
          <b>議程建構中。</b> 完整時間表、講題與講者將於陣容確認後公布。以上為這一天預計涵蓋的主題方向。
        </>
      ),
    },
    day2: {
      bandTag: "Day 02 · 9/14 · 主舞台",
      bandName: "Institution Day · 機構日",
      bandSub:
        "為金融機構與從業者打造的一日議程——上半天聚焦機構級的保管與錢包架構，下半天走進 RWA 與美股代幣化的實務與選型。單軌 · 主舞台。",
      breakLabel: "午餐 · 自由交流 Lunch & Networking",
      sessions: [
        {
          heading: "上半天 · 保管與錢包 Custody / Wallet",
          range: MORNING_RANGE,
          slots: [
            {
              time: "10:00",
              dur: "30 min",
              title:
                "From Smart Accounts to Compliant Accounts：下一代機構錢包",
              desc: "從錢包的技術演進出發，探討身份驗證、角色與權限、交易政策、即時風險檢查、稽核軌跡與合規模組，如何共同構成下一代機構錢包。",
              format: "talk",
              tag: "保管 / 錢包",
            },
            {
              time: "10:30",
              dur: "30 min",
              title: "虛擬資產與智能合約之資安議題",
              desc: "Web3 相關的資安議題，從如何保管資產、確保智能合約安全、周邊伺服器之安全性，到保護職員遭受社交工程。",
              format: "talk",
              tag: "資安",
            },
            {
              time: "11:00",
              dur: "60 min",
              title: "座談 — 穩定幣種類與風險管理：USDC / USDT / OUSD / DAI / USDe",
              desc: "分享針對市面上主要穩定幣及其穩定機制、風險分類的看法。",
              format: "panel",
              tag: "穩定幣",
            },
          ],
        },
        {
          heading: "下半天 · RWA / 美股代幣",
          range: "13:00 – 16:00",
          slots: [
            {
              time: "13:00",
              dur: "30 min",
              title: "美股代幣化怎麼發？從 Ondo 到 xStocks 的三種模式拆解",
              desc: "以 Ondo Global Markets 為核心案例，對照 Backed Finance（xStocks）、Dinari 等主流發行方，拆解美股代幣化背後三個關鍵差異：擔保與託管架構、監管司法管轄、以及投資人資格與流動性設計。",
              format: "talk",
              tag: "RWA / 美股",
            },
            {
              time: "13:30",
              dur: "30 min",
              title: "佈局自主 AI 代理的兆級美元「機器金融」新市場",
              desc: "從 x402（由 Linux Foundation 等支持）出發，談自主 AI 代理如何在鏈上支付與交易，以及這個「機器金融」市場對金融機構的意義與機會。",
              format: "talk",
              tag: "AI / 機器金融",
            },
            {
              time: "14:00",
              dur: "60 min",
              title: "座談 — 傳統金融巨頭的代幣化進程",
              desc: "邀請 NYSE、Nasdaq、SWIFT 等傳統金融基礎設施代表，分享各自在代幣化上的布局進度、遇到的監理與技術挑戰，以及對未來 3–5 年的展望。",
              format: "panel",
              tag: "代幣化",
            },
            {
              time: "15:00",
              dur: "60 min",
              title: "座談 — 私有鏈 vs. 公有鏈：機構選鏈的關鍵決策軸",
              desc: "把爭論拆成幾個真正的決策軸——資料隱私、監理可控性、最終性保證、流動性可及性、廠商鎖定——而不是籠統的「安全」。點名 Besu / Canton / Prividium / 公鏈各自站在哪一軸。",
              format: "panel",
              tag: "選鏈",
            },
          ],
        },
      ],
      note: (
        <>
          <b>暫定議程。</b> 講題與時間可能調整，講者陣容確認後公布。
        </>
      ),
    },
  },
};

const AgendaPage2026 = ({
  initialCfpPhase,
}: {
  initialCfpPhase: CfpPhase;
}) => {
  const { locale } = useLanguage();
  const copy = COPY[locale];
  const [activeDay, setActiveDay] = useState<DayId>("day1");

  return (
    <div className={`${homeStyles.page} ${styles.page}`} data-day={activeDay}>
      <Header2026 activeHref="/agenda" initialCfpPhase={initialCfpPhase} />

      <main className={styles.main} id="agenda">
        <div className={styles.shell}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 className={styles.title}>
              {copy.title}
              <span>.</span>
            </h1>
            <p className={styles.lede}>{copy.lede}</p>
          </header>

          <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
            {copy.days.map((day) => (
              <button
                key={day.id}
                className={styles.dayTab}
                type="button"
                role="tab"
                aria-selected={activeDay === day.id}
                onClick={() => setActiveDay(day.id)}
              >
                <span className={styles.dayTabDate}>{day.date}</span>
                <span className={styles.dayTabName}>{day.name}</span>
              </button>
            ))}
          </div>

          {activeDay === "day1" ? (
            <section className={styles.panel} aria-label={copy.day1.bandName}>
              <div className={styles.bandCard}>
                <span className={styles.bandTag}>{copy.day1.bandTag}</span>
                <h2 className={styles.bandName}>{copy.day1.bandName}</h2>
                <p className={styles.bandSub}>{copy.day1.bandSub}</p>
              </div>

              <p className={styles.sectionLabel}>{copy.day1.sectionLabel}</p>
              <div className={styles.pillars}>
                {copy.day1.pillars.map((pillar) => (
                  <article className={styles.pillar} key={pillar.n}>
                    <span className={styles.pillarNum} aria-hidden="true">
                      {pillar.n}
                    </span>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </article>
                ))}
              </div>

              <p className={styles.note}>{copy.day1.note}</p>
            </section>
          ) : (
            <section className={styles.panel} aria-label={copy.day2.bandName}>
              <div className={`${styles.bandCard} ${styles.bandCardAlt}`}>
                <span className={styles.bandTag}>{copy.day2.bandTag}</span>
                <h2 className={styles.bandName}>{copy.day2.bandName}</h2>
                <p className={styles.bandSub}>{copy.day2.bandSub}</p>
              </div>

              {copy.day2.sessions.map((session) => (
                <div className={styles.session} key={session.heading}>
                  <div className={styles.sessionHead}>
                    <h2>{session.heading}</h2>
                    <span className={styles.sessionRange}>{session.range}</span>
                  </div>
                  {session.slots.map((slot) => (
                    <div
                      className={`${styles.slot} ${
                        slot.format === "panel" ? styles.slotPanel : ""
                      }`}
                      key={slot.time + slot.title}
                    >
                      <div className={styles.slotTime}>
                        {slot.time}
                        <span className={styles.slotDur}>{slot.dur}</span>
                      </div>
                      <div>
                        <p className={styles.slotTitle}>{slot.title}</p>
                        <p className={styles.slotDesc}>{slot.desc}</p>
                        <div className={styles.slotFooter}>
                          <span
                            className={`${styles.fmt} ${
                              slot.format === "panel" ? styles.fmtPanel : styles.fmtTalk
                            }`}
                          >
                            {slot.format === "panel" ? copy.fmtPanel : copy.fmtTalk}
                          </span>
                          <span className={styles.tag}>{slot.tag}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {session.range === MORNING_RANGE && (
                    <div className={styles.break}>
                      <div className={styles.slotTime}>12:00</div>
                      <div className={styles.breakLabel}>{copy.day2.breakLabel}</div>
                    </div>
                  )}
                </div>
              ))}

              <p className={styles.note}>{copy.day2.note}</p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default AgendaPage2026;
