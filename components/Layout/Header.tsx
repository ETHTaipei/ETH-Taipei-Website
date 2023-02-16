import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const navItems = [
  {
    label: "Home",
    value: "/",
    disabled: false,
  },
  {
    label: "Agenda",
    value: "/agenda",
    disabled: false,
  },
  {
    label: "Ticket Sale",
    value: "/ticketSale",
    disabled: false,
  },
];

function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  const _renderNavItem = (nav: {
    label: string;
    value?: string;
    disabled?: boolean;
  }) => (
    <NavContainer onClick={() => handleClick(nav.value || "")}>
      <Nav>{nav.label}</Nav>
    </NavContainer>
  );

  return (
    <Container>
      <MainContent>
        <LogoContainer>
          <Logo>
            <NavList>
              <NavContainer onClick={() => handleClick("/")}>
                <Nav>ETH Taipei</Nav>
              </NavContainer>
            </NavList>
          </Logo>
        </LogoContainer>
        <MenuBtn onClick={() => setNavIsOpen(!navIsOpen)}>
          <FontAwesomeIcon icon={faBars} fontSize={20} color={Colors.gray1} />
        </MenuBtn>
        <NavsContainer open={navIsOpen}>
          <CloseBtn isShow={navIsOpen} onClick={() => setNavIsOpen(!navIsOpen)}>
            <FontAwesomeIcon
              icon={faXmark}
              fontSize={20}
              color={Colors.gray1}
            />
          </CloseBtn>
          <Navs>
            <NavList>
              {navItems.map((nav) => (
                <NavContainer
                  key={nav.label}
                  onClick={() => handleClick(nav.value || "")}
                >
                  <Nav>{nav.label}</Nav>
                </NavContainer>
              ))}
            </NavList>
          </Navs>
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
`;

const MainContent = styled.header`
  width: 100%;
  max-width: 1280px;
  height: 90px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: transform 300ms ease-in-out;
  transform: ${(props) => (props.hidden ? "translateY(-100%)" : null)};
  @media (max-width: 992px) {
    height: 70px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
    background-color: ${Colors.gray7};
    transition: all 350ms ease-in-out;
  }
`;

const Navs = styled.nav`
  flex: 1 0 260px;
  display: flex;
  justify-content: flex-start;
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

const Nav = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.gray1};
  cursor: pointer;
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

const Logo = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 188px;
  height: 44px;
  @media (max-width: 992px) {
    width: 157px;
    height: 36px;
  }
`;
