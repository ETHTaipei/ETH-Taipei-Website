import t from "@/public/constant/content";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import Image from "next/image";
import styled from "styled-components";
import { useCommunityPartners } from "../../hooks/usePartners";
import BackgroundBottomDecoration from "./BackgroundBottomDecoration";

const Community = () => {
  const { communityPartners } = useCommunityPartners();

  return (
    <Container>
      <BackgroundBottomDecoration />
      <MainContent>
        <PartnerContainer>
          <Title>
            <Icon src="/images/icons/orchid.svg" />
            {t.homepage.communitySupport}
          </Title>
          <Subtitle> {t.homepage.communitySupportSubtitle}</Subtitle>
          <SponsorsContainer>
            {communityPartners.map((partner) => (
              <SponsorBtn
                key={partner.name}
                onClick={() => openNewTab(partner.url)}
              >
                <Image src={partner.img} fill alt={partner.name} />
              </SponsorBtn>
            ))}
          </SponsorsContainer>
        </PartnerContainer>
      </MainContent>
    </Container>
  );
};

export default Community;

const Container = styled.div`
  ${BlueGridBackgroundStyles}
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 140px 80px;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* add margin-bottom for BackgroundBottomDecoration */
  margin-bottom: 80px;
`;

const PartnerContainer = styled.div`
  width: 100%;
  z-index: 10;
`;

const Title = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Icon = styled.img`
  width: 44px;
  margin-right: 12px;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 26px;
  margin-top: 12px;
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
