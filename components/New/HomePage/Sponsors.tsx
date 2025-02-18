'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { SponsorProps, useSponsors } from '@/components/hooks/useSponsors';
import t from "@/public/constant/content";
import Colors from '@/styles/colors';

const Sponsors = () => {
  const { goldSponsors, silverSponsors, bronzeSponsors } = useSponsors();

  return (
    <Container>
      <MainContent>
        <Title>
          <img
            src="./images/icons/love.svg"
            style={{ marginRight: 16, height: 36 }}
          />
          {t.homepage.sponsors}
        </Title>
        <DescriptionContainer>
          <Description>
            These Sponsors Make ETHTaipei Possible!!
          </Description>
        </DescriptionContainer>
        <SponsorContainer>
          {goldSponsors.map((sponsor, i) => (
            <Sponsor sponsor={sponsor} key={i} />
          ))}
        </SponsorContainer>

        <SponsorContainer>
          {silverSponsors.map((sponsor, i) => (
            <Sponsor sponsor={sponsor} key={i} />
          ))}
        </SponsorContainer>
        <SponsorContainer>
          {bronzeSponsors.map((sponsor, i) => (
            <Sponsor sponsor={sponsor} key={i} />
          ))}
        </SponsorContainer>
      </MainContent>
    </Container>
  );
};

function Sponsor({ sponsor }: { sponsor: SponsorProps }) {
  const maxWidth = sponsor.tier === 'gold' ? 200 : sponsor.tier === 'silver' ? 150 : 100;

  return (
    <RoundedImageWrapper>
      <Link href={sponsor.url} target='_blank' rel='noopener noreferrer'>
        <div>
          <img
            src={sponsor.img}
            alt={sponsor.name}
            // if width is set, then height is auto-scaled
            height={sponsor.width ? 'auto' : sponsor.height}
            width={sponsor.width}
          />
        </div>
      </Link>
    </RoundedImageWrapper>
  );
}

export default Sponsors;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;
  background-color: #EDEDED;
  background-image: 
    repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 1px, transparent 1px, transparent 145px),
    repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 1px, transparent 1px, transparent 145px);
  }

  @media (max-width: 768px) {
    padding: 60px 24px;
    background-image: 
      repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 1px, transparent 1px, transparent 45px),
      repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.2) 1px, transparent 1px, transparent 45px);
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 48px;
  color: ${Colors.brightBlue};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  line-height: 2;
`;

const Description = styled.p`
  justify-content: center;
  align-items: center;
  max-width: 500px;
  font-size: 22px;
  margin-bottom: 30px;
`;

const SponsorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RoundedImageWrapper = styled.div`
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;
  :hover {
    transform: scale(1.1);
  }
  > img {
    object-fit: contain;
  }
  @media (max-width: 768px) {
    min-height: 80px;
  }
`;
