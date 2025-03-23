import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import { lumaUrl, sideEventFormUrl, tickSiteUrl } from "@/public/constant/urls";
import Colors from "@/styles/colors";
import Link from "next/link";
import { LogoBgIconDecoration } from "./BgIconDecoration";

interface EventCardParam {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  date: string;
  buttonText: string;
  isActivated: boolean;
  linkUrl: string;
}

const EventCardComponent = ({
  imageSrc,
  imageAlt,
  name,
  description,
  date,
  buttonText,
  isActivated,
  linkUrl,
}: EventCardParam) => {
  return (
    <EventCard>
      <EventNameWrapper>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <EventName>{name}</EventName>
      </EventNameWrapper>
      <EventDescWrapper>
        <EventDesc>{description}</EventDesc>
        <EventActions>
          <EventDate>
            <Icon>
              <Image
                src="/images/FirstViewBanner/Date_Icon.svg"
                alt="Date"
                fill
                style={{ objectFit: "cover" }}
              />
            </Icon>
            {date}
          </EventDate>
          <ActionButton isActivated={isActivated}>
            {isActivated && linkUrl ? (
              <Link href={linkUrl} target="_blank">
                {buttonText}
              </Link>
            ) : (
              buttonText
            )}
          </ActionButton>
        </EventActions>
      </EventDescWrapper>
    </EventCard>
  );
};

const Events = () => {
  return (
    <Container id="events">
      <LogoBgIconDecoration />
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
          {t.homepage.eventTitle}
        </Title>
        <Subtitle>{t.homepage.eventSubTitle}</Subtitle>
        <EventCardWrapper>
          <EventCardComponent
            imageSrc="/images/recap-2024/1.jpg"
            imageAlt={t.homepage.eventName_1}
            name={t.homepage.eventName_1}
            description={t.homepage.eventDesc_1}
            date={t.homepage.eventDate_1}
            buttonText={t.homepage.eventBtn_1}
            isActivated={true}
            linkUrl={tickSiteUrl}
          />
          {/* <EventCardComponent
            imageSrc="/images/event-hackathon-bg.png"
            imageAlt={t.homepage.eventName_2}
            name={t.homepage.eventName_2}
            description={t.homepage.eventDesc_2}
            date={t.homepage.eventDate_2}
            buttonText={t.homepage.eventBtn_2}
            isActivated={false}
            linkUrl={hackathonUrl}
          /> */}
          <EventCardComponent
            imageSrc="/images/recap-2024/2.jpg"
            imageAlt={t.homepage.eventName_3}
            name={t.homepage.eventName_3}
            description={t.homepage.eventDesc_3}
            date={t.homepage.eventDate_3}
            buttonText={t.homepage.eventBtn_3}
            isActivated={true}
            linkUrl={sideEventFormUrl}
          />
        </EventCardWrapper>
        <EventCardWrapper>
          <EventCardComponent
            imageSrc="/images/recap-2024/8.jpg"
            imageAlt={t.homepage.eventName_4}
            name={t.homepage.eventName_4}
            description={t.homepage.eventDesc_4}
            date={t.homepage.eventDate_4}
            buttonText={t.homepage.eventBtn_4}
            isActivated={true}
            linkUrl={lumaUrl}
          />
          <iframe
            src="https://lu.ma/embed/calendar/cal-7G3rRv9BrZuKS3R/events?lt=dark"
            width="100%"
            height="auto"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            loading="lazy"
            style={{ minHeight: "350px" }}
          />
        </EventCardWrapper>
      </MainContent>
    </Container>
  );
};

export default Events;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(33, 35, 37, 1);
  scroll-margin-top: -10px;
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

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
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

const EventCardWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventCard = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventNameWrapper = styled.div`
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

const EventName = styled.div`
  position: relative;
  padding: 32px;
  font-size: 36px;
  color: white;
  text-shadow: -3px 0 ${Colors.brightBlue}, 0 3px ${Colors.brightBlue},
    3px 0 ${Colors.brightBlue}, 0 -3px ${Colors.brightBlue};
  width: 100%;
  height: 100%;
`;

const EventDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`;

const EventDesc = styled.div`
  color: white;
  font-family: Inter;
  font-size: 14px;
  line-height: 24px;
`;

const EventActions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 18px;
  margin-right: 4px;
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
