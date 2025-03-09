import styled from "styled-components";

import useCountdownTime from "@/components/hooks/useCountdownTime";
import CountdownCard from "./CountdownCard";

const date = "2025-04-01";
const Countdown = () => {
  const { current, previous } = useCountdownTime(new Date(date));

  const currDays = convertToDigits(current.days);
  const prevDays = convertToDigits(previous.days);

  const currHours = convertToDigits(current.hours);
  const prevHours = convertToDigits(previous.hours);

  const currMins = convertToDigits(current.minutes);
  const prevMins = convertToDigits(previous.minutes);

  const currSecs = convertToDigits(current.seconds);
  const prevSecs = convertToDigits(previous.seconds);

  return (
    <CountdownContainer>
      <CountdownCardUnitContainer>
        <CountdownCardPair>
          {currDays.map((v, i) => (
            <CountdownCard
              key={`days-${i}`}
              current={v}
              previous={prevDays[i]}
            />
          ))}
        </CountdownCardPair>
        <CountdownCardUnit>Days</CountdownCardUnit>
      </CountdownCardUnitContainer>
      <CountdownCardUnitContainer>
        <CountdownCardPair>
          {currHours.map((v, i) => (
            <CountdownCard
              key={`hours-${i}`}
              current={v}
              previous={prevHours[i]}
            />
          ))}
        </CountdownCardPair>
        <CountdownCardUnit>Hours</CountdownCardUnit>
      </CountdownCardUnitContainer>
      <CountdownCardUnitContainer>
        <CountdownCardPair>
          {currMins.map((v, i) => (
            <CountdownCard
              key={`minutes-${i}`}
              current={v}
              previous={prevMins[i]}
            />
          ))}
        </CountdownCardPair>
        <CountdownCardUnit>Minutes</CountdownCardUnit>
      </CountdownCardUnitContainer>
      <CountdownCardUnitContainer>
        <CountdownCardPair>
          {currSecs.map((v, i) => (
            <CountdownCard
              key={`seconds-${i}`}
              current={v}
              previous={prevSecs[i]}
            />
          ))}
        </CountdownCardPair>
        <CountdownCardUnit>Seconds</CountdownCardUnit>
      </CountdownCardUnitContainer>
    </CountdownContainer>
  );
};

export default Countdown;

const CountdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 700px) {
    gap: 8px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

const CountdownCardUnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    gap: 12px;
  }
`;

const CountdownCardUnit = styled.div`
  color: black;
  font-size: 16px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const CountdownCardPair = styled.div`
  display: flex;
  gap: 6px;

  @media (max-width: 700px) {
    gap: 2px;
  }
`;

function convertToDigits(value: number) {
  const digits: number[] = [];
  while (value > 0) {
    const remain = value % 10;
    digits.push(remain);
    value = Math.floor(value / 10);
  }
  while (digits.length < 2) {
    digits.push(0);
  }
  return digits.reverse();
}
