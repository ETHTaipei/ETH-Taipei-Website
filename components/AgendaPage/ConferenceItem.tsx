import styled from "styled-components";

import { ConferenceItemType } from "@/public/constant/agendas";
import PanelInfo from "./ui/PanelInfo";
import SpeakerInfo from "./ui/SpeakerInfo";
import { Duration, ScheduleText } from "./ui/DurationText";

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
      <Duration>{item.duration}</Duration>
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

const NameContainer = styled.div`
  display: flex;
  width: 100%;
`;
