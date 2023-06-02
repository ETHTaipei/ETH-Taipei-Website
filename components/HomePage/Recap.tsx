import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import { openNewTab } from "@/public/utils/common";
import t from "@/public/constant/content";

const Recap = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.recap}</Title>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/G7uA9RNQ8FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </MainContent>
    </Container>
  );
};

export default Recap;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.yInMnBlue};
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const Title = styled.h3`
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 60px;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Application = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.btnBlue};
  border-radius: 8px;
  padding: 20px 40px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(36, 62, 81, 0.2),
    0 6px 12px 0 rgba(63, 83, 114, 0.19);
  :active {
    transform: scale(0.99);
  }
`;