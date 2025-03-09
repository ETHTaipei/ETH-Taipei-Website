"use client";

import styled from "styled-components";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import { OrganizerType } from "@/components/hooks/useOrganizers";
import Image from "next/image";
import { usePastContributors } from "@/components/hooks/usePastContributors";

const Contributors = () => {
  const { pastContributors } = usePastContributors();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <OrganizersTitle>
            <Image
              src="/images/icons/contributors.svg"
              alt="Contributors icon"
              width={46}
              height={46}
              style={{ marginRight: 12, verticalAlign: "bottom" }}
            />
            Past Contributors
          </OrganizersTitle>
          <OrganizersSubtitle>
            {"ETHTaipei won't be possible without you <3"}
          </OrganizersSubtitle>
          <OrganizersList>
            {pastContributors.map((organizer, index) => (
              <OrganizerCard organizer={organizer} key={index} />
            ))}
          </OrganizersList>
        </ContentCenter>
      </MainContent>
    </Container>
  );
};

const OrganizerCard = ({ organizer }: { organizer: OrganizerType }) => {
  const [title, team] = organizer.titleAndCompany.split("@");

  return (
    <OrganizerWrapper>
      <ProfileLink
        href={organizer.profile}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProfileImage src={organizer.img} alt={organizer.name} />
      </ProfileLink>
      <OrganizerInfo>
        <OrganizerName>{organizer.name}</OrganizerName>
        <OrganizerTitle>{title}</OrganizerTitle>
        {team && <OrganizerTeam>@{team}</OrganizerTeam>}
      </OrganizerInfo>
    </OrganizerWrapper>
  );
};

export default Contributors;

const Container = styled.div`
  ${BlueGridBackgroundStyles}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 90px;

  @media (max-width: 992px) {
    padding: 0px 16px 50px 16px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  position: relative; // Needed for absolute positioning of the child
  overflow: hidden; // Ensures the decoration doesn't overflow the container
`;

const ContentCenter = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrganizersTitle = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;
`;

const OrganizersSubtitle = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const OrganizersList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 80px;

  @media (max-width: 992px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 200px;
  height: 240px;

  @media (max-width: 768px) {
    width: 110px;
    height: 200px;
  }
`;

const ProfileLink = styled.a`
  cursor: pointer;
`;

const ProfileImage = styled.img`
  height: 110px;
  width: 110px;
  object-fit: cover;
  transition: transform 300ms ease;
  border: 2px solid ${Colors.neonGreen};
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;
  @media (max-width: 476px) {
    width: 96px;
    height: 96px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const OrganizerInfo = styled.div`
  text-align: center;
  color: ${Colors.neonGreen};
`;

const OrganizerName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const OrganizerTitle = styled.p`
  margin-top: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const OrganizerTeam = styled.p`
  margin-top: 4px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
