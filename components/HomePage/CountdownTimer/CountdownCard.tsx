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
  width: 50px;
  height: 64px;
  perspective: 600px;
  @media (max-width: 1280px) {
    width: 42px;
    height: 65px;
  }
  @media (max-width: 996px) {
    width: 40px;
    height: 54px;
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
  background-color: ${Colors.brightBlue};
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  @media (max-width: 996px) {
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 700px) {
    border-radius: 6px 6px 0 0;
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
  top: 55%;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: ${Colors.brightBlue};
  border-radius: 0 0 10px 10px;
  overflow: hidden;

  @media (max-width: 996px) {
    border-radius: 0 0 8px 8px;
  }

  @media (max-width: 700px) {
    border-radius: 0 0 6px 6px;
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
  color: ${Colors.neonGreen};
  font-size: 46px;
  font-weight: bold;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 1280px) {
    font-size: 42px;
  }
  @media (max-width: 996px) {
    font-size: 38px;
  }

  @media (max-width: 700px) {
    font-size: 26px;
  }
`;

const CardTopNum = styled.div<{ v: number }>`
  ${CardNumSharedStyles};
  top: 40%;
  ::before {
    content: "${(props) => props.v}";
  }
`;

const CardBottomNum = styled.div<{ v: number }>`
  ${CardNumSharedStyles};
  bottom: 30%;
  ::before {
    content: "${(props) => props.v}";
  }
`;
