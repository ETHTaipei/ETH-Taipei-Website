import Image from "next/image";
import styled from "styled-components";

import { useT } from "@/contexts/LanguageContext";
import { youtubeUrl } from "@/public/constant/urls";
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
  const t = useT();

  return (
    <Container>
      <LogoBgIconDecoration />
      <MainContent>
        <SectionAnchor id="recap" aria-hidden="true" />
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
          <GalleryImages year={2024} startIndex={2} count={2} extension="jpg" />
        </Gallery>
        <YoutubeLink
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.homepage.recapYoutubeCta}
          <span aria-hidden="true">→</span>
        </YoutubeLink>
      </MainContent>
    </Container>
  );
};

export default Recap;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 84px 40px;
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

const SectionAnchor = styled.span`
  display: block;
  width: 0;
  height: 0;
  scroll-margin-top: calc(var(--site-nav-height, 76px) + 16px);
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1040px;
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
  margin-top: 36px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HighlightContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (max-width: 834px) {
    aspect-ratio: 582 / 329;
    grid-column: 1 / 3;
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
  height: 100%;
  z-index: 10;
  overflow: hidden;
  @media (max-width: 834px) {
    aspect-ratio: 272 / 180;
  }
`;

const YoutubeLink = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 34px auto 0;
  padding: 13px 24px;
  border: 1px solid ${Colors.neonGreen};
  border-radius: 12px;
  color: #0b1117;
  background: ${Colors.neonGreen};
  box-shadow: 0 0 18px rgb(203 241 1 / 0.28);
  font-size: 18px;
  font-weight: 700;
  transition: color 180ms ease, background 180ms ease,
    box-shadow 180ms ease, transform 180ms ease;

  &:hover,
  &:focus-visible {
    color: ${Colors.neonGreen};
    background: #0b1117;
    box-shadow: 0 0 0 2px #0b1117, 0 0 0 4px ${Colors.neonGreen},
      0 8px 24px rgb(203 241 1 / 0.36);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid white;
    outline-offset: 4px;
  }

  @media (max-width: 476px) {
    width: 100%;
  }
`;
