import { StaticImageData } from "next/image";

export type EventType = "hackathon" | "conference" | "sideEvent";

export const dates = {
  hackathon: [22, 23, 24],
  conference: [21, 22],
  sideEvent: [21, 22],
};

export type HackathonItemType = {
  topic: string;
  duration: string;
  speaker?: string;
  title?: string;
  src?: StaticImageData;
};

export type HackathonAgenda = {
  time: string;
  trackA?: HackathonItemType;
  trackB?: HackathonItemType;
};

export type ConferenceItemType = {
  name: string;
  company: string;
  topic: string;
  src?: StaticImageData | null | string;
  duration: string;
  panelOrganizations?: string[];
  panelHost?: string;
  panelists?: string[];
};

export type WorkshopItemType = {
  holder: string;
  title: string;
  duration: string;
  prerequisite?: string;
  prerequisiteLink?: string;
};

export type ConferenceAgenda = {
  time: string;
  trackA?: ConferenceItemType;
  trackB?: ConferenceItemType;
  workshop?: WorkshopItemType;
};

export type SideEventItemType = {
  topic: string;
  duration: string;
};

export type SideEventAgenda = {
  time: string;
  trackA: SideEventItemType;
};

export const sideEventAgendas: {
  [key: number]: SideEventAgenda[];
} = {
  21: [
    {
      time: "3:30pm",
      trackA: {
        topic: "OKX Happy Hour @ The terrace next to Building M",
        duration: "2.5 hrs (3:30pm-6:00pm)",
      },
    },
    {
      time: "6:30pm",
      trackA: {
        topic: "IoTeX side event @ Building I",
        duration: "3 hrs (6:30pm-9:30pm)",
      },
    },
  ],
  22: [
    {
      time: "1:00pm",
      trackA: {
        topic: "Tobi panel @ Building G",
        duration: "1 hr (1:00pm-2:00pm)",
      },
    },
    {
      time: "3:30pm",
      trackA: {
        topic: "Orderly Network Happy Hour @ Building I",
        duration: "2.5 hrs (3:30pm-6:00pm)",
      },
    },
    {
      time: "6:30pm",
      trackA: {
        topic: "imToken side event @ Building G",
        duration: "3 hrs (6:30pm-9:30pm)",
      },
    },
  ],
};

export const hackathonAgendas: { [key: number]: HackathonAgenda[] } = {
  22: [
    {
      time: "6:30pm",
      trackA: {
        topic: "Opening Ceremony",
        duration: "1 hr",
      },
    },
    {
      time: "7:30pm",
      trackA: {
        topic: "OpSec Workshop",
        duration: "30 mins",
      },
      trackB: {
        topic: "Mint Club Workshop",
        duration: "30 mins",
      },
    },
    {
      time: "8:00pm",
      trackA: {
        topic: "Dyson Workshop",
        duration: "30 mins",
      },
      trackB: {
        topic: "Ten Protocol Workshop",
        duration: "30 mins",
      },
    },
    {
      time: "8:30pm",
      trackA: {
        topic: "OP Labs Workshop",
        duration: "30 mins",
      },
      trackB: {
        topic: "Morpheus Labs Workshop",
        duration: "30 mins",
      },
    },
    {
      time: "9:00pm",
      trackA: {
        topic: "PSE MACI Workshop",
        duration: "30 mins",
      },
    },
    {
      time: "9:30pm",
      trackA: {
        topic: "Hack Time!!! (Building M will CLOSE at 22:00)",
        duration: "30 mins",
      },
      trackB: {
        topic: "Hack Time!!! (Building F is open 24 hours)",
        duration: "2.5 hrs",
      },
    },
  ],
  23: [
    {
      time: "0:00am",
      trackB: {
        topic: "Hack Time!!! (Building F is open 24 hours)",
        duration: "24 hrs",
      },
    },
    {
      time: "10:00am",
      trackA: {
        topic: "Hack Time!!! (Building M will CLOSE at 10:00pm)",
        duration: "12 hrs",
      },
    },
    {
      time: "11:00am",
      trackA: {
        topic: "Mentor Time!!! (Ends at 6:00pm)",
        duration: "7 hrs",
      },
      trackB: {
        topic: "Mentor Time!!! (Ends at 6:00pm)",
        duration: "7 hrs",
      },
    },
    {
      time: "7:30pm",
      trackA: {
        topic: "Demo Day Registration Due",
        duration: "",
      },
      trackB: {
        topic: "Demo Day Registration Due",
        duration: "",
      },
    },
    {
      time: "9:30pm",
      trackA: {
        topic: "Announce Demo Day Team through Discord",
        duration: "",
      },
      trackB: {
        topic: "Announce Demo Day Team through Discord",
        duration: "",
      },
    },
  ],
  24: [
    {
      time: "0:00am",
      trackB: {
        topic: "Hack Time!!!",
        duration: "12 hrs",
      },
    },
    {
      time: "10:00am",
      trackA: {
        topic: "Day3 Opening",
        duration: "30 mins",
      },
    },
    {
      time: "10:30am",
      trackA: {
        topic: "Hack Time!!!",
        duration: "1.5 hrs",
      },
    },
    {
      time: "12:00pm",
      trackA: {
        topic: "Project Submission Deadline",
        duration: "",
      },
      trackB: {
        topic: "Project Submission Deadline",
        duration: "",
      },
    },
    {
      time: "1:30pm",
      trackA: {
        topic: "Hackathon Wrap-up",
        duration: "30 mins",
      },
    },
    {
      time: "2:00pm",
      trackA: {
        topic: "Demo Day",
        duration: "2 hrs",
      },
    },
    {
      time: "4:00pm",
      trackA: {
        topic: "Demo Day Closing Ceremony",
        duration: "30 mins",
      },
    },
    {
      time: "4:30pm",
      trackB: {
        topic: "Closing Party",
        duration: "",
      },
    },
  ],
};
