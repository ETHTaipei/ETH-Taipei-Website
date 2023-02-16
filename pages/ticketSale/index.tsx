import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const TicketSale = () => {
  return (
    <div>
      <Title>TicketSale</Title>
    </div>
  );
};

export default TicketSale;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.gray1};
  margin-bottom: 20px;
`;
