import {
  EventType,
  conferenceAgendas,
  dates,
  hackathonAgendas,
} from "@/public/constant/agendas";
import t from "@/public/constant/content";
import v from "@/public/images/v.png";
import Colors from "@/styles/colors";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Agendas = () => {
  const [type, setType] = useState<EventType>("conference");
  const [date, setDate] = useState<number>(dates[type][0]);

  const _renderDefiItem = (item: any, index: number) => {
    return (
      <TrackMainContent>
        <TopicContainer>
          <ScheduleText>{item.topic}</ScheduleText>
        </TopicContainer>
        <DurationT isFirst={index === 0}>{item.duration}</DurationT>
        <NameContainer>
          {item.name && (
            <SpeakerContainer>
              {item.src && (
                <SpeakerIcon>
                  <Image fill src={item.src} alt={item.name} />
                </SpeakerIcon>
              )}
              <SpeakerInfoContainer>
                <SpeakerName>{item.name && `${item.name}`}</SpeakerName>
                <SpeakerCompany>
                  {item.company && `@ ${item.company}`}
                </SpeakerCompany>
              </SpeakerInfoContainer>
            </SpeakerContainer>
          )}
        </NameContainer>
        {item.panelHost && (
          <OrganizerContainer>
            <SpeakerName>{`Panel Host:`}</SpeakerName>
            <SpeakerName>{`・${item.panelHost}`}</SpeakerName>
          </OrganizerContainer>
        )}
        {item.panelists && (
          <OrganizerContainer>
            <SpeakerName>{`Panelists:`}</SpeakerName>
            {item.panelists.map((panelist: any) => (
              <SpeakerName key={panelist}>{`・${panelist}`}</SpeakerName>
            ))}
          </OrganizerContainer>
        )}
        {item.panelOrganizations && (
          <OrganizerContainer>
            {item.panelOrganizations.map((o: any) => (
              <SpeakerName key={o}>{`・${o}`}</SpeakerName>
            ))}
          </OrganizerContainer>
        )}
      </TrackMainContent>
    );
  };

  const _renderZkItem = (item: any, index: number) => {
    return (
      <TrackMainContent>
        <TopicContainer>
          <ScheduleText>{item.topic}</ScheduleText>
        </TopicContainer>
        <DurationT isFirst={index === 0}>{item.duration}</DurationT>
        <NameContainer>
          {item.name && (
            <SpeakerContainer>
              {item.src && (
                <SpeakerIcon>
                  <Image fill src={item.src} alt={item.name} />
                </SpeakerIcon>
              )}
              <SpeakerInfoContainer>
                <SpeakerName>{item.name && `${item.name}`}</SpeakerName>
                <SpeakerCompany>
                  {item.company && `@ ${item.company}`}
                </SpeakerCompany>
              </SpeakerInfoContainer>
            </SpeakerContainer>
          )}
        </NameContainer>
      </TrackMainContent>
    );
  };

  const _renderWorkshopItem = (item: any, index: number) => {
    return (
      <TrackMainContent>
        <TopicContainer>
          <ScheduleText>{`${item.title}`}</ScheduleText>
        </TopicContainer>
        <DurationT isFirst={index === 0}>{item.duration}</DurationT>
        <NameContainer>
          {item.holder && (
            <SpeakerContainer>
              <SpeakerName>{item.holder}</SpeakerName>
            </SpeakerContainer>
          )}
        </NameContainer>
        {item.prerequisite && (
          <PrerequisiteContainer>
            <PrerequisiteText>
              <a href={item.prerequisiteLink} target="_blank" rel="noreferrer">
                {item.prerequisite}
              </a>
            </PrerequisiteText>
          </PrerequisiteContainer>
        )}
      </TrackMainContent>
    );
  };

  return (
    <Container>
      <Title>{t.agendaPage.agenda}</Title>

      <EventSwitcherContainer>
        <EventSwitchers>
          <EventSwitcher
            isSelect={type === "conference"}
            onClick={() => {
              setType("conference");
              setDate(dates["conference"][0]);
            }}
          >
            <EventText>{`Conference`}</EventText>
            <EventSubText>{`21-22 March 2024`}</EventSubText>
          </EventSwitcher>
          <EventSwitcher
            isSelect={type === "hackathon"}
            onClick={() => {
              setType("hackathon");
              setDate(dates["hackathon"][0]);
            }}
          >
            <EventText>{`Hackathon`}</EventText>
            <EventSubText>{`22-24 March 2024`}</EventSubText>
          </EventSwitcher>
        </EventSwitchers>
      </EventSwitcherContainer>

      <DatesContainer>
        {dates[type].map((num, i) => (
          <DateSelector
            key={num}
            isSelect={date === num}
            onClick={() => setDate(num)}
          >{`Day${i + 1}. ${num} March`}</DateSelector>
        ))}
      </DatesContainer>

      {type === "hackathon" ? (
        <TableContainer>
          <DesktopScheduleContainer>
            <TableContainer>
              <TimeZoneHint />
              <NewTracksContainer>
                <HackathonScheduleRow>
                  <NewTrackTimeContainerHeader>
                    Time
                  </NewTrackTimeContainerHeader>
                  <NewTrackContainerHeader>Building M</NewTrackContainerHeader>
                  <NewTrackContainerHeader>Building F</NewTrackContainerHeader>
                </HackathonScheduleRow>
                {hackathonAgendas[date].map((agenda, i) => (
                  <HackathonScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.trackA && _renderZkItem(agenda.trackA, i)}
                    </TrackContainer>
                    <TrackContainer>
                      {agenda.trackB && _renderZkItem(agenda.trackB, i)}
                    </TrackContainer>
                  </HackathonScheduleRow>
                ))}
              </NewTracksContainer>
            </TableContainer>
          </DesktopScheduleContainer>
          <MobileScheduleContainer>
            <NewTracksContainer>
              <NewScheduleRow>
                <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
                <NewTrackContainerHeader>Building M</NewTrackContainerHeader>
              </NewScheduleRow>
              {hackathonAgendas[date]
                .filter((i) => i.trackA)
                .map((agenda, i) => (
                  <NewScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.trackA && _renderZkItem(agenda.trackA, i)}
                    </TrackContainer>
                  </NewScheduleRow>
                ))}
            </NewTracksContainer>
            <NewTracksContainer>
              <NewScheduleRow>
                <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
                <NewTrackContainerHeader>Building F</NewTrackContainerHeader>
              </NewScheduleRow>
              {hackathonAgendas[date]
                .filter((i) => i.trackB)
                .map((agenda, i) => (
                  <NewScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.trackB && _renderZkItem(agenda.trackB, i)}
                    </TrackContainer>
                  </NewScheduleRow>
                ))}
            </NewTracksContainer>
          </MobileScheduleContainer>
        </TableContainer>
      ) : (
        <>
          {date === 21 && (
            <TableContainer>
              <TimeZoneHint />
              <NewTracksContainer>
                <KeynoteRow>
                  <NewTrackTimeContainerHeader>
                    Time
                  </NewTrackTimeContainerHeader>
                  <NewTrackContainerHeader>
                    {t.homepage.openingandKeynote}
                  </NewTrackContainerHeader>
                </KeynoteRow>
                <KeynoteRow>
                  <NewTrackTimeContainer>9:50am</NewTrackTimeContainer>
                  <TrackContainer style={{ paddingBottom: 0 }}>
                    <TopicContainer
                      style={{
                        textAlign: "center",
                        marginTop: 0,
                        paddingBottom: "15px",
                      }}
                    >
                      <ScheduleText>{"Opening!!!"}</ScheduleText>
                    </TopicContainer>
                  </TrackContainer>

                  <NewTrackTimeContainer
                    style={{ borderBottom: 0, backgroundColor: "white" }}
                  >
                    10:00am
                  </NewTrackTimeContainer>
                  <TrackContainer
                    style={{ borderBottom: 0, backgroundColor: "white" }}
                  >
                    <TrackMainContent>
                      <TopicContainer>
                        <ScheduleText>
                          {
                            "The need for standardization of L2s, smart contract wallet and privacy (Virtual, streaming in all buildings)"
                          }
                        </ScheduleText>
                      </TopicContainer>
                      <DurationT isFirst={true}>1 hours</DurationT>
                      <SpeakerContainer>
                        <SpeakerIcon>
                          <Image fill src={v} alt={"vitalik"} />
                        </SpeakerIcon>
                        <SpeakerInfoContainer>
                          <SpeakerName>{"Vitalik Buterin"}</SpeakerName>
                          <SpeakerCompany>
                            {"@ Ethereum Foundation"}
                          </SpeakerCompany>
                        </SpeakerInfoContainer>
                      </SpeakerContainer>
                    </TrackMainContent>
                  </TrackContainer>
                </KeynoteRow>
              </NewTracksContainer>
            </TableContainer>
          )}
          <DesktopScheduleContainer>
            <TableContainer>
              <TimeZoneHint />
              <NewTracksContainer>
                <NewScheduleRow>
                  <NewTrackTimeContainerHeader>
                    Time
                  </NewTrackTimeContainerHeader>
                  <NewTrackContainerHeader>Track A</NewTrackContainerHeader>
                  <NewTrackContainerHeader>Track B</NewTrackContainerHeader>
                  <NewTrackContainerHeader>Workshop</NewTrackContainerHeader>
                </NewScheduleRow>
                {conferenceAgendas[date].map((agenda, i) => (
                  <NewScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.trackA && _renderDefiItem(agenda.trackA, i)}
                    </TrackContainer>
                    <TrackContainer>
                      {agenda.trackB && _renderZkItem(agenda.trackB, i)}
                    </TrackContainer>
                    <TrackContainer>
                      {agenda.workshop &&
                        _renderWorkshopItem(agenda.workshop, i)}
                    </TrackContainer>
                  </NewScheduleRow>
                ))}
              </NewTracksContainer>
            </TableContainer>
          </DesktopScheduleContainer>
          <MobileScheduleContainer>
            <NewTracksContainer>
              <NewScheduleRow>
                <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
                <NewTrackContainerHeader>
                  DeFi Track
                  <br />
                  <span style={{ fontSize: "small" }}>(Building M)</span>
                </NewTrackContainerHeader>
              </NewScheduleRow>
              {conferenceAgendas[date]
                .filter((i) => i.trackA)
                .map((agenda, i) => (
                  <NewScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.trackA && _renderDefiItem(agenda.trackA, i)}
                    </TrackContainer>
                  </NewScheduleRow>
                ))}
            </NewTracksContainer>
            <NewTracksContainer>
              <NewScheduleRow>
                <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
                <NewTrackContainerHeader>
                  ZK / Client / Security Track
                  <br />
                  <span style={{ fontSize: "small" }}>(Building F)</span>
                </NewTrackContainerHeader>
              </NewScheduleRow>
              {conferenceAgendas[date]
                .filter((i) => i.trackB)
                .map((agenda, i) => (
                  <NewScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.trackB && _renderZkItem(agenda.trackB, i)}
                    </TrackContainer>
                  </NewScheduleRow>
                ))}
            </NewTracksContainer>
            <NewTracksContainer>
              <NewScheduleRow>
                <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
                <NewTrackContainerHeader>
                  Workshop
                  <br />
                  <span style={{ fontSize: "small" }}>(Building I)</span>
                </NewTrackContainerHeader>
              </NewScheduleRow>
              {conferenceAgendas[date]
                .filter((i) => i.workshop)
                .map((agenda, i) => (
                  <NewScheduleRow key={date.toString() + i}>
                    <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                    <TrackContainer>
                      {agenda.workshop &&
                        _renderWorkshopItem(agenda.workshop, i)}
                    </TrackContainer>
                  </NewScheduleRow>
                ))}
            </NewTracksContainer>
          </MobileScheduleContainer>
        </>
      )}
    </Container>
  );
};

