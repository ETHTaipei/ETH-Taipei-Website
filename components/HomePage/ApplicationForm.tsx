import Colors from "@/styles/colors";
import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from 'styled-components';

import { openNewTab } from "@/public/utils/common";
import {
  sideEventUrl,
  speakerApplyUrl,
  sponsorApplyUrl,
} from "@/public/constant/urls";
import t from "@/public/constant/content";


import speakerImg1 from "@/public/images/speaker-1.jpg";
import Image from "next/image";
const speakerImg2 = require("@/public/images/speaker-2.jpg");
const speakerImg3 = require("@/public/images/speaker-3.jpg");


const ApplicationForm = () => {
  const images = [
    speakerImg3,
    speakerImg1,
    speakerImg2,
  ];

  return (
    <Container>
      <MainContent>
        <Applications>
          <Application onClick={() => openNewTab(speakerApplyUrl)}>
            <Text>{t.homepage.applyToSpeak}</Text>
          </Application>
        </Applications>
        <ImgWrapper>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={500}
              style={{padding: 10}}
              alt={`img${index + 1}`}
            />
          ))}
        </ImgWrapper>
      </MainContent>
    </Container>
  );
};

export default ApplicationForm;

const Container = styled.div`
  width: 100%;
  padding: 40px 40px;
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

const Text = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.seaSalt};
  margin-bottom: 4px;
`;

const Applications = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Application = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.btnBlue};
  border-radius: 8px;
  padding: 20px 40px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(36, 62, 81, 0.2),
    0 6px 12px 0 rgba(63, 83, 114, 0.19);
  :active {
    transform: scale(0.99);
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px; /* Adjust the spacing from the applications */
`;

