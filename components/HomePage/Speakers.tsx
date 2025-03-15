"use client";

import Image from "next/image";
import styled from "styled-components";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";

import { SpeakerProps, useSpeakers } from "@/components/hooks/useSpeakers";
import t from "@/public/constant/content";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";

const Speakers = () => {
  const { speakers, keynoteSpeakers } = useSpeakers();

  return (
    <Container>
      <MainContent>
        <Title>
          <TitleIcon>
            <Image
              src="./images/icons/cat.svg"
              alt="Cat icon"
              width={138}
              height={40}
            />
          </TitleIcon>
          {t.homepage.speakers}
        </Title>
        <KeynoteSpeakersContainer>
          {keynoteSpeakers.map((speaker, i) => (
            <KeynoteSpeaker speaker={speaker} key={i} />
          ))}
        </KeynoteSpeakersContainer>
        <SpeakersContainer>
          {speakers.map((speaker, i) => (
            <Speaker speaker={speaker} key={i} />
          ))}
        </SpeakersContainer>
      </MainContent>
    </Container>
  );
};

function SpeakerInfo({
  speaker,
  isKeynote = false,
}: {
  speaker: SpeakerProps;
  isKeynote?: boolean;
}) {
  const handleClickCompany = () => {
    speaker.companyLink && openNewTab(speaker.companyLink);
  };
  return (
    <SpeakerInfoContainer>
      <SpeakerName isKeynote={isKeynote}>{speaker.name}</SpeakerName>
      <SpeakerCompany
        onClick={handleClickCompany}
        isKeynote={isKeynote}
        hasLink={!!speaker.companyLink}
      >
        {speaker.company && `@ ${speaker.company}`}
      </SpeakerCompany>
    </SpeakerInfoContainer>
  );
}

function KeynoteSpeaker({ speaker }: { speaker: SpeakerProps }) {
  return (
    <KeynoteSpeakerContainer>
      <KeynoteSpeakerAvatar>
        <RoundedImageWrapperComponent speaker={speaker} />
      </KeynoteSpeakerAvatar>
      <SpeakerInfo speaker={speaker} isKeynote={true} />
    </KeynoteSpeakerContainer>
  );
}

function Speaker({ speaker }: { speaker: SpeakerProps }) {
  return (
    <SpeakerContainer>
      <SpeakerAvatar>
        <RoundedImageWrapperComponent speaker={speaker} />
      </SpeakerAvatar>
      <SpeakerInfo speaker={speaker} />
    </SpeakerContainer>
  );
}

function RoundedImageWrapperComponent({ speaker }: { speaker: SpeakerProps }) {
  return (
    <RoundedImageWrapper>
      {speaker.profile && (
        <ProfileLink
          href={speaker.profile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={speaker.img} fill alt={speaker.name} />
        </ProfileLink>
      )}
    </RoundedImageWrapper>
  );
}

export default Speakers;

const Container = styled.div`
  ${BlueGridBackgroundStyles}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1020px;
`;

const TitleIcon = styled.div`
  display: flex;
  margin-right: 12px;
  height: 40px;
  @media (max-width: 768px) {
    margin-right: 8px;
    height: 30px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const KeynoteSpeakersContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KeynoteSpeakerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 80%;
`;

const KeynoteSpeakerAvatar = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border: 3px solid ${Colors.neonGreen};
  border-top-left-radius: 36px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 36px;

  @media (max-width: 768px) {
    border-top-left-radius: 24px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 24px;
  }

  transition: transform 600ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const SpeakersContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  margin-top: 60px;
  @media (max-width: 996px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SpeakerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SpeakerAvatar = styled.div`
  width: 100%;
  max-width: 180px;
  aspect-ratio: 1;
  position: relative;
  border-radius: 100%;
  overflow: hidden;

  border: 3px solid ${Colors.neonGreen};
  border-top-left-radius: 36px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 36px;

  @media (max-width: 768px) {
    border-top-left-radius: 24px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 24px;
  }

  transition: transform 600ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const SpeakerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  color: white;
`;

const SpeakerName = styled.div<{ isKeynote?: boolean }>`
  font-size: ${({ isKeynote }) => (isKeynote ? "30px" : "22px")};
  font-weight: bold;
  text-align: center;
  color: ${Colors.neonGreen};
`;

const SpeakerCompany = styled.div<{ isKeynote?: boolean; hasLink: boolean }>`
  font-size: ${({ isKeynote }) => (isKeynote ? "20px" : "16px")};
  text-align: center;
  line-height: 20px;
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "auto")};
`;

const RoundedImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

const ProfileLink = styled.a`
  cursor: pointer;
`;
