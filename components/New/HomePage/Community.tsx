import t from "@/public/constant/content";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import styled from "styled-components";
import { useCommunityPartners } from "../../hooks/usePartners";
import BackgroundBottomDecoration from "./BackgroundBottomDecoration";
import {
  BaseContainer,
  BaseMainContent,
  Partner,
  PartnersGrid,
  Subtitle,
  Title,
} from "./PartnerAndSponsor";
import Colors from "@/styles/colors";

const Community = () => {
  const { communityPartners } = useCommunityPartners();

  return (
    <Container>
      <BackgroundBottomDecoration />
      <BaseMainContent>
        <StyledTitle>
          <Icon src="/images/icons/orchid.svg" />
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

export default Community;

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

const Icon = styled.img`
  width: 44px;
  margin-right: 12px;
`;

const StyledSubtitle = styled(Subtitle)`
  color: white;
`;
