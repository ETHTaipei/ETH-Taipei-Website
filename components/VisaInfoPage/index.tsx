import Header2026 from "@/components/Layout/Header2026";
import t from "@/public/constant/content";
import {
  invitationLetterUrl,
  telegramUrl,
  visaUrl,
} from "@/public/constant/urls";

import homeStyles from "@/components/HomePage/Home2026.module.css";
import styles from "./VisaInfoPage.module.css";

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const VisaInfoPage = () => (
  <div className={`${homeStyles.page} ${styles.page}`}>
    <Header2026 activeHref="/visainfo#info" />

    <main className={styles.main} id="info">
      <div className={styles.shell}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>ETHTAIPEI · TRAVEL INFO</p>
          <h1 className={styles.title}>
            Visa <span>Info</span>
          </h1>
        </header>

        <section className={styles.cards} aria-label="Taiwan visa information">
          <article className={styles.card}>
            <span className={styles.cardNumber} aria-hidden="true">01</span>
            <h2>{t.visa.visaQuestion1}</h2>
            <p>
              {t.visa.visaAnswer1Part1}
              <ExternalLink href={visaUrl}>{t.visa.BureauOfConsularAffairs}</ExternalLink>
              {t.visa.visaAnswer1Part2}
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardNumber} aria-hidden="true">02</span>
            <h2>{t.visa.visaQuestion2}</h2>
            <p>
              {t.visa.visaAnswer2Part1}
              <br />
              {t.visa.visaAnswer2Part2}
              <ExternalLink href={invitationLetterUrl}>{t.visa.form}</ExternalLink>
              {t.visa.visaAnswer2Part3}
              <ExternalLink href={telegramUrl}>{t.visa.telegram}</ExternalLink>
              {t.visa.visaAnswer2Part4}
            </p>
          </article>
        </section>
      </div>
    </main>
  </div>
);

export default VisaInfoPage;
