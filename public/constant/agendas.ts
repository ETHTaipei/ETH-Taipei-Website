import { StaticImageData } from "next/image";

import ZacL from "@/public/images/ZacL.png";
import danieleUgolini from "@/public/images/danieleUgolini.png";
import deyeonKim from "@/public/images/deyeonKim.png";
import ibeibe from "@/public/images/ibeibe.png";
import hsiaoWeiWang from "@/public/images/Hsiao-WeiWang.png";
import dapplion from "@/public/images/dapplion.png";
import cathie from "@/public/images/cathie.png";
import SeiyaKobayashi from "@/public/images/SeiyaKobayashi.png";
import wanseob from "@/public/images/wanseob.png";
import jobin from "@/public/images/jobin.png";
import balalKhan from "@/public/images/balalKhan.png";
import guiltygyoza from "@/public/images/guiltygyoza.png";
import ShantanuGupta from "@/public/images/ShantanuGupta.png";
import ZDHu from "@/public/images/HDZu.png";
import anderson from "@/public/images/anderson.png";
import Josh from "@/public/images/Josh.png";
import agrim from "@/public/images/agrim.png";
import vivian from "@/public/images/vivian.png";
import chrisTam from "@/public/images/chrisTam.png";
import savio from "@/public/images/savioNoir.png";
import shotaroGranzierNakajima from "@/public/images/shotaroGranzier-Nakajima.png";
import IHungHsu from "@/public/images/IHungHsu.png";
import martinet from "@/public/images/Martinet.png";
import nuno from "@/public/images/Nuno.png";
import guru from "@/public/images/guru.png";
import youngHwi from "@/public/images/YoungHwi.png";

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
    speakers: {
      name: string;
      company: string;
      topic: string;
      src?: StaticImageData | null;
    }[];
  }[];
} = {
  24: [
    {
      track: "DeFi / Layer 2 Track",
      speakers: [
        { name: "Tom soong", company: "Zomma", topic: "", src: null },
        {
          name: "Jake",
          company: "Gauntlet",
          topic: "Inefficient Emissions and Incentive Optimization",
          src: null,
        },
        {
          name: "Zac L",
          company: "Suberra",
          topic: "Practical Meta-Transactions",
          src: ZacL,
        },
        {
          name: "",
          company: "",
          topic: "- Launch Break -",
          src: null,
        },
        { name: "Yenwen", company: "Perpetual Protocol", topic: "" },
        {
          name: "Daniele Ugolini",
          company: "Rysk Finance",
          topic: "Challenges of building on-chain option AMMs",
          src: danieleUgolini,
        },
        {
          name: "Deyeon Kim",
          company: "Pods Finance",
          topic:
            "DAOs and the Art of Risk Mitigation: The Importance of Hedging",
          src: deyeonKim,
        },
        {
          name: "Gauthem",
          company: "Polynomial",
          topic: "How to improve PowerPerp AMM",
          src: null,
        },
        {
          name: "",
          company: "",
          topic: "- Break -",
          src: null,
        },
        {
          name: "Ibe",
          company: "Predy Finance",
          topic: "The history of Gamma trading in DeFi",
          src: ibeibe,
        },
        {
          name: "Jerry",
          company: "Term Structure",
          topic: "",
          src: null,
        },
        {
          name: "",
          company: "",
          topic: "Panel: Lending || derivatives",
          src: null,
        },
      ],
    },
    {
      track: "ZK / Client / Security Track",
      speakers: [
        {
          name: "Hsiao-Wei Wang",
          company: "Ethereum Foundation",
          topic: "",
          src: hsiaoWeiWang,
        },
        {
          name: "Dapplion",
          company: "ChainSafe",
          topic: "Danksharding",
          src: dapplion,
        },
        {
          name: "Mary Liu",
          company: "Celestia",
          topic: "Scentered around Ethereum L2s that can use Celestia for DA.",
          src: null,
        },
        {
          name: "",
          company: "",
          topic: "- Launch Break -",
          src: null,
        },
        {
          name: "Cathie",
          company: "Ethereum Foundation",
          topic: "zkMachine Learning",
          src: cathie,
        },
        {
          name: "Seiya Kobayashi",
          company: "Individual Researcher",
          topic: "Optimization of zero-knowledge private machine learning",
          src: SeiyaKobayashi,
        },
        {
          name: "Wanseob Lim",
          company: "Ethereum Foundation",
          topic: "Schnorr Based Transaction Ordering",
          src: wanseob,
        },
        {
          name: "",
          company: "",
          topic: "- Break -",
          src: null,
        },
        {
          name: "Jobin Babu Ayathil",
          company: "Obscuro",
          topic:
            "TEE-Based Rollup: The Sweet Spot Between Optimistic and ZK Rollups",
          src: jobin,
        },
        {
          name: "Balal Khan",
          company: "ZKEX",
          topic: "Secure Interoperability with Zero-Knowledge Proofs",
          src: balalKhan,
        },
        {
          name: "Guiltygyoza",
          company: "Topology",
          topic: "Starknet, gaming application on layer 2",
          src: guiltygyoza,
        },
        {
          name: "Alfred",
          company: "imToken",
          topic: "StarkNet AA wallet",
          src: null,
        },
      ],
    },
  ],
  25: [
    {
      track: "DeFi / Layer 2 Track",
      speakers: [
        { name: "Gnosis", company: "", topic: "", src: null },
        {
          name: "Palina Tolmach",
          company: "MakerDAO",
          topic:
            "Everything You Wanted to Know About Symbolic Execution for Ethereum Smart Contracts",
          src: null,
        },
        { name: "Tenderly", company: "", topic: "", src: null },
        {
          name: "Shantanu Gupta",
          company: "Independent Researcher",
          topic:
            "Recent DeFi trends, Evolution of new and seasoned DeFi protocols",
          src: ShantanuGupta,
        },
        {
          name: "",
          company: "",
          topic: "- Launch Break -",
          src: null,
        },
        { name: "AutoPass", company: "", topic: "", src: null },
        {
          name: "ZD Hu",
          company: "Furucombo",
          topic:
            "Navigating DeFi composability trilemma: extensibility, immutability and usability.",
          src: ZDHu,
        },
        {
          name: "Anderson Chen",
          company: "Diamond Protocol",
          topic: "Uniswap v3 leverage liquidity providing platform on layer 2",
          src: anderson,
        },
        {
          name: "Ping Chen",
          company: "Hakka Finance",
          topic: "",
          src: null,
        },
        {
          name: "",
          company: "",
          topic: "- Break -",
          src: null,
        },
        {
          name: "Josh Guha",
          company: "Gyroscope",
          topic: "Elliptical Eccentricity for Capital Efficiency",
          src: Josh,
        },
        {
          name: "Agrim Nagrani",
          company: "Graph Advocate",
          topic: "Web3 Data Querying by Graph",
          src: agrim,
        },
        {
          name: "",
          company: "",
          topic: "Panel: Security",
          src: null,
        },
      ],
    },
    {
      track: "ZK / Client / Security Track",
      speakers: [
        {
          name: "Vivian",
          company: "Ethereum Foundation",
          topic: "Unirep",
          src: vivian,
        },
        {
          name: "Chris Tam",
          company: "BTQ",
          topic:
            "The Future of Zero-Knowledge: Challenges, Advancements, and Tools for Developing Post-Quantum zk-SNARKs",
          src: chrisTam,
        },
        {
          name: "Savio",
          company: "Aztec",
          topic: "Noir the zkDSL",
          src: savio,
        },
        {
          name: "Shotaro Granzier-Nakajima",
          company: "Kleros",
          topic:
            "Vea bridge: A permissionless, immutable optimistic bridging primitive",
          src: shotaroGranzierNakajima,
        },
        {
          name: "",
          company: "",
          topic: "- Launch Break -",
          src: null,
        },
        {
          name: "I-Hung Hsu",
          company: "AMIS",
          topic: "A hierarchical deterministic wallets without seeds",
          src: IHungHsu,
        },
        {
          name: "Nic Lin",
          company: "imToken",
          topic: "Stealth address",
          src: null,
        },
        { name: "Martinet", company: "Quantstamp", topic: "", src: martinet },
        { name: "Dedaub", company: "", topic: "", src: null },
        {
          name: "",
          company: "",
          topic: "- Break -",
          src: null,
        },
        {
          name: "Tomo Tagami",
          company: "Pheasant Network",
          topic: "Layer 2 Interoperability",
          src: null,
        },
        {
          name: "Nuno Loureiro",
          company: "Ethereum Foundation",
          topic: "From web2 to web3 pitfalls and learnings",
          src: nuno,
        },
        {
          name: "Guru",
          company: "Status",
          topic: "Building the communication layer of web3 - Waku protocol",
          src: guru,
        },
        {
          name: "YoungHwi Cho",
          company: "Hunt Town",
          topic:
            "Improving Ethereum DApp UX: Insights from a Seasoned Web3 Designer",
          src: youngHwi,
        },
      ],
    },
  ],
};
