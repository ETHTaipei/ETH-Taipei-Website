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
import ZDHu from "@/public/images/HDZu.png";
import anderson from "@/public/images/anderson.png";
import sophie from "@/public/images/sophie.png";
import ronald from "@/public/images/ronald.png";
import igor from "@/public/images/igor.png"
import stefan from "@/public/images/stefan.png"
import Josh from "@/public/images/Josh.png";
import agrim from "@/public/images/agrim.png";
import jerry from "@/public/images/Jerry-Li.png";
import vivian from "@/public/images/vivian.png";
import chrisTam from "@/public/images/chrisTam.png";
import savio from "@/public/images/savioNoir.png";
import gautham from "@/public/images/gautham.png";
import shotaroGranzierNakajima from "@/public/images/shotaroGranzier-Nakajima.png";
import IHungHsu from "@/public/images/IHungHsu.png";
import tsk from "@/public/images/tsk.png";
import nuno from "@/public/images/Nuno.png";
import guru from "@/public/images/guru.png";
import youngHwi from "@/public/images/YoungHwi.png";
import logo from "@/public/images/logo-transparent.png";
import YaronVelner from "@/public/images/YaronVelner.png";
import MaryLiu from "@/public/images/MaryLiu.png";
import VasilySidorov from "@/public/images/VasilySidorov.png";
import PalinaTolmach from "@/public/images/PalinaTolmach.png";
import RichardMa from "@/public/images/RichardMa.png";
import TomoTagami from "@/public/images/TomoTagami.png";
import alfred from "@/public/images/Alfred.png";
import nic from "@/public/images/Nic.png";
import fully from "@/public/images/fully.png";
import TomSoong from "@/public/images/TomSoong.png";
import neville from "@/public/images/neville.png";

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
      time: string;
      duration: string;
      panelOrganizations?: string[];
    }[];
  }[];
} = {
  24: [
    {
      track: "DeFi Track",
      speakers: [
        {
          name: "Tom soong",
          company: "Zomma",
          topic:
            "Revolutionizing Options Tradings on zkSync - DeFi Options with the Highest Capital Efficiency",
          src: TomSoong,
          time: "10:30am",
          duration: "30 mins",
        },
        {
          name: "Jake",
          company: "Gauntlet",
          topic: "Inefficient Emissions and Incentive Optimization",
          src: logo,
          time: "11:00am",
          duration: "30 mins",
        },
        {
          name: "Zac L",
          company: "Suberra",
          topic: "Practical Meta-Transactions",
          src: ZacL,
          time: "11:30am",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Lunch Break",
          src: ZacL,
          time: "12:00pm",
          duration: "1 hr",
        },
        {
          name: "Yaron Velner ",
          company: "B.Protocol",
          topic: "Don't panic, the most you can lose is EVERYTHING.",
          src: YaronVelner,
          time: "01:00pm",
          duration: "30 mins",
        },
        {
          name: "TSK",
          company: "Perpetual Protocol",
          topic: "TBD",
          src: tsk,
          time: "01:30pm",
          duration: "30 mins",
        },
        {
          name: "Daniele Ugolini",
          company: "Rysk Finance",
          topic: "Challenges of building on-chain option AMMs",
          src: danieleUgolini,
          time: "02:00pm",
          duration: "30 mins",
        },
        {
          name: "Deyeon Kim",
          company: "Pods Finance",
          topic:
            "DAOs and the Art of Risk Mitigation: The Importance of Hedging",
          src: deyeonKim,
          time: "02:30pm",
          duration: "30 mins",
        },
        {
          name: "Gautham",
          company: "Polynomial",
          topic: "How to improve PowerPerp AMM",
          src: gautham,
          time: "03:00pm",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Break",
          src: logo,
          time: "03:30pm",
          duration: "30 mins",
        },
        {
          name: "Ibe",
          company: "Predy Finance",
          topic: "The history of Gamma trading in DeFi",
          src: ibeibe,
          time: "04:00pm",
          duration: "30 mins",
        },
        {
          name: "Jerry",
          company: "Term Structure",
          topic: "The Evolution of DeFi: Fixed-Income Protocols",
          src: jerry,
          time: "04:30pm",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Panel: Derivatives",
          src: null,
          time: "05:00pm",
          duration: "1 hr",
        },
      ],
    },
    {
      track: "ZK / Client / Security Track",
      speakers: [
        {
          name: "Hsiao-Wei Wang",
          company: "Ethereum Foundation",
          topic: "TBD",
          src: hsiaoWeiWang,
          time: "10:30am",
          duration: "30 mins",
        },
        {
          name: "Dapplion",
          company: "ChainSafe",
          topic: "Danksharding",
          src: dapplion,
          time: "11:00am",
          duration: "30 mins",
        },
        {
          name: "Mary Liu",
          company: "Celestia",
          topic: "TBD",
          // topic: "Scentered around Ethereum L2s that can use Celestia for DA.",
          src: MaryLiu,
          time: "11:30am",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Lunch Break",
          src: null,
          time: "12:00pm",
          duration: "1 hr",
        },
        {
          name: "Dapplion",
          company: "Gnosis Chain",
          topic: "A Technical Deep Dive into the Evolution and Future of Gnosis Chain",
          src: dapplion,
          time: "13:00am",
          duration: "30 mins",
        },
        {
          name: "Cathie",
          company: "Ethereum Foundation",
          topic:
            "Unraveling ZKML: Present Realities and Future Horizons in Privacy-Preserving AI",
          src: cathie,
          time: "01:30pm",
          duration: "30 mins",
        },
        {
          name: "Seiya Kobayashi",
          company: "Individual Researcher",
          topic: "Optimization of zero-knowledge private machine learning",
          src: SeiyaKobayashi,
          time: "02:00pm",
          duration: "30 mins",
        },
        {
          name: "Wanseob Lim",
          company: "Ethereum Foundation",
          topic: "Schnorr Sequencer",
          src: wanseob,
          time: "02:30pm",
          duration: "30 mins",
        },
        {
          name: "Vasily Sidorov",
          company: "Anoma",
          topic: "A Typhon That Hides in the Taiga",
          src: VasilySidorov,
          time: "03:00pm",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Break",
          src: null,
          time: "03:30pm",
          duration: "30 mins",
        },
        {
          name: "Jobin Babu Ayathil",
          company: "Obscuro",
          topic:
            "TEE-Based Rollup: The Sweet Spot Between Optimistic and ZK Rollups",
          src: jobin,
          time: "04:00pm",
          duration: "30 mins",
        },
        {
          name: "Balal Khan",
          company: "ZKEX",
          topic: "Secure Interoperability with Zero-Knowledge Proofs",
          src: balalKhan,
          time: "04:30pm",
          duration: "30 mins",
        },
        {
          name: "YoungHwi Cho",
          company: "Hunt Town",
          topic:
            "Improving Ethereum DApp UX: Insights from a Seasoned Web3 Designer",
          src: youngHwi,
          time: "05:00 pm",
          duration: "30 mins",
        },
        {
          name: "Alfred",
          company: "imToken",
          topic: "StarkNet AA wallet",
          src: alfred,
          time: "05:30pm",
          duration: "30 mins",
        },
      ],
    },
  ],
  25: [
    {
      track: "DeFi Track",
      speakers: [
        {
          name: "Stefan Piech",
          company: "Gnosis Chain",
          topic: "Building the next generation of DeFi on Gnosis Chain",
          src: stefan,
          time: "10:00am",
          duration: "30 mins",
        },
        {
          name: "Palina Tolmach",
          company: "MakerDAO",
          topic: " Practical Symbolic Execution for EVM",
          src: PalinaTolmach,
          time: "10:30am",
          duration: "30 mins",
        },
        {
          name: "Fully",
          company: "OlympusDAO",
          topic: "Default: A Design Pattern for Better Protocol Development",
          src: fully,
          time: "11:00am",
          duration: "30 mins",
        },
        {
          name: "Nenad Vitorovic",
          company: "Tenderly",
          topic: "Shortcuts to Better Dapp Development",
          src: logo,
          time: "11:30am",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Lunch Break",
          src: null,
          time: "12:00pm",
          duration: "1 hrs",
        },
        {
          name: "Sophie Liu",
          company: "EigenPhi",
          topic: "Insight into the Dark Forest: Exploring MEV Impact and Risks of Liquidity Manipulation",
          src: sophie,
          time: "01:00pm",
          duration: "30 mins",
        },
        {
          name: "Ronald Yu",
          company: "AutoPass",
          topic: "Empower Real World Transaction into Blockchain",
          src: ronald,
          time: "01:30pm",
          duration: "30 mins",
        },
        {
          name: "ZD Hu",
          company: "Furucombo",
          topic:
            "Navigating DeFi composability trilemma: extensibility, immutability and usability.",
          src: ZDHu,
          time: "02:00pm",
          duration: "30 mins",
        },
        {
          name: "Anderson Chen",
          company: "Diamond Protocol",
          topic: "Uniswap v3 leverage liquidity providing platform on layer 2",
          src: anderson,
          time: "02:30pm",
          duration: "30 mins",
        },
        {
          name: "Ping Chen",
          company: "Hakka Finance",
          topic: "TBD",
          src: logo,
          time: "03:00pm",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Break",
          src: null,
          time: "03:30pm",
          duration: "30 mins",
        },
        {
          name: "Josh Guha",
          company: "Gyroscope",
          topic: "Elliptical Eccentricity for Capital Efficiency",
          src: Josh,
          time: "04:00pm",
          duration: "30 mins",
        },
        {
          name: "Agrim Nagrani",
          company: "Graph Advocate",
          topic: "Web3 Data Querying by Graph",
          src: agrim,
          time: "04:30pm",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Panel: Security",
          src: null,
          time: "05:00pm",
          duration: "1 hr",
          panelOrganizations: [
            "Code4rena",
            "Trail of Bits",
            "Quantstamp",
            "Dedaub",
          ],
        },
      ],
    },
    {
      track: "ZK / Client / Security Track",
      speakers: [
        {
          name: "Vivian",
          company: "Ethereum Foundation",
          topic: "Introduction to Unirep: ZK attestation system",
          src: vivian,
          time: "10:00 am",
          duration: "30 mins",
        },
        {
          name: "Chris Tam",
          company: "BTQ",
          topic:
            "The Future of Zero-Knowledge: Challenges, Advancements, and Tools for Developing Post-Quantum zk-SNARKs",
          src: chrisTam,
          time: "10:30 am",
          duration: "30 mins",
        },
        {
          name: "Savio",
          company: "Aztec",
          topic: "Noir the zkDSL",
          src: savio,
          time: "11:00 am",
          duration: "30 mins",
        },
        {
          name: "Shotaro Granzier-Nakajima",
          company: "Kleros",
          topic:
            "Vea bridge: A permissionless, immutable optimistic bridging primitive",
          src: shotaroGranzierNakajima,
          time: "11:30 am",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Lunch Break",
          src: null,
          time: "12:00pm",
          duration: "1 hrs",
        },
        {
          name: "Igor Barinov",
          company: "zkBob",
          topic: "Road to compliant on-chain privacy with zkBob",
          src: igor,
          time: "01:00 pm",
          duration: "30 mins",
        },
        {
          name: "I-Hung Hsu",
          company: "AMIS",
          topic: "A hierarchical deterministic wallets without seeds",
          src: IHungHsu,
          time: "01:30 pm",
          duration: "30 mins",
        },
        {
          name: "Nic Lin",
          company: "imToken",
          topic: "Stealth address",
          src: nic,
          time: "02:00 pm",
          duration: "30 mins",
        },
        {
          name: "Richard Ma",
          company: "Quantstamp",
          topic: "TBD",
          src: RichardMa,
          time: "02:30 pm",
          duration: "30 mins",
        },
        {
          name: "Neville Grech",
          company: "DEDAUB",
          topic: "Sec it up: What's brewing in the security tooling space?",
          src: neville,
          time: "03:00 pm",
          duration: "30 mins",
        },
        {
          name: "",
          company: "",
          topic: "Break",
          src: null,
          time: "03:30pm",
          duration: "30 mins",
        },
        {
          name: "Tomo Tagami",
          company: "Pheasant Network",
          topic: "Layer 2 Interoperability",
          src: TomoTagami,
          time: "04:00 pm",
          duration: "30 mins",
        },
        {
          name: "Nuno Loureiro",
          company: "Ethereum Foundation",
          topic: "From web2 to web3 pitfalls and learnings",
          src: nuno,
          time: "04:30 pm",
          duration: "30 mins",
        },
        {
          name: "Guru",
          company: "Status",
          topic: "Building the communication layer of web3 - Waku protocol",
          src: guru,
          time: "05:00 pm",
          duration: "30 mins",
        },
        {
          name: "Guiltygyoza",
          company: "Topology",
          topic: "Starknet, gaming application on layer 2",
          src: guiltygyoza,
          time: "05:30pm",
          duration: "30 mins",
        },
      ],
    },
  ],
};
