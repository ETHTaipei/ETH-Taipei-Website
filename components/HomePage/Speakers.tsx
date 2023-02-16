import Colors from "@/styles/colors";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Speakers = () => {
  return (
    <Container>
      <MainContent>
        <Title>Speaker</Title>
        <SpeakersContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
          <SpeakerContainer>
            <SpeakerIcon>
              <FontAwesomeIcon
                icon={faUser}
                color={Colors.seaSalt}
                fontSize={20}
              />
            </SpeakerIcon>
            <SpeakerName>Name Name</SpeakerName>
            <SpeakerCompany>Company</SpeakerCompany>
          </SpeakerContainer>
        </SpeakersContainer>
      </MainContent>
    </Container>
  );
};

export default Speakers;

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

const SpeakersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px 100px;
  margin-top: 40px;
  @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 40px 40px;
  }
`;

const SpeakerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SpeakerIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: ${Colors.gray5};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const SpeakerName = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.seaSalt};
`;

const SpeakerCompany = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.seaSalt};
`;
