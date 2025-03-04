import styled from "styled-components";

const BrandVideo = () => {
  return (
    <Container>
      <Cover />
      <VideoContainer>
        <Video autoPlay muted loop playsInline>
          <source src="/videos/icon_transform.webm" type="video/webm" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>
    </Container>
  );
};

export default BrandVideo;

const Container = styled.div`
  position: fixed; /* 確保背景影片填滿視窗 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
`;

const Cover = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #efefef 100%);
  opacity: 0.75;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: -2;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
