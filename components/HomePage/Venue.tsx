import { HTMLAttributes } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import React, { useState, useEffect } from "react";
import styled, { ThemedStyledProps } from "styled-components";

interface SlideshowProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

const Container = styled.div`
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 0 1 700px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 50px;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  line-height: 32px;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.pennBlue};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Slideshow = styled.div<ThemedStyledProps<SlideshowProps, any>>`
  display: flex;
  position: absolute;
  transform: translateX(${props => props.index * -100}%);
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
    "https://i.imgur.com/RjQkZr9.jpg",
    "https://i.imgur.com/UHjIcGj.png",
    "https://i.imgur.com/nfrbgCy.png",
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
    <SubTitle>{t.homepage.venueName}</SubTitle>
    <Description>{t.homepage.venueDescription}</Description>
    <Description>Capacity: 700 people</Description>
    <Description>Address: {t.homepage.venueAddress}</Description>
    <br />
    <a href={"https://goo.gl/maps/CCXUtykxqYjyp9wVA"} target="_blank" rel="noreferrer">View on Google Maps</a>
    </TextContainer>
    <ImageContainer>
    <Slideshow index={currentImage}>
    {images.map((image, index) => (
    <Image
    src={image}
    alt={`Image ${index}`}
    key={index}
    width={600}
    />
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
    </Container>
    );
    };
    
    export default Venue;
