import t from "@/public/constant/content";
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
        </ActivityContainer>
        <ActivityContainer>
          <ActivityTitle>{t.homepage.conference}</ActivityTitle>
          <ActivityDate>{t.homepage.conferenceDateWithDays}</ActivityDate>
          <ActivityDescription>
            {t.homepage.conferenceIntro}
          </ActivityDescription>
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
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  display: block;
`;

const ActivityDate = styled.h2`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  padding: 4px 24px;
  display: inline-block;
  border-radius: 100px;
  background-color: ${Colors.seaSalt};
`;

const ActivityDescription = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.pennBlue};
`;
