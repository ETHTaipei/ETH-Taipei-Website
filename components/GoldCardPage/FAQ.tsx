import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import styled from "styled-components";

import {
  goldcardApplicationDetailUrl,
  goldcardDIGILinkedInUrl,
  goldcardDanaLiuMailUrl,
  goldcardJillChangMailUrl,
  goldcardKellyChuangMailUrl,
  goldcardQualificationsUrl,
  goldcardSubsidyGuidelineUrl,
  goldcardSubsidyPressReleaseUrl,
  goldcardVickyHoMailUrl,
} from "@/public/constant/urls";

const FAQ = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.goldcard.goldcardFAQTitle}</Title>
        <Question>{t.goldcard.goldcardFAQQuestion1}</Question>
        <Description>{t.goldcard.goldcardFAQAnswer1_1}</Description>
        <Description>{t.goldcard.goldcardFAQAnswer1_2}</Description>
        <List>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_1}</Item>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_2}</Item>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_3}</Item>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_4}</Item>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_5}</Item>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_6}</Item>
          <Item>{t.goldcard.goldcardFAQAnswer1_2_7}</Item>
        </List>
        <Description>{t.goldcard.goldcardFAQAnswer1_3}</Description>
        <Question>{t.goldcard.goldcardFAQQuestion2}</Question>
        <Description>
          {t.goldcard.goldcardFAQAnswer2_1}{" "}
          <A
            href={goldcardQualificationsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardFAQAnswer2_2}
          </A>
          {t.goldcard.goldcardFAQAnswer2_3}
        </Description>
        <Question>{t.goldcard.goldcardFAQQuestion3}</Question>
        <Description>{t.goldcard.goldcardFAQAnswer3_1}</Description>
        <Question>{t.goldcard.goldcardFAQQuestion4}</Question>
        <Description>{t.goldcard.goldcardFAQAnswer4_1}</Description>
        <Description>
          {t.goldcard.goldcardFAQAnswer4_2}{" "}
          <A
            href={goldcardApplicationDetailUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardFAQAnswer4_3}
          </A>
        </Description>
        <Question>{t.goldcard.goldcardFAQQuestion5}</Question>
        <Description>
          {t.goldcard.goldcardFAQAnswer5_1}{" "}
          <A
            href={goldcardDIGILinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardFAQAnswer5_2}
          </A>
        </Description>
        <Description>
          {t.goldcard.goldcardFAQAnswer5_3}
          <div>
            {t.goldcard.goldcardFAQAnswer5_4}{" "}
            <A href={goldcardJillChangMailUrl} rel="noopener noreferrer">
              {t.goldcard.goldcardFAQAnswer5_5}
            </A>
          </div>
        </Description>
        <Question>{t.goldcard.goldcardFAQQuestion6}</Question>
        <Description>{t.goldcard.goldcardFAQAnswer6_1}</Description>
        <Description>{t.goldcard.goldcardFAQAnswer6_2}</Description>
        <Description>{t.goldcard.goldcardFAQAnswer6_3}</Description>
        <Description>{t.goldcard.goldcardFAQAnswer6_4}</Description>
        <Description>{t.goldcard.goldcardFAQAnswer6_5}</Description>
        <Description>
          {t.goldcard.goldcardFAQAnswer6_6}{" "}
          <A
            href={goldcardSubsidyGuidelineUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardFAQAnswer6_7}
          </A>
          {t.goldcard.goldcardFAQAnswer6_8}{" "}
          <A
            href={goldcardSubsidyPressReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardFAQAnswer6_9}
          </A>
          {t.goldcard.goldcardFAQAnswer6_10}
        </Description>
      </MainContent>
    </Container>
  );
};
export default FAQ;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 640px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  margin-bottom: 40px;
`;

const Question = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: ${Colors.pennBlue};
  margin-bottom: 10px;
  margin-top: 40px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${Colors.pennBlue};
`;

const List = styled.div`
  margin-left: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div`
  color: ${Colors.pennBlue};
  padding-left: 16px;
  position: relative;
  ::before {
    content: "•";
    position: absolute;
    left: 0;
  }
`;

const A = styled.a`
  color: ${Colors.aero};
  text-decoration: underline;
  cursor: pointer;
`;
