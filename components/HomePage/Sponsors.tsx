import Colors from "@/styles/colors";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Sponsors = () => {
  return (
    <Container>
      <MainContent>
        <Title>Sponsors</Title>
        <SponsorsContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
          <SponsorContainer>
            <FontAwesomeIcon
              icon={faImage}
              color={Colors.gray1}
              fontSize={32}
            />
          </SponsorContainer>
        </SponsorsContainer>
      </MainContent>
    </Container>
  );
};

export default Sponsors;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
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
  color: ${Colors.gray1};
  margin-bottom: 20px;
`;

const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const SponsorContainer = styled.div`
  flex: 0 0 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.gray6};
  padding: 20px;
`;
