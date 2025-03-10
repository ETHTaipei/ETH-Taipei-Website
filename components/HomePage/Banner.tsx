import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import { sideEventFormUrl } from "@/public/constant/urls";
import Colors from "@/styles/colors";
import CountdownTimer from "./CountdownTimer";
import { Video, BrandBgVideo } from "./Video";

const Banner = () => {
  return (
    <Container>
      <MainContent>
        <TitleContainer>
          <StyledImage
            id="ETHTaipeiOrg"
            src="/images/FirstViewBanner/ETHTaipeiOrg.png"
            alt="ETHTaipeiOrg"
          />
          {/* <Title color={Colors.aero}>{t.homepage.bannerTitle_1}</Title> */}
          {/* <Title color={"white"}>{t.homepage.bannerTitle_2}&nbsp;</Title> */}
          {/* <Title color={Colors.aero}>{t.homepage.bannerTitle_3}</Title> */}
        </TitleContainer>
        {/* <SubTitle>{t.homepage.bannerSubTitle}</SubTitle> */}
        <InfoContainer>
          <Info>
            <Icon>
              <Image
                src={"/images/FirstViewBanner/Date_Icon.svg"}
                alt="calendar"
                fill
                style={{ objectFit: "contain" }}
              />
            </Icon>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_1}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_1}</InfoDescription>
            </InfoWrapper>
            {/* <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_2}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_2}</InfoDescription>
            </InfoWrapper> */}
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_2_2}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_2_2}</InfoDescription>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_2_3}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_2_3}</InfoDescription>
            </InfoWrapper>
          </Info>
        </InfoContainer>
        <InfoContainer>
          <Info>
            <Icon>
              <Image
                src={"/images/FirstViewBanner/Location_Icon.svg"}
                alt="calendar"
                fill
                style={{ objectFit: "contain" }}
              />
            </Icon>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_3}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_3}</InfoDescription>
            </InfoWrapper>
            <Icon>
              <Image
                src={"/images/FirstViewBanner/SideEvent_Icon.svg"}
                alt="calendar"
                fill
                style={{ objectFit: "contain" }}
              />
            </Icon>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_2_1}</InfoTitle>
              <InfoDescription>
                <a href={sideEventFormUrl} target="blank">
                  {t.homepage.bannerInfoDesc_2_1}
                </a>
              </InfoDescription>
            </InfoWrapper>
          </Info>
        </InfoContainer>
        <ScrollingIconsBg>
          <ScrollingIconsWrapper>
            <ScrollingIcons />
            <ScrollingIcons />
          </ScrollingIconsWrapper>
        </ScrollingIconsBg>

        <CountdownContainer>
          <CountdownTimer />
        </CountdownContainer>
      </MainContent>
      <RightSection>
        {/* 右上角文字區塊 */}
        <SpeechBubble>{t.homepage.bannerSubTitle}</SpeechBubble>

        {/* Recap Video 區塊 */}
        <RecapVidContainer>
          <Video
            src="/videos/2024_recap.webm"
            id="recap-video"
            style={{
              objectFit: "cover",
              border: `4px solid ${Colors.neonGreen}`,
              borderRadius: "36px 12px",
              position: "absolute",
            }}
          />
        </RecapVidContainer>

        {/* 半透明藍色背景（放在影片之後） */}
        <RecapVidBg />

        {/* 右側小圖示 */}
        <SpeechBubble2>
          <PixelIcon />
        </SpeechBubble2>
        <PixelIconTaiwan />
        <PixelIconTaipei101 />
        <PixelIconMountain />
      </RightSection>
      <GridOverlay />
      <BrandBgVideo />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  padding: 0 0px;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0 0% 10%;
    overflow: hidden;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // outline:red 5px solid;
  flex-grow: 1;
  flex-basis: 0;
  width: 85%;
  height: 100%;

  @media (max-width: 1024px) {
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
  @media (max-width: 1280px) {
    width: 45px;
    height: 45px;
  }
`;

const InfoWrapper = styled.div``;

const InfoTitle = styled.div`
  font-size: 18px;
  font-family: "W95fa";
  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;

const InfoDescription = styled.div`
  margin-top: 6px;
  font-size: 14px;
  max-width: 200px;
  line-height: 18px;
  @media (max-width: 1280px) {
    font-size: 12px;
    max-width: 150px;
  }
  @media (max-width: 476px) {
    font-size: 12px;
    max-width: 230px;
  }
`;

const CountdownContainer = styled.div`
  margin-top: 30px;
`;

const StyledImage = styled.img`
  width: 34vw;
  margin-top: 9%;
  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 15%;
  }
  @media (max-width: 476px) {
    width: 95%;
    margin-top: 20%;
  }
`;
const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
  background-size: 100% auto;
  z-index: -1;
  background-image: url(/images/FirstViewBanner/white_grid.svg);
`;

const ScrollingIconsWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: marquee 10s linear infinite;
  height: 34px;
  margin-top: 6px;
  @media (max-width: 476px) {
    width: 300%;
  }
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const ScrollingIconsBg = styled.div`
  width: 90vw;
  height: 48px;
  background: rgba(255, 255, 255, 0.5);
  margin-top: 20px;
  margin-left: -45vw;
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    margin-left: -10%;
    overflow: show;
    width: 110vw;
    height: 48px;
  }
