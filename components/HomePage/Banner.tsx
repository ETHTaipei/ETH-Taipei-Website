import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Title>ETH Taipei</Title>
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

const Title = styled.h1`
  font-size: 40px;
  line-height: 54px;
  color: ${Colors.gray1};
  display: block;
`;

const ActivitiesContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 400px;
`;

const ActivityContainer = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: ${Colors.gray6};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ActivityTitle = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: ${Colors.gray1};
  display: block;
`;

const ActivityDate = styled.h3`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.gray1};
  display: block;
`;
