'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Colors from '@/styles/colors';
import { useOrganizers, OrganizerType } from '@/components/hooks/useOrganizers';
import Image from 'next/image';

const Organizers = () => {
  const { organizers } = useOrganizers();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <OrganizersTitle> Organizers </OrganizersTitle>
          <OrganizersList>
            {organizers.map((organizer, index) => (
              <OrganizerCard organizer={organizer} key={index} />
            ))}
          </OrganizersList>
        </ContentCenter>
      </MainContent>
      <BackgroundBottom>
        <Image
          src='/images/background/decoration.png'
          fill
          alt='Speaker 101 Background'
          style={{ objectFit: 'cover' }}
        />
      </BackgroundBottom>
    </Container>
  );
};

const OrganizerCard = ({ organizer }: { organizer: OrganizerType }) => {
  const [title, team] = organizer.titleAndCompany.split('@');

  return (
    <OrganizerWrapper>
      <Link href={organizer.profile} passHref>
        <ProfileLink target='_blank' rel='noopener noreferrer'>
          <ProfileImage src={organizer.img} alt={organizer.name} />
        </ProfileLink>
      </Link>
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
  padding: 120px 90px;
  background: linear-gradient(130.81deg, rgba(252, 252, 252, 0.75) 20.56%, #e5e5e5 98.6%);
  @media (max-width: 768px) {
    padding: 60px 24px;
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
  font-family: 'Rammetto One';
  font-size: 42px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  text-align: center;
`;

const OrganizersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  width: 80%;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const ProfileLink = styled.a`
  cursor: pointer;
`;

const ProfileImage = styled.img`
  height: 166px;
  width: 166px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const OrganizerInfo = styled.div`
  text-align: center;
  color: ${Colors.pennBlue};
`;

const OrganizerName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
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
  height: 600px;
  overflow: hidden;
  z-index: -1;
`;