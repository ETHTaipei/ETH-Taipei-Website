import { EventType, dates } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import styled from "styled-components";

import { month } from "@/public/constant/content";

interface DateSwitcherProps {
  type: EventType;
  date: number;
  setDate: (date: number) => void;
}

const DateSwitcher = ({ type, date, setDate }: DateSwitcherProps) => {
  return (
    <DatesContainer>
      {dates[type].map((num, i) => (
        <DateSelector
          key={num}
          isSelect={date === num}
          onClick={() => setDate(num)}
        >{`Day${i + 1}. ${num} ${month}`}</DateSelector>
      ))}
    </DatesContainer>
  );
};

export default DateSwitcher;

const DatesContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin-top: 50px;
  display: flex;
  gap: 12px;
  border-bottom: 2px solid ${Colors.brightBlue};
  @media (max-width: 768px) {
    padding: 0 6px;
  }
`;

const DateSelector = styled.button<{ isSelect: boolean }>`
  color: ${(props) => (props.isSelect ? Colors.brightBlue : Colors.gray2)};
  padding: 0px 20px 8px;
  font-family: inherit;
  font-size: 20px;
  line-height: 22px;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${(props) =>
      props.isSelect ? Colors.brightBlue : "transparent"};
    bottom: -3px;
    left: 0;
  }

  :active {
    transform: scale(0.98);
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
