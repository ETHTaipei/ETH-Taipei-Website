import t, { dateDayMonthYear, year } from "@/public/constant/content";
import { FLAGS } from "@/public/constant/flags";
import {
  lumaEmbedUrl,
  lumaUrl,
  discordUrl,
  speakerApplyUrl,
  sponsorApplyUrl,
  telegramUrl,
  tickSiteUrl,
  xUrl,
} from "@/public/constant/urls";
import Image from "next/image";
import Link from "next/link";
import {
  PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Home2026.module.css";
import DeferredIframe from "./DeferredIframe";

type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Agenda", disabled: true },
  { label: "Events", href: "#events" },
  { label: "Apply", href: speakerApplyUrl, external: true },
  { label: "Venue", href: "#venue" },
  { label: "Community", href: "#community" },
  { label: "Visa", href: "/visainfo#info" },
];

const tickerItems = [
  "PROTOCOL RESEARCH",
  "ACCOUNT ABSTRACTION",
  "ZERO KNOWLEDGE",
  "LAYER 2",
  "WALLETS",
  "SECURITY",
  "CONSUMER CRYPTO",
  "TAIPEI BUILDERS",
];

const socialLinks = [
  { label: "Discord", href: discordUrl, icon: "/images/social-icons/discord_icon.svg" },
  { label: "X", href: xUrl, icon: "/images/social-icons/x_icon.svg" },
  { label: "Telegram", href: telegramUrl, icon: "/images/social-icons/telegram_icon.svg" },
];

const venueMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  t.homepage.venueAddress
)}`;

type Countdown = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

const emptyCountdown: Countdown = {
  days: "--",
  hours: "--",
  mins: "--",
  secs: "--",
};

const pad = (value: number) => String(value).padStart(2, "0");

const getCountdown = (): Countdown => {
  const target = new Date("2026-09-13T09:00:00+08:00").getTime();
  let diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 864e5);
  diff -= days * 864e5;
  const hours = Math.floor(diff / 36e5);
  diff -= hours * 36e5;
  const mins = Math.floor(diff / 6e4);
  diff -= mins * 6e4;
  const secs = Math.floor(diff / 1e3);

  return {
    days: pad(days),
    hours: pad(hours),
    mins: pad(mins),
    secs: pad(secs),
  };
};

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 1 14.5 9.5 23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5L12 1Z"
      fill="currentColor"
    />
  </svg>
);

const DottedStar = ({ className, id }: { className: string; id: string }) => (
  <svg className={className} viewBox="0 0 96 96" aria-hidden="true">
    <defs>
      <pattern id={`${id}-dots`} width="2" height="2" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r=".62" fill="currentColor" />
      </pattern>
      <radialGradient id={`${id}-fade`} cx="50%" cy="50%" r="52%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="42%" stopColor="#fff" stopOpacity=".9" />
        <stop offset="78%" stopColor="#fff" stopOpacity=".4" />
        <stop offset="100%" stopColor="#fff" stopOpacity=".08" />
      </radialGradient>
      <mask id={`${id}-mask`}>
        <path
          d="m48 4 10 34 34 10-34 10-10 34-10-34L4 48l34-10L48 4Z"
          fill={`url(#${id}-fade)`}
        />
      </mask>
    </defs>
    <rect width="96" height="96" fill={`url(#${id}-dots)`} mask={`url(#${id}-mask)`} />
  </svg>
);

