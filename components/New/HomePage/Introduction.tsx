import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import BackgroundVideo from "./BackgroundVideo";

const Introduction = () => {
  return (
    <Container>
      <MainContent>
        <TitleContainer>
          <Title color={"white"}>{t.homepage.introductionTitle_1}&nbsp;</Title>
          <Title color={Colors.aero}>{t.homepage.introductionTitle_2}</Title>
          <Title color={"white"}>{t.homepage.introductionTitle_3}</Title>
        </TitleContainer>
        <Subtitle>{t.homepage.introductionSubtitle}</Subtitle>
        <CardContainer>
          <Card>
            <CardImg>
              <Image
                src="/images/intro-card-img-1.png"
                alt={t.homepage.introductionCardTitle_1}
                fill
                style={{ objectFit: "cover" }}
              />
              <CardImgDesc>{t.homepage.introductionCardTitle_1}</CardImgDesc>
            </CardImg>
            <CarInfo>{t.homepage.introductionCardDesc_1}</CarInfo>
          </Card>
          <Card>
            <CardImg>
              <Image
                src="/images/intro-card-img-2.png"
                alt={t.homepage.introductionCardTitle_2}
                fill
                style={{ objectFit: "cover" }}
              />
              <CardImgDesc>{t.homepage.introductionCardTitle_2}</CardImgDesc>
            </CardImg>
            <CarInfo>{t.homepage.introductionCardDesc_2}</CarInfo>
          </Card>
          <Card>
            <CardImg>
              <Image
                src="/images/intro-card-img-3.png"
                alt={t.homepage.introductionCardTitle_3}
                fill
                style={{ objectFit: "cover" }}
              />
              <CardImgDesc>{t.homepage.introductionCardTitle_3}</CardImgDesc>
            </CardImg>
            <CarInfo>
              {t.homepage.introductionCardDesc_3_1}
              <A>{t.homepage.introductionCardDesc_3_2}</A>
              {t.homepage.introductionCardDesc_3_3}
            </CarInfo>
          </Card>
        </CardContainer>
      </MainContent>
      <BackgroundVideo />
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 120px 40px 200px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px 120px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 42px;
`;

const Title = styled.h1<{ color: string }>`
  font-family: "Rammetto One";
  color: ${(props) => props.color};
`;

const Subtitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 14px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  color: white;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardImg = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 336 / 234;
`;

const CardImgDesc = styled.div`
  position: absolute;
  font-family: "Rammetto One";
  font-size: 18px;
  padding: 40px 20px 20px;
  line-height: 28px;
  bottom: 0px;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.9)
  );
`;

const CarInfo = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const A = styled.a`
  color: ${Colors.aero};
  text-decoration: underline;
  cursor: pointer;
`;
