import styled from "styled-components";

import Colors from "@/styles/colors";
import { useConferences } from "../hooks/useConferences";
import ConferenceAgendaItem from "./ConferenceItem";
import WorkshopItem from "./WorkshopItem";
import HeaderCell from "./ui/HeaderCell";
import TimeZoneHint from "./ui/TimeZoneHint";

interface ConferenceTableProps {
  date: number;
}

const ConferenceTable = ({ date }: ConferenceTableProps) => {
  const conferenceAgendas = useConferences();

  const Column1Activity = "Conference";
  const Column1Location = "M";

  const Column2Activity = "Conference";
  const Column2Location = "F";

  const Column3Activity = "Workshop";
  const Column3Location = "G";

  return (
    <>
      <DesktopScheduleContainer>
        <TableContainer>
          <TimeZoneHint />
          <NewTracksContainer>
            <NewScheduleRow>
              <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
              <HeaderCell
                activity={Column1Activity}
                location={Column1Location}
              />
              <HeaderCell
                activity={Column2Activity}
                location={Column2Location}
              />
              <HeaderCell
                activity={Column3Activity}
                location={Column3Location}
              />
            </NewScheduleRow>
            {conferenceAgendas[date] &&
              conferenceAgendas[date].length > 0 &&
              conferenceAgendas[date].map((agenda, i) => (
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
            <HeaderCell activity={Column1Activity} location={Column1Location} />
          </NewScheduleRow>
          {conferenceAgendas[date] &&
            conferenceAgendas[date].length > 0 &&
            conferenceAgendas[date]
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
            <HeaderCell activity={Column2Activity} location={Column2Location} />
          </NewScheduleRow>
          {conferenceAgendas[date] &&
            conferenceAgendas[date].length > 0 &&
            conferenceAgendas[date]
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
            <HeaderCell activity={Column3Activity} location={Column3Location} />
          </NewScheduleRow>
          {conferenceAgendas[date] &&
            conferenceAgendas[date].length > 0 &&
            conferenceAgendas[date]
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

const NewTracksContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${Colors.brightBlue};

  @media (max-width: 768px) {
    margin: 20px auto auto auto;
  }
`;

const NewScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr 0.8fr;

  :nth-child(even) {
    background-color: ${Colors.lightBlue};
  }

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

const NewTrackTimeContainer = styled.div`
  padding: 20px 8px;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.brightBlue};

  font-weight: bold;
  border-bottom: 1px solid ${Colors.brightBlue};
  border-right: 1px solid ${Colors.brightBlue};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TrackContainer = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${Colors.brightBlue};
  border-right: 1px solid ${Colors.brightBlue};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1050px) {
    padding: 20px 20px;
  }
`;

const NewTrackTimeContainerHeader = styled(NewTrackTimeContainer)`
  background-color: ${Colors.brightBlue};
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
