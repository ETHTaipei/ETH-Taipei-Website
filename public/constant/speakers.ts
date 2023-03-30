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
import youngHwi from "@/public/images/YoungHwi.png";
import nuno from "@/public/images/Nuno.png";
import agrim from "@/public/images/agrim.png";
import ZacL from "@/public/images/ZacL.png";
import HDZu from "@/public/images/HDZu.png";
import IHungHsu from "@/public/images/IHungHsu.png";
import SeiyaKobayashi from "@/public/images/SeiyaKobayashi.png";
import ShantanuGupta from "@/public/images/ShantanuGupta.png";
import v from "@/public/images/v.png";

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
    name: "Zu HD",
    company: "Furucombo",
    src: HDZu,
    twitter: "",
    companyLink: furucomboUrl,
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
    name: "Jobin Babu Ayathil",
    company: "Obscuro",
    src: jobin,
    twitter: "https://twitter.com/0xJba",
    companyLink: "https://obscu.ro/",
  },
  {
    name: "Nuno Loureiro",
    company: "Ethereum Foundation",
    src: nuno,
    twitter: "https://twitter.com/nloureiro",
    companyLink: "https://ethereum.org/en/",
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
  {
    name: `Shantanu Gupta`,
    company: "Biconomy",
    src: ShantanuGupta,
    twitter: "https://twitter.com/DoubleSc00p",
    companyLink: "https://www.biconomy.io/",
  },
  {
    name: `Shotaro Granzier-Nakajima`,
    company: "Kleros",
    src: shotaroGranzierNakajima,
    twitter: "https://twitter.com/shotaronowhere",
    companyLink: "https://kleros.io/",
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
];

export { speakers, keynoteSpeakers };
