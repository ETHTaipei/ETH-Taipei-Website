import { diagonalSymmetricBorder } from "@/styles/constants";
import Image from "next/image";
import styled from "styled-components";

interface MapProps {
  id: string;
  onClose: () => void;
}

const Map = ({ id, onClose }: MapProps) => {
  return (
    <Container onClick={onClose}>
      <ImageContainer>
        <Image
          src={`/images/map/building${id}.png`}
          alt={`Map Building ${id}`}
          fill
        />
      </ImageContainer>
    </Container>
  );
};

export default Map;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  aspect-ratio: 1321 / 647;
  overflow: hidden;
  ${diagonalSymmetricBorder}
`;
