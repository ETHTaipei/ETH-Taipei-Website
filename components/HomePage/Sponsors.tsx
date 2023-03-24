import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { openNewTab } from "@/public/utils/common";
import t from "@/public/constant/content";
import {
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
} from "@/public/constant/sponsors";

const Sponsors = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.sponsors}</Title>
        <SponsorsContainer>
          {goldSponsors.map((s) => (
            <GoldSponsorBtn key={s.name} onClick={() => openNewTab(s.url)}>
              <Image
                src={s.logo}
                alt={s.name}
                width={s.width}
                height={s.height}
              />
            </GoldSponsorBtn>
          ))}

          {silverSponsors.map((s) => (
            <SilverSponsorBtn key={s.name} onClick={() => openNewTab(s.url)}>
              <Image
                src={s.logo}
                alt={s.name}
                width={s.width}
                height={s.height}
              />
            </SilverSponsorBtn>
          ))}

          {bronzeSponsors.map((s) => (
            <BronzeSponsorBtn key={s.name} onClick={() => openNewTab(s.url)}>
              <Image
                src={s.logo}
                alt={s.name}
                width={s.width}
                height={s.height}
              />
            </BronzeSponsorBtn>
          ))}
        </SponsorsContainer>
      </MainContent>
    </Container>
  );
};

export default Sponsors;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const SponsorsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const GoldSponsorBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
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

const SilverSponsorBtn = styled(GoldSponsorBtn)`
  /* width: 300px;
  height: 120px; */
`;

const BronzeSponsorBtn = styled(GoldSponsorBtn)`
  /* width: 240px;
  height: 100px; */
`;
