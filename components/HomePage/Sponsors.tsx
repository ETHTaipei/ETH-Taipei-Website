import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { openNewTab } from "@/public/utils/common";
import t from "@/public/constant/content";
import { useSponsors } from "../hooks/useSponsors";

const Sponsors = () => {

  const {  goldSponsors, silverSponsors, bronzeSponsors } = useSponsors();

  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.sponsors}</Title>
        <SponsorsContainer>
          {[...goldSponsors, ...silverSponsors, ...bronzeSponsors].map((s) => (
            <SponsorBtn key={s.name} onClick={() => openNewTab(s.url)}>
              <StyledImage
                src={s.img}
                alt={s.name}
                width={s.width || 250}
                height={s.height}
              />
            </SponsorBtn>
          ))}
        </SponsorsContainer>
      </MainContent>
    </Container>
  );
};

export default Sponsors;

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
  font-size: 35px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.pennBlue};
  margin-bottom: 20px;
`;

const SponsorsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const SponsorBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const StyledImage = styled(Image)<{ width: number; height?: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;
