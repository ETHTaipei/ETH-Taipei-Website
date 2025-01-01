import {
  invitationLetterUrl,
  telegramUrl,
  visaUrl,
} from "@/public/constant/urls";
import Colors from "@/styles/colors";
import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import bgImage from "@/public/images/background/taipei-101.png";
import { useSponsors } from "../hooks/useSponsors";

const FAQ = () => {
  const { goldSponsors, silverSponsors, bronzeSponsors } = useSponsors();
  const allSponsorsWithHighlights = [
    ...goldSponsors,
    ...silverSponsors,
    ...bronzeSponsors,
  ].filter((s) => s.highlightLink);

  return (
    <Container id="info">
      <Image src={bgImage} fill quality={100} alt="bgImage" />
      <MainContent>
        <TitleH1 id="sponsorhighlight">
          {t.sponsorHighlight.sponsorHighlightTitle}
        </TitleH1>
        {allSponsorsWithHighlights.map((s, i) => (
          <Row key={`${s.name}-${i}`}>
            <Title>{s.name}</Title>
            <Description>
              {s.highlightDescription} &nbsp;
              <Link href={s.highlightLink} target="_blank">
                {t.sponsorHighlight.readMore}
              </Link>
            </Description>
          </Row>
        ))}

        <TitleH1>{t.visa.visaTitle}</TitleH1>
        <Row>
          <Title>{t.visa.visaQuestion1}</Title>
          <Description>
            {t.visa.visaAnswer1Part1}
            <Link href={visaUrl} target="_blank">
              {t.visa.BureauOfConsularAffairs}
            </Link>
            {t.visa.visaAnswer1Part2}
          </Description>
        </Row>
        <Row>
          <Title>{t.visa.visaQuestion2}</Title>
          <Description>
            {t.visa.visaAnswer2Part1}
            <Link href={telegramUrl} target="_blank">
              {t.visa.telegram}
            </Link>
            {t.visa.visaAnswer2Part2}
            <br />
            {t.visa.visaInvitationLetter1}
            <Link href={invitationLetterUrl}>
              {t.visa.visaInvitationLetter2}
            </Link>
            {t.visa.visaInvitationLetter3}
          </Description>
        </Row>
      </MainContent>
    </Container>
  );
};

export default FAQ;

const TitleH1 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  font-family: "Rammetto One";
  color: ${Colors.pennBlue};
`;

const Container = styled.div`
  height: 150vh;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  position: relative;
  > img {
    object-fit: cover;
    object-position: top;
    z-index: -1;
    filter: grayscale(0.5) brightness(1.2);
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  gap: 40px;
  padding: 120px 40px;
`;

const Row = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 22px;
  font-weight: bold;
  line-height: 40px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex: inherit;
    font-size: 24px;
    line-height: 32px;
  }
`;

const Description = styled.span`
  flex: 1.5;
  font-size: 16px;
  line-height: 28px;
  color: ${Colors.pennBlue};
  display: block;
`;

const Link = styled.a`
  color: ${Colors.btnBlue};
  :hover {
    color: ${Colors.aero};
  }
`;
