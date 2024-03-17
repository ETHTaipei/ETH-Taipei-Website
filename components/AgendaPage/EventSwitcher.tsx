import { EventType, dates } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import styled from "styled-components";

interface EventSwitcherProps {
  type: EventType;
  setType: (type: EventType) => void;
  setDate: (date: number) => void;
}

const EventSwitcher = ({ type, setType, setDate }: EventSwitcherProps) => {
  return (
    <EventSwitcherContainer>
      <EventSwitchers>
        <EventSwitcherButton
          isSelect={type === "conference"}
          onClick={() => {
            setType("conference");
            setDate(dates["conference"][0]);
          }}
        >
          <EventText>{`Conference`}</EventText>
          <EventSubText>{`21-22 March 2024`}</EventSubText>
        </EventSwitcherButton>
        <EventSwitcherButton
          isSelect={type === "hackathon"}
          onClick={() => {
            setType("hackathon");
            setDate(dates["hackathon"][0]);
          }}
        >
          <EventText>{`Hackathon`}</EventText>
          <EventSubText>{`22-24 March 2024`}</EventSubText>
        </EventSwitcherButton>
        <EventSwitcherButton
          isSelect={type === "sideEvent"}
          onClick={() => {
            setType("sideEvent");
            setDate(dates["sideEvent"][0]);
          }}
        >
          <EventText>{`In-house Event`}</EventText>
          <EventSubText>{`21-22 March 2024`}</EventSubText>
        </EventSwitcherButton>
      </EventSwitchers>
    </EventSwitcherContainer>
  );
};

export default EventSwitcher;

const EventSwitcherContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: center;
`;

const EventSwitchers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const EventSwitcherButton = styled.button<{ isSelect: boolean }>`
  padding: 12px 28px;
  cursor: pointer;
  color: ${(props) => (props.isSelect ? "white" : Colors.pennBlue)};
  background-color: ${(props) => (props.isSelect ? Colors.pennBlue : "white")};
  box-shadow: 0 6px 6px 0 rgba(88, 103, 113, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 576px) {
    flex: 1;
  }
`;

const EventText = styled.span`
  font-family: "Rammetto One";
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EventSubText = styled.span`
  font-size: 10px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
