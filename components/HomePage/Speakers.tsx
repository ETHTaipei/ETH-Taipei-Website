"use client";

import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";
import ApplicationForm from "./ApplicationForm";
import { SpeakerProps, useSpeakers } from "../hooks/useSpeakers";

const Speakers = () => {

  const {speakers, keynoteSpeakers} = useSpeakers();

  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.speakers}</Title>

        {/* keynote speakers */}
        <SpeakersContainer>
          {keynoteSpeakers.map((speaker, i) => (
            <Speaker speaker={speaker} key={i} />
          ))}
        </SpeakersContainer>

        {/* regular speakers */}
        <SpeakersContainer>
          {speakers.map((speaker, i) => (
            <Speaker speaker={speaker} key={i} />
          ))}
        </SpeakersContainer>

        <Description>{t.homepage.speakersIntro}</Description>

        <ApplicationForm></ApplicationForm>
      </MainContent>
    </Container>
  );
};

function Speaker({speaker}: {speaker: SpeakerProps}) {
  return (
    <SpeakerContainer>
      <SpeakerIcon canHover={!!speaker.profile} isKeynote={speaker.keynote}>
        <A
          href={speaker.profile}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!speaker.profile}
        >
          <RoundedImageWrapper>
            <Image src={speaker.img} style={{borderRadius: '100%'}}  fill alt={speaker.name} />
          </RoundedImageWrapper>
        </A>
      </SpeakerIcon>
      <SpeakerName canHover={!!speaker.profile}>
        <A
          href={speaker.profile}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!speaker.profile}
        >
          {speaker.name}
        </A>
      </SpeakerName>
      <SpeakerCompany canHover={!!speaker.companyLink}>
        <A
          href={speaker.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!speaker.companyLink}
        >
          {speaker.company}
        </A>
      </SpeakerCompany>
    </SpeakerContainer>
  )
}

export default Speakers;

const Container = styled.div`
  overflow: hidden;
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
  margin-top: 40px;
`;

const SpeakersContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 40px 20px;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const SpeakerContainer = styled.div`
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SpeakerIcon = styled.div<{ canHover: boolean, isKeynote: boolean }>`
  width: ${(props) => (props.isKeynote ? "180px" : "110px")};
  height: ${(props) => (props.isKeynote ? "180px" : "110px")};
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

const A = styled.a<{ disabled: boolean }>`
  pointer-events: ${(props) => props.disabled && "none"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

const RoundedImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
`;