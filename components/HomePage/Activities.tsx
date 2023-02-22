import t from "@/public/constant/content";
import { openNewTab } from "@/public/utils/ common";
import { ticketSaleUrl, hackathonUrl } from "@/public/constant/urls";
import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const Activities = () => {
  return (
    <Container>
      <MainContent>
        <ActivityContainer>
          <ActivityTitle>{t.homepage.hackathon}</ActivityTitle>
          <ActivityDate>{t.homepage.hackathonDateWithDays}</ActivityDate>
          <ActivityDescription>{t.homepage.hackathonIntro}</ActivityDescription>
          <Btn onClick={() => openNewTab(hackathonUrl)}>
            <BtnText>{t.homepage.hackathonBtnText}</BtnText>
          </Btn>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityTitle>{t.homepage.conference}</ActivityTitle>
          <ActivityDate>{t.homepage.conferenceDateWithDays}</ActivityDate>
          <ActivityDescription>
            {t.homepage.conferenceIntro}
          </ActivityDescription>
          <Btn onClick={() => openNewTab(ticketSaleUrl)} disabled>
            <BtnText>{t.homepage.conferenceBtnText}</BtnText>
          </Btn>
        </ActivityContainer>
      </MainContent>
    </Container>
  );
};

export default Activities;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  @media (max-width: 768px) {
    padding: 40px 24px 60px 24px;
  }
`;

const MainContent = styled.div`
  with: 100%;
  max-width: 1020px;
  margin: auto;
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityContainer = styled.div`
  flex: 1;
  padding: 32px;
  background-color: ${Colors.yInMnBlue};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const ActivityTitle = styled.h2`
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  display: block;
`;

const ActivityDate = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  padding: 4px 24px;
  display: inline-block;
`;

const ActivityDescription = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.pennBlue};
`;

const Btn = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.btnBlue};
  border: 1px solid ${Colors.seaSalt};
  border-radius: 8px;
  padding: 20px 40px;
  cursor: pointer;
  :active {
    transform: scale(0.99);
  }
`;

const BtnText = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.seaSalt};
  margin-bottom: 4px;
`;
