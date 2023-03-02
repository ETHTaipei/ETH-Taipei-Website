import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import Visa from "@/components/VisaPage/Visa";

const VisaPage = () => {
  return (
    <Container>
      <Visa />
    </Container>
  );
};

export default VisaPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
