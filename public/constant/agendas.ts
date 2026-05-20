import { StaticImageData } from "next/image";

export type EventType = "conference" | "sideEvent";

export const dates = {
  conference: [13, 14, 15],
  sideEvent: [13, 14, 15],
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
} = {};

export const hackathonAgendas: { [key: number]: HackathonAgenda[] } = {};
