import { useT } from "@/contexts/LanguageContext";
import Link from "next/link";
import type { MouseEvent } from "react";

import styles from "@/components/HomePage/Home2026.module.css";

type HeaderNavLinksProps = {
  activeHref: string;
  isHomepage?: boolean;
  onNavigate?: () => void;
};

type NavigationLinkProps = {
  ariaHasPopup?: boolean;
  children: React.ReactNode;
  className?: string;
  href: string;
  isHomepage: boolean;
  onNavigate?: () => void;
};

const NavigationLink = ({
  ariaHasPopup,
  children,
  className,
  href,
  isHomepage,
  onNavigate,
}: NavigationLinkProps) => {
  const sharedProps = {
    "aria-haspopup": ariaHasPopup ? ("true" as const) : undefined,
    className,
  };

  if (isHomepage && href.startsWith("#")) {
    const handleSamePageNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
      if (!onNavigate) return;

      const target = document.getElementById(href.slice(1));
      if (!target) {
        onNavigate();
        return;
      }

      event.preventDefault();
      onNavigate();
      window.history.pushState(null, "", href);

      window.requestAnimationFrame(() => {
        const alignTarget = () => target.scrollIntoView({ block: "start" });

        if ("onscrollend" in window) {
          window.addEventListener("scrollend", alignTarget, { once: true });
        } else {
          window.setTimeout(alignTarget, 1200);
        }

        alignTarget();
      });
    };

    return (
      <a href={href} onClick={handleSamePageNavigation} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onNavigate} {...sharedProps}>
      {children}
    </Link>
  );
};

const HeaderNavLinks = ({
  activeHref,
  isHomepage = false,
  onNavigate,
}: HeaderNavLinksProps) => {
  const t = useT();
  const homeHref = (anchor: string) =>
    `${isHomepage ? "" : "/"}#${anchor}`;

  const links = [
    { label: t.hero.nav.home, href: homeHref("home") },
    { label: t.hero.nav.agenda, href: "/agenda" },
    { label: t.hero.nav.speakers, href: homeHref("speakers") },
    { label: t.hero.nav.venue, href: homeHref("venue") },
    { label: t.hero.nav.visa, href: "/visainfo#info" },
  ];
  const aboutLinks = [
    { label: t.hero.nav.what, href: homeHref("about") },
    { label: t.hero.nav.events, href: homeHref("events") },
    { label: t.hero.nav.recap, href: homeHref("recap") },
    { label: t.hero.nav.sponsors, href: homeHref("sponsors") },
    { label: t.hero.nav.partners, href: homeHref("partners") },
  ];
  const aboutIsActive = aboutLinks.some(({ href }) => activeHref === href);

  return (
    <>
      {links.map(({ label, href }) => (
        <NavigationLink
          className={activeHref === href ? styles.navActive : undefined}
          href={href}
          isHomepage={isHomepage}
          key={href}
          onNavigate={onNavigate}
        >
          {label}
        </NavigationLink>
      ))}
      <div className={styles.navGroup}>
        <NavigationLink
          ariaHasPopup
          className={aboutIsActive ? styles.navActive : undefined}
          href={homeHref("about")}
          isHomepage={isHomepage}
          onNavigate={onNavigate}
        >
          {t.hero.nav.about}
          <svg
            className={styles.navChevron}
            viewBox="0 0 12 8"
            aria-hidden="true"
          >
            <path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </NavigationLink>
        <div className={styles.navDropdown}>
          {aboutLinks.map(({ label, href }) => (
            <NavigationLink
              className={activeHref === href ? styles.navActive : undefined}
              href={href}
              isHomepage={isHomepage}
              key={href}
              onNavigate={onNavigate}
            >
              {label}
            </NavigationLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderNavLinks;
