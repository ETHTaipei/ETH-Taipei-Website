export type EventType = "hackathon" | "conference";

export type AgendaType = {
  type: EventType;
  date: number;
  time: string;
  event: string;
};

export const dates = {
  hackathon: [21, 22, 23],
  conference: [24, 25],
};

export const agendas: { [key: number]: AgendaType[] } = {
  21: [],
  22: [],
  23: [],
  24: [
    { type: "conference", date: 24, time: "Topic 1", event: "ZK + Security" },
    { type: "conference", date: 24, time: "Topic 2", event: "Defi + Layer2" },
  ],
  25: [
    { type: "conference", date: 25, time: "Topic 1", event: "ZK + Security" },
    { type: "conference", date: 25, time: "Topic 2", event: "Defi + Layer2" },
  ],
};
