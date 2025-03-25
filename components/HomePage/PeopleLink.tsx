import Image from "next/image";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { ContributorType } from "@/components/hooks/useContributors";
import { diagonalSymmetricBorder } from "@/styles/constants";

interface PeopleLinkProps {
  person: ContributorType;
  imageSize?: number;
  minImageSize?: number;
  isKeynote?: boolean;
}

const PeopleLink = ({
  person,
  imageSize = 120,
  minImageSize = 96,
  isKeynote = false,
}: PeopleLinkProps) => {
  const [title, team] = person.titleAndCompany.split("@");

  return (
    <Wrapper>
      <ProfileLink
        href={person.profile}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProfileImage
          src={person.img || ""}
          alt={person.name}
          width={imageSize}
          height={imageSize}
          $minImageSize={minImageSize}
        />
      </ProfileLink>
      <InfoWrapper>
        <Name $isKeynote={isKeynote}>{person.name}</Name>
        <Title $isKeynote={isKeynote}>{title}</Title>
        {team && (
          <Team
            $isKeynote={isKeynote}
            href={person.companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{team}
          </Team>
        )}
      </InfoWrapper>
    </Wrapper>
  );
};

export default PeopleLink;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const ProfileLink = styled.a`
  cursor: pointer;
`;

const ProfileImage = styled(Image)<{ $minImageSize: number }>`
  object-fit: cover;
  transition: transform 600ms ease;
  border: 2px solid ${Colors.neonGreen};
  ${diagonalSymmetricBorder}

  @media (max-width: 476px) {
    height: ${({ $minImageSize }) => `${$minImageSize}px`};
    width: ${({ $minImageSize }) => `${$minImageSize}px`};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const InfoWrapper = styled.div`
  text-align: center;
  color: white;
`;

const Name = styled.div<{ $isKeynote: boolean }>`
  color: ${Colors.neonGreen};
  margin-top: 10px;
  font-size: ${({ $isKeynote }) => ($isKeynote ? "30px" : "20px")};
`;

const Title = styled.p<{ $isKeynote: boolean }>`
  margin-top: 10px;
  font-size: ${({ $isKeynote }) => ($isKeynote ? "20px" : "16px")};
`;

const Team = styled.a<{ $isKeynote: boolean }>`
  margin-top: 4px;
  font-size: ${({ $isKeynote }) => ($isKeynote ? "20px" : "16px")};
`;
