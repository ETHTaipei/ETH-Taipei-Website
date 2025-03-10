import styled from "styled-components";

import Image from "next/image";
import t from "@/public/constant/content";
import {
  sideEventApplyUrl,
  sponsorApplyUrl,
  speakerApplyUrl,
} from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import BackgroundVideo from "./RecapBgVideo";

const ActionButton = ({ url, text }: { url: string; text: string }) => (
  <Action onClick={() => openNewTab(url)}>
    {text}
    <Image
      src="./images/icons/arrow-right.svg"
      alt="Arrow icon"
      width={20}
      height={20}
    />
  </Action>
);

const ActionButtons = () => {
  const buttons = [
    {
      url: speakerApplyUrl,
      text: t.callToAction.applyToSpeak,
    },
    {
      url: sponsorApplyUrl,
      text: t.callToAction.applyToSponsor,
    },
    {
      url: sideEventApplyUrl,
      text: t.callToAction.addSideEvent,
    },
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <ActionButton key={index} url={button.url} text={button.text} />
      ))}
    </>
  );
};

const CallToAction = () => {
  return (
    <Container id="calltoaction">
      <MainContent>
        <InfoContainer>
          <Title>{t.homepage.callToActionTitle}</Title>
          <Description>
            <DescriptionBox>{t.homepage.callToActionText}</DescriptionBox>
          </Description>
        </InfoContainer>
        <ActionContainer>
          <Image
            src="./images/icons/callToAction.svg"
            alt="CallToAction icon"
            width={291}
            height={62}
          />
          <ActionButtons />
        </ActionContainer>
      </MainContent>
      <BackgroundVideo />
    </Container>
  );
};

export default CallToAction;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 40px;
  background-color: rgba(0, 0, 0, 0.5);
  scroll-margin-top: -10px;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  gap: 40px;
  @media (max-width: 860px) {
    max-width: 400px;
    flex-direction: column;
    gap: 60px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
  background-color: ${Colors.neonGreen};
  opacity: 0.85;
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
  text-align: center;
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
  gap: 30px;
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
