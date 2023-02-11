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
      </MainContent>
    </Container>
  );
};

export default Venue;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
`;

const TextContainer = styled.div`
  flex: 0 1 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.gray1};
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.gray1};
`;
