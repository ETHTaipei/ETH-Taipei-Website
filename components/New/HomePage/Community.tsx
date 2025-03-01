import t from "@/public/constant/content";
import { openNewTab } from "@/public/utils/common";
import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";
import { useCommunityPartners } from "../../hooks/usePartners";

const Community = () => {
  const { partners } = useCommunityPartners();

  return (
    <Container>
      <MainContent>
        <PartnerContainer>
          <Title>
            <Icon src="/images/icons/orchid.svg" />
            {t.homepage.communitySupport}
          </Title>
          <Subtitle> {t.homepage.communitySupportSubtitle}</Subtitle>
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
      </MainContent>
      <BgDecoration position="left">
        <BgImage
          src={"/images/background/community-left.svg"}
          alt="decoration-left"
        />
      </BgDecoration>
      <BgDecoration position="right">
        <BgImage
          src={"/images/background/community-right.svg"}
          alt="decoration-right"
        />
      </BgDecoration>
    </Container>
  );
};

export default Community;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 140px 80px;
  background-color: ${Colors.brightBlue};
  background-image: 
    repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 70px),
    repeating-linear-gradient(to right, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 70px);
  }
  @media (max-width: 768px) {
    padding: 60px 24px;
    background-image: 
      repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 1px, transparent 1px, transparent 45px),
      repeating-linear-gradient(to right, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 1px, transparent 1px, transparent 45px);
    }
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
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

const BgDecoration = styled.div<{ position: string }>`
  position: absolute;
  bottom: 0px;
  ${(props) => (props.position === "left" ? "left: 60px;" : "right: 60px;")}
`;

const BgImage = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 100px;
  }
`;
