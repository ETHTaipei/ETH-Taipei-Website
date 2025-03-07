import styled from "styled-components";

interface BackgroundBottomDecorationProps {
  leftImage?: string;
  rightImage?: string;
}

const BackgroundBottomDecoration: React.FC<
  BackgroundBottomDecorationProps
> = () => {
  return (
    <>
      {
        <BgDecoration position="left">
          <BgImage
            src="/images/background/community-left.svg"
            alt="decoration-left"
          />
        </BgDecoration>
      }
      {
        <BgDecoration position="right">
          <BgImage
            src="/images/background/community-right.svg"
            alt="decoration-right"
          />
        </BgDecoration>
      }
    </>
  );
};

export default BackgroundBottomDecoration;

const BgDecoration = styled.div<{ position: string }>`
  position: absolute;
  bottom: 0px;
  ${(props) => (props.position === "left" ? "left: 60px;" : "right: 60px;")}
`;

const BgImage = styled.img`
  width: 100%;
  @media (max-width: 992px) {
    width: 100px;
  }
`;
