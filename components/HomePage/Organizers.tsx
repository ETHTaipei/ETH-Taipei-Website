import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const Organizers = () => {
  return (
    <Container>
      <MainContent>
        <Title>Organized By</Title>
      </MainContent>
    </Container>
  );
};

export default Organizers;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.yInMnBlue};
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;
const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.seaSalt};
  margin-bottom: 20px;
`;
