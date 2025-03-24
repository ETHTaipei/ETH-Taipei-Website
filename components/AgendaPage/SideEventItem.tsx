import styled from "styled-components";

import { SideEventItemType } from "@/public/constant/agendas";
import { Duration, ScheduleText } from "./ui/DurationText";

interface SideEventItemProps {
  item: SideEventItemType;
  index: number;
}

const SideEventItem = ({ item, index }: SideEventItemProps) => {
  return (
    <TrackMainContent>
      <TopicContainer>
        <ScheduleText>{item.topic}</ScheduleText>
      </TopicContainer>
      <Duration>{item.duration}</Duration>
    </TrackMainContent>
  );
};

export default SideEventItem;

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
