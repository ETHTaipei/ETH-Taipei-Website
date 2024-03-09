import { StaticImageData } from "next/image";

import martinet from "@/public/images/Martinet.png";
import nic from "@/public/images/Nic.png";
import ZacL from "@/public/images/ZacL.png";
import stefan from "@/public/images/stefan.png";

export type EventType = "hackathon" | "conference";

export type AgendaType = {
  time: string;
  event: string;
  duration: string;
  speaker?: string;
  title?: string;
  src?: StaticImageData;
};

export const dates = {
  hackathon: [22, 23, 24],
  conference: [21, 22],
};

export const hackathonAgendas: { [key: number]: AgendaType[] } = {
  22: [
    { time: "02:30pm", duration: "35 mins", event: "Registration/Check in" },
    {
      time: "03:05pm",
      duration: "5 mins",
      event: "ETHTaipei Introduction",
      speaker: "Martinet",
      title: "Head of Developer Relations, Quantstamp / ETHTaipei Co-organizer",
      src: martinet,
    },
    {
      time: "03:10pm",
      duration: "30 mins",
      event: "Workshop and Opening Talk: Gnosis",
    },
    {
      time: "03:40pm",
      duration: "30 mins",
      event:
        "Workshop: Furucombo - Unleashing Composable Power with Furucombo's Composable Router",
    },
    {
      time: "04:10pm",
      duration: "30 mins",
      event: "Workshop: Blocto - Blocto's EVM SDK",
    },
    {
      time: "04:40pm",
      duration: "30 mins",
      event: "Workshop: PSE",
    },
    {
      time: "05:10pm",
      duration: "30 mins",
      event: "Workshop: Consensys",
    },
    {
      time: "05:40pm",
      duration: "7 hrs",
      event: "Hack Time. Venue open overnight.",
    },
  ],
  23: [
    { time: "10:00am", duration: "1.5 hrs", event: "Hack Time" },
    { time: "11:30am", duration: "30 mins", event: "BREAK / LUNCH" },
    { time: "12:00pm", duration: "3 hrs", event: "Mentor Sessions" },
    { time: "03:00pm", duration: "6 hrs", event: "Hack Time" },
    { time: "09:00pm", duration: "1 hr", event: "Demo Day Sign up Deadline" },
    {
      time: "10:00pm",
      duration: "2 hrs",
      event: "Hack Time. Venue open overnight.",
    },
  ],

  24: [
    { time: "10:00am", duration: "1.5 hrs", event: "Hack Time" },
    {
      time: "11:30pm",
      duration: "30 mins",
      event: "12:00 Project Submission Deadline",
    },
    { time: "12:00pm", duration: "1 hr", event: "LUNCH / Demo Day Check-in" },
    { time: "01:00pm", duration: "5 mins", event: "Demo Day Opening" },
    { time: "01:05pm", duration: "4 hrs", event: "Demo Day" },

    { time: "05:00pm", duration: "2 hrs", event: "Hackathon Closing Party" },
  ],
};

