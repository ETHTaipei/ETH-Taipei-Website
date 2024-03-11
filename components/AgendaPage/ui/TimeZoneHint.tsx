import Colors from "@/styles/colors";
import styled from "styled-components";

const TimeZoneHint = () => {
  return <TimeZoneHintContainer>Taiwan Time Zone: UTC+8</TimeZoneHintContainer>;
};

export default TimeZoneHint;

const TimeZoneHintContainer = styled.div`
  colors: ${Colors.pennBlue};
  width: 100%;
  margin-bottom: 12px;
  font-size: 12px;
`;
