import Image from "next/image";
import { useT } from "@/contexts/LanguageContext";
import { FLAGS } from "@/public/constant/flags";
import styles from "./Sponsors.module.css";

type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  logo: string;
  tier: SponsorTier;
  url?: string;
};

const SPONSORS: Sponsor[] = [
  {
    name: "BSOS",
    logo: "/images/sponsors/bsos-white.png",
    tier: "gold",
    url: "http://bsos.co/",
  },
];

const TIERS: Array<{ id: SponsorTier; label: string }> = [
  { id: "platinum", label: "Platinum" },
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
  { id: "bronze", label: "Bronze" },
];

// Keep tier-based sizing and grouping active without publishing the labels yet.
// Flip this once the final sponsor lineup and tier naming are confirmed.
const SHOW_SPONSOR_TIER_LABELS = false;

const Sponsors = () => {
  const t = useT();
  const visibleTiers = TIERS.map((tier) => ({
    ...tier,
    sponsors: SPONSORS.filter((sponsor) => sponsor.tier === tier.id),
  })).filter((tier) => tier.sponsors.length > 0);

  if (!FLAGS.showSponsors || visibleTiers.length === 0) return null;

  return (
    <section className={styles.section} id="sponsors">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span>ECOSYSTEM</span>
            <span aria-hidden="true">{"//"}</span>
            <span>2026</span>
          </div>
          <h2 className={styles.title}>
            <Image
              className={styles.titleIcon}
              src="/images/icons/sponsors-heart.svg"
              alt=""
              width={48}
              height={48}
            />
            {t.homepage.sponsors}
          </h2>
          <p className={styles.subtitle}>{t.homepage.sponsorSubtitle}</p>
        </header>

        <div className={styles.tiers}>
          {visibleTiers.map((tier) => (
            <div className={styles.tier} data-tier={tier.id} key={tier.id}>
              {SHOW_SPONSOR_TIER_LABELS && (
                <div className={styles.tierHeading}>
                  <span className={styles.rule} aria-hidden="true" />
                  <div className={styles.tierLabel}>
                    <h3>{tier.label}</h3>
                  </div>
                  <span className={styles.rule} aria-hidden="true" />
                </div>
              )}

              <div className={styles.sponsorGrid}>
                {tier.sponsors.map((sponsor) => {
                  const href = sponsor.url || "#";
                  const isExternal = href !== "#";

                  return (
                    <a
                      className={styles.sponsorCard}
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={`${sponsor.name} website`}
                      key={sponsor.name}
                    >
                      <span className={styles.corner} aria-hidden="true" />
                      <Image
                        className={styles.sponsorLogo}
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={2544}
                        height={673}
                        sizes="(max-width: 768px) 70vw, 320px"
                      />
                      <span className={styles.visit} aria-hidden="true">
                        VISIT <span>↗</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
