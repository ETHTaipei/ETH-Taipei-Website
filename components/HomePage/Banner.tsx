import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import banner from "@/public/images/vertical-transparent.png";
import t from "@/public/constant/content";
import { hackathonUrl } from "@/public/constant/urls";
import gtagReportConversion from "@/public/utils/gtag";
import { openNewTab } from "@/public/utils/common";

const Banner = () => {
  const handleOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleOpenUnlock = () => {
    window?.unlockProtocol && window?.unlockProtocol.loadCheckoutModal();
    gtagReportConversion();
  };

  const handleHackathonOnClick = () => {
    openNewTab(hackathonUrl);
    gtagReportConversion();
  };

  return (
    <Container>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/1aem3HuYIzM?autoplay=1&mute=1&loop=1&playlist=1aem3HuYIzM&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen={true}
        />
      </VideoWrapper>
      <ImageContainer>
        <Image src={banner} alt="logo" fill />
      </ImageContainer>
      <ActivitiesContainer>
        <ActivityBtn onClick={handleHackathonOnClick}>
          <ActivityTitle>{t.homepage.hackathon}</ActivityTitle>
          <ActivityDate>{t.homepage.hackathonDate}</ActivityDate>
        </ActivityBtn>
        <ActivityBtn onClick={handleOpenUnlock}>
          <ActivityTitle>{t.homepage.conference}</ActivityTitle>
          <ActivityDate>{t.homepage.conferenceDate}</ActivityDate>
        </ActivityBtn>
      </ActivitiesContainer>
    </Container>
  );
};

export default Banner;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(0.5) brightness(1.2);
    @media (max-width: 300px) {
      width: auto;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 300px) {
    min-height: calc(100vh - 60px);
  }
  position: relative;
  > img {
    object-fit: cover;
    object-position: top;
    z-index: -1;
    filter: grayscale(0.5) brightness(1.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    z-index: -1;
  }
`;


const ActivitiesContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 450px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ActivityBtn = styled.button`
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: ${Colors.seaSalt};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 rgba(84, 151, 198, 0.1),
    0 6px 6px 0 rgba(83, 108, 148, 0.09);
  :active {
    transform: scale(0.99);
  }
`;

const ActivityTitle = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  display: block;
`;

const ActivityDate = styled.h3`
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  display: block;
`;
