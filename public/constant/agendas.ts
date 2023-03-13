export type EventType = "hackathon" | "conference";

export type AgendaType = {
  time: string;
  event: string;
  duration: string;
};

export const dates = {
  hackathon: [21, 22, 23],
  conference: [24, 25],
};

export const agendas: { [key: number]: AgendaType[] } = {
  21: [
    { time: "03:00pm", duration: "4 hrs", event: "Pre-workshop" },
    {
      time: "07:00pm",
      duration: "30 mins",
      event: "Opening ceremony and bounty sponsor talks",
    },
    { time: "07:30pm", duration: "30 mins", event: "Team Formation Workshop" },
    { time: "08:00pm", duration: "", event: "Kick Off" },
    { time: "08:00pm", duration: "4 hrs", event: "Hacking" },
  ],
  22: [{ time: "00:00am", duration: "24 hrs", event: "Hacking" }],
  23: [
    { time: "00:00am", duration: "12 hrs", event: "Hacking" },
    { time: "12:00pm", duration: "", event: "Submit" },
    { time: "01:00pm", duration: "2 hrs", event: "Judging Time" },
    {
      time: "03:00pm",
      duration: "2 hrs",
      event: "Winner Announcement & Demo Day",
    },
    { time: "05:00pm", duration: "1 hr", event: "Hackathon Closing Party" },
  ],
  24: [
    { time: "Ethereum Track", duration: "", event: "ZK + Ethereum Core" },
    { time: "Application Track", duration: "", event: "Defi + Layer2" },
  ],
  25: [
    { time: "Ethereum Track", duration: "", event: "ZK + Security" },
    { time: "Application Track", duration: "", event: "Defi - Derivatives" },
  ],
};
