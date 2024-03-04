'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Colors from '@/styles/colors';
import { SponsorProps, useSponsors } from '@/components/hooks/useSponsors';

const Sponsors = () => {
  const { goldSponsors, silverSponsors, bronzeSponsors } = useSponsors();

  return (
    <Container>
      <MainContent>
        <Title>Sponsors</Title>
        <DescriptionContainer>
          <Description>
            We would like to express our immense gratitude to our sponsors for your 
            unwavering support, which has been instrumental in ensuring the success 
            and smooth execution of ETHTaipei!
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
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: 'Rammetto One';
  font-size: 42px;
  font-weight: bold;
  text-align: center;
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
  margin-top: 30px;
  max-width: 500px;
  font-size: 16px;
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
