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
  width,
}: {
  url: string;
  src: string;
  width: number;
}) => (
  <CircleButton as="a" href={url} target="_blank">
    <Image src={src} alt={url} width={width} style={{ objectFit: "contain" }} />
  </CircleButton>
);

const XButton = () => <ImageButton url={xUrl} src={XIcon} width={17} />;
const TelegramButton = () => (
  <ImageButton url={telegramUrl} src={TelegramIcon} width={20} />
);
const DiscordButton = () => (
  <ImageButton url={discordUrl} src={DiscordIcon} width={22} />
);

// LumaButton uses icon and is thus not an ImageButton
const LumaButton = () => (
  <CircleButton as="a" href={lumaUrl} target="_blank">
    <FontAwesomeIcon icon={faCalendar} fontSize={18} color="white" />
  </CircleButton>
);

const Header2025 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const MenuButtonXOrBars = ({
    isOpen,
    icon,
  }: {
    isOpen: boolean;
    icon: IconDefinition;
  }) => (
    <MenuButton onClick={() => setIsMobileMenuOpen(isOpen)}>
      <FontAwesomeIcon icon={icon} fontSize={27} />
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
          <SocialContainer>
            <XButton />
            <TelegramButton />
            <DiscordButton />
            <LumaButton />
          </SocialContainer>

          <TicketButton onClick={() => window.open(tickSiteUrl, "_blank")}>
            {t.navs.ticket}
          </TicketButton>
        </NavButtons>

        <MenuButtonXOrBars isOpen={true} icon={faBars} />
      </HeaderContainer>

      <Menu open={isMobileMenuOpen}>
        <MenuContent>
          <div style={{ textAlign: "right" }}>
            <MenuButtonXOrBars isOpen={false} icon={faXmark} />
          </div>
          <SocialContainer style={{ justifyContent: "center" }}>
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
      </Menu>
    </>
  );
};

export default Header2025;

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

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  position: relative;
  cursor: pointer;
  height: 40px;
  margin: auto 0;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  @media (max-width: 600px) {
    padding: 0 20px;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Menu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  z-index: 101;
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  margin-left: auto;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const TicketButton = styled(BaseButton)`
  padding: 0 20px;
  border-radius: 24px;
  width: 115px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: white;
`;
