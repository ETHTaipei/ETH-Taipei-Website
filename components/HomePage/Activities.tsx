import Colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";

const Activities = () => {
  return (
    <Container>
      <MainContent>
        <ActivityContainer>
          <ActivityTitle>Hackathon</ActivityTitle>
          <ActivityDate>Apr 21 (Fri) → Apr 23 (Sun)</ActivityDate>
          <ActivityDescription>
            Other than food, Taiwan is also known as one of the best sources for
            talented developers, and it is no exception when it comes to
            Ethereum builders. If you’re looking forward to connecting with
            local talents, stay tuned on our sponsor program to get top exposure
            during the hackathon. And for hackers, come hack with others while
            enjoying free food, free drinks, and win the prize! Application
            coming soon 👀
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityTitle>Conference</ActivityTitle>
          <ActivityDate>Apr 24 (Mon), Apr 25 (Tue)</ActivityDate>
          <ActivityDescription>
            The conference is going to focus on three topics: DeFi, zk, and
            building in the Ethereum ecosystem. If you have a great topic in
            mind, we’re currently looking for speakers to join the party. See
            more detail and apply to speak here!
          </ActivityDescription>
        </ActivityContainer>
      </MainContent>
    </Container>
  );
};

export default Activities;

const Container = styled.div`
  width: 100%;
  padding: 120px 0;
`;

const MainContent = styled.div`
  with: 100%;
  max-width: 1020px;
  margin: auto;
  display: flex;
  gap: 32px;
`;

const ActivityContainer = styled.div`
  flex: 1;
  padding: 32px;
  background-color: ${Colors.gray6};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const ActivityTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  color: ${Colors.gray1};
  display: block;
`;

const ActivityDate = styled.h2`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.gray1};
  padding: 4px 16px;
  display: inline-block;
  background-color: ${Colors.gray5};
  border-radius: 8px;
`;

const ActivityDescription = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.gray1};
`;
