import Colors from "@/styles/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountdownTimer = () => {
  const [countdownTime, setCountdownTime] = useState({
    week: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("2023-04-21").getTime() - now;

      const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownTime({
        week: weeks,
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TimerContainer>
        <Timer>
          <Value>{countdownTime.week}</Value>
          <Unit>WEEKS</Unit>
        </Timer>
        <Timer>
          <Value>{countdownTime.day}</Value>
          <Unit>DAYS</Unit>
        </Timer>
        <Timer>
          <Value>{countdownTime.hour}</Value>
          <Unit>HOURS</Unit>
        </Timer>
        <Timer>
          <Value>{countdownTime.minute}</Value>
          <Unit>MINUTES</Unit>
        </Timer>
        <Timer>
          <Value>{countdownTime.second}</Value>
          <Unit>SECONDS</Unit>
        </Timer>
      </TimerContainer>
    </Container>
  );
};

export default CountdownTimer;

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: auto;
  padding: 20px 40px;
  transform: translate(0, -50%);
  background-color: ${Colors.gray5};
  border-radius: 8px;
`;

const TimerContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;

const Timer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Value = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.gray1};
`;

const Unit = styled.span`
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.gray3};
`;
