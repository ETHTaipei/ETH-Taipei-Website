"use client";

import styled from "styled-components";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import Image from "next/image";
import {
  usePastContributors,
  ContributorType,
} from "@/components/hooks/useContributors";

const PastContributors = () => {
  const { pastContributors } = usePastContributors();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <Title>
            <Image
              src="/images/icons/contributors.svg"
              alt="Contributors icon"
              width={46}
              height={46}
              style={{ marginRight: 12, verticalAlign: "bottom" }}
            />
            Past Contributors
          </Title>
          <Subtitle>{"ETHTaipei won't be possible without you <3"}</Subtitle>
          <ContributorList>
            {pastContributors.map((contributor, index) => (
              <ContributorCard contributor={contributor} key={index} />
            ))}
          </ContributorList>
        </ContentCenter>
      </MainContent>
    </Container>
  );
};

const ContributorCard = ({ contributor }: { contributor: ContributorType }) => {
  const [title, team] = contributor.titleAndCompany.split("@");

  return (
    <ContributorWrapper>
      <ProfileLink
        href={contributor.profile}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProfileImage src={contributor.img} alt={contributor.name} />
      </ProfileLink>
      <ContributorInfo>
        <ContributorName>{contributor.name}</ContributorName>
        <ContributorTitle>{title}</ContributorTitle>
        {team && <ContributorTeam>@{team}</ContributorTeam>}
      </ContributorInfo>
    </ContributorWrapper>
  );
};

export default PastContributors;

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

const Title = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const ContributorList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 80px;

  @media (max-width: 992px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

const ContributorWrapper = styled.div`
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

const ContributorInfo = styled.div`
  text-align: center;
  color: ${Colors.neonGreen};
`;

const ContributorName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContributorTitle = styled.p`
  margin-top: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ContributorTeam = styled.p`
  margin-top: 4px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
