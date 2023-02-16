import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const Venue = () => {
  return (
    <Container>
      <MainContent>
        <TextContainer>
          <Title>The Venue</Title>
          <Description>POPOP Taipei</Description>
          <Description>
            No. 13, Section 2, Nangang Rd, Nangang District, Taipei City, 115
          </Description>
        </TextContainer>
        <ImageContainer>
          <Image
            src={`https://maps.googleapis.com/maps/api/staticmap?center=No.+13,+Section+2,+Nangang+Rd,+Nangang+District,+Taipei+City&zoom=14&size=600x400&key=AIzaSyD_hN8fapZDlepT0Fmw4NRSgTiO3hf6r4A`}
            alt="map"
          />
        </ImageContainer>
      </MainContent>
    </Container>
  );
};

export default Venue;

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
  flex: 0 1 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.pennBlue};
`;

const Image = styled.img`
  width: 100%;
  min-height: 400px;
  border-radius: 8px;
  overflow: hidden;
  object-fit: contain;
`;

const ImageContainer = styled.div`
  position: relative;
`;
