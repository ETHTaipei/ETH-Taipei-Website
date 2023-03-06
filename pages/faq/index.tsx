import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import FAQ from "@/components/FAQPage/FAQ";

const FAQPage = () => {
  return (
    <Container>
      <FAQ />
    </Container>
  );
};

export default FAQPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
