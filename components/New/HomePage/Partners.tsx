import t from "@/public/constant/content";
import Image from "next/image";
import styled from "styled-components";
import { usePartners, useMediaPartners } from "../../hooks/usePartners";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";
import {
  Title,
  Subtitle,
  PartnersGrid,
  BaseContainer,
  BaseMainContent,
  Partner,
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

const Partners = () => {
  const { mediaPartners } = useMediaPartners();
  const { partners } = usePartners();

  return (
    <Container>
      <MainContent>
        <SectionContainer>
          <Title>
            <SmileIcon />
            {t.homepage.partners}
          </Title>
          <Subtitle>{t.homepage.partnersDesc}</Subtitle>
          <PartnersGrid>
            {partners.map((partner, index) => (
              <Partner partner={partner} key={index} />
            ))}
          </PartnersGrid>
        </SectionContainer>
        <SectionContainer>
          <Title>
            <SmileIcon />
            {t.homepage.mediaPartners}
          </Title>
          <Subtitle>{t.homepage.mediaPartnersDesc}</Subtitle>
          <PartnersGrid>
            {mediaPartners.map((partner, index) => (
              <Partner partner={partner} key={index} />
            ))}
          </PartnersGrid>
        </SectionContainer>
      </MainContent>
    </Container>
  );
};

const Container = styled(BaseContainer)`
  ${GrayGridBackgroundStyles}
`;

const MainContent = styled(BaseMainContent)`
  gap: 80px;
`;

const SectionContainer = styled.div`
  width: 100%;
`;

export default Partners;
