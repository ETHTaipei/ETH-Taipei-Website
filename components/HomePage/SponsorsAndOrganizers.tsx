import Colors from "@/styles/colors";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import diamond from "@/public/images/diamond.png";
import code4Rena from "@/public/images/code4Rena.png";
import furucombo from "@/public/images/furucombo.png";
import imToken from "@/public/images/imToken.png";
import lyra from "@/public/images/lyra.png";
import perpetual from "@/public/images/perpetual.png";
import quantstamp from "@/public/images/quantstamp.png";
import { openNewTab } from "@/public/utils/ common";
import {
  code4renaUrl,
  diamondUrl,
  furucomboUrl,
  imTokenUrl,
  lyraUrl,
  perpetualUrl,
  quantstampUrl,
} from "@/public/constant/urls";

const SponsorsAndOrganizers = () => {
  return (
    <Container>
      <MainContent>
        <Title>Sponsors & Organizers</Title>
        <SponsorsContainer>
          <SponsorBtn onClick={() => openNewTab(code4renaUrl)}>
            <Image src={code4Rena} fill alt="code4Rena" />
          </SponsorBtn>
          <SponsorBtn onClick={() => openNewTab(diamondUrl)}>
            <Image src={diamond} fill alt="diamond protocol" />
          </SponsorBtn>
          <SponsorBtn onClick={() => openNewTab(furucomboUrl)}>
            <Image src={furucombo} fill alt="furucombo" />
          </SponsorBtn>
          <SponsorBtn onClick={() => openNewTab(imTokenUrl)}>
            <Image src={imToken} fill alt="imToken" />
          </SponsorBtn>
          <SponsorBtn onClick={() => openNewTab(lyraUrl)}>
            <Image src={lyra} fill alt="lyra" />
          </SponsorBtn>
          <SponsorBtn onClick={() => openNewTab(perpetualUrl)}>
            <Image src={perpetual} fill alt="perpetual" />
          </SponsorBtn>
          <SponsorBtn onClick={() => openNewTab(quantstampUrl)}>
            <Image src={quantstamp} fill alt="quantstamp" />
          </SponsorBtn>
        </SponsorsContainer>
      </MainContent>
    </Container>
  );
};

export default SponsorsAndOrganizers;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const SponsorBtn = styled.button`
  flex: 1 0 240px;
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
