import Colors from "@/styles/colors";
import styled from "styled-components";

const Intro = () => {
  return (
    <Container>
      <MainContent>
        <iframe
          style={{ width: "100%", maxWidth: "900px" }}
          height="506"
          src="https://www.youtube.com/embed/q3vIaJXFVes"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </MainContent>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.pennBlue};
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
