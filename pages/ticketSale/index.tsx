import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const TicketSale = () => {
  return (
    <Container>
      <Title>TicketSale</Title>
    </Container>
  );
};

export default TicketSale;

const Container = styled.div`
  width: 100%;
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 60px 0px 120px 0px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  margin-bottom: 40px;
`;
