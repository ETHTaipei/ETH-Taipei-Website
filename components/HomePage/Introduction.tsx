import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import taipei101 from "@/public/images/taipei101.jpg";

const Introduction = () => {
  return (
    <Container>
      <MainContent>
        <TextContainer>
          <Title>{t.homepage.ethTaipeiIntroTitle}</Title>
          <Description>{t.homepage.ethTaipeiIntro1}</Description>
          <Description>{t.homepage.ethTaipeiIntro2}</Description>
          <Description>{t.homepage.ethTaipeiIntro3}</Description>
        </TextContainer>
        <ImageContainer>
          <Image src={taipei101} alt="taipei101" fill />
        </ImageContainer>
      </MainContent>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px 200px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px 120px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1 1 500px;
  > span {
    margin-top: 12px;
  }
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.pennBlue};
  display: block;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1 1 300px;
  > img {
    object-fit: cover;
    border-radius: 8px;
  }
`;