export const conferenceAgendas: {
  [key: number]: {
    time: string;
    trackA?: {
      name: string;
      company: string;
      topic: string;
      src?: StaticImageData | null;
      duration: string;
      panelOrganizations?: string[];
      panelHost?: string;
      panelists?: string[];
    };
    trackB?: {
      name: string;
      company: string;
      topic: string;
      src?: StaticImageData | null;
      duration: string;
      panelOrganizations?: string[];
      panelHost?: string;
      panelists?: string[];
    };
    workshop?: {
      holder: string;
      title: string;
      duration: string;
      prerequisite?: string;
      prerequisiteLink?: string;
    };
  }[];
} = {
  21: [
    {
      time: "11:00am",
      trackA: {
        name: "Panel",
        company: "",
        topic: "Restaking Panel",
        duration: "30 mins",
      },
      trackB: {
        name: "Adrian Li",
        company: "PSE",
        topic:
          "Navigating the ZKP Learning Curve: Bottom-Up vs. Top-Down Approaches",
        duration: "30 mins",
      },
    },
    {
      time: "11:30am",
      trackA: {
        name: "Panel",
        company: "",
        topic: "Restaking Panel",
        duration: "30 mins",
      },
      trackB: {
        name: "Soowon Jeong",
        company: "PSE",
        topic: "zk Dev tooling",
        duration: "30 mins",
      },
    },
    {
      time: "12:00pm",
      trackA: {
        name: "",
        company: "",
        topic: "Lunch Break",
        src: ZacL,
        duration: "1.5 hr",
      },
      trackB: {
        name: "",
        company: "",
        topic: "Lunch Break",
        src: null,
        duration: "1.5 hr",
      },
    },
    {
      time: "01:30pm",
      trackA: {
        name: "Stefan",
        company: "Gnosis Pay",
        topic: "TBD",
        src: stefan,
        duration: "30 mins",
      },
      trackB: {
        name: "Dohoon Kim",
        company: "PSE",
        topic: "State of lookup arguments and benchmarks",
        duration: "30 mins",
      },
      workshop: {
        holder: "Vivian",
        title: "Build a web3 anonymous social media with UniRep",
        duration: "1:30pm-3:30pm (2 hrs)",
      },
    },
    {
      time: "2:00pm",
      trackA: {
        name: "Nic Lin",
        company: "imToken",
        topic: "TBD",
        src: nic,
        duration: "1.5 hr",
      },
      trackB: {
        name: "Nam Ngo",
        company: "PSE",
        topic: "Introduction to circom-2PC",
        duration: "30 mins",
      },
    },
    {
      time: "2:30pm",
      trackA: {
        name: "Martin Derka",
        company: "Zircuit",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Janmajaya Mall",
        company: "Gauss Labs",
        topic:
          "Multi-party FHE - new era of private & user-centric applications",
        duration: "30 mins",
      },
    },
    {
      time: "3:00pm",
      trackA: {
        name: "Panel",
        company: "",
        topic: "L2 Panel",
        duration: "40 mins",
      },
      trackB: {
        name: "Christopher Tam",
        company: "BTQ",
        topic: "Future-Proofing Ethereum",
        duration: "30 mins",
      },
    },
    {
      time: "03:30pm",
      trackA: {
        name: "🧋",
        company: "",
        topic: "Break",
        duration: "30 mins",
      },
      trackB: {
        name: "🧋",
        company: "",
        topic: "Break",
        duration: "30 mins",
      },
    },
    {
      time: "04:00pm",
      trackA: {
        name: "Tony Valentine",
        company: "Dedaub",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Doris",
        company: "PSE",
        topic: "On-chain Voting System",
        duration: "30 mins",
      },
      workshop: {
        holder: "MPC + FHE",
        title: "MPC + FHE",
        duration: "4:00pm-6:00pm (2 hrs)",
      },
    },
    {
      time: "04:30pm",
      trackA: {
        name: "Tim Pechersky",
        company: "OpenZeppelin",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Marcin Kazmierczak",
        company: "RedStone Oracles",
        topic:
          "The Future Usage of ZK Tech by Oracles: 5 Conclusions of Our Research",
        duration: "30 mins",
      },
    },
    {
      time: "05:00pm",
      trackA: {
        name: "Martinet",
        company: "QuantStamp",
        topic: "TBD",
        src: martinet,
        duration: "30 mins",
      },
      trackB: {
        name: "Mary Tr",
        company: "Orochi Network",
        topic: "Turning ZKP Potential into Real-World Solutions",
        duration: "30 mins",
      },
    },
    {
      time: "05:30pm",
      trackA: {
        name: "Rahul Saxena",
        company: "ZkSync",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Jobin Ayathil",
        company: "Ten",
        topic: "Building Encrypted DApps",
        duration: "30 mins",
      },
    },
  ],
  22: [
    {
      time: "10:00am",
      trackA: {
        name: "Marius van der Wijden",
        company: "Geth",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "OpSec",
        company: "OpSec",
        topic: "TBD",
        duration: "30 mins",
      },
      workshop: {
        holder: "Myra",
        title: "Creating distributed validators in the wild",
        duration: "2 hrs",
      },
    },
    {
      time: "10:30am",
      trackA: {
        name: "Guillaume Ballet",
        company: "Geth",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Yisi Liu",
        company: "Mask Network",
        topic: "[re]Decentralize Social Network with Next.ID and IPFS",
        duration: "30 mins",
      },
    },
    {
      time: "11:00am",
      trackA: {
        name: "L1 Panel",
        company: "",
        topic: "L1 Panel",
        duration: "30 mins",
      },
      trackB: {
        name: "Marco Lau",
        company: "Otterlayer",
        topic: "web3 security: Incident Responses for DeFi retail users",
        duration: "30 mins",
      },
    },
    {
      time: "11:30am",
      trackA: {
        name: "L1 Panel",
        company: "",
        topic: "L1 Panel",
        duration: "30 mins",
      },
      trackB: {
        name: "YoungHwi Cho",
        company: "Mint Club",
        topic: "Bonding Curve Token Model and Its Impact on SocialFi",
        duration: "30 mins",
      },
    },
    {
      time: "12:00pm",
      trackA: {
        name: "",
        company: "",
        topic: "Lunch Break",
        duration: "1 hrs",
      },
      trackB: {
        name: "",
        company: "",
        topic: "Lunch Break",
        duration: "1 hrs",
      },
    },
    {
      time: "01:00pm",
      trackA: {
        name: "TBD",
        company: "Polkadot",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "shora",
        company: "PixelLAW",
        topic: "The Easiest Way to Build Fully On-Chain Games",
        duration: "30 mins",
      },
    },
    {
      time: "01:30pm",
      trackA: {
        name: "Cathie",
        company: "Ora Protocol",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "guiltygyoza",
        company: "Topology",
        topic: "Introducing RAM to the world computer",
        duration: "30 mins",
      },
    },
    {
      time: "02:00pm",
      trackA: {
        name: "Shao-Kang Lee",
        company: "Perpetual",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "oskarth",
        company: "Independent Researcher",
        topic: "Mopro: Client-side proving on mobile made easy",
        duration: "30 mins",
      },
    },
    {
      time: "02:30pm",
      trackA: {
        name: "Indigo & Fully",
        company: "Baseline",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Danish Arora",
        company: "Waku",
        topic: "Bridging the Gap in Decentralized Communications with Waku",
        duration: "30 mins",
      },
    },
    {
      time: "03:00pm",
      trackA: {
        name: "Random Defi Panel",
        company: "",
        topic: "Random Defi Panel",
        duration: "40 mins",
      },
      trackB: {
        name: "Ventali Tan",
        company: "Lita",
        topic:
          "Plonky3 & Valida: Pushing the Performance and Usability of Zero Knowledge Proof",
        duration: "30 mins",
      },
    },
    {
      time: "03:30pm",
      trackA: {
        name: "🧋",
        company: "",
        topic: "Break",
        duration: "30 mins",
      },
      trackB: {
        name: "🧋",
        company: "",
        topic: "Break",
        duration: "30 mins",
      },
    },
    {
      time: "04:00pm",
      trackA: {
        name: "Josh Guha",
        company: "Gyroscope",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Lane Rettig",
        company: "Spacemash",
        topic:
          "Decentralization is Hard: Towards the world's most decentralized blockchain",
        duration: "30 mins",
      },
    },
    {
      time: "04:30pm",
      trackA: {
        name: "Terence An",
        company: "Itos Finance",
        topic: "TBD",
        duration: "30 mins",
      },
      trackB: {
        name: "Soorya",
        company: "Hyperlane",
        topic: "Exploring Modular world",
        duration: "30 mins",
      },
    },
  ],
};
