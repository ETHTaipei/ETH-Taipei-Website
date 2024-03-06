import Image from "next/image";
import styled from "styled-components";

import IconLocation from "@/components/icons/IconLocation";
import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import BackgroundVideo from "./BackgroundVideo";
import { sideEventFormUrl } from "@/public/constant/urls";

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
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_2_1}</InfoTitle>
              <InfoDescription>
                <a href={sideEventFormUrl} target="blank">{t.homepage.bannerInfoDesc_2_1}</a>
              </InfoDescription>
            </InfoWrapper>
          </Info>
          <Info>
            <IconLocation width={55} height={55} color="white" />
            <InfoWrapper>
              <InfoTitle>{t.homepage.bannerInfoTitle_3}</InfoTitle>
              <InfoDescription>{t.homepage.bannerInfoDesc_3}</InfoDescription>
            </InfoWrapper>
          </Info>
        </InfoContainer>
      </MainContent>
      <BackgroundVideo />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 80px;
  @media (max-width: 620px) {
    padding: 0 50px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Title = styled.h1<{ color: string }>`
  font-family: "Rammetto One";
  color: ${(props) => props.color};
`;

const SubTitle = styled.div`
  color: white;
  font-size: 28px;
  font-weight: bold;
  line-height: 30px;
  margin-top: 8px;
  letter-spacing: 1.8px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const InfoContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const InfoDescription = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;
