import IconLocation from "@/components/icons/IconLocation";
import Colors from "@/styles/colors";
import Image from "next/image";
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
      {location && (
        <div>
          <IconLocation width={14} height={14} color={Colors.brightBlue} />
          {` Building ${location}`}
        </div>
      )}
      {location && (
        <ViewMap onClick={() => setOpenMap(true)}>
          <Icon>
            <Image
              src="/images/map.svg"
              alt="Map"
              fill
              style={{ objectFit: "cover" }}
            />
          </Icon>
          View Map
        </ViewMap>
      )}
      {openMap && location && (
        <Map id={location} onClose={() => setOpenMap(false)} />
      )}
      {activity && <Subtitle>{activity}</Subtitle>}
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
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${Colors.brightBlue};
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
`;

const ViewMap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  cursor: pointer;
`;

const Icon = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
`;
