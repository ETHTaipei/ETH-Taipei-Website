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
import igor from "@/public/images/Igor.png";
import stefan from "@/public/images/stefan.png";
import Josh from "@/public/images/Josh.png";
import agrim from "@/public/images/agrim.png";
import jerry from "@/public/images/Jerry-Li.png";
import ping from "@/public/images/ping.png";
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
import martinet from "@/public/images/Martinet.png";
import Charlotte from "@/public/images/Charlotte.png";
import Poming from "@/public/images/Poming.png";

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
  hackathon: [21, 22, 23],
  conference: [24, 25],
};

export const hackathonAgendas: { [key: number]: AgendaType[] } = {
  21: [
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
  22: [
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

  23: [
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
    defi?: {
      name: string;
      company: string;
      topic: string;
      src?: StaticImageData | null;
      duration: string;
      panelOrganizations?: string[];
      panelHost?: string;
      panelists?: string[];
    };
    zk?: {
      name: string;
      company: string;
      topic: string;
      src?: StaticImageData | null;
      duration: string;
      panelOrganizations?: string[];
      panelHost?: string;
      panelists?: string[];
    };
    workshop?: { holder: string; title: string; duration: string };
  }[];
} = {
  24: [
    {
      time: "10:30am",
      defi: {
        name: "Charlotte",
        company: "Zomma",
        topic:
          "Revolutionizing Options Tradings on zkSync - DeFi Options with the Highest Capital Efficiency",
        src: Charlotte,
        duration: "30 mins",
      },
      zk: {
        name: "Hsiao-Wei Wang",
        company: "Ethereum Foundation",
        topic:
          "Ethereum Core Protocol R&D in 2023",
        src: hsiaoWeiWang,
        duration: "30 mins",
      },
      workshop: {
        holder: "imToken",
        title: "AA wallet (EIP-4337) workshop",
        duration: "10:30am-12:30pm (2 hrs)",
      },
    },
    {
      time: "11:00am",
      defi: {
        name: "Jake",
        company: "Gauntlet",
        topic: "Inefficient Emissions and Incentive Optimization",
        src: logo,
        duration: "30 mins",
      },
      zk: {
        name: "Dapplion",
        company: "ChainSafe",
        topic: "Danksharding",
        src: dapplion,
        duration: "30 mins",
      },
    },
    {
      time: "11:30am",
      defi: {
        name: "Zac L",
        company: "Suberra",
        topic: "Practical Meta-Transactions",
        src: ZacL,
        duration: "30 mins",
      },
      zk: {
        name: "Mary Liu",
        company: "Celestia",
        topic: "Scentered around Ethereum L2s that can use Celestia for DA",
        src: MaryLiu,
        duration: "30 mins",
      },
    },
    {
      time: "12:00pm",
      defi: {
        name: "",
        company: "",
        topic: "Lunch Break",
        src: ZacL,
        duration: "1 hr",
      },
      zk: {
        name: "",
        company: "",
        topic: "Lunch Break",
        src: null,
        duration: "1 hr",
      },
      workshop: {
        holder: "Gnosis Chain",
        title: "Gnosis Chain Validator Workshop - Running a Validator",
        duration: "12:30pm-2:30pm (2 hrs)",
      },
    },
    {
      time: "01:00pm",
      defi: {
        name: "Yaron Velner ",
        company: "B.Protocol",
        topic: "Don't panic, the most you can lose is EVERYTHING.",
        src: YaronVelner,
        duration: "30 mins",
      },
      zk: {
        name: "Dapplion",
        company: "Gnosis Chain",
        topic:
          "A Technical Deep Dive into the Evolution and Future of Gnosis Chain",
        src: dapplion,
        duration: "30 mins",
      },
    },

    {
      time: "01:30pm",
      defi: {
        name: "TSK",
        company: "Perpetual Protocol",
        topic: "Funding Mechanisms of Perpetual Contract",
        src: tsk,
        duration: "30 mins",
      },
      zk: {
        name: "Cathie",
        company: "Ethereum Foundation",
        topic:
          "Unraveling ZKML: Present Realities and Future Horizons in Privacy-Preserving AI",
        src: cathie,
        duration: "30 mins",
      },
    },
    {
      time: "02:00pm",
      defi: {
        name: "Daniele Ugolini",
        company: "Rysk Finance",
        topic: "Challenges of building on-chain option AMMs",
        src: danieleUgolini,
        duration: "30 mins",
      },
      zk: {
        name: "Seiya Kobayashi",
        company: "Individual Researcher",
        topic: "Optimization of zero-knowledge private machine learning",
        src: SeiyaKobayashi,
        duration: "30 mins",
      },
      workshop: {
        holder: "Trail of Bits",
        title: "Fuzzing: Like a Security Engineer",
        duration: "2:30pm-4:30pm (2 hrs)",
      },
    },
    {
      time: "02:30pm",
      defi: {
        name: "Deyeon Kim",
        company: "Pods Finance",
        topic: "DAOs and the Art of Risk Mitigation: The Importance of Hedging",
        src: deyeonKim,
        duration: "30 mins",
      },
      zk: {
        name: "Wanseob Lim",
        company: "Ethereum Foundation",
        topic: "Schnorr Sequencer",
        src: wanseob,
        duration: "30 mins",
      },
    },
    {
      time: "03:00pm",
      defi: {
        name: "Gautham",
        company: "Polynomial",
        topic: "How to improve PowerPerp AMM",
        src: gautham,
        duration: "30 mins",
      },
      zk: {
        name: "Vasily Sidorov",
        company: "Anoma",
        topic: "A Typhon That Hides in the Taiga",
        src: VasilySidorov,
        duration: "30 mins",
      },
    },
    {
      time: "03:30pm",
      defi: {
        name: "🧋",
        company: "",
        topic: "Break",
        src: null,
        duration: "30 mins",
      },
      zk: {
        name: "🧋",
        company: "",
        topic: "Break",
        src: null,
        duration: "30 mins",
      },
    },
    {
      time: "04:00pm",
      defi: {
        name: "Ibe",
        company: "Predy Finance",
        topic: "The history of Gamma trading in DeFi",
        src: ibeibe,
        duration: "30 mins",
      },
      zk: {
        name: "Jobin Babu Ayathil",
        company: "Obscuro",
        topic:
          "TEE-Based Rollup: The Sweet Spot Between Optimistic and ZK Rollups",
        src: jobin,
        duration: "30 mins",
      },
      workshop: { holder: "Tenderly", title: "War Room!", duration: "4:30pm-8:30pm (4 hrs)" },
    },
    {
      time: "04:30pm",
      defi: {
        name: "Jerry",
        company: "Term Structure",
        topic: "The Evolution of DeFi: Fixed-Income Protocols",
        src: jerry,
        duration: "30 mins",
      },
      zk: {
        name: "Balal Khan",
        company: "ZKEX",
        topic: "Secure Interoperability with Zero-Knowledge Proofs",
        src: balalKhan,
        duration: "30 mins",
      },
    },
    {
      time: "05:00pm",
      defi: {
        name: "",
        company: "",
        topic: "Panel: Derivatives",
        src: null,
        duration: "1 hr",
        panelHost: "Vince(Kronos)",
        panelists: ["Dan (Rysk)", "Aerhy (Pods)", "Gautham (Polynomial)"],
      },
      zk: {
        name: "YoungHwi Cho",
        company: "Hunt Town",
        topic:
          "Improving Ethereum DApp UX: Insights from a Seasoned Web3 Designer",
        src: youngHwi,
        duration: "30 mins",
      },
    },
    {
      time: "05:30pm",
      zk: {
        name: "Alfred",
        company: "imToken",
        topic: "StarkNet AA wallet",
        src: alfred,
        duration: "30 mins",
      },
    },
  ],
  25: [
    {
      time: "10:00am",
      defi: {
        name: "Stefan Piech",
        company: "Gnosis Chain",
        topic: "Building the next generation of DeFi on Gnosis Chain",
        src: stefan,
        duration: "30 mins",
      },
      zk: {
        name: "Vivian",
        company: "Ethereum Foundation",
        topic: "Introduction to Unirep: ZK data system",
        src: vivian,
        duration: "30 mins",
      },
      workshop: {
        holder: "Nethermind",
        title: "Warping Solidity to Cairo1 Manually",
        duration: "2 hrs",
      },
    },
    {
      time: "10:30am",
      defi: {
        name: "Palina Tolmach",
        company: "MakerDAO",
        topic: " Practical Symbolic Execution for EVM",
        src: PalinaTolmach,
        duration: "30 mins",
      },
      zk: {
        name: "Chris Tam",
        company: "BTQ",
        topic:
          "The Future of ZK: Challenges, Advancements, and Tools for Developing Post-Quantum zk-SNARKs",
        src: chrisTam,
        duration: "30 mins",
      },
    },
    {
      time: "11:00am",
      defi: {
        name: "Fully & Indigo",
        company: "OlympusDAO",
        topic: "Default: A Design Pattern for Better Protocol Development",
        src: logo,
        duration: "30 mins",
      },
      zk: {
        name: "Savio",
        company: "Aztec",
        topic: "Noir the zkDSL",
        src: savio,
        duration: "30 mins",
      },
    },
    {
      time: "11:30am",
      defi: {
        name: "Nenad Vitorovic",
        company: "Tenderly",
        topic: "Shortcuts to Better Dapp Development",
        src: logo,
        duration: "30 mins",
      },
      zk: {
        name: "Shotaro Granzier-Nakajima",
        company: "Kleros",
        topic:
          "Vea bridge: A permissionless, immutable optimistic bridging primitive",
        src: shotaroGranzierNakajima,
        duration: "30 mins",
      },
    },
    {
      time: "12:00pm",
      defi: {
        name: "",
        company: "",
        topic: "Lunch Break",
        src: null,
        duration: "1 hrs",
      },
      zk: {
        name: "",
        company: "",
        topic: "Lunch Break",
        src: null,
        duration: "1 hrs",
      },
    },
    {
      time: "01:00pm",
      defi: {
        name: "Sophie Liu",
        company: "EigenPhi",
        topic:
          "Insight into the Dark Forest: Exploring MEV Impact and Risks of Liquidity Manipulation",
        src: sophie,
        duration: "30 mins",
      },
      zk: {
        name: "Igor Barinov",
        company: "zkBob",
        topic: "Road to compliant on-chain privacy with zkBob",
        src: igor,
        duration: "30 mins",
      },
    },
    {
      time: "01:30pm",
      defi: {
        name: "Ronald Yu",
        company: "AutoPass",
        topic: "Empower Real World Transaction into Blockchain",
        src: ronald,
        duration: "30 mins",
      },
      zk: {
        name: "I-Hung Hsu",
        company: "AMIS",
        topic: "A hierarchical deterministic wallets without seeds",
        src: IHungHsu,
        duration: "30 mins",
      },
    },
    {
      time: "02:00pm",
      defi: {
        name: "ZD Hu",
        company: "Furucombo",
        topic:
          "Navigating DeFi composability trilemma: extensibility, immutability and usability.",
        src: ZDHu,
        duration: "30 mins",
      },
      zk: {
        name: "Nic Lin",
        company: "imToken",
        topic: "Stealth address",
        src: nic,
        duration: "30 mins",
      },
      workshop: {
        holder: "Unirep",
        title: "Hands on Unirep workshop (in Mandarin)",
        duration: "2 hrs",
      },
    },
    {
      time: "02:30pm",
      defi: {
        name: "Anderson Chen",
        company: "Diamond Protocol",
        topic: "Uniswap v3 leverage liquidity providing platform on layer 2",
        src: anderson,
        duration: "30 mins",
      },
      zk: {
        name: "Poming Lee",
        company: "Quantstamp",
        topic: "The Impact of Chain Forks and Reorgs on Cross-chain Bridges",
        src: Poming,
        duration: "30 mins",
      },
    },
    {
      time: "03:00pm",
      defi: {
        name: "Ping Chen",
        company: "Hakka Finance",
        topic: "Playing with Ethereum, the map editor of electronic cash",
        src: ping,
        duration: "30 mins",
      },
      zk: {
        name: "Neville Grech",
        company: "DEDAUB",
        topic: "Sec it up: What's brewing in the security tooling space?",
        src: neville,
        duration: "30 mins",
      },
    },
    {
      time: "03:30pm",
      defi: {
        name: "🧋",
        company: "",
        topic: "Break",
        src: null,
        duration: "30 mins",
      },
      zk: {
        name: "🧋",
        company: "",
        topic: "Break",
        src: null,
        duration: "30 mins",
      },
    },
    {
      time: "04:00pm",
      defi: {
        name: "Josh Guha",
        company: "Gyroscope",
        topic: "Elliptical Eccentricity for Capital Efficiency",
        src: Josh,
        duration: "30 mins",
      },
      zk: {
        name: "Tomo Tagami",
        company: "Pheasant Network",
        topic: "Layer 2 Interoperability",
        src: TomoTagami,
        duration: "30 mins",
      },
      workshop: {
        holder: "Hashkey",
        title: "Staking ecosystem (Virtual/in Mandarin)",
        duration: "2 hrs",
      },
    },
    {
      time: "04:30pm",
      defi: {
        name: "Agrim Nagrani",
        company: "Graph Advocate",
        topic: "Web3 Data Querying by Graph",
        src: agrim,
        duration: "30 mins",
      },
      zk: {
        name: "Nuno Loureiro",
        company: "Ethereum Foundation",
        topic: "From web2 to web3 pitfalls and learnings",
        src: nuno,
        duration: "30 mins",
      },
    },
    {
      time: "05:00pm",
      defi: {
        name: "",
        company: "",
        topic: "Panel: Security",
        src: null,
        duration: "1 hr",
        panelOrganizations: [
          "Code4rena",
          "Trail of Bits",
          "Quantstamp",
          "Dedaub",
        ],
      },
      zk: {
        name: "Guru",
        company: "Status",
        topic: "Building the communication layer of web3 - Waku protocol",
        src: guru,
        duration: "30 mins",
      },
    },
    {
      time: "05:30pm",
      zk: {
        name: "Guiltygyoza",
        company: "Topology",
        topic: "Starknet, gaming application on layer 2",
        src: guiltygyoza,
        duration: "30 mins",
      },
    },
  ],
};
