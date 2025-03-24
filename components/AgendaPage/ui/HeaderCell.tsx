import IconLocation from "@/components/icons/IconLocation";
import Colors from "@/styles/colors";
import { useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import { agendaBorder } from "@/styles/constants";

interface HeaderCellProps {
  activity: string;
  location?: string;
}

const HeaderCell = ({ activity, location }: HeaderCellProps) => {
  const [openMap, setOpenMap] = useState(false);
  return (
    <Container>
      {activity && <Title>{activity}</Title>}
      {location && (
        <Location onClick={() => setOpenMap(true)}>
          <IconLocation width={14} height={14} color={Colors.brightBlue} />
          {` Building ${location}`}
        </Location>
      )}
      {openMap && location && (
        <Map id={location} onClose={() => setOpenMap(false)} />
      )}
    </Container>
  );
};

export default HeaderCell;

const Container = styled.div`
  padding: 20px 32px;
  border-bottom: ${agendaBorder};
  border-right: ${agendaBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  background-color: white;
  text-align: center;
  line-height: 22px;
  font-weight: bold;
  color: ${Colors.brightBlue};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
`;

const Location = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-top: 4px;
`;
