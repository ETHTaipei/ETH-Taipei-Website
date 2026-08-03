import {
  discordUrl,
  speakerApplyUrl,
  telegramUrl,
  tickSiteUrl,
  xUrl,
} from "@/public/constant/urls";
import {
  type CfpPhase,
  useCfpPhase,
} from "@/components/hooks/useCfpPhase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "@/components/HomePage/Home2026.module.css";
import HeaderNavLinks from "@/components/Layout/HeaderNavLinks";
import LanguageToggle from "@/components/Layout/LanguageToggle";

const socialLinks = [
  { label: "Discord", href: discordUrl, icon: "/images/social-icons/discord_icon.svg" },
  { label: "X", href: xUrl, icon: "/images/social-icons/x_icon.svg" },
  { label: "Telegram", href: telegramUrl, icon: "/images/social-icons/telegram_icon.svg" },
];

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 1 14.5 9.5 23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5L12 1Z"
      fill="currentColor"
    />
  </svg>
);

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`${styles.socialLinks} ${className}`} aria-label="ETHTaipei social links">
    {socialLinks.map((item) => (
      <a
        className={styles.socialLink}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`ETHTaipei on ${item.label}`}
        key={item.label}
      >
        <Image src={item.icon} alt="" width={24} height={24} />
      </a>
    ))}
  </div>
);

const Header2026 = ({
  activeHref,
  initialCfpPhase,
}: {
  activeHref: string;
  initialCfpPhase: CfpPhase;
}) => {
  const cfpPhase = useCfpPhase(initialCfpPhase);
  const isCfpOpen = cfpPhase === "open";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <>
      <header className={styles.topbar}>
        <Link className={styles.brand} href="/#home" aria-label="ETHTaipei home">
          <Star className={styles.brandMark} />
          <span>ETHTaipei</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <HeaderNavLinks activeHref={activeHref} />
        </nav>
        <div className={styles.topbarActions}>
          <LanguageToggle />
          <SocialLinks />
          {isCfpOpen ? (
            <>
              <a
                className={`${styles.ticket} ${styles.headerSecondary}`}
                href={tickSiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buy Ticket
              </a>
              <a
                className={`${styles.ticket} ${styles.headerPrimary}`}
                href={speakerApplyUrl}
              >
                Apply to Speak
              </a>
            </>
          ) : (
            <a
              className={`${styles.ticket} ${styles.headerPrimary}`}
              href={tickSiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Buy Ticket
            </a>
          )}
        </div>
        <a
          className={`${styles.ticket} ${styles.mobileHeaderCta}`}
          href={isCfpOpen ? speakerApplyUrl : tickSiteUrl}
          target={isCfpOpen ? undefined : "_blank"}
          rel={isCfpOpen ? undefined : "noreferrer"}
        >
          {isCfpOpen ? "Apply" : "Tickets"}
        </a>
        <button
          className={styles.menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </header>

      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
      >
        <HeaderNavLinks
          activeHref={activeHref}
          onNavigate={() => setMenuOpen(false)}
        />
        <LanguageToggle className={styles.mobileLangToggle} />
        <SocialLinks className={styles.mobileSocialLinks} />
      </nav>
    </>
  );
};

export default Header2026;
