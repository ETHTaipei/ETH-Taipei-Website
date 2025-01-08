import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import useWindowSize from "@/components/hooks/useWindowSize";
import IconTwitterX from "@/components/icons/IconTwitterX";
import t from "@/public/constant/content";
import {
  discordUrl,
  sideEventApplyUrl,
  speakerApplyUrl,
  sponsorApplyUrl,
  telegramUrl,
  tickSiteUrl,
  twitterUrl,
} from "@/public/constant/urls";
import logoImg from "@/public/images/horizontal-transparent.png";
import logoImgW from "@/public/images/logo-eth-tpe-w.png";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleOnClickExternalLink = (url: string) => {
    openNewTab(url);
    setIsMenuOpen(false);
  };

  const handleOnClickInternalLInk = (url: string) => {
    router.push(url);
    setIsMenuOpen(false);
  };

  const handleOnClickLogo = () => handleOnClickInternalLInk("/");
  // const handleOnClickTicket = () => handleOnClickExternalLink(tickSiteUrl);
  const handleOnClickAgenda = () => handleOnClickInternalLInk("/agenda#info");
  // const handleOnClickHackathon = () => handleOnClickExternalLink(hackathonUrl);
  const handleOnClickFAQ = () => handleOnClickInternalLInk("/faq#info");
  const handleOnClickGoldCard = () =>
    handleOnClickInternalLInk("/goldcard#intro");
  const handleOnClickTwitter = () => handleOnClickExternalLink(twitterUrl);
  const handleOnClickTelegram = () => handleOnClickExternalLink(telegramUrl);
  const handleOnClickDiscord = () => handleOnClickExternalLink(discordUrl);
  const handleToSpeak = () => handleOnClickExternalLink(speakerApplyUrl);
  const handleToSponsor = () => handleOnClickExternalLink(sponsorApplyUrl);
  const handleSideEvent = () => handleOnClickExternalLink(sideEventApplyUrl);

  const [isScrolledOverFirstView, setIsScrolledOverFirstView] = useState(false);
  const windowSize = useWindowSize();
  const isLarger768 = windowSize.width > 768;
  const isLarger860 = windowSize.width > 860;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolledOverFirstView(true);
      } else {
        setIsScrolledOverFirstView(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isScrolledOverFirstView={isScrolledOverFirstView}>
      <LogoContainer>
        <Image
          src={isScrolledOverFirstView ? logoImg : logoImgW}
          alt="logo"
          fill
          style={{ objectFit: "contain" }}
          onClick={handleOnClickLogo}
        />
      </LogoContainer>
      <NavContainer>
        {/* <NavItem onClick={handleOnClickTicket}>{t.navs.ticket}</NavItem> */}
        {isLarger768 && (
          <NavItem onClick={handleOnClickAgenda}>{t.navs.agenda}</NavItem>
        )}
        {/* {isLarger768 && (
          <NavItem onClick={handleOnClickHackathon}>{t.navs.hackathon}</NavItem>
        )} */}
        {isLarger860 && (
          <NavGroupContainer>
            <NavItem>{t.navs.apply}</NavItem>
            <NavGroupList>
              <NavGroupListItem onClick={handleToSpeak}>
                {t.navs.toSpeak}
              </NavGroupListItem>
              <NavGroupListItem onClick={handleToSponsor}>
                {t.navs.toSponsor}
              </NavGroupListItem>
              <NavGroupListItem onClick={handleSideEvent}>
                {t.navs.sideEvent}
              </NavGroupListItem>
            </NavGroupList>
          </NavGroupContainer>
        )}
        {isLarger860 && (
          <NavItem onClick={handleOnClickFAQ}>{t.navs.faq}</NavItem>
        )}
        {isLarger860 && (
          <NavItem onClick={handleOnClickGoldCard}>{t.navs.goldcard}</NavItem>
        )}
      </NavContainer>
      <MenuContainer>
        <SocialMediaContainer>
          <IconButton onClick={handleOnClickTwitter}>
            <IconTwitterX
              width={24}
              height={24}
              color={isScrolledOverFirstView ? Colors.pennBlue : "white"}
              opacity={1}
            />
          </IconButton>
          <FontAwesomeIcon
            icon={faTelegram}
            color={isScrolledOverFirstView ? Colors.pennBlue : "white"}
            fontSize={24}
            onClick={handleOnClickTelegram}
          />
          <FontAwesomeIcon
            icon={faDiscord}
            color={isScrolledOverFirstView ? Colors.pennBlue : "white"}
            fontSize={24}
            onClick={handleOnClickDiscord}
          />
        </SocialMediaContainer>
        <MenuBtn onClick={() => setIsMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} fontSize={30} />
        </MenuBtn>
      </MenuContainer>
      <Menu open={isMenuOpen}>
        <MenuContent>
          <MenuHeader>
            <FontAwesomeIcon
              icon={faXmark}
              fontSize={40}
              color={Colors.pennBlue}
              onClick={() => setIsMenuOpen(false)}
            />
          </MenuHeader>
          <MenuBody>
            {/* <MenuItem onClick={handleOnClickTicket}>{t.navs.ticket}</MenuItem> */}
            <MenuItem onClick={handleOnClickAgenda}>{t.navs.agenda}</MenuItem>
            {/* <MenuItem onClick={handleOnClickHackathon}>
              {t.navs.hackathon}
            </MenuItem> */}
            <MenuItem>
              {t.navs.apply}
              <MenuSubItemContainer>
                <MenuSubItem onClick={handleToSpeak}>
                  {t.navs.toSpeak}
                </MenuSubItem>
                <MenuSubItem onClick={handleToSponsor}>
                  {t.navs.toSponsor}
                </MenuSubItem>
                <MenuSubItem onClick={handleSideEvent}>
                  {t.navs.sideEvent}
                </MenuSubItem>
              </MenuSubItemContainer>
            </MenuItem>
            <MenuItem onClick={handleOnClickFAQ}>{t.navs.faq}</MenuItem>
            <MenuItem onClick={handleOnClickGoldCard}>
              {t.navs.goldcard}
            </MenuItem>
            <MenuItem>
              <MenuSocialMediaContainer>
                <IconButton onClick={handleOnClickTwitter}>
                  <IconTwitterX
                    width={34}
                    height={34}
                    color={Colors.pennBlue}
                    opacity={1}
                  />
                </IconButton>
                <FontAwesomeIcon
                  icon={faTelegram}
                  color={Colors.pennBlue}
                  fontSize={34}
                  onClick={handleOnClickTelegram}
                />
                <FontAwesomeIcon
                  icon={faDiscord}
                  color={Colors.pennBlue}
                  fontSize={34}
                  onClick={handleOnClickDiscord}
                />
              </MenuSocialMediaContainer>
            </MenuItem>
          </MenuBody>
          <MenuFooter>
            <Image
              src={logoImg}
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
              onClick={handleOnClickLogo}
            />
          </MenuFooter>
        </MenuContent>
        <MenuCover onClick={() => setIsMenuOpen(false)} />
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.nav<{ isScrolledOverFirstView: boolean }>`
  font-family: "Rammetto One";
  position: fixed;
  display: grid;
  grid-template-columns: 150px 1fr auto;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 100;

  font-size: 14px;
  padding: 0 50px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }

  ${(props) => {
    if (props.isScrolledOverFirstView) {
      return css`
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(36, 62, 81, 0.2);
        color: ${Colors.pennBlue};
      `;
    } else {
      return css`
        background-color: transparent;
        color: white;
      `;
    }
  }}
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

  @media (max-width: 600px) {
    gap: 16px;
    padding: 0 20px;
  }
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
  box-shadow: 0 0 8px 0 rgba(36, 62, 81, 0.2);

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

const MenuBtn = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 992px) {
    display: block;
  }
`;

const Menu = styled.div<{ open: boolean }>`
  width: 100%;
  position: absolute;
  transition: opacity 0.2s ease;
  overflow: hidden;

  ${(props) => {
    if (props.open) {
      return css`
        z-index: 1;
        height: 100vh;
        opacity: 1;
      `;
    } else {
      return css`
        z-index: -1;
        height: 0;
        opacity: 0;
      `;
    }
  }}
`;

const MenuContent = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  background-color: white;
  border-bottom-left-radius: 60px;
  padding: 20px 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const MenuItem = styled.div`
  font-size: 24px;
  color: ${Colors.pennBlue};
  cursor: pointer;
  text-align: center;
`;

const MenuSubItemContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

const MenuSubItem = styled.div`
  font-size: 16px;
  color: ${Colors.pennBlue};
`;

const MenuSocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
`;

const MenuFooter = styled.div`
  position: relative;
  height: 130px;
`;
