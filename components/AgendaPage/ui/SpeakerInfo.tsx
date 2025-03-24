import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import Colors from "@/styles/colors";

interface SpeakerInfoProps {
  src?: string | StaticImageData | null;
  name?: string;
  company?: string;
}

const SpeakerInfo = ({ src, name, company }: SpeakerInfoProps) => {
  return (
    <SpeakerContainer>
      {src && (
        <SpeakerIcon>
          <Image fill src={src} alt={name || ""} />
        </SpeakerIcon>
      )}
      <SpeakerInfoContainer>
        <SpeakerName>{name && `${name}`}</SpeakerName>
        <SpeakerCompany>{company && `@ ${company}`}</SpeakerCompany>
      </SpeakerInfoContainer>
    </SpeakerContainer>
  );
};

export default SpeakerInfo;

const SpeakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

const SpeakerIcon = styled.div`
  flex: 0 0 70px;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position: relative;
  margin-right: 8px;
  background-color: white;
  overflow: hidden;
`;

const SpeakerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const SpeakerName = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: ${Colors.brightBlue};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const SpeakerCompany = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.brightBlue};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
