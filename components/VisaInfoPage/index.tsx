import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import styled from "styled-components";
import {
  invitationLetterUrl,
  telegramUrl,
  visaUrl,
} from "@/public/constant/urls";
import { useRouting } from "@/public/utils/common";

const VisaInfoPage = () => {
  const { handleOnClickExternalLink } = useRouting();

  return (
    <Container id="info">
      <Question>{t.visa.visaQuestion1}</Question>
      <Description>
        {t.visa.visaAnswer1Part1}
        <Link onClick={() => handleOnClickExternalLink(visaUrl)}>
          {t.visa.BureauOfConsularAffairs}
        </Link>
        {t.visa.visaAnswer1Part2}
      </Description>

      <Question>{t.visa.visaQuestion2}</Question>
      <Description>
        {t.visa.visaAnswer2Part1}
        <br />
        {t.visa.visaAnswer2Part2}
        <Link onClick={() => handleOnClickExternalLink(invitationLetterUrl)}>
          {t.visa.form}
        </Link>
        {t.visa.visaAnswer2Part3}
        <Link onClick={() => handleOnClickExternalLink(telegramUrl)}>
          {t.visa.telegram}
        </Link>
        {t.visa.visaAnswer2Part4}
      </Description>
    </Container>
  );
};
export default VisaInfoPage;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 120px 40px;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const Question = styled.h2`
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
  color: ${Colors.brightBlue};
  margin-bottom: 10px;
  margin-top: 40px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
  color: black;
`;

const Link = styled.a`
  color: ${Colors.brightBlue};
  :hover {
    color: ${Colors.neonGreen};
  }
`;
