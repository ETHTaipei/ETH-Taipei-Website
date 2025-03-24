import styled from "styled-components";

import { SideEventItemType } from "@/public/constant/agendas";
import Colors from "@/styles/colors";

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
      <DurationT isFirst={index === 0}>{item.duration}</DurationT>
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
