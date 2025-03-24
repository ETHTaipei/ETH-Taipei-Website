import styled from "styled-components";

import { ConferenceItemType } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import PanelInfo from "./ui/PanelInfo";
import SpeakerInfo from "./ui/SpeakerInfo";

interface AgendaItemProps {
  item: ConferenceItemType;
  index: number;
}

const ConferenceAgendaItem = ({ item, index }: AgendaItemProps) => {
  return (
    <TrackMainContent>
      <TopicContainer>
        <ScheduleText>{item.topic}</ScheduleText>
      </TopicContainer>
      <DurationT isFirst={index === 0}>{item.duration}</DurationT>
      <NameContainer>
        {item.name && (
          <SpeakerInfo src={item.src} name={item.name} company={item.company} />
        )}
      </NameContainer>
      {item.panelHost && item.panelists && (
        <PanelInfo panelHost={item.panelHost} panelists={item.panelists} />
      )}
    </TrackMainContent>
  );
};

export default ConferenceAgendaItem;

const TrackMainContent = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TopicContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const TimeText = styled.span`
  flex: 1;
  font-size: 16px;
  line-height: 22px;
  color: ${Colors.brightBlue};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ScheduleText = styled(TimeText)`
  font-size: 14px;
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

const NameContainer = styled.div`
  display: flex;
  width: 100%;
`;
