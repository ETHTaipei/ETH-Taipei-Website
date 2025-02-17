import {
  faBars,
  faXmark,
  faCalendar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import styled, { css } from "styled-components";

import useWindowSize from "@/components/hooks/useWindowSize";
import t from "@/public/constant/content";
import {
  discordUrl,
  lumaUrl,
  sideEventApplyUrl,
  speakerApplyUrl,
  sponsorApplyUrl,
  telegramUrl,
  tickSiteUrl,
  xUrl,
} from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import XIcon from "@/public/images/2025/icon/x_icon.svg";
import TelegramIcon from "@/public/images/2025/icon/telegram_icon.svg";
import DiscordIcon from "@/public/images/2025/icon/discord_icon.svg";

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

const XButton = () => <ImageButton url={xUrl} src={XIcon} percent="50" />;
const TelegramButton = () => (
  <ImageButton url={telegramUrl} src={TelegramIcon} percent="55" />
);
const DiscordButton = () => (
  <ImageButton url={discordUrl} src={DiscordIcon} percent="60" />
);

// LumaButton uses icon and is thus not an ImageButton
const LumaButton = () => (
  <CircleButton as="a" href={lumaUrl} target="_blank">
    <FontAwesomeIcon
      icon={faCalendar}
      style={{
        objectFit: "contain",
        width: "50%",
        height: "50%",
      }}
      color="white"
    />
  </CircleButton>
);

const navItems = [
  { label: t.navs.home, path: "/" },
  { label: t.navs.agenda2025, path: "/agenda#info" },
  { label: t.navs.apply, path: "" },
  { label: t.navs.venue, path: "/#venue" },
  { label: t.navs.goldcard, path: "/goldcard#intro" },
  { label: t.navs.brand, path: "" },
];

const applyDropdownItems = [
  { label: t.navs.toSpeak, url: speakerApplyUrl },
  { label: t.navs.toSponsor, url: sponsorApplyUrl },
  { label: t.navs.sideEvent, url: sideEventApplyUrl },
];

const isApply = (label: string) => label === t.navs.apply;

const NavSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showApplyDropdown, setShowApplyDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowApplyDropdown(false);
    }, 300); // 300ms delay before hiding
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isApply(label)) {
      setShowApplyDropdown(true);
    }
  };

  return (
    <NavSectionContainer>
      {navItems.map(({ label, path }: { label: string; path: string }) => (
        <NavButtonWrapper
          key={label}
          onMouseEnter={() => handleMouseEnter(label)}
          onMouseLeave={handleMouseLeave}
        >
          <NavButton
            isActive={pathname === path}
            onClick={() => path !== "" && router.push(path)}
          >
            {label}
          </NavButton>
          {isApply(label) && showApplyDropdown && (
            <ApplyDropdown>
              {applyDropdownItems.map((item) => (
                <ApplyDropdownItem
                  key={item.label}
                  onClick={() => openNewTab(item.url)}
                >
                  {item.label}
                </ApplyDropdownItem>
              ))}
            </ApplyDropdown>
          )}
        </NavButtonWrapper>
      ))}
    </NavSectionContainer>
  );
};

const Header2025 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

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
            src="/images/2025/icon/ethtaipei_logo.svg"
            alt="ETH Taipei Logo"
            fill
            style={{ objectFit: "contain" }}
            onClick={() => router.push("/")}
          />
        </Logo>

        <NavSection />

        <SocialAndTicketButtons>
          <SocialContainer className="social-container">
            <XButton />
            <TelegramButton />
            <DiscordButton />
            <LumaButton />
          </SocialContainer>

          <TicketButton
            className="ticket-button"
            onClick={() => window.open(tickSiteUrl, "_blank")}
          >
            {t.navs.ticket}
          </TicketButton>
        </SocialAndTicketButtons>

        <MenuButtonXOrBars
          isOpen={isMobileMenuOpen}
          iconWhenOpen={faXmark}
          iconWhenClose={faBars}
        />
      </HeaderContainer>

      <DropdownMenu open={isMobileMenuOpen}>
        <MenuContent>
          {navItems.map(({ label, path }: { label: string; path: string }) => (
            <div key={label}>
              <MenuLink
                onClick={() => {
                  if (path !== "") {
                    router.push(path);
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {label}
              </MenuLink>
              {isApply(label) && (
                <>
                  {applyDropdownItems.map((item) => (
                    <MenuLink
                      key={item.label}
                      className="apply-sub-item"
                      onClick={() => {
                        openNewTab(item.url);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </MenuLink>
                  ))}
                </>
              )}
            </div>
          ))}
          <MenuLink
            onClick={() => {
              window.open(tickSiteUrl, "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            {t.navs.ticket}
          </MenuLink>
          <SocialContainer>
            <XButton />
            <TelegramButton />
            <DiscordButton />
            <LumaButton />
          </SocialContainer>
        </MenuContent>
      </DropdownMenu>
    </>
  );
};

export default Header2025;

const breakpointWidth = "768px";
const componentHeight = "40px";
const headerShrunkHeight = "50px";
const bigGap = "24px";
const smallGap = "16px";
const border = `2px solid ${Colors.grayBorder}`;
const fontWeight = "500px";

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
  gap: ${bigGap};

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

const SocialAndTicketButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${smallGap};

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
  font-size: 14px;
  font-weight: ${fontWeight};
  white-space: nowrap;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    color: ${Colors.neonGreen};
  }
`;

// use headerShrunkHeight directly for its distance to top
const DropdownMenu = styled.div<{ open: boolean }>`
  position: fixed;
  border: ${border};
  border-top: none;
  box-sizing: border-box;
  top: ${headerShrunkHeight};
  right: 0;
  width: 40vw;
  max-width: 40vw;
  min-width: 191px;
  z-index: 98;
  background-color: ${Colors.brightBlue};
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.open ? "0" : "-100%")});
  border-bottom: 2px solid ${Colors.grayBorder};

  @media (min-width: ${breakpointWidth}) {
    display: none;
  }
`;

const MenuLink = styled.div`
  color: white;
  cursor: pointer;
  padding: 8px 4px;
  font-size: 18px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${Colors.neonGreen};
    opacity: 1;
  }
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${smallGap};
  color: white;
  align-items: center;
  font-weight: ${fontWeight};

  ${MenuLink}.apply-sub-item {
    font-size: 16px;
    font-weight: 200;
  }
`;

// place here for using MenuContent
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${smallGap};
  margin: 0 auto;

  ${MenuContent} & {
    margin: 0;
    width: 100%;
    justify-content: center;
  }
`;

const MenuButton = styled.div`
  background: none;
  border: ${border};
  cursor: pointer;
  display: none;
  width: 48px;
  height: 48px;
  color: ${Colors.grayBorder};
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

const NavSectionContainer = styled.nav`
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

const NavButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? Colors.brightBlue : "white"};
  color: ${(props) => (props.isActive ? "white" : Colors.grayBorder)};
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: ${fontWeight};
  min-width: max-content;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? Colors.brightBlue : Colors.brightBlue};
    color: white;
  }
`;

const NavButtonWrapper = styled.div`
  position: relative;
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

const ApplyDropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: ${Colors.grayBorder};
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s ease;
  border-radius: 24px;

  &:hover {
    background-color: ${Colors.brightBlue};
    color: white;
  }
`;
