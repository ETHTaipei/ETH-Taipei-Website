import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const ApplicationForm = () => {
  return (
    <Container>
      <MainContent>
        <Title>Apply for Speakers / Volunteers / Sponsors</Title>
      </MainContent>
    </Container>
  );
};

export default ApplicationForm;

const Container = styled.div`
  width: 100%;
  padding: 120px 0px;
  background-color: ${Colors.gray6};
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.gray1};
  margin-bottom: 20px;
`;
