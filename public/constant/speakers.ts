import { StaticImageData } from "next/image";
import { ethereumFoundationUrl, furucomboUrl } from "./urls";

import hsiaoWeiWang from "@/public/images/Hsiao-WeiWang.png";
import vivian from "@/public/images/vivian.png";
import wanseob from "@/public/images/wanseob.png";
import balalKhan from "@/public/images/balalKhan.png";
import chrisTam from "@/public/images/chrisTam.png";
import anderson from "@/public/images/anderson.png";
import danieleUgolini from "@/public/images/danieleUgolini.png";
import cathie from "@/public/images/cathie.png";
import guiltygyoza from "@/public/images/guiltygyoza.png";
import savio from "@/public/images/savioNoir.png";
import shotaroGranzierNakajima from "@/public/images/shotaroGranzier-Nakajima.png";
import dapplion from "@/public/images/dapplion.png";
import deyeonKim from "@/public/images/deyeonKim.png";
import gautham from "@/public/images/gautham.png";
import ibeibe from "@/public/images/ibeibe.png";
import guru from "@/public/images/guru.png";
import jobin from "@/public/images/jobin.png";
import jerry from "@/public/images/Jerry-Li.png";
import sophie from "@/public/images/sophie.png";
import ronald from "@/public/images/ronald.png";
import youngHwi from "@/public/images/YoungHwi.png";
import nuno from "@/public/images/Nuno.png";
import agrim from "@/public/images/agrim.png";
import ZacL from "@/public/images/ZacL.png";
import HDZu from "@/public/images/HDZu.png";
import IHungHsu from "@/public/images/IHungHsu.png";
import SeiyaKobayashi from "@/public/images/SeiyaKobayashi.png";
import ShantanuGupta from "@/public/images/ShantanuGupta.png";
import v from "@/public/images/v.png";
import palina from "@/public/images/PalinaTolmach.png";
import vasily from "@/public/images/VasilySidorov.png";
import mary from "@/public/images/MaryLiu.png";
import tsk from "@/public/images/tsk.png";
import Josh from '@/public/images/Josh.png';
import richardMa from "@/public/images/RichardMa.png";
import alfred from "@/public/images/Alfred.png";
import nic from "@/public/images/Nic.png";
import TomSoong from "@/public/images/TomSoong.png";
import fully from "@/public/images/fully.png";
import neville from "@/public/images/neville.png";

type SpeakerProps = {
  name: string;
  company: string;
  src: StaticImageData;
  twitter?: string;
  companyLink?: string;
};

const keynoteSpeakers: SpeakerProps[] = [
  {
    name: "Vitalik Buterin",
    company: "Ethereum Foundation",
    src: v,
    twitter: "https://twitter.com/VitalikButerin",
    companyLink: "https://ethereum.org/en/",
  },
];

