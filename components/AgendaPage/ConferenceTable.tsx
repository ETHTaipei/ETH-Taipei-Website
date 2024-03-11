import styled from "styled-components";

import { conferenceAgendas } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import { useSpeakers } from "../hooks/useSpeakers";
import ConferenceAgendaItem from "./ConferenceItem";
import WorkshopItem from "./WorkshopItem";
import HeaderCell from "./ui/HeaderCell";
import TimeZoneHint from "./ui/TimeZoneHint";

interface ConferenceTableProps {
  date: number;
}

const ConferenceTable = ({ date }: ConferenceTableProps) => {
  const { speakers } = useSpeakers();
  const conferenceAgendasWithSpeakerImg = {
    ...conferenceAgendas,
    [date]: conferenceAgendas[date].map((agenda, i) => {
      const newAgenda = { ...agenda };
      if (agenda.trackA && !agenda.trackA.src) {
        newAgenda.trackA = {
          ...agenda.trackA,
          src: speakers.find((speaker) => speaker.name === agenda.trackA?.name)
            ?.img,
        };
      }
      if (agenda.trackB && !agenda.trackB.src) {
        newAgenda.trackB = {
          ...agenda.trackB,
          src: speakers.find((speaker) => speaker.name === agenda.trackB?.name)
            ?.img,
        };
      }
      return newAgenda;
    }),
  };

  const Column1Name = `Track A`;
  const Column1Location = "M";

  const Column2Name = `Track B`;
  const Column2Location = "F";

  const Column3Name = `Workshop`;
  const Column3Location = "G";

  return (
    <>
      <DesktopScheduleContainer>
        <TableContainer>
          <TimeZoneHint />
          <NewTracksContainer>
            <NewScheduleRow>
              <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
              <HeaderCell title={Column1Name} location={Column1Location} />
              <HeaderCell title={Column2Name} location={Column2Location} />
              <HeaderCell title={Column3Name} location={Column3Location} />
            </NewScheduleRow>
            {conferenceAgendasWithSpeakerImg[date].map((agenda, i) => (
              <NewScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.trackA && (
                    <ConferenceAgendaItem item={agenda.trackA} index={i} />
                  )}
                </TrackContainer>
                <TrackContainer>
                  {agenda.trackB && (
                    <ConferenceAgendaItem item={agenda.trackB} index={i} />
                  )}
                </TrackContainer>
                <TrackContainer>
                  {agenda.workshop && (
                    <WorkshopItem item={agenda.workshop} index={i} />
                  )}
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
            <HeaderCell title={Column1Name} location={Column1Location} />
          </NewScheduleRow>
          {conferenceAgendasWithSpeakerImg[date]
            .filter((i) => i.trackA)
            .map((agenda, i) => (
              <NewScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.trackA && (
                    <ConferenceAgendaItem item={agenda.trackA} index={i} />
                  )}
                </TrackContainer>
              </NewScheduleRow>
            ))}
        </NewTracksContainer>
        <NewTracksContainer>
          <NewScheduleRow>
            <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
            <HeaderCell title={Column2Name} location={Column2Location} />
          </NewScheduleRow>
          {conferenceAgendasWithSpeakerImg[date]
            .filter((i) => i.trackB)
            .map((agenda, i) => (
              <NewScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.trackB && (
                    <ConferenceAgendaItem item={agenda.trackB} index={i} />
                  )}
                </TrackContainer>
              </NewScheduleRow>
            ))}
        </NewTracksContainer>
        <NewTracksContainer>
          <NewScheduleRow>
            <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
            <HeaderCell title={Column3Name} location={Column3Location} />
          </NewScheduleRow>
          {conferenceAgendasWithSpeakerImg[date]
            .filter((i) => i.workshop)
            .map((agenda, i) => (
              <NewScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.workshop && (
                    <WorkshopItem item={agenda.workshop} index={i} />
                  )}
                </TrackContainer>
              </NewScheduleRow>
            ))}
        </NewTracksContainer>
      </MobileScheduleContainer>
    </>
  );
};

export default ConferenceTable;

const TableContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1080px;
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

const ScheduleText = styled(TimeText)`
  font-size: 14px;
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
  border-right: 1px solid ${Colors.pennBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
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
