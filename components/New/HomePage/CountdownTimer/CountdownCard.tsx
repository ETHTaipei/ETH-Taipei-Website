import Colors from "@/styles/colors";
import React from "react";
import styled, { css, keyframes } from "styled-components";

interface CountdownCardProps {
  current: number;
  previous: number;
}

const CountdownCard = ({ current, previous }: CountdownCardProps) => {
  const isEqual = previous === current;
  return (
    <CardContainer>
      <CardTopStatic>
        <CardTopNum v={current}></CardTopNum>
      </CardTopStatic>
      {!isEqual && (
        <CardTopDynamic key={`card-top-dynamic-${previous}`}>
          <CardTopNum v={previous}></CardTopNum>
        </CardTopDynamic>
      )}
      <CardBottomStatic />
      <CardBottomDynamic key={`card-bottom-dynamic-${current}`}>
        <CardBottomNum v={current} />
      </CardBottomDynamic>
    </CardContainer>
  );
};
export default React.memo(CountdownCard);

const CardContainer = styled.div`
  position: relative;
  width: 70px;
  height: 90px;
  perspective: 600px;

  @media (max-width: 996px) {
    width: 49px;
    height: 81px;
  }

  @media (max-width: 700px) {
    width: 35px;
    height: 45px;
  }
`;

const CardTopSharedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(31, 138, 172, 1);
  border-radius: 16px 16px 0 0;
  overflow: hidden;

  @media (max-width: 996px) {
    border-radius: 12px 12px 0 0;
  }

  @media (max-width: 700px) {
    border-radius: 8px 8px 0 0;
  }
`;

const CardTopStatic = styled.div`
  ${CardTopSharedStyles}
`;

const FlipFromTopAnimation = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
`;

const CardTopDynamic = styled.div`
  ${CardTopSharedStyles}
  transform-origin: bottom;
  animation-name: ${FlipFromTopAnimation};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.37, 0.01, 0.94, 0.35);
`;

const CardBottomSharedStyles = css`
  position: absolute;
  top: 52%;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: ${Colors.aero};
  border-radius: 0 0 16px 16px;
  overflow: hidden;

  @media (max-width: 996px) {
    border-radius: 0 0 12px 12px;
  }

  @media (max-width: 700px) {
    border-radius: 0 0 8px 8px;
  }
`;

const CardBottomStatic = styled.div`
  ${CardBottomSharedStyles};
`;

const FlipToBottomAnimation = keyframes`
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg); 
  }
`;

const CardBottomDynamic = styled.div`
  ${CardBottomSharedStyles};
  transform-origin: top;
  animation-name: ${FlipToBottomAnimation};
  animation-duration: 0.9s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.21, 0.85, 0.56, 1);
`;

const CardNumSharedStyles = css`
  color: white;
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 996px) {
    font-size: 44px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const CardTopNum = styled.div<{ v: number }>`
  ${CardNumSharedStyles};
  top: 50%;
  ::before {
    content: "${(props) => props.v}";
  }
`;

const CardBottomNum = styled.div<{ v: number }>`
  ${CardNumSharedStyles};
  bottom: 50%;
  ::before {
    content: "${(props) => props.v}";
  }
`;
