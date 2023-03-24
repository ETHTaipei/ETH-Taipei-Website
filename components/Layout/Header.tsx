import React, { useState, Fragment, useEffect, useRef } from "react";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { openNewTab } from "@/public/utils/common";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/public/images/horizontal-transparent.png";
import {
  discordUrl,
  hackathonUrl,
  telegramUrl,
  twitterUrl,
} from "@/public/constant/urls";
import t from "@/public/constant/content";
import gtagReportConversion from "@/public/utils/gtag";

const navItems = [
  {
    label: t.navs.home,
    value: "/",
    disabled: false,
    isNewTab: false,
    isPlugin: false,
  },
  {
    label: t.navs.agenda,
    value: "/agenda",
    disabled: false,
    isNewTab: false,
    isPlugin: false,
  },
  {
    label: t.navs.ticket,
    value: "/ticketSale",
    disabled: false,
    isNewTab: false,
    isPlugin: true,
  },
  {
    label: t.navs.hackathon,
    value: hackathonUrl,
    disabled: false,
    isNewTab: true,
    isPlugin: false,
  },
  {
    label: t.navs.faq,
    value: "/faq",
    disabled: false,
    isNewTab: false,
    isPlugin: false,
  },
];

function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const router = useRouter();

  const handleNavClick = (
    url: string,
    disabled: boolean,
    isNewTab: boolean,
    isPlugin: boolean
  ) => {
    if (disabled) {
      return;
    }

    if (isNewTab) {
      window.open(url, "_blank");
      if (url === hackathonUrl) {
        gtagReportConversion();
      }
    } else if (isPlugin) {
      handleOpenUnlock();
    } else {
      router.push(url);
      setNavIsOpen(false);
    }
  };

  const handleSocialMediaOnClick = (url: string) => {
    openNewTab(url);
    setNavIsOpen(false);
  };

  const handleOpenUnlock = () => {
    window?.unlockProtocol && window?.unlockProtocol.loadCheckoutModal();
    gtagReportConversion();
    setNavIsOpen(false);
  };

  return (
    <Container>
      <MainContent>
        <LogoContainer onClick={() => router.push("/")}>
          <Image src={logo} alt="logo" fill />
        </LogoContainer>
        <MenuBtn onClick={() => setNavIsOpen(true)}>
          <FontAwesomeIcon
            icon={faBars}
            fontSize={20}
            color={Colors.pennBlue}
          />
        </MenuBtn>
        <NavsContainer open={navIsOpen}>
          <CloseBtn isShow={navIsOpen} onClick={() => setNavIsOpen(!navIsOpen)}>
            <FontAwesomeIcon
              icon={faXmark}
              fontSize={20}
              color={Colors.pennBlue}
            />
          </CloseBtn>
          <Navs>
            <NavList>
              {navItems.map((nav) => (
                <NavContainer
                  key={nav.label}
                  onClick={() =>
                    handleNavClick(
                      nav.value || "",
                      nav.disabled,
                      nav.isNewTab,
                      nav.isPlugin
                    )
                  }
                >
                  <Nav disabled={nav.disabled}>{nav.label}</Nav>
                </NavContainer>
              ))}
            </NavList>
          </Navs>
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
        </NavsContainer>
      </MainContent>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: ${Colors.seaSalt};
  box-shadow: inset 0px -1px 0px #dddddd;
`;

const MainContent = styled.header`
  width: 100%;
  max-width: 1280px;
  height: 70px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => (props.hidden ? "translateY(-100%)" : null)};
  @media (max-width: 992px) {
    height: 60px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100%;
  cursor: pointer;
  > img {
    object-fit: contain;
    object-position: left;
  }
`;

const NavsContainer = styled.div<{ open: boolean }>`
  flex: 1 0 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    height: ${(props) => (props.open ? "100vh" : "0px")};
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${Colors.yInMnBlue};
    transition: all 350ms ease-in-out;
  }
`;

const Navs = styled.nav`
  flex: 1 0 260px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 992px) {
    width: 100%;
    flex: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 24px;
  position: relative;
  @media (max-width: 992px) {
    padding: 16px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = styled.li<{ disabled: boolean }>`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.pennBlue};
  cursor: ${(props) => (props.disabled ? "inherit" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
  }
`;

const MenuBtn = styled.button`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CloseBtn = styled.button<{ isShow: boolean }>`
  display: none;
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    padding: 20px;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

const IconButton = styled.button`
  padding: 4px;
  cursor: pointer;
  color: ${Colors.pennBlue};
  :hover {
    color: ${Colors.aero};
  }
  :active {
    transform: scale(0.9);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
