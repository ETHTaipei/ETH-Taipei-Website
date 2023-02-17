import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import banner from "@/public/images/vertical-transparent.png";

const Banner = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={banner} alt="logo" fill />
      </ImageContainer>
      <ActivitiesContainer>
        <ActivityContainer>
          <ActivityTitle>Hackathon</ActivityTitle>
          <ActivityDate>21 - 23 Apr</ActivityDate>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityTitle>Conference</ActivityTitle>{" "}
          <ActivityDate>24 - 25 Apr</ActivityDate>
        </ActivityContainer>
      </ActivitiesContainer>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  min-height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    min-height: calc(100vh - 70px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  > image {
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const ActivitiesContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ActivityContainer = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: ${Colors.yInMnBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ActivityTitle = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: ${Colors.seaSalt};
  display: block;
`;

const ActivityDate = styled.h3`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.seaSalt};
  display: block;
`;
