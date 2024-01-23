import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { openNewTab } from "@/public/utils/common";
import t from "@/public/constant/content";
import { useCommunitySupport } from "../hooks/useCommunitySupport";

const CommunitySupport = () => {

  const { communitySupports } = useCommunitySupport()

  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.communitySupport}</Title>
        <CommunitiesContainer>
          {communitySupports.map((community) => (
            <CommunityBtn
              key={community.name}
              onClick={() => openNewTab(community.url)}
            >
              <Image src={community.img} fill alt={community.name} />
            </CommunityBtn>
          ))}
        </CommunitiesContainer>
      </MainContent>
    </Container>
  );
};

export default CommunitySupport;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  background-color: ${Colors.yInMnBlue};
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

const CommunitiesContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const CommunityBtn = styled.button`
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

const PartnersTitle = styled(Title)`
  margin-top: 100px;
`;
