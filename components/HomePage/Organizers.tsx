import t from "@/public/constant/content";
import styled from "styled-components";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import { useOrganizers } from "@/components/hooks/useContributors";
import Image from "next/image";
import PeopleLink from "./PeopleLink";

const Organizers = () => {
  const { organizers } = useOrganizers();

  return (
    <Container>
      <MainContent>
        <ContentCenter>
          <OrganizersTitle>
            <Image
              src="./images/icons/butterfly-green.svg"
              style={{ marginRight: 12 }}
              height={36}
              width={36}
              alt="Organizers icon"
            />
            {t.homepage.organizers}
          </OrganizersTitle>
          <OrganizersSubtitle>
            {t.homepage.organizerSubtitle}
          </OrganizersSubtitle>
          <OrganizersList>
            {organizers.map((organizer, index) => (
              <PeopleLink person={organizer} key={index} />
            ))}
          </OrganizersList>
        </ContentCenter>
      </MainContent>
      <BackgroundBottom>
        <div
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundAttachment: "fixed",
            backgroundColor: "rgba(0, 48, 206, 0.9)",
          }}
        />
      </BackgroundBottom>
    </Container>
  );
};

export default Organizers;

const Container = styled.div`
  ${BlueGridBackgroundStyles}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 90px 0px 90px;

  @media (max-width: 992px) {
    padding: 60px 16px 0px 16px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;

  position: relative; // Needed for absolute positioning of the child
  overflow: hidden; // Ensures the decoration doesn't overflow the container
`;

const ContentCenter = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrganizersTitle = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;
`;

const OrganizersSubtitle = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const OrganizersList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 80px;

  @media (max-width: 992px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;
