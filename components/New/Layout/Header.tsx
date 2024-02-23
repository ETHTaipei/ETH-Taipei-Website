import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import t from "@/public/constant/content";
import {
  discordUrl,
  hackathonUrl,
  sideEventApplyUrl,
  speakerApplyUrl,
  sponsorApplyUrl,
  telegramUrl,
  tickSiteUrl,
  twitterUrl,
} from "@/public/constant/urls";
import logoImg from "@/public/images/horizontal-transparent.png";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import {
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSocialMediaOnClick = (url: string) => {
    openNewTab(url);
  };

  return (
    <Container>
      <LogoContainer>
        <Link href={"/"}>
          <Image
            src={logoImg}
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </LogoContainer>
      <NavContainer>
        <NavItemExternal url={tickSiteUrl} label={t.navs.ticket} />
        <NavItemExternal url={hackathonUrl} label={t.navs.hackathon} />
        <NavGroupApply />
        <NavItemInternal url={"/faq"} label={t.navs.faq} />
      </NavContainer>
      <MenuContainer>
        <SocialMediaContainer>
          <IconButton onClick={() => handleSocialMediaOnClick(twitterUrl)}>
            <Icon icon={faTwitter} />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaOnClick(telegramUrl)}>
            <Icon icon={faTelegram} />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaOnClick(discordUrl)}>
            <Icon icon={faDiscord} />
          </IconButton>
        </SocialMediaContainer>
        <MenuBtn onClick={() => setIsMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} fontSize={30} />
        </MenuBtn>
        <Menu open={isMenuOpen}></Menu>
      </MenuContainer>
    </Container>
  );
};

function NavItemInternal({ url, label }: { url: string; label: string }) {
  return (
    <NavItem>
      <Link href={url}>{label}</Link>
    </NavItem>
  );
}

function NavItemExternal({ url, label }: { url: string; label: string }) {
  return (
    <NavItem>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    </NavItem>
  );
}

function NavGroupApply() {
  return (
    <NavGroupContainer>
      <NavItem>{t.navs.apply}</NavItem>
      <NavGroupList>
        <NavGroupListItem>
          <Link
            href={speakerApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navs.applyToSpeak}
          </Link>
        </NavGroupListItem>
        <NavGroupListItem>
          <Link
            href={sideEventApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navs.applyToSideEvent}
          </Link>
        </NavGroupListItem>
        <NavGroupListItem>
          <Link
            href={sponsorApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navs.applyToSponsor}
          </Link>
        </NavGroupListItem>
      </NavGroupList>
    </NavGroupContainer>
  );
}

export default Header;

const Container = styled.nav`
  font-family: "Rammetto One";
  background-color: black;

  position: fixed;
  display: grid;
  grid-template-columns: 150px 1fr auto;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 100;

  color: white;
  font-size: 14px;
  padding: 0 50px;
`;

const LogoContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 60px;
  padding: 0 60px;
`;

const NavItem = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavGroupContainer = styled.div`
  position: relative;
  height: 100%;
`;

const NavGroupList = styled.ul`
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  width: max-content;

  background-color: white;
  padding: 16px;
  border-radius: 8px;

  ${NavGroupContainer}:hover & {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`;

const NavGroupListItem = styled.li`
  color: ${Colors.pennBlue};
  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const IconButton = styled.button`
  cursor: pointer;
  color: white;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const MenuBtn = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 992px) {
    display: block;
  }
`;

const Menu = styled.div<{ open: boolean }>``;
