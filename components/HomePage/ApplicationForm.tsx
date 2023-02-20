import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import { openNewTab } from "@/public/utils/ common";
import {
  speakerApplyUrl,
  sponsorApplyUrl,
  volunteerApplyUrl,
} from "@/public/constant/urls";
import t from "@/public/constant/content";

const ApplicationForm = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.applications}</Title>
        <Applications>
          <Application onClick={() => openNewTab(sponsorApplyUrl)}>
            <Text>{t.homepage.applyFor}</Text>
            <Subtitle>{t.homepage.sponsors}</Subtitle>
          </Application>
          <Application onClick={() => openNewTab(speakerApplyUrl)}>
            <Text>{t.homepage.applyFor}</Text>
            <Subtitle>{t.homepage.speakers}</Subtitle>
          </Application>
          <Application onClick={() => openNewTab(volunteerApplyUrl)}>
            <Text>{t.homepage.applyFor}</Text>
            <Subtitle>{t.homepage.volunteers}</Subtitle>
          </Application>
        </Applications>
      </MainContent>
    </Container>
  );
};

export default ApplicationForm;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.yInMnBlue};
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 60px;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.seaSalt};
  margin-bottom: 4px;
`;

const Applications = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Application = styled.button`
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

const Subtitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.seaSalt};
`;
