import { HTMLAttributes, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled, { ThemedStyledProps } from "styled-components";

import IconLocation from "@/components/icons/IconLocation";
import t from "@/public/constant/content";
import BackgroundVideo from "./BackgroundVideo";

interface SlideshowProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
  @media (max-width: 996px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  @media (max-width: 996px) {
    gap: 24px;
  }
`;

const Title = styled.h1`
  font-family: "Rammetto One";
  font-size: 42px;
  @media (max-width: 996px) {
    text-align: center;
    margin-bottom: 16px;
  }
`;

const SubTitleContainer = styled.div`
  display: flex;
  gap: 22px;
  font-weight: bold;
  align-items: end;
`;

const SubTitle = styled.h2`
  font-size: 28px;
`;

const SubTitleCapacity = styled.div`
  font-size: 16px;
`;

const Description = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 24px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Address = styled.a`
  display: flex;
  gap: 8px;
  align-items: top;
  font-size: 16px;
  line-height: 24px;
`;

const AddressDetail = styled.div``;

const MapContainer = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 996px) {
    height: 200px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 16px;

  @media (max-width: 996px) {
    min-height: 450px;
  }
`;

const Slideshow = styled.div<ThemedStyledProps<SlideshowProps, any>>`
  display: flex;
  align-items: center;
  position: absolute;
  transform: translateX(${(props) => props.index * -100}%);
  transition: transform 0.5s ease-in-out;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1024 / 681;
  object-fit: cover;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 48px;
  width: 48px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const PrevButton = styled(Button)`
  left: 8px;
`;

const NextButton = styled(Button)`
  right: 8px;
`;

const Venue = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://i.imgur.com/nfrbgCy.png",
    "https://i.imgur.com/RjQkZr9.jpg",
    "https://i.imgur.com/UHjIcGj.png",
    "https://i.imgur.com/xoUN62U.png",
    "https://i.imgur.com/yQDjfrF.png",
    "https://i.imgur.com/touZtUt.png",
    "https://i.imgur.com/ug5ZI5k.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <Container>
      <MainContent>
        <TextContainer>
          <Title>{t.homepage.venue}</Title>
          <SubTitleContainer>
            <SubTitle>{t.homepage.venueName}</SubTitle>
            <SubTitleCapacity>Capacity: 700 people</SubTitleCapacity>
          </SubTitleContainer>
          <Description>{t.homepage.venueDescription}</Description>
          <AddressContainer>
            <Address
              href="https://goo.gl/maps/CCXUtykxqYjyp9wVA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconLocation width={24} height={28} color="white" />
              <AddressDetail>{t.homepage.venueAddress}</AddressDetail>
            </Address>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4235963977653!2d121.6013444758816!3d25.053628077803722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab6736d1d707%3A0x752127c88348688b!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5Y2X5riv6Lev5LqM5q61MTPomZ8!5e0!3m2!1szh-TW!2stw!4v1708771348975!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </MapContainer>
          </AddressContainer>
        </TextContainer>
        <ImageContainer>
          <Slideshow index={currentImage}>
            {images.map((image, index) => (
              <Image src={image} alt={`Image ${index}`} key={index} />
            ))}
          </Slideshow>
          <PrevButton onClick={handlePrev}>
            <FiChevronLeft />
          </PrevButton>
          <NextButton onClick={handleNext}>
            <FiChevronRight />
          </NextButton>
        </ImageContainer>
      </MainContent>
      <BackgroundVideo />
    </Container>
  );
};

export default Venue;
