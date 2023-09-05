import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";


const CommunityEvent = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.communityEvents}</Title>
        <div style={{ display: 'flex' }}>
          <iframe width="450" height="260" src="https://www.youtube.com/embed/zMQZStrWxfQ?si=NZfg27nr_s9gvVgA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
          <div style={{ padding: 20 }}></div>
          <iframe width="450" height="260" src="https://www.youtube.com/embed/mqim2Ibfnp0?si=w-3P67E8rsqrHmsS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
        </div>

      </MainContent>
    </Container>
  );
};

export default CommunityEvent;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  // background-color: ${Colors.yInMnBlue};
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