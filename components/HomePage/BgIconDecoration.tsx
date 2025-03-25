import Image from "next/image";
import styled from "styled-components";

interface CuteBgIconDecorationProps {
  leftImage?: string;
  rightImage?: string;
}

export const CuteBgIconDecoration: React.FC<CuteBgIconDecorationProps> = () => {
  return (
    <>
      {
        <BgDecoration position="left">
          <CuteBgImage
            src="/images/background/community-left.svg"
            alt="decoration-left"
            width={100}
            height={100}
          />
        </BgDecoration>
      }
      {
        <BgDecoration position="right">
          <CuteBgImage
            src="/images/background/community-right.svg"
            alt="decoration-right"
            width={100}
            height={100}
          />
        </BgDecoration>
      }
    </>
  );
};

export const LogoBgIconDecoration = () => {
  return (
    <BgDecoration position="left-most">
      <LogoBgImage
        src={"/images/background/decoration.svg"}
        alt="decoration"
        width={240}
        height={240}
      />
    </BgDecoration>
  );
};

const BgDecoration = styled.div<{ position: string }>`
  position: absolute;
  bottom: 0px;
  pointer-events: none;
  ${({ position }) =>
    ({
      left: "left: 60px;",
      right: "right: 60px;",
    }[position] || "left: 0px;")}/* left-most */
`;

const CuteBgImage = styled(Image)`
  width: 100%;
  height: auto;

  @media (max-width: 992px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const LogoBgImage = styled(Image)`
  width: 50%;
  height: auto;
  opacity: 0.05;

  @media (max-width: 768px) {
    width: 240px;
  }
`;
