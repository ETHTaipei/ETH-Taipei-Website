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
          />
        </BgDecoration>
      }
      {
        <BgDecoration position="right">
          <CuteBgImage
            src="/images/background/community-right.svg"
            alt="decoration-right"
          />
        </BgDecoration>
      }
    </>
  );
};

export const LogoBgIconDecoration = () => {
  return (
    <BgDecoration position="left-most">
      <LogoBgImage src={"/images/background/decoration.svg"} alt="decoration" />
    </BgDecoration>
  );
};

const BgDecoration = styled.div<{ position: string }>`
  position: absolute;
  bottom: 0px;
  ${({ position }) =>
    ({
      left: "left: 60px;",
      right: "right: 60px;",
    }[position] || "left: 0px;")}/* left-most */
`;

const CuteBgImage = styled.img`
  width: 100%;
  @media (max-width: 992px) {
    width: 100px;
  }
`;

const LogoBgImage = styled.img`
  width: 50%;
  opacity: 0.05;
  @media (max-width: 768px) {
    width: 240px;
  }
`;
