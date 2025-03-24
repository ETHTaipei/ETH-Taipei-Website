import Colors from "@/styles/colors";
import styled from "styled-components";

interface PanelInfoProps {
  panelHost: string;
  panelists: string[];
}

const PanelInfo = ({ panelHost, panelists }: PanelInfoProps) => {
  return (
    <PanelSpeakerContainer>
      <PanelHostContainer>
        <Title>Panel Host:</Title>
        <Participant>{panelHost}</Participant>
      </PanelHostContainer>
      <PanelistsContainer>
        <Title>Panelists:</Title>
        {panelists.map((panelist, i) => (
          <Participant key={i}>{panelist}</Participant>
        ))}
      </PanelistsContainer>
    </PanelSpeakerContainer>
  );
};

export default PanelInfo;

const PanelSpeakerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${Colors.brightBlue};
`;

const PanelHostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PanelistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

const Participant = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;

  ::before {
    content: "• ";
    margin-left: 6px;
  }
`;
