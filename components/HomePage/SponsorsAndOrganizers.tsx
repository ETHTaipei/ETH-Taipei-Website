import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { openNewTab } from "@/public/utils/ common";
import t from "@/public/constant/content";
import organizers from "@/public/constant/organizers";
import partners from "@/public/constant/partners";

const SponsorsAndOrganizers = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.sponsorsAndOrganizers}</Title>
        <SponsorsContainer>
          {organizers.map((organizer) => (
            <SponsorBtn
              key={organizer.name}
              onClick={() => openNewTab(organizer.url)}
            >
              <Image src={organizer.logo} fill alt={organizer.name} />
            </SponsorBtn>
          ))}
        </SponsorsContainer>
        <PartnersTitle>{t.homepage.partners}</PartnersTitle>
        <SponsorsContainer>
          {partners.map((partner) => (
            <SponsorBtn
              key={partner.name}
              onClick={() => openNewTab(partner.url)}
            >
              <Image src={partner.logo} fill alt={partner.name} style={{ maxHeight: partner.height, margin: 'auto' }} />
            </SponsorBtn>
          ))}
        </SponsorsContainer>
      </MainContent>
    </Container>
  );
};

export default SponsorsAndOrganizers;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const SponsorBtn = styled.button`
  flex: 0 1 280px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const PartnersTitle = styled(Title)`
  margin-top: 60px;
`;