`;
const ScrollingIcons = styled.div`
  display: flex;
  width: 100%;
  height: 34px;
  background-image: url("/images/FirstViewBanner/Scrolling_Icons.png");
  background-size: contain;
  background-repeat: repeat-x;
`;

const SpeechBubble = styled.div`
  position: relative;
  top: -50px;
  right: -150px;
  width: 300px;
  height: 180px;
  padding: 30px 120px 90px 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  font-size: 18px;
  line-height: 120%;
  color: black;
  align-items: center;
  @media (max-width: 1024px) {
    width: 300px;
    height: 150px;
    position: absolute;
    top: -75px;
    right: 30px;
    text-align: left;
  }
  @media (max-width: 786px) {
    width: 36vw;
    height: 10vw;
    position: absolute;
    top: 0vw;
    right: 5vw;
    text-align: left;
    font-size: 12px;
    padding: 4vw 15vw 12vw 4vw;
  }
  @media (max-width: 476px) {
    width: 42vw;
    height: 30vw;
    position: absolute;
    top: -12vw;
    right: 5vw;
    text-align: left;
    font-size: 12px;
    padding: 4vw 15vw 12vw 4vw;
  }
`;

const SpeechBubble2 = styled.div`
  position: relative;
  top: -200px;
  right: -230px;
  width: 80px;
  height: 120px;
  padding: 12px;
  border-radius: 8px;
  background: ${Colors.neonGreen};
  font-size: 18px;
  line-height: 120%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 80px;
    height: 120px;
    position: absolute;
    top: -30px;
    right: 60px;
  }
  @media (max-width: 786px) {
    width: 10vw;
    height: 15vw;
    position: absolute;
    top: 4vw;
    right: 8vw;
    padding: 6px;
  }
  @media (max-width: 476px) {
    width: 10vw;
    height: 15vw;
    position: absolute;
    top: -9vw;
    right: 8vw;
    padding: 6px;
  }
`;

const PixelIcon = styled.div`
  width: 80px;
  height: 100px;
  margin: auto;
  top: 0;
  background-image: url("/images/FirstViewBanner/Logo_Icon.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  // outline: red solid 5px
  @media (max-width: 786px) {
    width: 12vw;
    height: 10vw;
  }
`;

const RecapVidContainer = styled.div`
  bottom: 0;
  top: 0;
  margin: auto;
  margin-top: 60px;
  width: 498px;
  height: 284px;
  position: absolute;
  // outline:red 5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    width: 400px;
    height: 228px;
  }
  @media (max-width: 1024px) {
    width: 79.2vw;
    height: 45.1vw;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  @media (max-width: 786px) {
    width: 84vw;
    height: 48vw;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

const RecapVidBg = styled.div`
  position: absolute;
  bottom: 0; /* 確保它比影片稍微往下 */
  top: 0;
  margin: auto;
  margin-top: 10px;
  width: 600px;
  height: 32vw;
  background: rgba(0, 100, 255, 0.3);
  border-radius: 50%;
  z-index: -1;
  filter: blur(80px);
`;

const PixelIconTaiwan = styled.div`
  width: 55px;
  height: 110px;
  position: absolute;
  top: -10px;
  left: 110px;
  background-image: url("/images/FirstViewBanner/Taiwan_Icon.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.8;
  @media (max-width: 1024px) {
    width: 50px;
    height: 100px;
    position: absolute;
    top: -0px;
    left: 30%;
  }
  @media (max-width: 1024px) {
    width: 30px;
    height: 70px;
    position: absolute;
    top: -30px;
    left: 30%;
  }
`;

const PixelIconTaipei101 = styled.div`
  width: 80px;
  height: 150px;
  position: absolute;
  bottom: -80px;
  right: -80px;
  background-image: url("/images/FirstViewBanner/Taipei101_Icon.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.8;
  @media (max-width: 1024px) {
    width: 80px;
    height: 120px;
    position: absolute;
    bottom: 20px;
    right: 0px;
  }
  @media (max-width: 476px) {
    width: 50px;
    height: 70px;
    position: absolute;
    bottom: 0px;
    right: -10px;
  }
`;

const PixelIconMountain = styled.div`
  width: 120px;
  height: 60px;
  position: absolute;
  bottom: -100px;
  left: 0px;
  background-image: url("/images/FirstViewBanner/Mountain_Icon.svg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.8;
  @media (max-width: 1024px) {
    width: 100px;
    height: 80px;
    position: absolute;
    bottom: -10px;
    left: 30px;
  }
  @media (max-width: 476px) {
    width: 60px;
    height: 40px;
    position: absolute;
    bottom: -10px;
    left: 30px;
  }
`;

const RightSection = styled.div`
  position: relative;
  // outline: red solid 5px;
  width: 700px;
  height: 280px;
  top: 0;
  bottom: 0;
  margin: auto;
  align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 90%;
    right: 0;
    align-items: center;
    text-align: center;
    height: 520px;
    margin: 50px auto auto auto;
  }
  @media (max-width: 786px) {
    width: 90%;
    right: 0;
    align-items: center;
    text-align: center;
    height: 380px;
    margin: 10vw auto auto auto;
  }
  @media (max-width: 476px) {
    width: 90%;
    right: 0;
    align-items: center;
    text-align: center;
    height: 220px;
    margin: 10vw auto auto auto;
  }
`;
