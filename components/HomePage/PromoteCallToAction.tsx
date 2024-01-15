import Colors from "@/styles/colors";
import styled from "styled-components";

import t from "@/public/constant/content";
import { speakerApplyUrl, sponsorApplyUrl } from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";

const PromoteCallToAction = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.promoteCallToActionTitle}</Title>
        <Description>
          <DescriptionBox>{t.homepage.promoteCallToActionText}</DescriptionBox>
        </Description>
        <ActionContainer>
          <Action onClick={() => openNewTab(speakerApplyUrl)}>
            <Text>{t.homepage.beASpeaker}</Text>
          </Action>
          <Action onClick={() => openNewTab(sponsorApplyUrl)}>
            <Text>{t.homepage.beASponsor}</Text>
          </Action>
        </ActionContainer>
      </MainContent>
    </Container>
  );
};

export default PromoteCallToAction;

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

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  line-height: 45px;
  color: ${Colors.pennBlue};
  margin-bottom: 40px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.pennBlue};
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const DescriptionBox = styled.div`
  max-width: 700px;
`;

const ActionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Action = styled.button`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.btnBlue};
  border-radius: 8px;
  padding: 20px 40px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(36, 62, 81, 0.2),
    0 6px 12px 0 rgba(63, 83, 114, 0.19);
  :active {
    transform: scale(0.99);
  }
`;

const Text = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.seaSalt};
  margin-bottom: 4px;
`;
