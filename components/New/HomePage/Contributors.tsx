"use client";

import Link from "next/link";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { useOrganizers, OrganizerType } from "@/components/hooks/useOrganizers";
import Image from "next/image";
import { useContributors } from "@/components/hooks/useContributors";

const Contributors = () => {
  const { contributors } = useContributors();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <OrganizersTitle>
            <img
              src="./images/icons/contributors.svg"
              style={{ marginRight: 12 }}
            />
            Contributors
          </OrganizersTitle>
          <OrganizersSubtitle>
            The people behind the scenes, growing Web3!!
          </OrganizersSubtitle>
          <OrganizersList>
            {contributors.map((organizer, index) => (
              <OrganizerCard organizer={organizer} key={index} />
            ))}
          </OrganizersList>
        </ContentCenter>
      </MainContent>
      <BackgroundBottom>
        <Image
          src="/images/background/taipei-101-3.png"
          fill
          alt="Speaker 101 Background"
          style={{ objectFit: "cover" }}
        />
      </BackgroundBottom>
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
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 90px;
  background-color: ${Colors.brightBlue};

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  position: relative; // Needed for absolute positioning of the child
  overflow: hidden; // Ensures the decoration doesn't overflow the container

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
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

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const OrganizersList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 80px;
  gap: 20px;

  @media (max-width: 768px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 240px;

  @media (max-width: 768px) {
    width: 110px;
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
  border: 3px solid ${Colors.neonGreen};
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;

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

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 900px;
  overflow: hidden;
  z-index: -1;
`;
