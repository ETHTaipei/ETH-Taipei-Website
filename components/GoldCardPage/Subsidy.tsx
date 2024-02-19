import t from "@/public/constant/content";
import {
  goldcardADIUrl,
  goldcardApplySubsidyUrl,
  goldcardSubsidyGuidelineUrl,
  goldcardSubsidyPressReleaseUrl,
  goldcardTCAUrl,
} from "@/public/constant/urls";
import { openNewTab } from "@/public/utils/common";
import gtagReportConversion from "@/public/utils/gtag";
import Colors from "@/styles/colors";
import styled from "styled-components";

const Subsidy = () => {
  const handleClickApply = () => {
    openNewTab(goldcardApplySubsidyUrl);
    gtagReportConversion();
  };

  return (
    <Container>
      <MainContent>
        <Title>{t.goldcard.goldcardSubsidyTitle}</Title>
        <SubTitle>{t.goldcard.goldcardSubsidySubtitle}</SubTitle>
        <Description>{t.goldcard.goldcardSubsidyDesc}</Description>
        <OrgDescription>
          {t.goldcard.goldcardSubsidyOrganization_1}
          <A href={goldcardADIUrl} target="_blank" rel="noopener noreferrer">
            {t.goldcard.goldcardSubsidyOrganization_2}
          </A>
          {t.goldcard.goldcardSubsidyOrganization_3}
          <A href={goldcardTCAUrl} target="_blank" rel="noopener noreferrer">
            {t.goldcard.goldcardSubsidyOrganization_4}
          </A>
        </OrgDescription>
        <ApplySubsidyButton onClick={handleClickApply}>
          {t.goldcard.goldcardSubsidyApplyBtn}
        </ApplySubsidyButton>
        <Guideline>
          <A
            href={goldcardSubsidyGuidelineUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardSubsidyGuidelines}
          </A>
        </Guideline>
        <PressRelease>
          <A
            href={goldcardSubsidyPressReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.goldcard.goldcardSubsidyPressRelease}
          </A>
        </PressRelease>
      </MainContent>
    </Container>
  );
};
export default Subsidy;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: ${Colors.pennBlue};
  margin-bottom: 40px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 45px;
  font-weight: bold;
  line-height: 55px;
  color: ${Colors.pennBlue};
  margin-bottom: 40px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

const OrgDescription = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.pennBlue};
  margin-bottom: 30px;
  text-align: center;
`;

const ApplySubsidyButton = styled.button`
  display: block;
  margin: auto;
  border-radius: 8px;
  color: white;
  padding: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  background-color: ${Colors.aero};
  margin-bottom: 20px;
`;

const Guideline = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.pennBlue};
  display: flex;
  justify-content: center;
`;

const PressRelease = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.pennBlue};
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const A = styled.a`
  color: ${Colors.aero};
  text-decoration: underline;
  cursor: pointer;
`;
