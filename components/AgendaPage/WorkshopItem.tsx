import { WorkshopItemType } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import styled from "styled-components";

interface WorkshopItemProps {
  item: WorkshopItemType;
  index: number;
}

const WorkshopItem = ({ item, index }: WorkshopItemProps) => {
  return (
    <TrackMainContent>
      <TopicContainer>
        <ScheduleText>{`${item.title}`}</ScheduleText>
      </TopicContainer>
      <DurationT isFirst={index === 0}>{item.duration}</DurationT>
      <NameContainer>
        {item.holder && (
          <SpeakerContainer>
            <SpeakerName>{item.holder}</SpeakerName>
          </SpeakerContainer>
        )}
      </NameContainer>
      {item.prerequisite && (
        <PrerequisiteContainer>
          <PrerequisiteText>
            <a href={item.prerequisiteLink} target="_blank" rel="noreferrer">
              {item.prerequisite}
            </a>
          </PrerequisiteText>
        </PrerequisiteContainer>
      )}
    </TrackMainContent>
  );
};

export default WorkshopItem;

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
  font-family: "Rammetto One";
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

const SpeakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SpeakerName = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.pennBlue};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const PrerequisiteContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  font-size: 12px;
`;

const PrerequisiteText = styled.div`
  display: flex;
  width: 100%;
  color: ${Colors.gray4};
`;
