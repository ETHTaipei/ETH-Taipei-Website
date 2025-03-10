import styled from "styled-components";

interface VideoProps {
  src: string;
  id?: string;
  style?: React.CSSProperties;
}

interface BgVideoProps {
  src: string;
  coverColor?: string;
  coverOpacity?: number;
  isFixed?: boolean;
}

export const Video = ({ src, style, id }: VideoProps) => {
  return (
    <StyledVideo autoPlay muted loop playsInline style={style} id={id}>
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </StyledVideo>
  );
};

const BgVideo = ({
  src,
  coverColor,
  coverOpacity = 0.6,
  isFixed = false,
}: BgVideoProps) => {
  return (
    <Container isFixed={isFixed}>
      <Cover $color={coverColor} $opacity={coverOpacity} />
      <VideoContainer isFixed={isFixed}>
        <Video src={src} />
      </VideoContainer>
    </Container>
  );
};

export const RecapBgVideo = () => {
  return <BgVideo src="/videos/2024_recap.webm" coverColor="black" />;
};

export const BrandBgVideo = () => {
  return (
    <BgVideo
      src="/videos/icon_transform.webm"
      coverOpacity={0.75}
      isFixed={true}
    />
  );
};

const Container = styled.div<{ isFixed: boolean }>`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: ${({ isFixed }) => (isFixed ? "100vw" : "100%")};
  height: ${({ isFixed }) => (isFixed ? "100vh" : "100%")};
  overflow: ${({ isFixed }) => (isFixed ? "hidden" : "visible")};
  z-index: -2;
`;

const Cover = styled.div<{ $color?: string; $opacity: number }>`
  background: ${({ $color }) =>
    $color || "linear-gradient(180deg, #ffffff 0%, #efefef 100%)"};
  opacity: ${({ $opacity }) => $opacity};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const VideoContainer = styled.div<{ isFixed: boolean }>`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed }) => (isFixed ? "50%" : "0")};
  left: ${({ isFixed }) => (isFixed ? "50%" : "0")};
  width: 100%;
  height: 100%;
  transform: ${({ isFixed }) => (isFixed ? "translate(-50%, -50%)" : "none")};
  overflow: ${({ isFixed }) => (isFixed ? "hidden" : "visible")};
  z-index: -2;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
