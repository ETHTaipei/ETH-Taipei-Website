import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import { hackathonUrl } from "@/public/constant/urls";
import bgImage from "@/public/images/eth-taipei-banner-background-2.png";
import banner from "@/public/images/vertical-transparent.png";
import { openNewTab } from "@/public/utils/common";
import gtagReportConversion from "@/public/utils/gtag";

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
      <Image src={bgImage} fill quality={100} alt="bgImage" />
      <ImageContainer>
        <Image src={banner} alt="logo" fill />
        <YearWatermark>2024</YearWatermark>
      </ImageContainer>
      <ActivitiesContainer>
        <ActivityBtn onClick={handleOpenUnlock}>
          <ActivityTitle>{t.homepage.conference}</ActivityTitle>
          <ActivityDate>{t.homepage.conferenceDate}</ActivityDate>
        </ActivityBtn>
        <ActivityBtn onClick={handleHackathonOnClick}>
          <ActivityTitle>{t.homepage.hackathon}</ActivityTitle>
          <ActivityDate>{t.homepage.hackathonDate}</ActivityDate>
        </ActivityBtn>
      </ActivitiesContainer>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
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
  > image {
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
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

const NotificationContainer = styled.div`
  margin: auto;
  position: absolute;
  top: 36px;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ImportantContainer = styled.div`
  padding: 4px 12px;
  background-color: ${Colors.aero};
  border-radius: 8px;
  color: ${Colors.gray1};
  font-size: 16px;
  line-height: 24px;
  margin-right: 8px;
`;

const NotificationText = styled.p`
  font-size: 16px;
  line-height: 24px;
  padding: 0 4px;
`;

const Link = styled(NotificationText)`
  color: ${Colors.aero};
  cursor: pointer;
  text-decoration: underline;
`;

const MainTextContainer = styled.div`
  display: flex;
`;

const YearWatermark = styled.div`
  font-size: clamp(125px, 20vw, 200px);
  font-weight: bold;
  opacity: 0.06;
  position: absolute;
  top: 69%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
