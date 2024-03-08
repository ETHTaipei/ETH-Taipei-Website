import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import styled from "styled-components";

import { goldcard1on1ServiceUrl } from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import gtagReportConversion from "@/public/utils/gtag";

const Banner = () => {
  const handleClick = () => {
    openNewTab(goldcard1on1ServiceUrl);
    gtagReportConversion();
  };

  return (
    <Container id="intro">
      <MainContent>
        <Title>{t.goldcard.goldcardTitle}</Title>
        <Description>{t.goldcard.goldcardIntro_1}</Description>
        <Description>{t.goldcard.goldcardIntro_2}</Description>
        <OneOnOnButton onClick={handleClick}>
          {t.goldcard.goldcard1on1BtnText}
        </OneOnOnButton>
      </MainContent>
    </Container>
  );
};
export default Banner;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  text-align: center;
  padding-bottom: 45px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.pennBlue};
  text-align: center;
  line-height: 32px;
`;

const OneOnOnButton = styled.button`
  font-size: 24px;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  color: white;
  display: block;
  margin: auto;
  margin-top: 40px;
  background-color: ${Colors.aero};
  max-width: 320px;
  line-height: 32px;
`;
