import styled from "styled-components";

import { HackathonItemType } from "@/public/constant/agendas";
import { Duration, ScheduleText } from "./ui/DurationText";

interface HackathonItemProps {
  item: HackathonItemType;
  index: number;
}

const HackathonItem = ({ item, index }: HackathonItemProps) => {
  return (
    <TrackMainContent>
      <TopicContainer>
        <ScheduleText>{item.topic}</ScheduleText>
      </TopicContainer>
      <Duration>{item.duration}</Duration>
    </TrackMainContent>
  );
};

export default HackathonItem;

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
