import styled from "styled-components";

import { hackathonAgendas } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import HackathonItem from "./HackathonItem";
import HeaderCell from "./ui/HeaderCell";
import TimeZoneHint from "./ui/TimeZoneHint";

interface HackathonTableProps {
  date: number;
}

const HackathonTable = ({ date }: HackathonTableProps) => {
  // the activity trait is set to empty cuz all activities in this page is hackathon
  const Column1Location = "M";
  const Column2Location = "F";

  return (
    <TableContainer>
      <DesktopScheduleContainer>
        <TableContainer>
          <TimeZoneHint />
          <NewTracksContainer>
            <HackathonScheduleRow>
              <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
              <HeaderCell activity="" location={Column1Location} />
              <HeaderCell activity="" location={Column2Location} />
            </HackathonScheduleRow>
            {hackathonAgendas[date].map((agenda, i) => (
              <HackathonScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.trackA && (
                    <HackathonItem item={agenda.trackA} index={i} />
                  )}
                </TrackContainer>
                <TrackContainer>
                  {agenda.trackB && (
                    <HackathonItem item={agenda.trackB} index={i} />
                  )}
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
            <HeaderCell activity="" location={Column1Location} />
          </NewScheduleRow>
          {hackathonAgendas[date]
            .filter((i) => i.trackA)
            .map((agenda, i) => (
              <NewScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.trackA && (
                    <HackathonItem item={agenda.trackA} index={i} />
                  )}
                </TrackContainer>
              </NewScheduleRow>
            ))}
        </NewTracksContainer>
        <NewTracksContainer>
          <NewScheduleRow>
            <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
            <HeaderCell activity="" location={Column2Location} />
          </NewScheduleRow>
          {hackathonAgendas[date]
            .filter((i) => i.trackB)
            .map((agenda, i) => (
              <NewScheduleRow key={date.toString() + i}>
                <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                <TrackContainer>
                  {agenda.trackB && (
                    <HackathonItem item={agenda.trackB} index={i} />
                  )}
                </TrackContainer>
              </NewScheduleRow>
            ))}
        </NewTracksContainer>
      </MobileScheduleContainer>
    </TableContainer>
  );
};

export default HackathonTable;

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

const HackathonScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr;

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
  font-size: 16px;
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
