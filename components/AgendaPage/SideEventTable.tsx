import styled from "styled-components";

import Colors from "@/styles/colors";
import { useSideEvents } from "../hooks/useSideEvents";
import HackathonItem from "./HackathonItem";
import HeaderCell from "./ui/HeaderCell";
import TimeZoneHint from "./ui/TimeZoneHint";

interface SideEventProps {
  date: number;
}

const SideEventTable = ({ date }: SideEventProps) => {
  const Column1Name = `In-House Event`;
  const sideEventAgendas = useSideEvents();

  return (
    <TableContainer>
      <DesktopScheduleContainer>
        <TableContainer>
          <TimeZoneHint />
          <NewTracksContainer>
            <HackathonScheduleRow>
              <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
              <HeaderCell activity={Column1Name} />
            </HackathonScheduleRow>
            {sideEventAgendas &&
              sideEventAgendas[date] &&
              sideEventAgendas[date].map((agenda, i) => (
                <HackathonScheduleRow key={date.toString() + i}>
                  <NewTrackTimeContainer>{agenda.time}</NewTrackTimeContainer>
                  <TrackContainer>
                    {agenda.trackA && (
                      <HackathonItem item={agenda.trackA} index={i} />
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
            <HeaderCell activity={Column1Name} />
          </NewScheduleRow>
          {sideEventAgendas &&
            sideEventAgendas[date] &&
            sideEventAgendas[date]
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
      </MobileScheduleContainer>
    </TableContainer>
  );
};

export default SideEventTable;

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
  grid-template-columns: 120px 1fr;

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
