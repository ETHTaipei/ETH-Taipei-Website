import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
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
  return (
    <Container>
      <BaseMainContent>
        <Title>
          <SmileIcon />
          {t.homepage.partners}
        </Title>
        <Subtitle>{t.homepage.partnersDesc}</Subtitle>
        <PartnersGrid>
          <PartnerLogo>
            <Image
              src="/images/partners/tabei.png"
              alt="TABEI"
              width={220}
              height={88}
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

const PartnerLogo = styled.div`
  margin: 10px;
  display: block;

  > img {
    object-fit: contain;
    max-height: 100px;
  }
`;

export default PartnerSection;
