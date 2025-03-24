import Image from "next/image";
import { EventType, dates } from "@/public/constant/agendas";
import t from "@/public/constant/content";
import Colors from "@/styles/colors";
import { useState } from "react";
import styled from "styled-components";
import ConferenceTable from "./ConferenceTable";
import DateSwitcher from "./DateSwitcher";
import EventSwitcher from "./EventSwitcher";
// import HackathonTable from "./HackathonTable";
import SideEventTable from "./SideEventTable";
import VitalikTable from "./VitalikTable";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";

const Agendas = () => {
  const [type, setType] = useState<EventType>("conference");
  const [date, setDate] = useState<number>(dates[type][0]);

  // const isTypeHackathon = type === "hackathon";
  const isTypeConference = type === "conference";
  const isTypeSideEvent = type === "sideEvent";
  const isShowingVitalik = isTypeConference && date === 1;

  return (
    <Container id="info">
      <Title>
        <Image
          src="/images/icons/moon-blocks.svg"
          alt="Contributors icon"
          width={35}
          height={35}
          style={{ marginRight: 12, verticalAlign: "bottom" }}
        />
        {t.navs.agenda}
      </Title>
      {/* <EventSwitcher type={type} setType={setType} setDate={setDate} /> */}
      <DateSwitcher type={type} date={date} setDate={setDate} />
      {/* {isTypeHackathon && <HackathonTable date={date} />} */}
      {isShowingVitalik && <VitalikTable />}
      {isTypeConference && <ConferenceTable date={date} />}
      {/* {isTypeSideEvent && <SideEventTable date={date} />} */}
    </Container>
  );
};

export default Agendas;

const Container = styled.div`
  ${GrayGridBackgroundStyles}
  width: 100%;
  padding: 90px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 35px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.brightBlue};
  margin-bottom: 80px;
`;
