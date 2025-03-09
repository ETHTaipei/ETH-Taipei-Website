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
                src="/images/FirstViewBanner/Date_Icon.svg"
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
        <Title>
          <ImageWrapper>
            <Image
              src="/images/icons/butterfly.svg"
              alt="location"
              width={48}
              height={48}
              style={{ marginRight: 4 }}
            />
          </ImageWrapper>
          {t.homepage.activityTitle}
        </Title>
        <Subtitle>{t.homepage.activitySubTitle}</Subtitle>
        <ActivityCardWrapper>
          <ActivityCardComponent
            imageSrc="/images/recap-2024/1.jpg"
            imageAlt={t.homepage.activityName_1}
            name={t.homepage.activityName_1}
            description={t.homepage.activityDesc_1}
            date={t.homepage.activityDate_1}
            buttonText={t.homepage.activityBtn_1}
            isActivated={true}
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
            imageSrc="/images/recap-2024/2.jpg"
            imageAlt={t.homepage.activityName_3}
            name={t.homepage.activityName_3}
            description={t.homepage.activityDesc_3}
            date={t.homepage.activityDate_3}
            buttonText={t.homepage.activityBtn_3}
            isActivated={true}
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
  background-color: rgba(0, 0, 0, 0.75);
`;

const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1060px;
  padding: 120px 40px;
`;

const Title = styled.h1`
  color: ${Colors.neonGreen};
  text-align: center;
  font-size: 48px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.div`
  font-size: 22px;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 16px;
`;

const ActivityCardWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityCard = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityNameWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 230px;
  height: 230px;
  overflow: hidden;
  border: 3px solid ${Colors.brightBlue};
  border-top-left-radius: 24px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 24px;
  @media (max-width: 830px) {
    height: 240px;
  }
`;

const ActivityName = styled.div`
  position: relative;
  padding: 32px;
  font-size: 36px;
  color: black;
  text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
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
  color: white;
  font-family: Inter;
  font-size: 14px;
  line-height: 24px;
`;

const ActivityActions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ActivityDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 18px;
`;

const Icon = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const ActionButton = styled.button<{ isActivated: boolean }>`
  border-radius: 8px;
  padding: 8px 40px;
  background-color: ${(props) =>
    props.isActivated ? Colors.brightBlue : Colors.gray3};
  color: white;
  font-size: 22px;
  cursor: ${(props) => (props.isActivated ? "pointer" : "not-allowed")};
  transition: all 300ms ease;
  :hover {
    transform: scale(1.1);
  }
`;
