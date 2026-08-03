import Image from "next/image";
import styled from "styled-components";

import { useT } from "@/contexts/LanguageContext";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import { CuteBgIconDecoration } from "./BgIconDecoration";
import { diagonalSymmetricBorder } from "@/styles/constants";

const Introduction = () => {
  const t = useT();
  const cards = [
    {
      title: t.homepage.introductionCardTitle_1,
      description: t.homepage.introductionCardDesc_1,
    },
    {
      title: t.homepage.introductionCardTitle_2,
      description: t.homepage.introductionCardDesc_2,
    },
    {
      title: t.homepage.introductionCardTitle_3,
      description: t.homepage.introductionCardDesc_3_1,
    },
  ];

  return (
    <Container>
      <CuteBgIconDecoration />
      <MainContent>
        <SectionAnchor id="about" aria-hidden="true" />
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
          {cards.map(({ title, description }, index) => (
            <Card key={title}>
              <CardNumber aria-hidden="true">0{index + 1}</CardNumber>
              <CardImgDesc>{title}</CardImgDesc>
              <CarInfo>{description}</CarInfo>
            </Card>
          ))}
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
  padding: 84px 40px;

  @media (max-width: 768px) {
    padding: 60px 24px 120px 24px;
  }
`;

const SectionAnchor = styled.span`
  display: block;
  width: 0;
  height: 0;
  scroll-margin-top: calc(var(--site-nav-height, 76px) + 16px);
`;

const MainContent = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 0;
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

const Title = styled.h2`
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
  gap: 14px;
  min-height: 260px;
  padding: 26px;
  border: 1px solid rgb(203 241 1 / 0.3);
  background: linear-gradient(145deg, rgb(203 241 1 / 0.08), rgb(57 82 255 / 0.12));
  ${diagonalSymmetricBorder}
`;

const CardNumber = styled.span`
  color: rgb(203 241 1 / 0.7);
  font-family: "Menlo", "Monaco", monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
`;

const CardImgDesc = styled.div`
  font-size: 22px;
  color: ${Colors.neonGreen};
  line-height: 28px;
`;

const CarInfo = styled.div`
  font-family: "Inter";
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
`;
