import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 90px;
  @media (max-width: 992px) {
    padding-top: 70px;
  }
`;
