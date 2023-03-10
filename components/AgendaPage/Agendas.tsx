import Colors from "@/styles/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EventType, dates, agendas } from "@/public/constant/agendas";

const Agendas = () => {
  const [type, setType] = useState<EventType>("conference");
  const [date, setDate] = useState<number>(dates[type][0]);

  useEffect(() => {
    setDate(dates[type][0]);
  }, [type]);

  return (
    <Container>
      <Title>Agenda</Title>
      <EventSwitcherContainer>
        <EventSwitchers>
          <EventSwitcher
            isSelect={type === "hackathon"}
            onClick={() => setType("hackathon")}
          >
            <EventText>{`Hackathon`}</EventText>
          </EventSwitcher>
          <EventSwitcher
            isSelect={type === "conference"}
            onClick={() => setType("conference")}
          >
            <EventText>{`Conference`}</EventText>
          </EventSwitcher>
        </EventSwitchers>
      </EventSwitcherContainer>
      <DatesContainer>
        {dates[type].map((num) => (
          <DateSelector
            key={num}
            isSelect={date === num}
            onClick={() => setDate(num)}
          >{`Apr ${num}`}</DateSelector>
        ))}
      </DatesContainer>
      <SchedulesContainer>
        {agendas[date].length > 0 ? (
          agendas[date].map((agenda) => (
            <ScheduleContainer key={agenda.time}>
              <TimeContainer>{agenda.time}</TimeContainer>
              <EventContainer>{agenda.event}</EventContainer>
            </ScheduleContainer>
          ))
        ) : (
          <NoEventContainer>
            <NoEventText>Coming Soon!</NoEventText>
          </NoEventContainer>
        )}
      </SchedulesContainer>
    </Container>
  );
};

export default Agendas;

const Container = styled.div`
  width: 100%;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 60px 24px 120px 24px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  margin-bottom: 40px;
`;

const EventSwitcherContainer = styled.div`
  width: 100%;
  box-shadow: inset 0px -1px 0px #eeeeee;
`;

const EventSwitchers = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  display: flex;
  gap: 12px;
`;

const EventSwitcher = styled.button<{ isSelect: boolean }>`
  padding: 12px;
  cursor: pointer;
  border-bottom: 4px solid
    ${(props) => (props.isSelect ? Colors.aero : "transparent")};
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 576px) {
    flex: 1;
  }
`;

const EventText = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.pennBlue};
  font-weight: bold;
`;

const DatesContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 28px auto auto auto;
  display: flex;
  gap: 12px;
  padding: 0 12px;
`;

const DateSelector = styled.button<{ isSelect: boolean }>`
  background-color: ${(props) => (props.isSelect ? Colors.aero : Colors.gray2)};
  font-size: 16px;
  line-height: 22px;
  color: ${Colors.seaSalt};
  padding: 2px 16px;
  border-radius: 100px;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

const SchedulesContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 28px auto auto auto;
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  border-radius: 8px;

  > div:not(:first-child) {
    border-top: 1px solid ${Colors.gray2};
  }
`;

const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 10px;
`;

const TimeContainer = styled.div`
  width: 300px;
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const EventContainer = styled.div`
  flex: 1;
`;

const NoEventContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`;

const NoEventText = styled.span`
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.pennBlue};
`;
