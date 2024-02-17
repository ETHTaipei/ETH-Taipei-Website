import t from "@/public/constant/content";
import {
  goldcardApplyLearnMoreCHUrl,
  goldcardApplyLearnMoreENUrl,
  goldcardApplyUrl,
} from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import gtagReportConversion from "@/public/utils/gtag";
import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";

const Application = () => {
  const handleClickApply = () => {
    openNewTab(goldcardApplyUrl);
    gtagReportConversion();
  };

  return (
    <Container>
      <MainContent>
        <Aside>
          <Image
            src={"/images/logo-DIGI-gold-card-community.png"}
            alt="Gold Card"
            width="750"
            height="486"
            style={{ objectFit: "contain", maxWidth: "100%" }}
          />
        </Aside>
        <Main>
          <Title>{t.goldcard.goldcardApplicationTitle}</Title>
          <Description>{t.goldcard.goldcardApplicationDesc_1}</Description>
          <Description>
            {t.goldcard.goldcardApplicationDesc_2}
            <List>
              <Item>{t.goldcard.goldcardApplicationDesc_Item1}</Item>
              <Item>{t.goldcard.goldcardApplicationDesc_Item2}</Item>
              <Item>{t.goldcard.goldcardApplicationDesc_Item3}</Item>
              <Item>{t.goldcard.goldcardApplicationDesc_Item4}</Item>
            </List>
          </Description>
          <LearnMore>
            {t.goldcard.goldcardApplicationLearnMore_1}
            <A
              href={goldcardApplyLearnMoreENUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.goldcard.goldcardApplicationLearnMore_2}
            </A>
            {t.goldcard.goldcardApplicationLearnMore_3}
            <A
              href={goldcardApplyLearnMoreCHUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.goldcard.goldcardApplicationLearnMore_4}
            </A>
          </LearnMore>
          <ApplyGoldCardBtn onClick={handleClickApply}>
            {t.goldcard.goldcardApplyBtn}
          </ApplyGoldCardBtn>
        </Main>
      </MainContent>
    </Container>
  );
};
export default Application;

const Container = styled.div`
  background-color: ${Colors.pennBlue};
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
  display: flex;
  gap: 48px;
`;

const Aside = styled.div`
  flex: 1;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: white;
  margin-bottom: 40px;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  line-height: 32px;
  padding-bottom: 16px;
`;

const List = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Item = styled.div`
  position: relative;
  padding-left: 16px;
  ::before {
    content: "•";
    position: absolute;
    left: 0;
  }
`;

const LearnMore = styled.div`
  font-size: 16px;
  color: white;
  line-height: 32px;
  margin-bottom: 32px;
`;

const ApplyGoldCardBtn = styled.button`
  border-radius: 8px;
  color: white;
  padding: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  background-color: ${Colors.aero};
`;

const A = styled.a`
  color: ${Colors.aero};
  text-decoration: underline;
  cursor: pointer;
`;