const speakers: SpeakerProps[] = [
  {
    name: "Agrim Nagrani",
    company: "Graph Advocate",
    src: agrim,
    twitter: "https://twitter.com/agrimnagrani",
    companyLink: "https://thegraph.com/",
  },
  {
    name: "Alfred",
    company: "imToken",
    src: alfred,
    companyLink: "https://token.im/",
  },
  {
    name: "Anderson Chen",
    company: "Diamond Protocol",
    src: anderson,
    twitter: "https://twitter.com/MrAndersonChen",
    companyLink: "https://dmo.finance/",
  },
  {
    name: "Balal Khan",
    company: "ZKEX",
    src: balalKhan,
    twitter: "https://twitter.com/iambillsta",
    companyLink: "https://zkex.com/",
  },
  {
    name: "Cathie",
    company: "Ethereum Foundation",
    src: cathie,
    twitter: "https://twitter.com/drCathieSo_eth",
    companyLink: ethereumFoundationUrl,
  },
  {
    name: "Chris Tam",
    company: "BTQ",
    src: chrisTam,
    twitter: "https://twitter.com/christam96_",
    companyLink: "https://www.btq.com/",
  },
  {
    name: "Daniele Ugolini",
    company: "Rysk Finance",
    src: danieleUgolini,
    twitter: "https://twitter.com/DanDeFiEd",
    companyLink: "https://www.rysk.finance/",
  },
  {
    name: "Dapplion",
    company: "ChainSafe",
    src: dapplion,
    twitter: "https://twitter.com/dapplion",
    companyLink: "https://chainsafe.io/",
  },
  {
    name: "Deyeon Kim",
    company: "Pods Finance",
    src: deyeonKim,
    twitter: "https://twitter.com/DeyeonK",
    companyLink: "https://www.pods.finance/",
  },
  {
    name: "Fully",
    company: "OlympusDAO",
    src: fully,
    twitter: "https://twitter.com/fullyallocated",
    companyLink: "https://olympusdao.finance/",
  },
  {
    name: "Gautham",
    company: "Polynomial",
    src: gautham,
    twitter: "https://twitter.com/gauthamzzz",
    companyLink: "https://www.polynomial.fi/",
  },
  {
    name: "guiltygyoza",
    company: "Topology",
    src: guiltygyoza,
    twitter: "https://twitter.com/guiltygyoza",
    companyLink: "https://www.topology.gg/",
  },
  {
    name: "Guru",
    company: "Status.im",
    src: guru,
    twitter: "https://twitter.com/hackyguru",
    companyLink: "https://status.im/",
  },
  {
    name: "Hsiao-Wei Wang",
    company: "Ethereum Foundation",
    src: hsiaoWeiWang,
    twitter: "https://twitter.com/icebearhww",
    companyLink: "https://ethereum.org/en/",
  },
  {
    name: "I-Hung Hsu",
    company: "AMIS",
    src: IHungHsu,
    twitter: "https://twitter.com/GlenHsuAmis",
    companyLink: "https://www.amis.com/",
  },
  {
    name: "Ibeibe__",
    company: "Predy Finance",
    src: ibeibe,
    twitter: "https://twitter.com/ibeibe__",
    companyLink: "https://www.predy.finance/",
  },
  {
    name: "Jerry",
    company: "Term structure",
    companyLink:'https://termstructure.com/',
    src: jerry,
    twitter: 'https://twitter.com/TermStructLabs', 
  },
  {
    name: "Jobin Babu Ayathil",
    company: "Obscuro",
    src: jobin,
    twitter: "https://twitter.com/0xJba",
    companyLink: "https://obscu.ro/",
  },
  {
    name: "Josh Guha",
    company: "Gyroscope",
    src: Josh,
    twitter: "https://twitter.com/joshyasdf",
    companyLink: "https://gyro.finance/",
  },
  {
    name: "Mary Liu",
    company: 'Celestia',
    twitter: 'https://twitter.com/howdymerry',
    companyLink: 'https://celestia.org/',
    src: mary
  },
  {
    name: "Neville Grech",
    company: "DEDAUB",
    companyLink: "https://dedaub.com/",
    src: neville,
    twitter: 'https://twitter.com/neville_grech'
  },
  {
    name: "Nic Lin",
    company: "imToken",
    src: nic,
    twitter: "https://twitter.com/NICLin619",
    companyLink: "https://token.im/",
  },
  {
    name: "Nuno Loureiro",
    company: "Ethereum Foundation",
    src: nuno,
    twitter: "https://twitter.com/nloureiro",
    companyLink: "https://ethereum.org/en/",
  },
  {
    name: "Palina Tolmach",
    company: 'MakerDAO',
    companyLink: 'https://makerdao.com/en/',
    twitter: 'https://twitter.com/palinatolmach',
    src: palina,
  },
  {
    name: "Richard Ma",
    company: "Quantstamp",
    src: richardMa,
    companyLink: "https://quantstamp.com/",
  },
  {
    name: "Ronald Yu",
    company: "AutoPass",
    src: ronald,
    twitter: 'https://twitter.com/ronaldxxxx',
    companyLink: "https://autopass.xyz/",
  },
  {
    name: "Savio",
    company: "Noir / Aztec",
    src: savio,
    twitter: "https://twitter.com/globallager",
    companyLink: "https://aztec.network/noir/",
  },
  {
    name: "Seiya Kobayashi",
    company: "Individual Researcher",
    src: SeiyaKobayashi,
    twitter: "https://www.facebook.com/seiya.kb",
    companyLink: "",
  },
  // {
  //   name: `Shantanu Gupta`,
  //   company: "Biconomy",
  //   src: ShantanuGupta,
  //   twitter: "https://twitter.com/DoubleSc00p",
  //   companyLink: "https://www.biconomy.io/",
  // },
  {
    name: `Shotaro Granzier-Nakajima`,
    company: "Kleros",
    src: shotaroGranzierNakajima,
    twitter: "https://twitter.com/shotaronowhere",
    companyLink: "https://kleros.io/",
  },
  {
    name: `Sophie Liu`,
    company: "EigenPhi",
    src: sophie,
    companyLink: "https://eigenphi.io/",
  },
  {
    name: "Tom Soong",
    company: "zomma",
    src: TomSoong,
    twitter: "https://twitter.com/RealTomSoong",
    companyLink: "https://zomma.pro/",
  },
  {
    name: "TSK",
    company: "Perpetual Protocol",
    src: tsk,
    twitter: "https://twitter.com/tienshaoku",
    companyLink: "https://perp.com/",
  },
  {
    name: 'Vasily Sidorov',
    company: 'Anoma',
    src: vasily,
    companyLink: 'https://anoma.net/',
    twitter: 'https://twitter.com/bazzilic'
  },
  {
    name: "Vivian",
    company: "Ethereum Foundation",
    src: vivian,
    twitter: "https://twitter.com/vivi4322",
    companyLink: "https://ethereum.org/en/",
  },
  {
    name: "Wanseob",
    company: "Ethereum Foundation",
    src: wanseob,
    twitter: "https://twitter.com/wanseoblim",
    companyLink: "https://ethereum.org/en/",
  },
  {
    name: "YoungHwi Cho",
    company: "Hunt Town",
    src: youngHwi,
    twitter: "https://twitter.com/heyproject7",
    companyLink: "https://hunt.town/",
  },
  {
    name: "Zac L",
    company: "Suberra",
    src: ZacL,
    twitter: "https://twitter.com/Zlace0x",
    companyLink: "https://suberra.com/",
  },
  {
    name: "ZD Hu",
    company: "Furucombo",
    src: HDZu,
    twitter: "",
    companyLink: furucomboUrl,
  },
];

export { speakers, keynoteSpeakers };
