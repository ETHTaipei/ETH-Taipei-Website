import { StaticImageData } from "next/image";

import martinet from "@/public/images/Martinet.png";
import nic from "@/public/images/Nic.png";

export type EventType = "hackathon" | "conference";

export const dates = {
  hackathon: [22, 23, 24],
  conference: [21, 22],
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

export const hackathonAgendas: { [key: number]: HackathonAgenda[] } = {
  22: [
    {
      time: "6:30pm",
      trackA: {
        topic: "Opening",
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
        topic: "Hack Time.",
        duration: "9:30pm-0:00am",
      },
      trackB: {
        topic: "Hack Time.",
        duration: "9:30pm-12:00pm",
      },
    },
  ],
  23: [
    {
      time: "0:00am",
      trackA: {
        topic: "Hack Time.",
        duration: "24 hrs",
      },
      trackB: {
        topic: "Hack Time.",
        duration: "24 hrs",
      },
    },
  ],
  24: [
    {
      time: "12:00pm",
      trackA: {
        topic: "Project Submission Deadline",
        duration: "1 hr",
      },
      trackB: {
        topic: "Project Submission Deadline",
        duration: "1hr",
      },
    },
    {
      time: "1:00pm",
      trackA: {
        topic: "Demo Day Opening",
        duration: "1 hr",
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
        duration: "4:30pm",
      },
    },
  ],
};

export const conferenceAgendas: {
  [key: number]: ConferenceAgenda[];
} = {
  21: [
    {
      time: "11:00am",
      trackA: {
        name: "",
        company: "",
        topic: "Restaking Panel",
        duration: "1 hr (11:00am-12:00pm)",
        panelHost: "Evan Hsu (@ Aves Lair Accelerator)",
        panelists: [
          "Matthew Liu (@ Origin Protocol)",
          "Mischa0x (@ VaultCraft)",
          "Filipe Gonçalves (@ Tagus Labs)",
          "Maja (@ RedStone Oracles)",
        ],
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
        name: "🧋",
        company: "",
        topic: "Lunch Break",
        duration: "1 hr",
      },
      trackB: {
        name: "🧋",
        company: "",
        topic: "Lunch Break",
        duration: "1 hr",
      },
    },
    {
      time: "01:30pm",
      trackA: {
        name: "Stefan",
        company: "Gnosis Pay",
        topic: "Replacing CEXs one step at a time",
        duration: "30 mins",
      },
      trackB: {
        name: "Dohoon Kim",
        company: "PSE",
        topic:
          "Zafny, framework for writing formally verified zero-knowledge circuit",
        duration: "30 mins",
      },
      workshop: {
        holder: "Vivian",
        title: "Build a web3 anonymous social media with UniRep",
        duration: "2 hrs (1:30pm-3:30pm)",
      },
    },
    {
      time: "2:00pm",
      trackA: {
        name: "Nic Lin",
        company: "imToken",
        topic: "What is OFA and why should you care",
        src: nic,
        duration: "30 mins",
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
        topic:
          "Challenges of Building an EVM Equivalent ZK Rollup on the OP-Stack",
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
        name: "",
        company: "",
        topic: "L2 Panel",
        duration: "40 mins",
        panelHost: "Queenie (@ imToken Venture)",
        panelists: [
          "Vitalik Buterin (@ EF Research)",
          "Jordi Baylina (@ Polygon)",
          "Martin Derka (@ Zircuit)",
          "Yuan Su (@ Metis)",
          "Karl Floersch (@ OP Labs, Optimism Cofounder)",
        ],
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
        topic: "How to predict the impact of EVM upgrades",
        duration: "30 mins",
      },
      trackB: {
        name: "Doris",
        company: "PSE",
        topic: "On-chain Voting System",
        duration: "30 mins",
      },
      workshop: {
        holder: "PSE",
        title: "",
        duration: "2 hrs (4:00pm-6:00pm)",
      },
    },
    {
      time: "04:30pm",
      trackA: {
        name: "Tim Pechersky",
        company: "OpenZeppelin",
        topic: "Vulnerability management: Zero-Day, Today & Tomorrow",
        duration: "30 mins",
      },
    },
    {
      time: "05:00pm",
      trackA: {
        name: "Martinet",
        company: "QuantStamp",
        topic: "Detecting pitfalls in ERC4337 implementation",
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
        topic: "Threat Modelling for Complex Systems in web3",
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
        topic:
          "Don't let your friends do MEV - How MEV infrastructure makes Ethereum more brittle",
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
        duration: "2 hrs (10:00am-12:00pm)",
      },
    },
    {
      time: "10:30am",
      trackA: {
        name: "Guillaume Ballet",
        company: "Geth",
        topic: "Recipes for a Stateless Ethereum",
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
        name: "",
        company: "",
        topic: "Ethereum L1 R&D Panel",
        duration: "1 hr (11:00-12:00pm)",
        panelHost: "Hsiao-Wei Wang (@ EF Research)",
        panelists: [
          "Vitalik Buterin (@ EF Research)",
          "Marius van der Wijden (@ EF Geth)",
          "Guillaume Ballet (@ EF Geth)",
          "Matthew Keil (@ Lodestar, ChainSafe)",
        ],
      },
      trackB: {
        name: "Marco Lau",
        company: "LazyOtter",
        topic: "web3 security: Incident Responses for DeFi retail users",
        duration: "30 mins",
      },
    },
    {
      time: "11:30am",
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
        name: "🧋",
        company: "",
        topic: "Lunch Break",
        duration: "1 hr",
      },
      trackB: {
        name: "🧋",
        company: "",
        topic: "Lunch Break",
        duration: "1 hr",
      },
    },
    {
      time: "01:00pm",
      trackA: {
        name: "Seraya Takahashi",
        company: "Polkadot",
        topic: "Polkadot in 30 minutes",
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
        topic: "Tokenizing Open-Source AI’s Future",
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
        topic: "Smart Liquidity Framework for On-Chain Perp",
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
        topic: "Baseline: An Automated Tokenomics Engine",
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
        name: "",
        company: "",
        topic: "Defi Panel",
        duration: "40 mins",
        panelHost: "Host: Jun (@ Sora Ventures)",
        panelists: [
          "Tom Soong (@ Zomma)",
          "Jerry Li (@ Term Structure)",
          "Yenwen Feng (@ Perpetual)",
          "Ran Yi (@ Orderly Network)",
          "Jason Lau (@ OKX)",
        ],
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
        topic: "Elliptical Eccentricity for Capital Efficiency",
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
        topic: "DeFi Calculus 102: Building Derivatives",
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
