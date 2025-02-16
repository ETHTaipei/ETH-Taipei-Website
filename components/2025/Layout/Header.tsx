import {
  faBars,
  faXmark,
  faCalendar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

        <NavButtons>
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
        </NavButtons>

        <MenuButtonXOrBars
          isOpen={isMobileMenuOpen}
          iconWhenOpen={faXmark}
          iconWhenClose={faBars}
        />
      </HeaderContainer>

      <DropdownMenu open={isMobileMenuOpen}>
        <MenuContent>
          <SocialContainer>
            <XButton />
            <TelegramButton />
            <DiscordButton />
            <LumaButton />
          </SocialContainer>
          <TicketButton
            onClick={() => {
              window.open(tickSiteUrl, "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            {t.navs.ticket}
          </TicketButton>
        </MenuContent>
      </DropdownMenu>
    </>
  );
};

export default Header2025;

const breakpointWidth = "768px";
const componentHeight = "40px";
const headerShrunkHeight = "50px";

const HeaderContainer = styled.header`
  background-color: ${Colors.neonGreen};
  border: 2px solid ${Colors.grayBorder};
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 150px 1fr auto;
  padding: 0 25px;

  @media (max-width: ${breakpointWidth}) {
    height: ${headerShrunkHeight};
    padding: 0;
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

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  @media (max-width: ${breakpointWidth}) {
    .social-container {
      display: none;
    }

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
  font-weight: 400;
  white-space: nowrap;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// use headerShrunkHeight directly for its distance to top
const DropdownMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: ${headerShrunkHeight};
  right: 0;
  width: 50vw;
  max-width: 50vw;
  min-width: 191px;
  background-color: ${Colors.brightBlue};
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.open ? "0" : "-100%")});
  z-index: 99;
  border-bottom: 2px solid ${Colors.grayBorder};
  border-left: none;

  @media (min-width: ${breakpointWidth}) {
    display: none;
  }
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;

  ${SocialContainer} {
    justify-content: center;
  }
`;

const MenuButton = styled.div`
  background: none;
  border: 2px solid ${Colors.grayBorder};
  cursor: pointer;
  display: none;
  width: 48px;
  height: 48px;
  border-radius: 4px;
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
    border-radius: 0;
    border-right: none;
    border-top: none;
    border-bottom: none;
  }
`;
