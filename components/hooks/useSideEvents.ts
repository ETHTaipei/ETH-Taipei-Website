// "use client"

import {
  SideEventAgenda as SideEventAgendaUI,
  SideEventItemType as SideEventItemTypeUI,
} from "@/public/constant/agendas";
import { gql, useQuery } from "@apollo/client";

export type SideEventType = {
  time: string;
  topic: string;
  duration: string;
};

const query = gql`
  query sideEvents {
    sideEvents(first: 100, orderBy: time_ASC) {
      time
      topic
      duration
    }
  }
`;

export const useSideEvents = () => {
  const { data } = useQuery<{ sideEvents: SideEventType[] }>(query);

  const sideEvents = data?.sideEvents || [];

  const factory = new SideEventAgendaFactory(sideEvents);
  const agenda = factory.getSideEventAgenda();

  return agenda;
};

class SideEventAgendaFactory {
  sideEvents: SideEventType[];
  agenda: { [key: number]: SideEventAgendaUI[] } = {};
  constructor(sideEvents: SideEventType[]) {
    this.sideEvents = sideEvents;
  }

  setAgendaDate() {
    this.sideEvents.forEach((sideEvent) => {
      const d = this.getDate(sideEvent.time);
      this.agenda[d.getDate()] = [];
    });
  }

  setSideEvents() {
    this.sideEvents.forEach((sideEvent) => {
      const d = this.getDate(sideEvent.time);
      const date = d.getDate();
      const time = this.getTimeStr(d);
      const obj: SideEventItemTypeUI = {
        topic: sideEvent.topic,
        duration: sideEvent.duration,
      };
      this.agenda[date].push({
        time,
        trackA: obj,
      });
    });
  }

  getSideEventAgenda() {
    this.setAgendaDate();
    this.setSideEvents();
    return this.agenda;
  }

  getDate(str: string) {
    return new Date(str);
  }

  getTimeStr(date: Date) {
    let hours = date.getHours();
    let unit = "am";
    if (hours > 12) {
      hours -= 12;
      unit = "pm";
    }
    if (hours === 12) {
      unit = "pm";
    }
    const str = `${hours.toString()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}${unit}`;
    return str;
  }
}
