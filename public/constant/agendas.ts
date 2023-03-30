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

export const hackathonAgendas: { [key: number]: AgendaType[] } = {
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
};

export const conferenceAgendas: {
  [key: number]: {
    track: string;
    speakers: { name: string; company: string }[];
  }[];
} = {
  24: [
    {
      track: "DeFi / Layer 2 Track",
      speakers: [
        { name: "Tom soong", company: "Zomma" },
        { name: "Ibe", company: "Predy Finance" },
        { name: "Gauthem", company: "Polynomial" },
        { name: "Daniele Ugolini", company: "Rysk Finance" },
        { name: "Deyeon Kim", company: "Pods Finance" },
        { name: "Jake", company: "Gauntlet" },
        { name: "Zac L", company: "Suberra" },
        { name: "Yenwen", company: "Perpetual Protocol" },
      ],
    },
    {
      track: "ZK / Client / Security Track",
      speakers: [
        { name: "Hsiao-Wei Wang", company: "Ethereum Foundation" },
        { name: "Dapplion", company: "ChainSafe" },
        { name: "Mary Liu", company: "Celestia" },
        { name: "Vivian", company: "Ethereum Foundation" },
        { name: "Cathie", company: "" },
        { name: "Balal Khan", company: "ZKEX" },
        { name: "Chris Tam", company: "BTQ" },
        { name: "Nuno Loureiro", company: "Ethereum Foundation" },
        { name: "Guru", company: "Status" },
        { name: "Akanshu Jain", company: "brahma" },
        { name: "YoungHwi Cho", company: "Hunt Town" },
      ],
    },
  ],
  25: [
    {
      track: "DeFi / Layer 2 Track",
      speakers: [
        { name: "ZD Hu", company: "Furucombo" },
        { name: "Anderson Chen", company: "Diamond Protocol" },
        { name: "Agrim Nagrani", company: "Graph Advocate" },
        { name: "Sophie Liu", company: "EigenPhi" },
        { name: "Guiltygyoza", company: "Topology" },
      ],
    },
    {
      track: "ZK / Client / Security Track",
      speakers: [
        { name: "Wanseob Lim", company: "Ethereum Foundation" },
        { name: "Savio", company: "Aztec" },
        { name: "Shotaro Granzier-Nakajima", company: "Kleros" },
        { name: "Alfred", company: "imToken" },
        { name: "I-Hung Hsu", company: "AMIS" },
        { name: "Nic", company: "imToken" },
        { name: "Martinet", company: "Quantstamp" },
        { name: "Jobin Babu Ayathil", company: "Obscuro" },
      ],
    },
  ],
};
