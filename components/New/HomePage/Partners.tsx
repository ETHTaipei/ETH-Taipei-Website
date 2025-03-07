import t from "@/public/constant/content";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";
import {
  usePartners,
  useMediaPartners,
  PartnerType,
} from "../../hooks/usePartners";
import Link from "next/link";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";

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
          <PartnerContainer>
            {partners.map((partner, index) => (
              <Partner partner={partner} key={index} />
            ))}
          </PartnerContainer>
        </SectionContainer>
        <SectionContainer>
          <Title>
            <SmileIcon />
            {t.homepage.mediaPartners}
          </Title>
          <Subtitle>{t.homepage.mediaPartnersDesc}</Subtitle>
          <PartnerContainer>
            {mediaPartners.map((partner, index) => (
              <Partner partner={partner} key={index} />
            ))}
          </PartnerContainer>
        </SectionContainer>
      </MainContent>
    </Container>
  );
};

export const Partner = ({ partner }: { partner: PartnerType }) => {
  return (
    <StyledLink href={partner.url} target="_blank" rel="noopener noreferrer">
      <img
        src={partner.img}
        alt={partner.name}
        height="auto"
        width={partner.width}
      />
    </StyledLink>
  );
};

export default Partners;

const Container = styled.div`
  ${GrayGridBackgroundStyles}
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;

  @media (max-width: 768px) {
    padding: 0px 24px 80px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

const SectionContainer = styled.div`
  width: 100%;
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

const PartnerContainer = styled.div`
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
    max-height: 80px;
  }
`;
