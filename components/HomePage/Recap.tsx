import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import { LogoBgIconDecoration } from "./BgIconDecoration";

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
          <HighlightImgWrapper>
            <HighlightImg
              src={`/images/recap-2024/1.jpg`}
              alt="Recap 2024 Edition"
            />
          </HighlightImgWrapper>
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
  padding: 120px 40px;
  background-color: rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
  position: relative;
`;

const MainContent = styled.div`
  width: 85vw;
  max-width: 800px;
`;

const Title = styled.div`
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

const Subtitle = styled.h2`
  font-size: 20px;
  text-align: center;
  letter-spacing: 1.6px;
  line-height: 30px;
  margin-top: 14px;
  color: white;
  @media (max-width: 476px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Gallery = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HighlightImgWrapper = styled.div`
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
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;
`;

const HighlightImg = styled.img`
  ${baseImgStyles}
  width: 100%;
  height: 100%;
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
  border-radius: 9999px;
  padding: 16px 40px;
  width: 320px;
  margin-top: 60px;
  background-color: ${Colors.brightBlue};
  color: ${Colors.neonGreen};
  font-size: 32px;
  font-family: "W95fa";
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;

  z-index: 10;
  transition: all 300ms ease;
  :hover {
    transform: scale(1.1);
    background-color: ${Colors.brightPink};
    color: black;
  }
  @media (max-width: 476px) {
    padding: 12px 20px;
    width: 200px;
    font-size: 20px;
    margin-top: 20px;
  }
`;
