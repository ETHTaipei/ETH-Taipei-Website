"use client";

import {
  faBars,
  faXmark,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import styled from "styled-components";

import t from "@/public/constant/content";
import { FLAGS } from "@/public/constant/flags";
import {
  discordUrl,
  sideEventApplyUrl,
  speakerApplyUrl,
  sponsorApplyUrl,
  telegramUrl,
  tickSiteUrl,
  xUrl,
} from "@/public/constant/urls";
import { useRouting } from "@/public/utils/common";
import Colors from "@/styles/colors";
import XIcon from "@/public/images/social-icons/x_icon.svg";
import TelegramIcon from "@/public/images/social-icons/telegram_icon.svg";
import DiscordIcon from "@/public/images/social-icons/discord_icon.svg";

const ImageButton = ({
  url,
  src,
  percent,
}: {
  url: string;
  src: string;
  percent: string;
}) => (
  <CircleButton as="a" href={url} target="_blank">
    <Image
      src={src}
      alt={url}
      style={{
        objectFit: "contain",
        width: `${percent}%`,
        height: `${percent}%`,
      }}
    />
  </CircleButton>
);

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  percent: string;
}

// undone paths are set to "" to avoid onClick
const isNonEmptyPath = (path: string) => path !== "";
const navItems = [
  { label: t.navs.home, path: "/", disabled: false },
  { label: t.navs.agenda, path: "/agenda#info", disabled: !FLAGS.showAgenda },
  { label: t.navs.event, path: "/#events", disabled: false },
  {
    label: t.navs.apply,
    path: "/#calltoaction",
    disabled: !FLAGS.showApplyCTAs && !speakerApplyUrl,
  },
  { label: t.navs.venue, path: "/#venue", disabled: false },
  { label: t.navs.community, path: "/community#info", disabled: false },
  { label: t.navs.visaInfo, path: "/visainfo#info", disabled: false },
];

const isApply = (label: string) => label === t.navs.apply;
const applyDropdownItems = [
  { label: t.navs.toSpeak, url: speakerApplyUrl },
  { label: t.navs.toSponsor, url: sponsorApplyUrl },
  { label: t.navs.sideEvent, url: sideEventApplyUrl },
];

const PagesNav = () => {
  const [showApplyDropdown, setShowApplyDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { handleOnClickExternalLink, handleOnClickInternalLink } = useRouting();

  // 200ms delay before hiding s.t. applyDropdown won't disappear so fast
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowApplyDropdown(false);
    }, 200);
  };

  const handleMouseEnter = (label: string, disabled: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isApply(label) && !disabled) {
      setShowApplyDropdown(true);
    }
  };

  return (
    <PagesNavContainer>
      {navItems.map(({ label, path, disabled }) => (
        <NavButtonContainer
          key={label}
          onMouseEnter={() => handleMouseEnter(label, disabled)}
          onMouseLeave={handleMouseLeave}
        >
          <NavButton
            as="button"
            disabled={disabled}
            title={disabled ? "Coming soon" : undefined}
            onClick={() => {
              if (disabled) return;
              if (isNonEmptyPath(path)) handleOnClickInternalLink(path);
            }}
          >
            {label}
            {disabled && <TbaBadge>TBA</TbaBadge>}
          </NavButton>
          {isApply(label) && !disabled && showApplyDropdown && (
            <ApplyDropdown>
              {applyDropdownItems.map((item) => {
                const itemDisabled = !item.url;
                return (
                  <ApplyDropdownItem
                    key={item.label}
                    $disabled={itemDisabled}
                    title={itemDisabled ? "Coming soon" : undefined}
                    onClick={() => {
                      if (itemDisabled) return;
                      handleOnClickExternalLink(item.url);
                    }}
                  >
                    {item.label}
                    {itemDisabled && <TbaBadge>TBA</TbaBadge>}
                  </ApplyDropdownItem>
                );
              })}
            </ApplyDropdown>
          )}
        </NavButtonContainer>
      ))}
    </PagesNavContainer>
  );
};

