import styled from "styled-components";

import t from "@/public/constant/content";
import { sideEventApplyUrl, sponsorApplyUrl } from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import BackgroundVideo from "./BackgroundVideo";

const Participation = () => {
  return (
    <Container>
      <MainContent>
        <InfoContainer>
          <Title>{t.homepage.callToActionTitle}</Title>
          <Description>
            <DescriptionBox>{t.homepage.callToActionText}</DescriptionBox>
          </Description>
        </InfoContainer>
        <ActionContainer>
          {/* TODO: order */}
          <img src="./images/icons/participation.svg" />
          {/* <Action onClick={() => openNewTab(speakerApplyUrl)}>
            {t.participation.applyToSpeak}
          </Action> */}
          <Action onClick={() => openNewTab(sponsorApplyUrl)}>
            {t.participation.applyToSponsor}
            <img src="./images/icons/arrow-right.svg" />
          </Action>
          <Action onClick={() => openNewTab(sideEventApplyUrl)}>
            {t.participation.addSideEvent}
            <img src="./images/icons/arrow-right.svg" />
          </Action>
        </ActionContainer>
      </MainContent>
      <BackgroundVideo />
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
  background-color: rgba(0, 0, 0, 0.5);
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
  flex: 1;
  padding: 40px;
  background-color: ${Colors.neonGreen};
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;
  @media (max-width: 860px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  line-height: 48px;
  color: ${Colors.brightBlue};
  @media (max-width: 860px) {
    font-size: 36px;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 24px;
  color: black;
  display: flex;
  justify-content: center;
`;

const DescriptionBox = styled.div`
  font-family: "Inter";
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Action = styled.button`
  font-size: 22px;
  width: 240px;
  color: ${Colors.neonGreen};
  border: 3px solid white;
  background-color: ${Colors.brightBlue};
  border-radius: 9999px;
  padding: 12px 0;
  cursor: pointer;
  font-family: "W95fa";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
