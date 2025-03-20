import styled from "styled-components";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import Image from "next/image";
import { usePastContributors } from "@/components/hooks/useContributors";
import PeopleLink from "./PeopleLink";

const PastContributors = () => {
  const { pastContributors } = usePastContributors();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <Title>
            <Image
              src="/images/icons/contributors.svg"
              alt="Contributors icon"
              width={46}
              height={46}
              style={{ marginRight: 12, verticalAlign: "bottom" }}
            />
            Past Contributors
          </Title>
          <Subtitle>{"ETHTaipei won't be possible without you <3"}</Subtitle>
          <ContributorList>
            {pastContributors.map((contributor, index) => (
              <PeopleLink person={contributor} key={index} />
            ))}
          </ContributorList>
        </ContentCenter>
      </MainContent>
    </Container>
  );
};

export default PastContributors;

const Container = styled.div`
  ${BlueGridBackgroundStyles}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 90px;

  @media (max-width: 992px) {
    padding: 0px 16px 50px 16px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  position: relative; // Needed for absolute positioning of the child
  overflow: hidden; // Ensures the decoration doesn't overflow the container
`;

const ContentCenter = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const ContributorList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 80px;

  @media (max-width: 992px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;
