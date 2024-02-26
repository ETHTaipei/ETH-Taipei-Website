import styled from "styled-components";

const BackgroundVideo = () => {
  return (
    <Container>
      <Cover />
      <VideoContainer>
        <video
          autoPlay
          muted
          loop
          id="background-video"
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={"100%"}
          playsInline
        >
          <source src="/videos/2023-eth-tpe-recap-720p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </Container>
  );
};

export default BackgroundVideo;

const Container = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;
