import styled from "styled-components";

import { SpeakerType, useSpeakers } from "@/components/hooks/useSpeakers";
import PeopleLink from "./PeopleLink";
import PeopleSection from "./PeopleSection";

const Speakers = () => {
  const { speakers, keynoteSpeakers } = useSpeakers();

  return (
    <PeopleSection
      title="Speakers"
      subtitle="Get Ready for their expert insights!"
      iconSrc="./images/icons/cat.svg"
      iconWidth={138}
      iconHeight={40}
      paddingStyle={{
        default: "120px 40px",
        mobile: "60px 24px",
      }}
      maxWidth={`1200px`}
    >
      <KeynoteSpeakerContainer>
        {keynoteSpeakers.map((speaker, i) => (
          <KeynoteSpeaker speaker={speaker} key={i} />
        ))}
      </KeynoteSpeakerContainer>
      {speakers.map((speaker, i) => (
        <Speaker speaker={speaker} key={i} />
      ))}
    </PeopleSection>
  );
};

type SpeakerComponentProps = {
  speaker: SpeakerType;
  imageSize: number;
  minImageSize: number;
  isKeynote?: boolean;
};

function SpeakerComponent({
  speaker,
  imageSize,
  minImageSize,
  isKeynote,
}: SpeakerComponentProps) {
  return (
    <PeopleLink
      person={{
        name: speaker.name,
        img: speaker.img,
        profile: speaker.profile,
        titleAndCompany: speaker.company ? `@ ${speaker.company}` : "",
        companyLink: speaker.companyLink,
      }}
      imageSize={imageSize}
      isKeynote={isKeynote}
      minImageSize={minImageSize}
    />
  );
}

function KeynoteSpeaker({ speaker }: { speaker: SpeakerType }) {
  return (
    <SpeakerComponent
      speaker={speaker}
      imageSize={250}
      minImageSize={200}
      isKeynote={true}
    />
  );
}

function Speaker({ speaker }: { speaker: SpeakerType }) {
  return (
    <SpeakerComponent speaker={speaker} imageSize={180} minImageSize={140} />
  );
}

export default Speakers;

const KeynoteSpeakerContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 40px;
`;
