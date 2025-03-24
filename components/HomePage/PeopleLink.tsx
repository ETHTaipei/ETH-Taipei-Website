import Image from "next/image";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { ContributorType } from "@/components/hooks/useContributors";

interface PeopleLinkProps {
  person: ContributorType;
}

const PeopleLink = ({ person }: PeopleLinkProps) => {
  const [title, team] = person.titleAndCompany.split("@");

  return (
    <Wrapper>
      <ProfileLink
        href={person.profile}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProfileImage
          src={person.img}
          alt={person.name}
          width={110}
          height={110}
        />
      </ProfileLink>
      <InfoWrapper>
        <Name>{person.name}</Name>
        <Title>{title}</Title>
        {team && <Team>@{team}</Team>}
      </InfoWrapper>
    </Wrapper>
  );
};

export default PeopleLink;

const Wrapper = styled.div`
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

const ProfileImage = styled(Image)`
  object-fit: cover;
  transition: transform 600ms ease;

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

const InfoWrapper = styled.div`
  text-align: center;
  color: white;
`;

const Name = styled.div`
  font-size: 20px;
  margin-top: 10px;
  color: ${Colors.neonGreen};
`;

const Title = styled.p`
  margin-top: 10px;
`;

const Team = styled.p`
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
