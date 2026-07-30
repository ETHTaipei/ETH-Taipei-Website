import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { useT } from "@/contexts/LanguageContext";
import { miraUrl, tabeiUrl } from "@/public/constant/urls";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";
import {
  BaseContainer,
  BaseMainContent,
  PartnersGrid,
  Subtitle,
  Title,
} from "./PartnerAndSponsor";

const SmileIcon = () => (
  <Image
    src="./images/icons/smile.svg"
    alt="Smile icon"
    width={36}
    height={36}
    style={{ marginRight: 16 }}
  />
);

const PartnerSection = () => {
  const t = useT();
  return (
    <Container>
      <BaseMainContent>
        <Title>
          <SmileIcon />
          {t.homepage.partners}
        </Title>
        <Subtitle>{t.homepage.partnersDesc}</Subtitle>
        <PartnersGrid>
          <PartnerLogo
            href={tabeiUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit TABEI website"
          >
            <Image
              src="/images/partners/tabei.png"
              alt="TABEI"
              width={220}
              height={88}
              style={{ height: "auto" }}
            />
          </PartnerLogo>
          <PartnerLogo
            href={miraUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mira website"
          >
            <Image
              src="/images/partners/mira.png"
              alt="Mira"
              width={250}
              height={80}
              style={{ height: "auto" }}
            />
          </PartnerLogo>
        </PartnersGrid>
      </BaseMainContent>
    </Container>
  );
};

const Container = styled(BaseContainer)`
  ${GrayGridBackgroundStyles}
`;

const PartnerLogo = styled(Link)`
  margin: 10px;
  display: block;
  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }

  > img {
    object-fit: contain;
    max-height: 100px;
  }
`;

export default PartnerSection;
