import Image from "next/image";
import { EventType, dates } from "@/public/constant/agendas";
import t from "@/public/constant/content";
import { FLAGS } from "@/public/constant/flags";
import Colors from "@/styles/colors";
import { useState } from "react";
import styled from "styled-components";
import ConferenceTable from "./ConferenceTable";
import DateSwitcher from "./DateSwitcher";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";

const Agendas = () => {
  const [type, setType] = useState<EventType>("conference");
  const [date, setDate] = useState<number>(dates[type][0]);

  const isTypeConference = type === "conference";

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
      {FLAGS.showAgenda ? (
        <>
          <DateSwitcher type={type} date={date} setDate={setDate} />
          {isTypeConference && <ConferenceTable date={date} />}
        </>
      ) : (
        <Placeholder>The {dates.conference.length}-day agenda will be announced closer to the event. Stay tuned!</Placeholder>
      )}
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

const Placeholder = styled.p`
  color: white;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
`;
