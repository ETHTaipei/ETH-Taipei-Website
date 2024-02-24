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
      <MainContent>
        <Title>{t.homepage.recapTitle}</Title>
        <Gallery>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/G7uA9RNQ8FA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              width="100%"
              height="100%"
            />
          </VideoWrapper>
          {Array.from({ length: 5 }).map((_, i) => (
            <ImgContainer key={i}>
              <Image
                src={`/images/recap-2023/${i + 1}.png`}
                alt="Recap 2023 Edition"
                fill
                style={{ objectFit: "cover" }}
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.yInMnBlue};
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 886px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  font-family: "Rammetto One";
  color: ${Colors.pennBlue};
  text-align: center;
`;

const Gallery = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const VideoWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  @media (max-width: 834px) {
    aspect-ratio: 582 / 329;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  aspect-ratio: 272 / 149;
`;

const Controller = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ViewMoreButton = styled.button`
  border-radius: 8px;
  padding: 8px 40px;
  background-color: ${Colors.btnBlue};
  color: white;
  font-size: 22px;
  font-family: "Rammetto One";
  cursor: pointer;
`;