const socialLinks: SocialLink[] = [
  {
    name: "X",
    url: xUrl,
    icon: XIcon,
    percent: "50",
  },
  {
    name: "Telegram",
    url: telegramUrl,
    icon: TelegramIcon,
    percent: "55",
  },
  {
    name: "Discord",
    url: discordUrl,
    icon: DiscordIcon,
    percent: "60",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleOnClickExternalLink, handleOnClickInternalLink } = useRouting();

  const SocialLinks = () => (
    <>
      {socialLinks.map(({ url, icon, percent, name }: SocialLink) => (
        <ImageButton url={url} src={icon} percent={percent} key={name} />
      ))}
    </>
  );

  const MenuButtonXOrBars = ({
    isOpen,
    iconWhenOpen,
    iconWhenClose,
  }: {
    isOpen: boolean;
    iconWhenOpen: IconDefinition;
    iconWhenClose: IconDefinition;
  }) => (
    <MenuButton onClick={() => setIsMobileMenuOpen(!isOpen)}>
      <FontAwesomeIcon
        icon={isOpen ? iconWhenOpen : iconWhenClose}
        fontSize={27}
      />
    </MenuButton>
  );

  return (
    <>
      <HeaderContainer>
        <Logo>
          <Image
            src="/images/social-icons/ethtaipei_logo.svg"
            alt="ETH Taipei Logo"
            fill
            style={{ objectFit: "contain" }}
            onClick={() => handleOnClickInternalLink("/")}
          />
        </Logo>

        <PagesNav />

        <SocialAndTicketButtonsContainer>
          <SocialContainer className="social-container">
            <SocialLinks />
          </SocialContainer>

          {FLAGS.showTickets && (
            <TicketButton
              className="ticket-button"
              onClick={() => handleOnClickExternalLink(tickSiteUrl)}
            >
              {t.navs.ticket}
            </TicketButton>
          )}
        </SocialAndTicketButtonsContainer>

        <MenuButtonXOrBars
          isOpen={isMobileMenuOpen}
          iconWhenOpen={faXmark}
          iconWhenClose={faBars}
        />
      </HeaderContainer>

      <BarsMenu open={isMobileMenuOpen}>
        <BarsMenuContent>
          {navItems.map(({ label, path, disabled }) => (
            <div key={label}>
              <BarsMenuLink
                $disabled={disabled}
                onClick={() => {
                  if (disabled) return;
                  if (isNonEmptyPath(path)) {
                    handleOnClickInternalLink(path);
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {label}
                {disabled && <TbaBadge>TBA</TbaBadge>}
              </BarsMenuLink>
              {isApply(label) && !disabled && (
                <>
                  {applyDropdownItems.map((item) => {
                    const itemDisabled = !item.url;
                    return (
                      <BarsMenuLink
                        key={item.label}
                        className="apply-sub-item"
                        $disabled={itemDisabled}
                        onClick={() => {
                          if (itemDisabled) return;
                          handleOnClickExternalLink(item.url);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                        {itemDisabled && <TbaBadge>TBA</TbaBadge>}
                      </BarsMenuLink>
                    );
                  })}
                </>
              )}
            </div>
          ))}
          {FLAGS.showTickets && (
            <BarsMenuLink
              onClick={() => {
                handleOnClickExternalLink(tickSiteUrl);
                setIsMobileMenuOpen(false);
              }}
            >
              {t.navs.ticket}
            </BarsMenuLink>
          )}
          <SocialContainer>
            <SocialLinks />
          </SocialContainer>
        </BarsMenuContent>
      </BarsMenu>
    </>
  );
};

export default Header;

const breakpointWidth = "992px";
const componentHeight = "40px";
const headerShrunkHeight = "50px";
const smallGap = "16px";
const border = `2px solid ${Colors.borderGray}`;
const fontWeight = "500";
const fontSize = "16px";

const HeaderContainer = styled.header`
  background-color: ${Colors.neonGreen};
  border: ${border};
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 150px 1fr auto;
  padding: 0 25px;

  /* the second child is PagesNav */
  & > *:nth-child(2) {
    justify-self: center;
  }

  @media (max-width: ${breakpointWidth}) {
    height: ${headerShrunkHeight};
    padding: 0;
    grid-template-columns: 150px 1fr auto;
  }
`;

const Logo = styled.div`
  position: relative;
  cursor: pointer;
  height: ${componentHeight};
  margin: auto 0;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpointWidth}) {
    height: 25px;
  }
`;

const SocialAndTicketButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${smallGap};

  // prioritize hiding socials
  @media (max-width: 1075px) {
    .social-container {
      display: none;
    }
  }

  @media (max-width: ${breakpointWidth}) {
    .social-container,
    .ticket-button {
      display: none;
    }
  }
`;

const BaseButton = styled.div`
  background-color: ${Colors.brightBlue};
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CircleButton = styled(BaseButton)`
  width: ${componentHeight};
  height: ${componentHeight};
  border-radius: 50%;

  @media (max-width: ${breakpointWidth}) {
    width: min(${componentHeight}, 10vw);
    height: min(${componentHeight}, 10vw);
  }
`;

const TicketButton = styled(BaseButton)`
  padding: 0 20px;
  border-radius: 24px;
  width: 115px;
  height: ${componentHeight};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  white-space: nowrap;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    color: ${Colors.neonGreen};
  }
`;

const BarsMenu = styled.div<{ open: boolean }>`
  position: fixed;
  border: ${border};
  border-top: none;
  box-sizing: border-box;
  top: ${headerShrunkHeight}; // use headerShrunkHeight for its distance to top
  right: 0;
  width: 40vw;
  max-width: 40vw;
  min-width: 191px;
  z-index: 98;
  background-color: ${Colors.brightBlue};
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.open ? "0" : "-100%")});
  border-bottom: 2px solid ${Colors.borderGray};

  @media (min-width: ${breakpointWidth}) {
    display: none;
  }
`;

const BarsMenuLink = styled.div<{ $disabled?: boolean }>`
  color: white;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  padding: 8px 4px;
  font-size: 18px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: ${(p) => (p.$disabled ? 0.55 : 1)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    color: ${(p) => (p.$disabled ? "white" : Colors.neonGreen)};
    opacity: ${(p) => (p.$disabled ? 0.55 : 1)};
  }
`;

const BarsMenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${smallGap};
  color: white;
  align-items: center;
  font-weight: ${fontWeight};

  ${BarsMenuLink}.apply-sub-item {
    font-size: ${fontSize};
    font-weight: 200;
  }
`;

// place here for using BarsMenuContent
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${smallGap};
  margin: 0 auto;

  ${BarsMenuContent} & {
    margin: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > * {
      width: 32px;
      height: 32px;
    }
  }
`;

const MenuButton = styled.div`
  background: none;
  border: ${border};
  cursor: pointer;
  display: none;
  width: 48px;
  height: 48px;
  color: ${Colors.borderGray};
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpointWidth}) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    height: 100%;
    border-right: none;
    border-top: none;
    border-bottom: none;
  }
`;

const PagesNavContainer = styled.nav`
  background-color: white;
  height: ${componentHeight};
  border: ${border};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  margin: auto 0;
  width: fit-content;

  @media (max-width: ${breakpointWidth}) {
    display: none;
  }
`;

const NavButtonContainer = styled.div`
  position: relative;
`;

const NavButton = styled.button`
  font-family: inherit;
  background-color: "white";
  color: ${Colors.borderGray};
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  min-width: max-content;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${Colors.brightBlue};
    color: white;
  }

  &:disabled {
    color: ${Colors.gray3 || "#9aa0a6"};
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: transparent;
    color: ${Colors.gray3 || "#9aa0a6"};
  }
`;

const TbaBadge = styled.span`
  font-family: "W95fa";
  font-size: 10px;
  line-height: 1;
  padding: 2px 6px;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.12);
  color: inherit;
`;

const ApplyDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: ${border};
  border-radius: 12px;
  padding: 4px;
  margin-top: 6px;
  min-width: 100px;
  z-index: 99;
`;

const ApplyDropdownItem = styled.div<{ $disabled?: boolean }>`
  padding: 8px 16px;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  color: ${Colors.borderGray};
  font-size: ${fontSize};
  white-space: nowrap;
  transition: all 0.3s ease;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  opacity: ${(p) => (p.$disabled ? 0.55 : 1)};

  &:hover {
    background-color: ${(p) =>
      p.$disabled ? "transparent" : Colors.brightBlue};
    color: ${(p) => (p.$disabled ? Colors.borderGray : "white")};
  }
`;
