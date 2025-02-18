import t from "@/public/constant/content";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";
import { useMediaPartners } from "../../hooks/useMediaPartners";
import { usePartners } from "../../hooks/usePartners";

const Partners = () => {
  const { mediaPartners } = useMediaPartners();
  const { partners } = usePartners();

  return (
    <Container>
      <MainContent>
        <PartnerContainer>
          <Title>
            <img
              src="./images/icons/smile.svg"
              style={{ marginRight: 16, height: 36 }}
            />
            {t.homepage.partners}
          </Title>
          <Subtitle>
            {t.homepage.partnersDesc}
          </Subtitle>
          <SponsorsContainer>
            {partners.map((partner) => (
              <SponsorBtn
                key={partner.name}
                onClick={() => openNewTab(partner.url)}
              >
                <Image src={partner.img} fill alt={partner.name} />
              </SponsorBtn>
            ))}
          </SponsorsContainer>
        </PartnerContainer>
        <PartnerContainer>
          <Title>
            <img
              src="./images/icons/smile.svg"
              style={{ marginRight: 16, height: 36 }}
            />
            {t.homepage.mediaPartners}
          </Title>
          <Subtitle>
            {t.homepage.mediaPartnersDesc}
          </Subtitle>
          <SponsorsContainer>
            {mediaPartners.map((mediaPartner) => (
              <MDPartnerBtn
                key={mediaPartner.name}
                onClick={() => openNewTab(mediaPartner.url)}
              >
                <Image src={mediaPartner.img} fill alt={mediaPartner.name} />
              </MDPartnerBtn>
            ))}
          </SponsorsContainer>
        </PartnerContainer>
      </MainContent>
      <BackgroundBottom>
        <Image
          src="/images/background/taipei-101-2.png"
          fill
          alt="Speaker 101 Background"
          style={{ objectFit: "cover" }}
        />
      </BackgroundBottom>
    </Container>
  );
};

export default Partners;

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
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

const PartnerContainer = styled.div`
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

const Subtitle = styled.h2`
  margin-top: 20px;
  font-size: 22px;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const SponsorBtn = styled.button`
  flex: 0 1 240px;
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

const MDPartnerBtn = styled(SponsorBtn)`
  flex: 0 1 200px;
`;

const BackgroundBottom = styled.div`
  width: 100%;
  aspect-ratio: 1510 / 609;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
