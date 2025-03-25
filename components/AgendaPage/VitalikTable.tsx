import styled from "styled-components";

import t from "@/public/constant/content";
import vitalik from "@/public/images/v.png";
import Colors from "@/styles/colors";
import HeaderCell from "./ui/HeaderCell";
import SpeakerInfo from "./ui/SpeakerInfo";
import TimeZoneHint from "./ui/TimeZoneHint";
import { Duration, ScheduleText } from "./ui/DurationText";
import { agendaBorder, diagonalSymmetricBorder } from "@/styles/constants";

const VitalikTable = () => {
  return (
    <TableContainer>
      <TimeZoneHint />
      <NewTracksContainer>
        <KeynoteRow>
          <NewTrackTimeContainerHeader>Time</NewTrackTimeContainerHeader>
          <HeaderCell activity={t.homepage.openingAndKeynote} location="M" />
        </KeynoteRow>
        <KeynoteRow>
          <NewTrackTimeContainer>10:00am</NewTrackTimeContainer>
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
            10:10am
          </NewTrackTimeContainer>
          <TrackContainer style={{ borderBottom: 0, backgroundColor: "white" }}>
            <TrackMainContent>
              <TopicContainer>
                <ScheduleText>{"Vitalik Keynote"}</ScheduleText>
              </TopicContainer>
              <Duration>30 mins</Duration>
              <SpeakerInfo
                src={vitalik}
                name={"Vitalik Buterin"}
                company={"Ethereum Foundation"}
              />
            </TrackMainContent>
          </TrackContainer>
        </KeynoteRow>
      </NewTracksContainer>
    </TableContainer>
  );
};

export default VitalikTable;

const TableContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1080px;
`;

const TopicContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const NewTracksContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  overflow: hidden;
  border: ${agendaBorder};
  ${diagonalSymmetricBorder}

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
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.brightBlue};

  font-weight: bold;
  border-bottom: ${agendaBorder};
  border-right: ${agendaBorder};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TrackContainer = styled.div`
  padding: 20px 32px;
  border-bottom: ${agendaBorder};
  border-right: ${agendaBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackMainContent = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
