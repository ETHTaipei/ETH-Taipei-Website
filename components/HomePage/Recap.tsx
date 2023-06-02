import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import t from "@/public/constant/content";

const Recap = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.recap}</Title>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/G7uA9RNQ8FA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
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