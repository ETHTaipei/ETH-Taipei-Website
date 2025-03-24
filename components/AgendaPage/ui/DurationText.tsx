import styled from "styled-components";
import Colors from "@/styles/colors";

export const ScheduleText = styled.span`
  flex: 1;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  color: ${Colors.brightBlue};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Duration = styled(ScheduleText)`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.brightBlue};
`;
