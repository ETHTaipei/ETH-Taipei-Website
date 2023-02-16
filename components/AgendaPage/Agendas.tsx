import Colors from "@/styles/colors";
import React, { useState } from "react";
import styled from "styled-components";

const Agendas = () => {
  const [type, setType] = useState<"hackathon" | "conference">("hackathon");

  return (
    <Container>
      <Title>Agenda</Title>
      <EventSwitcherContainer>
        <EventSwitchers>
          <EventSwitcher
            isSelect={type === "hackathon"}
            onClick={() => setType("hackathon")}
          >
            Hackathon
          </EventSwitcher>
          <EventSwitcher
            isSelect={type === "conference"}
            onClick={() => setType("conference")}
          >
            Conference
          </EventSwitcher>
        </EventSwitchers>
      </EventSwitcherContainer>
      <SchedulesContainer>
        <ScheduleContainer>
          <TimeContainer>0900</TimeContainer>
          <EventContainer>Hello</EventContainer>
        </ScheduleContainer>
        <ScheduleContainer>
          <TimeContainer>0900</TimeContainer>
          <EventContainer>Hello</EventContainer>
        </ScheduleContainer>
        <ScheduleContainer>
          <TimeContainer>0900</TimeContainer>
          <EventContainer>Hello</EventContainer>
        </ScheduleContainer>
      </SchedulesContainer>
    </Container>
  );
};

export default Agendas;

const Container = styled.div`
  width: 100%;
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 60px 0px 120px 0px;
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
  max-width: 1280px;
  margin: auto;
  padding: 0 40px;
  display: flex;
  gap: 12px;
`;

const EventSwitcher = styled.button<{ isSelect: boolean }>`
  padding: 12px;
  font-size: 16px;
  color: ${Colors.pennBlue};
  cursor: pointer;
  border-bottom: 4px solid
    ${(props) => (props.isSelect ? Colors.aero : "transparent")};
`;

const SchedulesContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 40px auto auto auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 8px;
  background-color: #eeeeee;
`;

const TimeContainer = styled.div`
  width: 300px;
`;

const EventContainer = styled.div`
  flex: 1;
`;
