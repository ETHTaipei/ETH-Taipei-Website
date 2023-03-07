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
              <SpeakerIcon canHover={!!speaker.twitter}>
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={speaker.src} fill alt={speaker.name} />
                </a>
              </SpeakerIcon>
              <SpeakerName canHover={!!speaker.twitter}>
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {speaker.name}
                </a>
              </SpeakerName>
              <SpeakerCompany canHover={!!speaker.companyLink}>
                <a
                  href={speaker.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
`;

const SpeakerIcon = styled.div<{ canHover: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
  box-shadow: 0 6px 6px 0 rgba(88, 103, 113, 0.2);
  transition: transform 300ms ease-in-out;
  :hover {
    transform: scale(${(props) => (props.canHover ? "1.1" : "1")});
    cursor: ${(props) => (props.canHover ? "pointer" : "inherit")};
  }
`;

const SpeakerName = styled.span<{ canHover: boolean }>`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  text-align: center;
  a:hover {
    color: ${(props) => (props.canHover ? Colors.btnBlue : Colors.pennBlue)};
    cursor: ${(props) => (props.canHover ? "pointer" : "inherit")};
  }
`;

const SpeakerCompany = styled(SpeakerName)`
  font-size: 14px;
  line-height: 24px;
`;
