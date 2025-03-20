import { gql, useQuery } from "@apollo/client";
import {
  ConferenceAgenda as ConferenceAgendaUI,
  ConferenceItemType as ConferenceItemTypeUI,
  WorkshopItemType as WorkshopItemTypeUI,
} from "../../public/constant/agendas";

export type Speaker = {
  name: string;
  company: string;
  img: string;
};

export type Panel = {
  panelOrganizations: string[];
  panelHost: string;
  panelists: string[];
};

export type ConferenceItemType = {
  time: string;
  speaker?: Speaker;
  topic: string;
  duration: string;
  panel?: Panel;
  track: string;
};

export type WorkshopItemType = {
  time: string;
  holder: string;
  title: string;
  duration: string;
  prerequisite?: string;
  prerequisiteLink?: string;
};

export const CONFERENCE_QUERY = gql`
  query Conferences {
    conferences(first: 100, orderBy: time_ASC) {
      time
      topic
      duration
      speaker {
        name
        company
        img
      }
      panel {
        panelOrganizations
        panelHost
        panelists
      }
      track
    }
  }
`;

const queryWorkshops = gql`
  query Workshops {
    workshops(first: 100) {
      time
      holder
      title
      duration
      prerequisite
      prerequisiteLink
    }
  }
`;

export const useConferences = () => {
  const { data: conferences } = useQuery<{ conferences: ConferenceItemType[] }>(
    CONFERENCE_QUERY
  );
  const { data: workshops } = useQuery<{ workshops: WorkshopItemType[] }>(
    queryWorkshops
  );
  const factory = new ConferenceAgendaFactory(
    conferences?.conferences || [],
    workshops?.workshops || []
  );
  const agenda = factory.getConferenceAgenda();
  return agenda;
};

class ConferenceAgendaFactory {
  conferences: ConferenceItemType[];
  workshops: WorkshopItemType[];
  agenda: { [key: number]: ConferenceAgendaUI[] } = {};
  constructor(
    conferences: ConferenceItemType[],
    workshops: WorkshopItemType[]
  ) {
    this.conferences = conferences;
    this.workshops = workshops;
  }

  setAgendaDate() {
    this.conferences.forEach((conference) => {
      const d = this.getDate(conference.time);
      this.agenda[d.getDate()] = [];
    });
    this.workshops.forEach((workshop) => {
      const d = this.getDate(workshop.time);
      this.agenda[d.getDate()] = [];
    });
  }

  setConference() {
    this.conferences.forEach((conference) => {
      const d = this.getDate(conference.time);
      const date = d.getDate();
      const time = this.getTimeStr(d);
      const obj: ConferenceItemTypeUI = {
        name: conference.speaker?.name || "",
        company: conference.speaker?.company || "",
        topic: conference.topic,
        src: conference.speaker?.img || "",
        duration: conference.duration,
        panelOrganizations: conference.panel?.panelOrganizations,
        panelHost: conference.panel?.panelHost,
        panelists: conference.panel?.panelists,
      };
      this.agenda[date].push({
        time,
        trackA: conference.track === "A" ? obj : undefined,
        trackB: conference.track === "B" ? obj : undefined,
      });
    });
  }

  setWorkshop() {
    this.workshops.forEach((workshop) => {
      const d = this.getDate(workshop.time);
      const date = d.getDate();
      const time = this.getTimeStr(d);
      const obj: WorkshopItemTypeUI = {
        holder: workshop.holder,
        title: workshop.title,
        duration: workshop.duration,
        prerequisite: workshop.prerequisite,
        prerequisiteLink: workshop.prerequisiteLink,
      };
      this.agenda[date].push({
        time,
        workshop: obj,
      });
    });
  }

  aggregateAgenda() {
    const keys = Object.keys(this.agenda);
    keys.forEach((key) => {
      const arr = this.agenda[Number(key)];
      const map = arr.reduce((acc, obj) => {
        const { time, ...rest } = obj;
        if (!acc[time]) {
          acc[time] = { time };
        }
        if (rest.trackA) {
          acc[time]["trackA"] = Object.assign({}, rest.trackA);
        }
        if (rest.trackB) {
          acc[time]["trackB"] = Object.assign({}, rest.trackB);
        }
        if (rest.workshop) {
          acc[time]["workshop"] = Object.assign({}, rest.workshop);
        }
        return acc;
      }, {} as Record<string, any>);
      const mergedArray = Object.values(map);
      this.agenda[Number(key)] = mergedArray;
    });
  }

  getConferenceAgenda() {
    this.setAgendaDate();
    this.setConference();
    this.setWorkshop();
    this.aggregateAgenda();
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
