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
            {`The ETHTaipei hackathon is a three-day event where developers can
            compete for prizes sponsored by our sponsors. Participants will work
            together in teams to develop new blockchain applications using
            Ethereum technologies. The hackathon is free to attend and includes
            workshops and talks from industry experts. It's the perfect
            opportunity to gain hands-on experience and connect with other
            blockchain builders from around the world.`}
          </ActivityDescription>
        </ActivityContainer>
        <ActivityContainer>
          <ActivityTitle>Conference</ActivityTitle>
          <ActivityDate>Apr 24 (Mon), Apr 25 (Tue)</ActivityDate>
          <ActivityDescription>
            {`The ETHTaipei conference is a two-day event featuring two tracks:
            DeFi and Ethereum Technology. The DeFi track focuses on
            decentralized finance, while the Ethereum Technology track covers a
            range of topics including Zero-Knowledge Proofs, Layer 2, Security,
            and more. This event brings together industry experts and innovators
            to explore the latest developments in blockchain technology. Tickets
            are required to attend and provide access to both tracks and
            networking opportunities.`}
          </ActivityDescription>
        </ActivityContainer>
      </MainContent>
    </Container>
  );
};

export default Activities;

const Container = styled.div`
  width: 100%;
  padding: 120px 40px;
  @media (max-width: 768px) {
    padding: 40px 24px 60px 24px;
  }
`;

const MainContent = styled.div`
  with: 100%;
  max-width: 1020px;
  margin: auto;
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityContainer = styled.div`
  flex: 1;
  padding: 32px;
  background-color: ${Colors.yInMnBlue};
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
  color: ${Colors.seaSalt};
  display: block;
`;

const ActivityDate = styled.h2`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.pennBlue};
  padding: 4px 24px;
  display: inline-block;
  border-radius: 100px;
  background-color: ${Colors.seaSalt};
`;

const ActivityDescription = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.seaSalt};
`;
