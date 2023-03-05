import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { visaUrl, telegramUrl, sideEvnetUrl } from "@/public/constant/urls";

import bgImage from "@/public/images/eth-taipei-banner-background-2.png";
import t from "@/public/constant/content";

const Visa = () => {
  return (
    <Container>
      <Image src={bgImage} fill quality={100} alt="bgImage" />
      <MainContent>
        <Row>
          <Title>{t.visa.visaQuestion1}</Title>
          <Description>
            {t.visa.visaAnswer1Part1}
            <Link href={visaUrl} target="_blank">
              {t.visa.BureauOfConsularAffairs}
            </Link>
            {t.visa.visaAnswer1Part2}
          </Description>
        </Row>
        <Row>
          <Title>{t.visa.visaQuestion2}</Title>
          <Description>
            {t.visa.visaAnswer2Part1}
            <Link href={telegramUrl} target="_blank">
              {t.visa.telegram}
            </Link>
            {t.visa.visaAnswer2Part2}
          </Description>
        </Row>
        <Row>
          <Title>{t.visa.question3}</Title>
          <Description>
            {t.visa.question3Answer}
            <Link href={sideEvnetUrl} target="_blank">
              {t.visa.link}
            </Link>
          </Description>
        </Row>
      </MainContent>
    </Container>
  );
};

export default Visa;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  @media (max-width: 992px) {
    min-height: calc(100vh - 60px);
  }
  position: relative;
  > img {
    object-fit: cover;
    object-position: top;
    z-index: -1;
    filter: grayscale(0.5) brightness(1.2);
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 120px 40px;
`;

const Row = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex: inherit;
    font-size: 24px;
    line-height: 32px;
  }
`;

const Description = styled.span`
  flex: 1.5;
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.pennBlue};
  display: block;
`;

const Link = styled.a`
  color: ${Colors.btnBlue};
  :hover {
    color: ${Colors.aero};
  }
`;
