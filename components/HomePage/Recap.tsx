import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import { LogoBgIconDecoration } from "./BgIconDecoration";
import { diagonalSymmetricBorder } from "@/styles/constants";

const GalleryImages = ({
  year,
  startIndex,
  count,
  extension,
}: {
  year: number;
  startIndex: number;
  count: number;
  extension: string;
}) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <ImgContainer key={i}>
        <GalleryImg
          src={`/images/recap-${year}/${startIndex + i}.${extension}`}
          alt={`Recap ${year} Edition`}
          fill
        />
      </ImgContainer>
    ))}
  </>
);

const Recap = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Container>
      <LogoBgIconDecoration />
      <MainContent>
        <Title>
          <Image
            src={"/images/icons/boba.svg"}
            alt="calendar"
            width={55}
            height={55}
            style={{ objectFit: "contain", marginRight: "12px" }}
          />
          {t.homepage.recapTitle}
        </Title>
        <Subtitle>{t.homepage.recapSubTitle}</Subtitle>
        <Gallery>
          <HighlightContainer>
            <HighlightImg
              src={`/images/recap-2024/1.jpg`}
              alt="Recap 2024 Edition"
              fill
            />
          </HighlightContainer>
          <GalleryImages year={2024} startIndex={2} count={5} extension="jpg" />
          {isExpanded && (
            <GalleryImages
              year={2023}
              startIndex={6}
              count={9}
              extension="png"
            />
          )}
        </Gallery>
        <Controller>
          <ViewMoreButton onClick={handleClick}>
            {isExpanded ? t.homepage.recapHide : t.homepage.recapViewMore}
          </ViewMoreButton>
        </Controller>
      </MainContent>
    </Container>
  );
};

export default Recap;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 112px 40px;
  background: linear-gradient(
    180deg,
    #101617 0,
    rgba(8, 12, 14, 0.94) 140px,
    rgba(0, 0, 0, 0.75) 360px
  );
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
  position: relative;
`;

const MainContent = styled.div`
  width: 85vw;
  max-width: 800px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 48px;
  letter-spacing: 1.6px;
  color: ${Colors.neonGreen};
  text-align: center;
  @media (max-width: 476px) {
    font-size: 30px;
    img {
      width: 32px; /* 在小螢幕上縮小圖片 */
      height: 32px;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
  letter-spacing: 1.6px;
  line-height: 30px;
  margin-top: 16px;
  color: white;
  @media (max-width: 476px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Gallery = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HighlightContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (max-width: 834px) {
    aspect-ratio: 582 / 329;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  z-index: 10;
`;

const baseImgStyles = `
  object-fit: cover;
  border: 3px solid ${Colors.brightBlue};
  ${diagonalSymmetricBorder}
`;

const HighlightImg = styled(Image)`
  ${baseImgStyles}
`;

// FIXME: gradient issues
const GalleryImg = styled(Image)`
  border-image: linear-gradient(180deg, #7e8eff 0%, ${Colors.brightBlue} 100%);
  border-image-slice: 1;
  ${baseImgStyles}
`;

const ImgContainer = styled.div`
  position: relative;
  aspect-ratio: 272 / 180;
  z-index: 10;
  overflow: hidden;
`;

const Controller = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ViewMoreButton = styled.button`
  width: 260px;
  margin-top: 40px;
  padding: 13px 24px;
  border: 1px solid ${Colors.neonGreen};
  border-radius: 12px;
  color: #0b1117;
  background-color: ${Colors.neonGreen};
  box-shadow: 0 0 18px rgb(203 241 1 / 0.28);
  font-size: 20px;
  font-weight: 700;
  font-family: "W95fa";
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;

  z-index: 10;
  transition: color 180ms ease, background-color 180ms ease,
    box-shadow 180ms ease, transform 180ms ease;
  :hover {
    color: ${Colors.neonGreen};
    background-color: #0b1117;
    box-shadow: 0 0 0 2px #0b1117, 0 0 0 4px ${Colors.neonGreen},
      0 8px 24px rgb(203 241 1 / 0.36);
    transform: translateY(-3px) scale(1.03);
  }
  :focus-visible {
    color: ${Colors.neonGreen};
    background-color: #0b1117;
    outline: 3px solid white;
    outline-offset: 4px;
    box-shadow: 0 0 0 2px #0b1117, 0 0 0 4px ${Colors.neonGreen},
      0 8px 24px rgb(203 241 1 / 0.36);
    transform: translateY(-2px);
  }
  @media (max-width: 476px) {
    padding: 12px 20px;
    width: 100%;
    font-size: 18px;
    margin-top: 20px;
  }
`;
