"use client";

import Image from "next/image";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";
import { useSponsors } from "@/components/hooks/useSponsors";
import t from "@/public/constant/content";
import {
  BaseContainer,
  BaseMainContent,
  Title,
  Subtitle,
  PartnersGrid,
  Partner,
} from "./PartnerAndSponsor";
import styled from "styled-components";

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
      <BaseMainContent>
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
        <Subtitle>{t.homepage.sponsorSubtitle}</Subtitle>
        {sponsors.map((tierSponsors, index) => (
          <PartnersGrid key={index}>
            {tierSponsors.map((sponsor, i) => (
              <Partner partner={sponsor} key={i} />
            ))}
          </PartnersGrid>
        ))}
      </BaseMainContent>
    </Container>
  );
};

export default Sponsors;

const Container = styled(BaseContainer)`
  ${GrayGridBackgroundStyles}
  && {
    padding: 120px 40px 0px 40px;

    @media (max-width: 768px) {
      padding: 60px 24px 60px 24px;
    }
  }
`;
