import React from "react";
import styled from "styled-components";
import Colors from "@/styles/colors";
import t from "@/public/constant/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openNewTab } from "@/public/utils/common";
import { discordUrl, telegramUrl, twitterUrl } from "@/public/constant/urls";
import {
  faTwitter,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const handleSocialMediaOnClick = (url: string) => {
    openNewTab(url);
  };

  return (
    <Container>
      <MainFooter>
        <EventName>{t.common.ethTaipei}</EventName>
        <SocialMediaContainer>
          <IconButton onClick={() => handleSocialMediaOnClick(twitterUrl)}>
            <Icon icon={faTwitter} />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaOnClick(telegramUrl)}>
            <Icon icon={faTelegram} />
          </IconButton>
          <IconButton onClick={() => handleSocialMediaOnClick(discordUrl)}>
            <Icon icon={faDiscord} />
          </IconButton>
        </SocialMediaContainer>
      </MainFooter>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  box-shadow: inset 0px 1px 0px #dddddd;
`;

const MainFooter = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 12px 48px 12px 32px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const EventName = styled.h4`
  color: ${Colors.pennBlue};
  text-align: center;
  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

const IconButton = styled.button`
  padding: 4px;
  cursor: pointer;
  color: ${Colors.pennBlue};
  :hover {
    color: ${Colors.aero};
  }
  :active {
    transform: scale(0.9);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
