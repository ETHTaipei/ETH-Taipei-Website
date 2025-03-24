import { WorkshopItemType } from "@/public/constant/agendas";
import Colors from "@/styles/colors";
import styled from "styled-components";
import { Duration, ScheduleText } from "./ui/DurationText";

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
      <Duration>{item.duration}</Duration>
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
  font-size: 15px;
  line-height: 19px;
  color: ${Colors.brightBlue};
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
  color: ${Colors.btnBlue};
`;
