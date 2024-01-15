import t from "@/public/constant/content";
import { ethTaipei2023Url } from "@/public/constant/urls";
import Colors from "@/styles/colors";
import styled from "styled-components";

const Recap = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.recap}</Title>
        <iframe
          style={{ width: "100%", maxWidth: "900px" }}
          height="506"
          src="https://www.youtube.com/embed/G7uA9RNQ8FA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <Text>
          {t.homepage.recapGoBackText}
          <A href={ethTaipei2023Url} target="_blank" rel="noopener noreferrer">
            EthTaipei 2023
          </A>
        </Text>
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

const Text = styled.div`
  line-height: 24px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const A = styled.a`
  color: ${Colors.btnBlue};
  text-decoration: underline;
`;
