import { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";

import { useT } from "@/contexts/LanguageContext";
import Colors from "@/styles/colors";
import { speakers2026ByDay, Speaker2026 } from "@/public/constant/speakers2026";
import PeopleSection from "./PeopleSection";

// Initials for the avatar fallback: first letter of the first two words.
// Connector words like the "&" in "Koss & Alaska" are skipped so a duo card
// reads "KA" rather than "K&".
const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .filter((w) => /^[\p{L}\p{N}]/u.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

const sortSpeakersByName = (speakers: Speaker2026[]) =>
  [...speakers].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
  );

const FEATURED_SPEAKER_NAME = "Vitalik Buterin";

const SpeakerSection = () => {
  const t = useT();
  const featuredSpeaker = speakers2026ByDay
    .flatMap((day) => day.speakers)
    .find((speaker) => speaker.name === FEATURED_SPEAKER_NAME);

  if (speakers2026ByDay.every((day) => day.speakers.length === 0)) return null;

  return (
    <PeopleSection
      id="speakers"
      title={t.homepage.speakers}
      subtitle={t.homepage.speakersSubtitle}
      iconSrc="./images/icons/cat.svg"
      iconWidth={138}
      iconHeight={40}
      paddingStyle={{ default: "120px 40px", mobile: "60px 24px" }}
      maxWidth="1200px"
    >
      {/* One flat grid, with each day's heading spanning every column, so the
          cards of both days stay on the same column rhythm. */}
      {featuredSpeaker && <FeaturedSpeakerCard speaker={featuredSpeaker} />}
      {speakers2026ByDay.map((day) => (
        <Fragment key={day.id}>
          <DayHeading>{t.homepage.speakersDays[day.id]}</DayHeading>
          {day.speakers.length > 0 ? (
            sortSpeakersByName(
              day.speakers.filter(
                (speaker) => speaker.name !== FEATURED_SPEAKER_NAME,
              ),
            ).map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))
          ) : (
            <DayPlaceholder>{t.homepage.speakersLineupComingSoon}</DayPlaceholder>
          )}
        </Fragment>
      ))}
    </PeopleSection>
  );
};

const FeaturedSpeakerCard = ({ speaker }: { speaker: Speaker2026 }) => (
  <FeaturedCard>
    <FeaturedAvatar>
      {speaker.avatar ? (
        <Image src={speaker.avatar} alt={speaker.name} width={176} height={176} />
      ) : (
        <span>{initials(speaker.name)}</span>
      )}
    </FeaturedAvatar>
    <FeaturedName>{speaker.name}</FeaturedName>
    {speaker.company && <FeaturedCompany>{speaker.company}</FeaturedCompany>}
  </FeaturedCard>
);

const SpeakerCard = ({ speaker }: { speaker: Speaker2026 }) => (
  <Card>
    <Avatar>
      {speaker.avatar ? (
        <Image src={speaker.avatar} alt={speaker.name} width={128} height={128} />
      ) : (
        <span>{initials(speaker.name)}</span>
      )}
    </Avatar>
    <Name>{speaker.name}</Name>
    {speaker.title && <Title>{speaker.title}</Title>}
    {speaker.company && (
      <CompanyRow>
        {speaker.companyLogo && (
          <Image
            src={speaker.companyLogo}
            alt={speaker.company}
            width={18}
            height={18}
            style={{ objectFit: "contain" }}
          />
        )}
        <Company>{speaker.company}</Company>
      </CompanyRow>
    )}
  </Card>
);

export default SpeakerSection;

// Full-width row inside the card grid: the day label with a hairline rule on
// either side. `1 / -1` spans however many columns the grid currently has, so
// this survives the responsive column changes in PeopleSection.
const DayHeading = styled.h3`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.neonGreen};
  letter-spacing: 0.5px;
  white-space: nowrap;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: rgba(203, 241, 1, 0.35);
  }

  /* The featured speaker sits before the first day; each day heading needs
     breathing room from the content above it. */
  &:not(:first-child) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    gap: 12px;
  }
`;

const DayPlaceholder = styled.p`
  grid-column: 1 / -1;
  margin-top: 24px;
  text-align: center;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
`;

const FeaturedCard = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px 6px;
  text-align: center;
`;

const FeaturedAvatar = styled.div`
  display: flex;
  width: 176px;
  height: 176px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid ${Colors.neonGreen};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 0 0 8px rgba(203, 241, 1, 0.08),
    0 0 42px rgba(203, 241, 1, 0.28);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    color: ${Colors.neonGreen};
    font-size: 52px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const FeaturedName = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
`;

const FeaturedCompany = styled.p`
  margin-top: 8px;
  color: ${Colors.neonGreen};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8px 6px 24px;
`;

const Avatar = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1.5px solid ${Colors.neonGreen};

  span {
    font-size: 34px;
    font-weight: 700;
    color: ${Colors.neonGreen};
    letter-spacing: 1px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 112px;
    height: 112px;
  }
`;

const Name = styled.p`
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  line-height: 1.3;
`;

const Title = styled.p`
  margin-top: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
`;

const CompanyRow = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Company = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.neonGreen};
  line-height: 1.4;
`;