export default Agendas;

function TimeZoneHint() {
  return <TimeZoneHintContainer>Taiwan Time Zone: UTC+8</TimeZoneHintContainer>;
}

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
  font-family: "Rammetto One";
  font-size: 35px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  margin-bottom: 50px;
`;

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

const EventSwitcher = styled.button<{ isSelect: boolean }>`
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

const DatesContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin-top: 50px;
  display: flex;
  gap: 12px;
  border-bottom: 2px solid ${Colors.gray2};
  @media (max-width: 768px) {
    padding: 0 6px;
  }
`;

const DateSelector = styled.button<{ isSelect: boolean }>`
  color: ${(props) => (props.isSelect ? Colors.pennBlue : Colors.gray2)};
  padding: 0px 20px 8px;
  font-family: "Rammetto One";
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${(props) =>
      props.isSelect ? Colors.pennBlue : "transparent"};
    bottom: -3px;
    left: 0;
  }

  :active {
    transform: scale(0.98);
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1080px;
`;

const TimeZoneHintContainer = styled.div`
  colors: ${Colors.pennBlue};
  width: 100%;
  margin-bottom: 12px;
  font-size: 12px;
`;

const HackSchedulesContainer = styled.div`
  width: 100%;
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

const TopicContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  font-family: "Rammetto One";
`;

const NameContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ScheduleText = styled(TimeText)`
  font-size: 14px;
`;

const PrerequisiteContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  font-size: 12px;
`;

const PrerequisiteText = styled.div`
  display: flex;
  width: 100%;
  color: ${Colors.gray4};
`;

const SpeakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SpeakerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpeakerName = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const SpeakerCompany = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const SpeakerIcon = styled.div`
  flex: 0 0 54px;
  width: 54px;
  height: 54px;
  border-radius: 100px;
  position: relative;
  margin-right: 8px;
  background-color: ${Colors.gray1};
`;

const TimeContainer = styled.div`
  display: flex;

  @media (max-width: 576px) {
    justify-content: space-between;
  }
`;

const OrganizerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;

const NewTracksContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${Colors.pennBlue};

  @media (max-width: 768px) {
    margin: 20px auto auto auto;
  }
`;

const NewScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr 0.8fr;

  :nth-child(even) {
    background-color: ${Colors.blue2};
  }

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

const HackathonScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr;

  :nth-child(even) {
    background-color: ${Colors.blue2};
  }

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

const KeynoteRow = styled(NewScheduleRow)`
  display: grid;
  grid-template-columns: 120px 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

const NewTrackTimeContainer = styled.div`
  padding: 20px 8px;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  color: ${Colors.pennBlue};

  font-weight: bold;
  border-bottom: 1px solid ${Colors.pennBlue};
  border-right: 1px solid ${Colors.pennBlue};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TrackContainer = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${Colors.pennBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackMainContent = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NewTrackTimeContainerHeader = styled(NewTrackTimeContainer)`
  background-color: ${Colors.pennBlue};
  font-family: "Rammetto One";
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewTrackContainerHeader = styled(TrackContainer)`
  background-color: white;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  font-family: "Rammetto One";
`;

const DurationT = styled(ScheduleText)<{ isFirst: boolean }>`
  display: block;
  font-weight: 400;
  color: ${Colors.gray5};
  @media (max-width: 768px) {
    border-top-width: 0px;
    padding-top: 0px;
  }
`;

const MobileScheduleContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

const DesktopScheduleContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
