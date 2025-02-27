"use client";

import Link from "next/link";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { useOrganizers, OrganizerType } from "@/components/hooks/useOrganizers";
import Image from "next/image";

const Organizers = () => {
  const { organizers } = useOrganizers();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <OrganizersTitle>
            <img
              src="./images/icons/butterfly-green.svg"
              style={{ marginRight: 12, height: 30 }}
            />
            Organizers
          </OrganizersTitle>
          <OrganizersSubtitle>
            The team that makes ETHTaipei happen!!
          </OrganizersSubtitle>
          <OrganizersList>
            {organizers.map((organizer, index) => (
              <OrganizerCard organizer={organizer} key={index} />
            ))}
          </OrganizersList>
        </ContentCenter>
      </MainContent>
      <BackgroundBottom>
      <div
        style={{ objectFit: "cover", objectPosition: "center", backgroundAttachment:"fixed", backgroundColor:"rgba(0, 48, 206, 0.9);"}}
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

export default Organizers;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 90px 0px 90px;
  background-image: url("/images/2025/OtherSection/ETHTaipei_Recap_Pic3.jpg");
  background-attachment: fixed;
  background-position:center center;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  

  position: relative; // Needed for absolute positioning of the child
  overflow: hidden; // Ensures the decoration doesn't overflow the container

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const ContentCenter = styled.div`
  width: 100%;
  max-width: 800px;
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
`

const OrganizersList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 80px;
  gap: 0px;

  @media (max-width: 768px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
  }
`;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 240px;

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
  transition: transform 600ms ease;
  border: 2px solid ${Colors.neonGreen};
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
  color: white;
`;

const OrganizerName = styled.div`
  font-size: 20px;
  margin-top: 10px;
  color: ${Colors.neonGreen}
`;

const OrganizerTitle = styled.p`
  margin-top: 10px;
`;

const OrganizerTeam = styled.p`
  margin-top: 4px;
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;
