import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import { sideEventFormUrl, tickSiteUrl } from "@/public/constant/urls";
import Colors from "@/styles/colors";
import Link from "next/link";

interface ActivityCardParam {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  date: string;
  buttonText: string;
  isActivated: boolean;
  linkUrl: string;
}

const ActivityCardComponent = ({
  imageSrc,
  imageAlt,
  name,
  description,
  date,
  buttonText,
  isActivated,
  linkUrl,
}: ActivityCardParam) => {
  return (
    <ActivityCard>
      <ActivityNameWrapper>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <ActivityName>{name}</ActivityName>
      </ActivityNameWrapper>
      <ActivityDescWrapper>
        <ActivityDesc>{description}</ActivityDesc>
        <ActivityActions>
          <ActivityDate>
            <Icon>
              <Image
                src="/images/calendar-pennblue.svg"
                alt="Date"
                fill
                style={{ objectFit: "cover" }}
              />
            </Icon>
            {date}
          </ActivityDate>
          <ActionButton isActivated={isActivated}>
            {isActivated && linkUrl ? (
              <Link href={linkUrl} target="_blank">
                {buttonText}
              </Link>
            ) : (
              buttonText
            )}
          </ActionButton>
        </ActivityActions>
      </ActivityDescWrapper>
    </ActivityCard>
  );
};

const Activities = () => {
  return (
    <Container>
      <MainContent>
        <Title>{t.homepage.activityTitle}</Title>
        <ActivityCardWrapper>
          <ActivityCardComponent
            imageSrc="/images/activity-conference-bg.png"
            imageAlt={t.homepage.activityName_1}
            name={t.homepage.activityName_1}
            description={t.homepage.activityDesc_1}
            date={t.homepage.activityDate_1}
            buttonText={t.homepage.activityBtn_1}
            isActivated={false}
            linkUrl={tickSiteUrl}
          />
          {/* <ActivityCardComponent
            imageSrc="/images/activity-hackathon-bg.png"
            imageAlt={t.homepage.activityName_2}
            name={t.homepage.activityName_2}
            description={t.homepage.activityDesc_2}
            date={t.homepage.activityDate_2}
            buttonText={t.homepage.activityBtn_2}
            isActivated={false}
            linkUrl={hackathonUrl}
          /> */}
          <ActivityCardComponent
            imageSrc="/images/activity-sideevent-bg.png"
            imageAlt={t.homepage.activityName_3}
            name={t.homepage.activityName_3}
            description={t.homepage.activityDesc_3}
            date={t.homepage.activityDate_3}
            buttonText={t.homepage.activityBtn_3}
            isActivated={false}
            linkUrl={sideEventFormUrl}
          />
        </ActivityCardWrapper>
      </MainContent>
    </Container>
  );
};

export default Activities;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.gray8};
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 120px 40px;
`;

const Title = styled.h1`
  font-family: "Rammetto One";
  color: ${Colors.pennBlue};
  text-align: center;
  font-size: 42px;
`;

const ActivityCardWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const ActivityCard = styled.div`
  width: 100%;
  max-width: 886px;
  display: flex;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  @media (max-width: 830px) {
    flex-direction: column;
    max-width: ;
  }
`;

const ActivityNameWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 255px;
  @media (max-width: 830px) {
    height: 200px;
  }
`;

const ActivityName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  font-family: "Rammetto One";
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const ActivityDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`;

const ActivityDesc = styled.div`
  color: ${Colors.pennBlue};
  font-size: 16px;
  line-height: 24px;
`;

const ActivityActions = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

const ActivityDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${Colors.pennBlue};
  font-size: 18px;
  font-weight: bold;
`;

const Icon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

const ActionButton = styled.button<{ isActivated: boolean }>`
  border-radius: 8px;
  padding: 8px 40px;
  background-color: ${(props) =>
    props.isActivated ? Colors.btnBlue : Colors.gray3};
  color: white;
  font-size: 22px;
  font-family: "Rammetto One";
  cursor: ${(props) => (props.isActivated ? "pointer" : "not-allowed")};
  transition: all 300ms ease;
  :hover {
    transform: scale(1.1);
  }
`;
