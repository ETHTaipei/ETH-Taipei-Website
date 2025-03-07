import styled from "styled-components";
import Link from "next/link";
import Colors from "@/styles/colors";

import { PartnerType } from "../../hooks/usePartners";

export const Partner = ({ partner }: { partner: PartnerType }) => {
  return (
    <PartnerLink href={partner.url} target="_blank" rel="noopener noreferrer">
      <img
        src={partner.img}
        alt={partner.name}
        height="auto"
        width={partner.width}
      />
    </PartnerLink>
  );
};

export const BaseContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px 80px 40px;

  @media (max-width: 768px) {
    padding: 0px 24px 80px 24px;
  }
`;

export const BaseMainContent = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnersGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  color: ${Colors.brightBlue};

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  font-size: 22px;
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
`;

export const PartnerLink = styled(Link)`
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;
  display: block;

  :hover {
    transform: scale(1.1);
  }

  > img {
    object-fit: contain;
    max-height: 100px;
  }
`;
