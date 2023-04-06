import Colors from "@/styles/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  EventType,
  dates,
  hackathonAgendas,
  conferenceAgendas,
} from "@/public/constant/agendas";
import t from "@/public/constant/content";
import Image from "next/image";
import v from "@/public/images/v.png";

const Agendas = () => {
  const [type, setType] = useState<EventType>("conference");
  const [date, setDate] = useState<number>(dates[type][0]);

  useEffect(() => {
    setDate(dates[type][0]);
  }, [type]);

  useEffect(() => {
    const frame = document.getElementById("proticoFrame") as HTMLIFrameElement;
    const bObj = document.getElementById("frameBoxHandler") as HTMLDivElement;
    bObj.onclick = () => {
      if (frame.style.display === "block") {
        frame.style.display = "none";
        bObj.style.width = "auto";
        bObj.innerHTML = "Lobby&nbsp;💬";
        //// endline;
      } else {
        frame.src =
          "https://main.protico.io/protico?roomUrl=" + window.location.href;
        frame.style.display = "block";
        bObj.style.width = "50px";
        bObj.innerHTML = "👋";
        //// endline;
      }
    };
  }, []);

  return (
    <Container>
      <span
        style={{
          position: "fixed",
          bottom: "0px",
          right: "20px",
          zIndex: "9999",
          background: "transparent",
        }}
      >
        <iframe
          id="proticoFrame"
          style={{
            display: "none",
            border: "1px solid #666",
            borderRadius: "8px",
            boxShadow: "2px 2px rgba(0,0,0,0.2)",
            width: "310px",
            height: "500px",
            marginBottom: "0.5em",
            minWidth: "325px",
            minHeight: "400px",
          }}
        ></iframe>
        <div
          id="frameBoxHandler"
          style={{
            display: "flex",
            boxShadow: "2px 2px rgba(0,0,0,0.2)",
            bottom: "0px",
            marginLeft: "auto",
            marginTop: "10px",
            width: "auto",
            height: "35px",
            padding: "0 13px",
            borderRadius: "20px 20px 0 0",
            background: "#282c34",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
            color: "#ddd",
          }}
        >
          Lobby&nbsp;💬
        </div>
      </span>
      <Title>{t.agendaPage.agenda}</Title>
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
                <TimeContainer>
                  <TimeText>{agenda.time}</TimeText>
                  <DurationText>{agenda.duration}</DurationText>
                </TimeContainer>
                <ScheduleText>{agenda.event}</ScheduleText>
              </ScheduleContainer>
            ))}
        </HackSchedulesContainer>
      ) : (
        <>
          {date === 24 && (
            <KeynoteContainer>
              <TrackContainer>
                <TrackTitleContainer>
                  <TrackTitle>{t.homepage.keynote}</TrackTitle>
                </TrackTitleContainer>
                <SpeakersContainer>
                  <SpeakerContainer style={{ justifyContent: "center" }}>
                    <SpeakerIcon>
                      <Image fill src={v} alt={"vitalik"} />
                    </SpeakerIcon>
                    <SpeakerName>{"Vitalik Buterin"}</SpeakerName>
                    <SpeakerCompany>{`, Ethereum Foundation`}</SpeakerCompany>
                  </SpeakerContainer>
                </SpeakersContainer>
              </TrackContainer>
            </KeynoteContainer>
          )}
          <TracksContainer>
            {conferenceAgendas[date].map((agenda, i) => (
              <TrackContainer key={i}>
                <TrackTitleContainer>
                  <TrackTitle>{agenda.track}</TrackTitle>
                </TrackTitleContainer>
                <SpeakersContainer>
                  {agenda.speakers.map((s, index) => (
                    <ScheduleContainer key={index}>
                      <TimeContainer>
                        <TimeText>{s.time}</TimeText>
                        <DurationText>{s.duration}</DurationText>
                      </TimeContainer>
                      <div>
                        <ScheduleText>{s.topic}</ScheduleText>
                        {s.name && (
                          <SpeakerContainer>
                            {s.src && (
                              <SpeakerIcon>
                                <Image fill src={s.src} alt={s.name} />
                              </SpeakerIcon>
                            )}
                            <SpeakerName>
                              {(s.name && `${s.name}`) +
                                (s.company && `, ${s.company}`)}
                            </SpeakerName>
                          </SpeakerContainer>
                        )}
                      </div>
                    </ScheduleContainer>
                  ))}
                </SpeakersContainer>
              </TrackContainer>
            ))}
          </TracksContainer>
        </>
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
    padding: 60px 24px 60px 24px;
  }
`;

const Title = styled.h2`
  font-size: 35px;
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
  max-width: 1080px;
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
  max-width: 1080px;
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
  max-width: 1080px;
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
  grid-template-columns: 200px 1fr;
  align-items: flex-start;
  padding: 20px 10px;
  gap: 12px;
  @media (max-width: 576px) {
    grid-template-columns: none;
  }
`;

const TimeText = styled.span`
  flex: 1;
  font-size: 16px;
  line-height: 22px;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DurationText = styled(TimeText)`
  color: ${Colors.gray5};

  @media (max-width: 576px) {
    text-align: right;
  }
`;

const ScheduleText = styled(TimeText)`
  font-weight: 500;
`;

const TracksContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 32px auto auto auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: none;
    margin: 20px auto auto auto;
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
  padding: 60px 0px 20px 0px;
  @media (max-width: 768px) {
    padding: 50px 0px 20px 0px;
  }

  > div:not(:first-child) {
    border-top: 1px solid ${Colors.gray3};
  }
`;

const SpeakerContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SpeakerName = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${Colors.gray5};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SpeakerIcon = styled.div`
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  position: relative;
  margin-right: 8px;
  background-color: ${Colors.gray1};
`;

const SpeakerCompany = styled(SpeakerName)`
  font-weight: normal;
  color: ${Colors.gray5};
`;

const KeynoteContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 32px auto auto auto;
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const TimeContainer = styled.div`
  display: flex;

  @media (max-width: 576px) {
    justify-content: space-between;
  }
`;
