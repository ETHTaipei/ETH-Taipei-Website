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

const Agendas = () => {
  const [type, setType] = useState<EventType>("conference");
  const [date, setDate] = useState<number>(dates[type][0]);

  // const isTypeHackathon = type === "hackathon";
  const isTypeConference = type === "conference";
  const isTypeSideEvent = type === "sideEvent";
  const isShowingVitalik = isTypeConference && date === 21;

  return (
    <Container id="info">
      <Title>{t.navs.agenda}</Title>
      <EventSwitcher type={type} setType={setType} setDate={setDate} />
      <DateSwitcher type={type} date={date} setDate={setDate} />
      {/* {isTypeHackathon && <HackathonTable date={date} />} */}
      {isShowingVitalik && <VitalikTable />}
      {isTypeConference && <ConferenceTable date={date} />}
      {isTypeSideEvent && <SideEventTable date={date} />}
    </Container>
  );
};

export default Agendas;

const Container = styled.div`
  width: 100%;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 60px 24px 60px 24px;
  }
`;

const Title = styled.h2`
  font-family: "Rammetto One";
  font-size: 35px;
  line-height: 32px;
  font-weight: bold;
  color: ${Colors.pennBlue};
  margin-bottom: 50px;
`;
