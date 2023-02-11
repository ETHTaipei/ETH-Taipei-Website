import React from "react";
import styled from "styled-components";
import Colors from "@/styles/colors";

function Footer() {
  return (
    <Container>
      <MainFooter>
        <EventName>ETH Taipei</EventName>
      </MainFooter>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  padding: 40px 0;
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
  color: ${Colors.gray1};
  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`;
