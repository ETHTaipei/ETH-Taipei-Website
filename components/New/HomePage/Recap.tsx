import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";

const Recap = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Container>
      <BgDecoration>
        <BgImage src={"/images/background/decoration.svg"} alt="decoration" />
      </BgDecoration>
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
          <VideoWrapper>
            {/* <iframe
              src="https://www.youtube.com/embed/G7uA9RNQ8FA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              width="100%"
              height="100%"
            /> */}
            <div>
              <HightlightImg
                src={`/images/recap-2024/1.jpg`}
                alt="Recap 2024 Edition"
              />
            </div>
          </VideoWrapper>
          {Array.from({ length: 5 }).map((_, i) => (
            <ImgContainer key={i}>
              <Image
                src={`/images/recap-2024/${i + 2}.jpg`}
                alt="Recap 2024 Edition"
                fill
                style={{
                  objectFit: "cover",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 24,
                }}
              />
            </ImgContainer>
          ))}
          {isExpanded &&
            Array.from({ length: 9 }).map((_, i) => (
              <ImgContainer key={i}>
                <Image
                  src={`/images/recap-2023/${i + 6}.png`}
                  alt="Recap 2023 Edition"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ImgContainer>
            ))}
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

const BgDecoration = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const BgImage = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 280px;
  }
`;

const HightlightImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 3px solid ${Colors.brightBlue};
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.neonGreen};
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
  position: relative;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 886px;
`;

const Title = styled.div`
  font-size: 64px;
  color: ${Colors.brightBlue};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-top: 14px;
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

const VideoWrapper = styled.div`
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

// FIXME: gradient issues
const ImgContainer = styled.div`
  position: relative;
  aspect-ratio: 272 / 149;
  z-index: 10;
  overflow: hidden;
  border-image: linear-gradient(180deg, #7E8EFF 0%, #3952FF 100%);
  border-image-slice: 1;
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
`;
