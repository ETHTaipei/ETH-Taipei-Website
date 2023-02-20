import React from "react";
import styled from "styled-components";
import Colors from "@/styles/colors";
import t from "@/public/constant/content";

function Footer() {
  return (
    <Container>
      <MainFooter>
        <EventName>{t.common.ethTaipei}</EventName>
      </MainFooter>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  box-shadow: inset 0px 1px 0px #dddddd;
`;

const MainFooter = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 12px 48px 12px 32px;
  margin: 0 auto;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const EventName = styled.h4`
  color: ${Colors.pennBlue};
  text-align: center;
  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
