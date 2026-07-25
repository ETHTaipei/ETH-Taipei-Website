import Header2026 from "@/components/Layout/Header2026";
import { useState } from "react";

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

const PILLARS: Pillar[] = [
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
];

const INSTITUTION_SESSIONS: Session[] = [
  {
    heading: "Morning · Custody / Wallet",
    range: "10:00 – 12:00",
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
];

const DAYS: { id: DayId; date: string; name: string }[] = [
  { id: "day1", date: "SEP 13", name: "Cryptonative Day" },
  { id: "day2", date: "SEP 14", name: "Institution Day" },
];

const AgendaPage2026 = () => {
  const [activeDay, setActiveDay] = useState<DayId>("day1");

  return (
    <div className={`${homeStyles.page} ${styles.page}`} data-day={activeDay}>
      <Header2026 activeHref="/agenda" />

      <main className={styles.main} id="agenda">
        <div className={styles.shell}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>ETHTAIPEI 2026 · AGENDA</p>
            <h1 className={styles.title}>
              Agenda<span>.</span>
            </h1>
            <p className={styles.lede}>
              Two days at ETHTaipei 2026: <b>Sep 13 — Cryptonative Day</b> belongs to
              the Ethereum builder community; <b>Sep 14 — Institution Day</b> is built
              for banks and financial institutions. This is a draft — topics and timing
              may change.
            </p>
          </header>

          <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
            {DAYS.map((day) => (
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
            <section className={styles.panel} aria-label="Cryptonative Day">
              <div className={styles.bandCard}>
                <span className={styles.bandTag}>Day 01 · Sep 13 · Main Stage</span>
                <h2 className={styles.bandName}>Cryptonative Day</h2>
                <p className={styles.bandSub}>
                  A day for the Ethereum builder community — from core protocol to
                  consumer apps. Full schedule and speaker lineup in progress.
                </p>
              </div>

              <p className={styles.sectionLabel}>What to Expect</p>
              <div className={styles.pillars}>
                {PILLARS.map((pillar) => (
                  <article className={styles.pillar} key={pillar.n}>
                    <span className={styles.pillarNum} aria-hidden="true">
                      {pillar.n}
                    </span>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </article>
                ))}
              </div>

              <p className={styles.note}>
                <b>Schedule in progress.</b> The full timetable, talk titles, and
                speakers will be announced once the lineup is confirmed. Above are the
                themes this day is expected to cover.
              </p>
            </section>
          ) : (
            <section className={styles.panel} aria-label="Institution Day">
              <div className={`${styles.bandCard} ${styles.bandCardAlt}`}>
                <span className={styles.bandTag}>Day 02 · Sep 14 · Main Stage</span>
                <h2 className={styles.bandName}>Institution Day</h2>
                <p className={styles.bandSub}>
                  A one-day track built for banks and financial institutions — the
                  morning on institutional-grade custody and wallet architecture, the
                  afternoon on RWA and tokenized-equity practice and chain selection.
                  Single track · Main Stage.
                </p>
              </div>

              {INSTITUTION_SESSIONS.map((session) => (
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
                            {slot.format === "panel" ? "Panel" : "Talk"}
                          </span>
                          <span className={styles.tag}>{slot.tag}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {session.range === "10:00 – 12:00" && (
                    <div className={styles.break}>
                      <div className={styles.slotTime}>12:00</div>
                      <div className={styles.breakLabel}>Lunch &amp; Networking</div>
                    </div>
                  )}
                </div>
              ))}

              <p className={styles.note}>
                <b>Tentative schedule.</b> Topics and timing may change; the speaker
                lineup will be announced once confirmed.
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default AgendaPage2026;
