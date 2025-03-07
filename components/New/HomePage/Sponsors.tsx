"use client";

import Link from "next/link";
import styled from "styled-components";

import Image from "next/image";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";
import { SponsorProps, useSponsors } from "@/components/hooks/useSponsors";
import t from "@/public/constant/content";
import Colors from "@/styles/colors";

const Sponsors = () => {
  const { platinumSponsors, goldSponsors, silverSponsors, bronzeSponsors } =
    useSponsors();

  const sponsors = [
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
  ];

  return (
    <Container>
      <MainContent>
        <Title>
          <Image
            src="./images/icons/love.svg"
            alt="Love icon"
            width={36}
            height={36}
            style={{ marginRight: 16 }}
          />
          {t.homepage.sponsors}
        </Title>
        <Subtitle>{t.sponsorHighlight.sponsorSubtitle}</Subtitle>
        {sponsors.map((tierSponsors, index) => (
          <SponsorContainer key={index}>
            {tierSponsors.map((sponsor, i) => (
              <Sponsor sponsor={sponsor} key={i} />
            ))}
          </SponsorContainer>
        ))}
      </MainContent>
    </Container>
  );
};

export const Sponsor = ({ sponsor }: { sponsor: SponsorProps }) => {
  return (
    <StyledLink href={sponsor.url} target="_blank" rel="noopener noreferrer">
      <img
        src={sponsor.img}
        alt={sponsor.name}
        width={sponsor.width}
        height="auto"
      />
    </StyledLink>
  );
};

export default Sponsors;

const Container = styled.div`
  ${GrayGridBackgroundStyles}
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px 0px 40px;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 48px;
  color: ${Colors.brightBlue};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  max-width: 500px;
  font-size: 22px;
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
`;

const SponsorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;
  display: block;

  :hover {
    transform: scale(1.1);
  }

  > img {
    object-fit: contain;
  }
`;
