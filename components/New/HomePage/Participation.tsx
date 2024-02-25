import styled from "styled-components";

import t from "@/public/constant/content";
import { speakerApplyUrl, sponsorApplyUrl } from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";

const Participation = () => {
  return (
    <Container>
      <MainContent>
        <InfoContainer>
          <Title>{t.homepage.promoteCallToActionTitle}</Title>
          <Description>
            <DescriptionBox>
              {t.homepage.promoteCallToActionText}
            </DescriptionBox>
          </Description>
        </InfoContainer>
        <ActionContainer>
          <Action onClick={() => openNewTab(speakerApplyUrl)}>
            {t.homepage.beASpeaker}
          </Action>
          <Action onClick={() => openNewTab(sponsorApplyUrl)}>
            {t.homepage.beASponsor}
          </Action>
          <Action onClick={() => openNewTab(sponsorApplyUrl)}>
            {t.homepage.applyToSideEvent}
          </Action>
        </ActionContainer>
      </MainContent>
      <Background />
    </Container>
  );
};

export default Participation;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 40px;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  gap: 40px;
  @media (max-width: 860px) {
    max-width: 470px;
    flex-direction: column;
    gap: 60px;
  }
`;

const InfoContainer = styled.div`
  flex: 1.2;
`;

const Title = styled.h2`
  font-size: 42px;
  line-height: 48px;
  font-family: "Rammetto One";
  color: white;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  font-size: 16px;
  line-height: 28px;
  color: white;
  display: flex;
  justify-content: center;
`;

const DescriptionBox = styled.div``;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Action = styled.button`
  font-family: "Rammetto One";
  font-size: 18px;
  width: 330px;
  color: white;
  background-color: ${Colors.blue1};
  border-radius: 8px;
  padding: 12px 0;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(36, 62, 81, 0.2),
    0 6px 12px 0 rgba(63, 83, 114, 0.19);
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  background-image: url("/images/background/eth-tpe-team.png");
  background-size: cover;
  background-position: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    z-index: 1;
  }
`;
