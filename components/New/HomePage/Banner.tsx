import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";

const Banner = () => {
  return (
    <Container>
      <MainContent>
        <TitleContainer>
          <Title color={Colors.aero}>{t.homepage.bannerTitle_1}</Title>
          <Title color={"white"}>{t.homepage.bannerTitle_2}&nbsp;</Title>
          <Title color={Colors.aero}>{t.homepage.bannerTitle_3}</Title>
        </TitleContainer>
        <SubTitle>{t.homepage.bannerSubTitle}</SubTitle>
        <InfoContainer>
          <Info>
            <Icon>
              <Image
                src={"/images/calendar.svg"}
                alt="calendar"
                fill
                style={{ objectFit: "contain" }}
              />
            </Icon>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_1}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_1}</InfoDescription>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_2}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_2}</InfoDescription>
            </InfoWrapper>
          </Info>
          <Info>
            <Icon>
              <Image
                src={"/images/location-tag.svg"}
                alt="location tag"
                fill
                style={{ objectFit: "contain" }}
              ></Image>
            </Icon>
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_3}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_3}</InfoDescription>
            </InfoWrapper>
          </Info>
        </InfoContainer>
      </MainContent>
      <Cover />
      <VideoContainer>
        <video
          autoPlay
          muted
          loop
          id="background-video"
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={"100%"}
        >
          <source src="/videos/2023-eth-tpe-recap-720p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 80px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 70px;
`;

const Title = styled.h1<{ color: string }>`
  font-family: "Rammetto One";
  color: ${(props) => props.color};
`;

const SubTitle = styled.div`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-top: 8px;
  letter-spacing: 1.8px;
`;

const InfoContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 40px;
`;

const Info = styled.div`
  display: flex;
  color: white;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
`;

const InfoWrapper = styled.div``;

const InfoTitle = styled.div`
  font-size: 21px;
  font-family: "Rammetto One";
`;

const InfoDescription = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;