const NavLinks = ({
  activeHref,
  onNavigate,
}: {
  activeHref?: string;
  onNavigate?: () => void;
}) => (
  <>
    {navItems.map((item) => {
      if (item.disabled) {
        return (
          <span
            key={item.label}
            className={styles.navDisabled}
            aria-disabled="true"
            aria-label={`${item.label}, to be announced`}
          >
            <span>{item.label}</span>
            <span className={styles.navTba} aria-hidden="true">TBA</span>
          </span>
        );
      }

      if (!item.href) return null;

      return item.href.startsWith("/") ? (
        <Link
          className={activeHref === item.href ? styles.navActive : undefined}
          key={item.label}
          href={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ) : (
        <a
          className={activeHref === item.href ? styles.navActive : undefined}
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      );
    })}
  </>
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

const Hero2026 = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState<Countdown>(emptyCountdown);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const tick = () => setCountdown(getCountdown());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const targets = ["#home", "#events", "#community", "#venue"];
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const visibleTop = 88;
      const visibleBottom = window.innerHeight * 0.45;
      let nextHref = "";

      for (const href of targets) {
        const element = document.querySelector<HTMLElement>(href);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.bottom > visibleTop && rect.top < visibleBottom) {
          nextHref = href;
        }
      }

      setActiveHref((current) => (current === nextHref ? current : nextHref));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const layers = Array.from(hero.querySelectorAll<HTMLElement>("[data-depth]"));
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const move = () => {
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        const isGrid = layer.dataset.layer === "grid";
        const rotate = isGrid ? 0 : 3.2;
        const gridBase = isGrid ? " rotateX(62deg) translateY(16%)" : "";
        layer.style.transform = `translate3d(${-currentX * depth}px, ${
          -currentY * depth
        }px, 0) rotateY(${currentX * rotate}deg) rotateX(${
          -currentY * rotate
        }deg)${gridBase}`;
      });
      frame = window.requestAnimationFrame(move);
    };

    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);
    frame = window.requestAnimationFrame(move);
    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

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

  const magnetize = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    event.currentTarget.style.transform = `translate(${x * 0.06}px, ${y * 0.08}px)`;
  };
  const resetMagnet = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <>
      <header className={styles.topbar}>
        <Link className={styles.brand} href="/" aria-label="ETHTaipei home">
          <Star className={styles.brandMark} />
          <span>ETHTaipei</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <NavLinks activeHref={activeHref} />
        </nav>
        <div className={styles.topbarActions}>
          <SocialLinks />
          <a
            className={styles.ticket}
            href={tickSiteUrl}
            target="_blank"
            rel="noreferrer"
            onPointerMove={magnetize}
            onPointerLeave={resetMagnet}
          >
            Buy Ticket
          </a>
        </div>
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
        <NavLinks activeHref={activeHref} onNavigate={() => setMenuOpen(false)} />
        <SocialLinks className={styles.mobileSocialLinks} />
      </nav>

      <section ref={heroRef} className={styles.hero} id="home" aria-label={`ETHTaipei ${year}`}>
        <div className={styles.videoFallback} />
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-2026/poster.png"
        >
          <source
            src="/videos/2026/hero.mp4"
            type="video/mp4"
            media="(min-width: 641px)"
          />
        </video>
        <div className={styles.shade} />
        <div className={styles.grid} data-depth="6" data-layer="grid" />

        <DottedStar className={styles.orbital} id="orbital" />

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>ETHTAIPEI.ORG · TAIWAN</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroEventName}>ETHTaipei</span>
            <span className={styles.heroYear}>{year}</span>
          </h1>
          <p className={styles.lede}>
            Two days where Taiwan&apos;s builders meet the global Ethereum stack,
            from core protocol research to account abstraction and consumer crypto.
          </p>
          <div className={styles.actions} id="apply">
            <a
              className={`${styles.ticket} ${styles.heroCta} ${styles.heroCtaSecondary}`}
              href={speakerApplyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to Speak
            </a>
            <a
              className={`${styles.ticket} ${styles.heroCta} ${styles.heroCtaPrimary}`}
              href={tickSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Ticket
            </a>
            <a
              className={`${styles.ticket} ${styles.heroCta} ${styles.heroCtaTertiary}`}
              href={sponsorApplyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor Inquiry
            </a>
          </div>
        </div>

        <aside className={styles.dataStack} data-depth="42" aria-label="Event details">
          <div className={styles.countdown} aria-label={`Countdown to ETHTaipei ${year}`}>
            {(
              [
                [countdown.days, "Days"],
                [countdown.hours, "Hours"],
                [countdown.mins, "Mins"],
                [countdown.secs, "Secs"],
              ] as const
            ).map(([value, label]) => (
              <div className={styles.timebox} key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <article className={styles.venueCard}>
            <div className={styles.venueMeta}>
              <time className={styles.venueDate} dateTime="2026-09-13/2026-09-15">
                {dateDayMonthYear}
              </time>
              <span className={styles.venueType}>Venue</span>
            </div>
            <h2>{t.homepage.venueName}</h2>
            <a
              className={styles.venueAddressLink}
              href={venueMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Google Maps directions to ${t.homepage.venueName}`}
            >
              <svg className={styles.poiIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              </svg>
              <span>{t.homepage.venueAddress}</span>
            </a>
          </article>
          <article className={styles.signalCard}>
            <DottedStar className={styles.spark} id="signal" />
            <div>
              <div className={styles.label}>Builder signal</div>
              <p>
                Protocol labs, L2 teams, wallet designers, ZK researchers, app
                founders, and local Taipei communities in one venue.
              </p>
            </div>
          </article>
        </aside>
      </div>

      <div className={styles.ticker} aria-label="ETHTaipei topics">
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

type EventCardProps = {
  id?: string;
  imageSrc: string;
  name: string;
  description: string;
  date: string;
  buttonText: string;
  href?: string;
};

const CalendarIcon = () => (
  <svg className={styles.dateIcon} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M7 2v3M17 2v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const EventCard = ({ id, imageSrc, name, description, date, buttonText, href }: EventCardProps) => (
  <article className={styles.eventCard} id={id}>
    <div className={styles.eventMedia}>
      {/* Native img keeps the delivered layout's crop and avoids an extra wrapper. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={name} />
      <h3 className={styles.eventName}>{name}</h3>
    </div>
    <div className={styles.eventBody}>
      <p className={styles.eventCopy}>{description}</p>
      <div className={styles.eventFooter}>
        <div className={styles.eventDate}>
          <CalendarIcon />
          <span>{date}</span>
        </div>
        {href ? (
          <a className={`${styles.eventButton} ${styles.eventButtonLive}`} href={href} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        ) : (
          <span className={`${styles.eventButton} ${styles.eventButtonDisabled}`} aria-disabled="true">
            {buttonText}
          </span>
        )}
      </div>
    </div>
  </article>
);

const Events2026 = () => (
  <section className={styles.eventsSection} id="events">
    <div className={styles.eventsWrap}>
      <h2 className={styles.eventsTitle}>
        <Star className={styles.eventsIcon} />
        {t.homepage.eventTitle}
      </h2>
      <p className={styles.eventsSubtitle}>{t.homepage.eventSubTitle}</p>

      <div className={`${styles.eventRow} ${styles.singleEventRow}`}>
        <EventCard
          imageSrc="/images/recap-2024/1.jpg"
          name={t.homepage.eventName_1}
          description={t.homepage.eventDesc_1}
          date={t.homepage.eventDate_1}
          buttonText={t.homepage.eventBtn_1}
          href={tickSiteUrl}
        />
      </div>

      <div className={styles.eventRow}>
        <EventCard
          id="community"
          imageSrc="/images/recap-2024/8.jpg"
          name={t.homepage.eventName_4}
          description={t.homepage.eventDesc_4}
          date={t.homepage.eventDate_4}
          buttonText={t.homepage.eventBtn_4}
          href={lumaUrl}
        />
        {FLAGS.showCommunityCalendar ? (
          <DeferredIframe
            className={styles.eventCalendar}
            title="Events Calendar"
            src={lumaEmbedUrl}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        ) : (
          <aside className={styles.eventCalendarEmpty} aria-label="Community events status">
            <Star className={styles.eventCalendarEmptyIcon} />
            <p>More community events coming soon</p>
          </aside>
        )}
      </div>
    </div>
  </section>
);

const SparkleTrail = () => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (
      !layer ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }
    const palette = ["#f4f5ec", "#cbf101", "#566cff"];
    let lastX = 0;
    let lastY = 0;
    let lastSpawn = 0;

    const spawn = (x: number, y: number) => {
      const sparkle = document.createElement("span");
      sparkle.className = styles.sparkle;
      sparkle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1 14.5 9.5 23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5L12 1Z" fill="currentColor"/></svg>';
      const size = 6 + Math.random() * 12;
      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.random() * 34;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.marginLeft = `${-size / 2}px`;
      sparkle.style.marginTop = `${-size / 2}px`;
      sparkle.style.color =
        palette[Math.random() < 0.72 ? 0 : Math.random() < 0.5 ? 1 : 2];
      sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance - 12}px`);
      sparkle.style.setProperty("--sc", (0.3 + Math.random() * 0.7).toFixed(2));
      sparkle.style.setProperty(
        "--rot",
        `${(Math.random() * 180 - 90).toFixed(0)}deg`
      );
      sparkle.style.setProperty(
        "--life",
        `${(620 + Math.random() * 420).toFixed(0)}ms`
      );
      layer.appendChild(sparkle);
      sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const now = performance.now();
      const moved = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      if (now - lastSpawn < 26 || moved < 5) return;
      lastSpawn = now;
      lastX = event.clientX;
      lastY = event.clientY;
      const count = moved > 60 ? 3 : moved > 26 ? 2 : 1;
      for (let index = 0; index < count; index += 1) {
        spawn(event.clientX + Math.random() * 12 - 6, event.clientY + Math.random() * 12 - 6);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      layer.replaceChildren();
    };
  }, []);

  return <div ref={layerRef} className={styles.sparkleLayer} aria-hidden="true" />;
};

export const Home2026Hero = () => (
  <div className={styles.page}>
    <Hero2026 />
    <SparkleTrail />
  </div>
);

export { Events2026 };
