import Colors from "@/styles/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  EventType,
  dates,
  hackathonAgendas,
  conferenceAgendas,
} from "@/public/constant/agendas";

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
      {date < dates.conference[0] ? (
        <HackSchedulesContainer>
          {hackathonAgendas[date].length > 0 &&
            hackathonAgendas[date].map((agenda, i) => (
              <ScheduleContainer key={i}>
                <TimeText>{agenda.time}</TimeText>
                <DurationText>{agenda.duration}</DurationText>
                <ScheduleText>{agenda.event}</ScheduleText>
              </ScheduleContainer>
            ))}
        </HackSchedulesContainer>
      ) : (
        <TracksContainer>
          {conferenceAgendas[date].map((agenda, i) => (
            <TrackContainer key={i}>
              <TrackTitleContainer>
                <TrackTitle>{agenda.track}</TrackTitle>
              </TrackTitleContainer>
              <SpeakersContainer>
                {agenda.speakers.map((s) => (
                  <SpeakerContainer key={s.name}>
                    <SpeakerName>{s.name}</SpeakerName>
                    {s.company && (
                      <SpeakerCompany>{`, ${s.company}`}</SpeakerCompany>
                    )}
                  </SpeakerContainer>
                ))}
              </SpeakersContainer>
            </TrackContainer>
          ))}
        </TracksContainer>
      )}
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DatesContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 28px auto auto auto;
  display: flex;
  gap: 12px;
  padding: 0 12px;
  @media (max-width: 768px) {
    padding: 0 6px;
  }
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const HackSchedulesContainer = styled.div`
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
  display: grid;
  grid-template-columns: 100px 100px 1fr;
  align-items: center;
  padding: 20px 10px;
  gap: 20px;
  @media (max-width: 576px) {
    grid-template-columns: 60px 60px 1fr;
  }
`;

const TimeText = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DurationText = styled(TimeText)`
  color: ${Colors.gray5};
`;

const ScheduleText = styled(TimeText)`
  font-weight: 500;
`;

const TracksContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 32px auto auto auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    gap: 12px;
    grid-template-columns: none;
  }
`;

const TrackContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const TrackTitleContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Colors.columbiaBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;

const TrackTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SpeakersContainer = styled.div`
  padding: 60px 20px 20px 20px;
  @media (max-width: 768px) {
    padding: 60px 12px 20px 12px;
  }

  > div:not(:first-child) {
    border-top: 1px solid ${Colors.gray3};
  }
`;

const SpeakerContainer = styled.div`
  padding: 12px 0;
`;

const SpeakerName = styled.span`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SpeakerCompany = styled(SpeakerName)`
  font-weight: normal;
  color: ${Colors.gray5};
`;
