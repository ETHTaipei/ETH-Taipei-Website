import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import speakers from "@/public/constant/speakers";
import Image from "next/image";

const Speakers = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.speakers}</Title>
        <SpeakersContainer>
          {speakers.map((speaker, i) => (
            <SpeakerContainer key={i}>
              <SpeakerIcon>
                <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                  <Image src={speaker.src} fill alt={speaker.name} />
                </a>
              </SpeakerIcon>
              <SpeakerName>
                <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                  {speaker.name}
                </a>
              </SpeakerName>
              <SpeakerCompany>
                <a href={speaker.companyLink} target="_blank" rel="noopener noreferrer">
                  {speaker.company}
                </a>
              </SpeakerCompany>
            </SpeakerContainer>
          ))}
        </SpeakersContainer>
        <Description>{t.homepage.moreToBeReleased}</Description>
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
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  display: block;
  margin-top: 80px;
`;

const SpeakersContainer = styled.div`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 40px 40px;
  margin-top: 40px;
`;

const SpeakerContainer = styled.div`
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const SpeakerIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;

const SpeakerName = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  text-align: center;
`;

const SpeakerCompany = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.pennBlue};
`;
