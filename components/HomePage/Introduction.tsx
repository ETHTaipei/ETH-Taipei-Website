import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import { CuteBgIconDecoration } from "./BgIconDecoration";

const Introduction = () => {
  return (
    <Container>
      <CuteBgIconDecoration />
      <MainContent>
        <TitleContainer>
          <IconImg
            src={"/images/icons/temple.svg"}
            alt="boba"
            width={60}
            height={48}
          />
          <Title>{t.homepage.introductionTitle}</Title>
        </TitleContainer>
        <Subtitle>{t.homepage.introductionSubtitle}</Subtitle>
        <CardContainer>
          <Card>
            <CardImg>
              <Image
                src="/images/recap-2024/7.jpg"
                alt={t.homepage.introductionCardTitle_1}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImg>
            <CardImgDesc>{t.homepage.introductionCardTitle_1}</CardImgDesc>
            <CarInfo>{t.homepage.introductionCardDesc_1}</CarInfo>
          </Card>
          <RightCardContainer>
            <RightCard>
              <CardImg>
                <Image
                  src="/images/recap-2024/3.jpg"
                  alt={t.homepage.introductionCardTitle_2}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CardImg>
              <CardContent>
                <CardImgDesc>{t.homepage.introductionCardTitle_2}</CardImgDesc>
                <CarInfo>{t.homepage.introductionCardDesc_2}</CarInfo>
              </CardContent>
            </RightCard>
            <RightCard>
              <CardImg>
                <Image
                  src="/images/recap-2024/4.jpg"
                  alt={t.homepage.introductionCardTitle_3}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CardImg>
              <CardContent>
                <CardImgDesc>{t.homepage.introductionCardTitle_3}</CardImgDesc>
                <CarInfo>{t.homepage.introductionCardDesc_3_1}</CarInfo>
              </CardContent>
            </RightCard>
          </RightCardContainer>
        </CardContainer>
      </MainContent>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  ${BlueGridBackgroundStyles}
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 40px;

  @media (max-width: 768px) {
    padding: 60px 24px 120px 24px;
  }
`;

const MainContent = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: auto;
  /* add margin-bottom for BgIconDecoration */
  margin-bottom: 80px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  line-height: 58px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const IconImg = styled(Image)`
  object-fit: contain;
  margin-right: 12px;
  @media (max-width: 768px) {
    object-fit: contain;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 32px;
    margin-right: 8px;
  }
`;

const Title = styled.h1`
  color: ${Colors.neonGreen};
  text-align: center;
  letter-spacing: 1.6px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  letter-spacing: 1.6px;
  color: white;
  text-align: center;
  margin-top: 14px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 20px;
  color: white;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RightCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const RightCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardImg = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 306 / 180;
  border: 3px solid ${Colors.neonGreen};
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;
  min-width: 230px;
  min-height: 210px;
  @media (max-width: 992px) {
    min-width: 0;
    min-height: 0;
  }
`;

const CardImgDesc = styled.div`
  font-size: 24px;
  color: ${Colors.neonGreen};
  line-height: 28px;
  margin-top: 8px;
`;

const CarInfo = styled.div`
  font-family: "Inter";
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.5px;
`;
