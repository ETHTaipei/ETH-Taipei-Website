"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";

import { SpeakerProps, useSpeakers } from "@/components/hooks/useSpeakers";
import IconTwitterX from "@/components/icons/IconTwitterX";
import t from "@/public/constant/content";
import { speakerApplyUrl } from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";

const Speakers = () => {
  const { speakers, keynoteSpeakers } = useSpeakers();

  const handleClick = () => {
    openNewTab(speakerApplyUrl);
  };

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
        {/* <ApplyContainer>
          <Description>{t.homepage.speakersIntro}</Description>
          <BeSpeakerButton onClick={handleClick}>
            {t.homepage.beASpeaker}
          </BeSpeakerButton>
        </ApplyContainer> */}
      </MainContent>
    </Container>
  );
};

function KeynoteSpeaker({ speaker }: { speaker: SpeakerProps }) {
  return (
    <KeynoteSpeakerContainer>
      <KeynoteSpeakerAvatar>
        <RoundedImageWrapperComponent speaker={speaker} />
      </KeynoteSpeakerAvatar>
      <KeynoteSpeakerInfo speaker={speaker} />
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

function KeynoteSpeakerInfo({ speaker }: { speaker: SpeakerProps }) {
  const handleClickName = () => {
    speaker.profile && openNewTab(speaker.profile);
  };
  const handleClickCompany = () => {
    speaker.companyLink && openNewTab(speaker.companyLink);
  };
  return (
    <SpeakerInfoContainer>
      <SpeakerName
        onClick={handleClickName}
        variant="lg"
        hasLink={!!speaker.profile}
      >
        {speaker.name}
      </SpeakerName>
      <SpeakerCompany
        onClick={handleClickCompany}
        variant="lg"
        hasLink={!!speaker.companyLink}
      >
        @ {speaker.company}
      </SpeakerCompany>
    </SpeakerInfoContainer>
  );
}

function SpeakerInfo({ speaker }: { speaker: SpeakerProps }) {
  const handleClickName = () => {
    speaker.profile && openNewTab(speaker.profile);
  };
  const handleClickCompany = () => {
    speaker.companyLink && openNewTab(speaker.companyLink);
  };
  return (
    <SpeakerInfoContainer>
      <SpeakerName onClick={handleClickName} hasLink={!!speaker.profile}>
        {speaker.name}
      </SpeakerName>
      <SpeakerCompany
        onClick={handleClickCompany}
        hasLink={!!speaker.companyLink}
      >
        @ {speaker.company}
      </SpeakerCompany>
    </SpeakerInfoContainer>
  );
}

function RoundedImageWrapperComponent({ speaker }: { speaker: SpeakerProps }) {
  return (
    <RoundedImageWrapper>
      <Image src={speaker.img} fill alt={speaker.name} />
      {speaker.profile && (
        <Link href={speaker.profile} target="_blank" rel="noopener noreferrer">
          <TwitterCover>
            <TwitterIcon>
              <IconTwitterX
                width={50}
                height={50}
                color={"white"}
                opacity={0.7}
              />
            </TwitterIcon>
          </TwitterCover>
        </Link>
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
  position: relative;
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
`;

const SpeakerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  color: white;
`;

const SpeakerName = styled.div<{ variant?: "lg"; hasLink: boolean }>`
  font-size: ${({ variant }) => {
    switch (variant) {
      case "lg": {
        return "30px";
      }
      default: {
        return "22px";
      }
    }
  }};
  font-weight: bold;
  text-align: center;
  color: ${Colors.neonGreen};
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "auto")};
`;

const SpeakerCompany = styled.div<{ variant?: "lg"; hasLink: boolean }>`
  font-size: ${({ variant }) => {
    switch (variant) {
      case "lg": {
        return "20px";
      }
      default: {
        return "16px";
      }
    }
  }};
  text-align: center;
  line-height: 20px;
  cursor: ${({ hasLink }) => (hasLink ? "pointer" : "auto")};
`;

const ApplyContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  text-align: center;
`;

const BeSpeakerButton = styled.button`
  background-color: ${Colors.blue1};
  border-radius: 8px;
  padding: 12px 44px;
  color: white;
  font-family: "Rammetto One";
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(36, 62, 81, 0.2);
`;

const BackgroundTop = styled.div`
  width: 100%;
  aspect-ratio: 1920 / 2000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const BackgroundBottom = styled.div`
  width: 100%;
  aspect-ratio: 1920 / 1080;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const RoundedImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

const TwitterCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  opacity: 0;
  transition: 0.2s;
  ${RoundedImageWrapper}:hover & {
    opacity: 1;
  }
`;

const TwitterIcon = styled.div`
  position: absolute;
  right: 20%;
  bottom: 20%;
`;
