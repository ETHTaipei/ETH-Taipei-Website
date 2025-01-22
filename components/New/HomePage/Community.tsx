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
          <Title> {t.homepage.communitySupport} </Title>
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
  background: linear-gradient(
    143.49deg,
    rgba(205, 243, 255, 0.37) 5.18%,
    #cdf3ff 94.78%
  );
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
  gap: 120px;
`;

const PartnerContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 42px;
  font-family: "Rammetto One";
  color: ${Colors.pennBlue};
  text-align: center;
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
