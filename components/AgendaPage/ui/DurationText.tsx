import styled from "styled-components";
import Colors from "@/styles/colors";

export const ScheduleText = styled.span`
  flex: 1;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.brightBlue};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Duration = styled(ScheduleText)`
  display: block;
  font-weight: 400;
  color: ${Colors.brightBlue};
  @media (max-width: 768px) {
    border-top-width: 0px;
    padding-top: 0px;
  }
`;
