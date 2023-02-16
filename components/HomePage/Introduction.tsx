import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Container>
      <MainContent>
        <TextContainer>
          <Title>What is ETH Taipei</Title>
          <Description>
            ETHTaipei is about bringing builders of the Ethereum ecosystem
            together. Depth first & developer focused, it aims to provide a
            place to facilitate discussion on technical subjects so that we all
            learn and make progress in the space to build a better future.
          </Description>
        </TextContainer>
      </MainContent>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  padding: 120px 0px 200px 0px;
  background-color: ${Colors.gray6};
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
`;

const TextContainer = styled.div`
  flex: 0 1 600px;
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
