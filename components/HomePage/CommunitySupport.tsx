import Image from "next/image";
import t from "@/public/constant/content";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import styled from "styled-components";
import { useCommunityPartners } from "../hooks/usePartners";
import { CuteBgIconDecoration } from "./BgIconDecoration";
import {
  BaseContainer,
  BaseMainContent,
  Partner,
  PartnersGrid,
  Subtitle,
  Title,
} from "./PartnerAndSponsor";
import Colors from "@/styles/colors";

const CommunitySupport = () => {
  const { communityPartners } = useCommunityPartners();

  return (
    <Container>
      <CuteBgIconDecoration />
      <BaseMainContent>
        <StyledTitle>
          <Image
            src="/images/icons/orchid.svg"
            alt="Icon"
            width={44}
            height={36}
            style={{ marginRight: "12px" }}
          />
          {t.homepage.communitySupport}
        </StyledTitle>
        <StyledSubtitle>{t.homepage.communitySupportSubtitle}</StyledSubtitle>
        <PartnersGrid>
          {communityPartners.map((partner) => (
            <Partner key={partner.name} partner={partner} />
          ))}
        </PartnersGrid>
      </BaseMainContent>
    </Container>
  );
};

export default CommunitySupport;

const Container = styled(BaseContainer)`
  ${BlueGridBackgroundStyles}
  && {
    padding: 80px 80px 160px 80px;

    @media (max-width: 768px) {
      padding: 60px 24px 80px 24px;
    }
  }
`;

const StyledTitle = styled(Title)`
  && {
    color: ${Colors.neonGreen};
    font-size: 42px;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  color: white;
`;
