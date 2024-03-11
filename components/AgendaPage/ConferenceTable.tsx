import styled from "styled-components";

import { conferenceAgendas } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import ConferenceAgendaItem from "./ConferenceItem";
import WorkshopItem from "./WorkshopItem";
import TimeZoneHint from "./ui/TimeZoneHint";

interface ConferenceTableProps {
  date: number;
}

const ConferenceTable = ({ date }: ConferenceTableProps) => {
  return (
    <>
      <DesktopScheduleContainer>
        <TableContainer>
          <TimeZoneHint />
          <NewTracksContainer>
            <NewScheduleRow>
              <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
              <NewTrackContainerHeader>Track A</NewTrackContainerHeader>
              <NewTrackContainerHeader>Track B</NewTrackContainerHeader>
              <NewTrackContainerHeader>Workshop</NewTrackContainerHeader>
            </NewScheduleRow>
            {conferenceAgendas[date].map((agenda, i) => (
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

const NewTrackContainerHeader = styled(TrackContainer)`
  background-color: white;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  font-family: "Rammetto One";
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