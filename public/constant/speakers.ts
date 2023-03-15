import { StaticImageData } from "next/image";

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

type SpeakerProps = {
  name: string;
  company: string;
  src: StaticImageData;
  twitter?: string;
  companyLink?: string;
};

const speakers: SpeakerProps[] = [
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
    companyLink: "https://ethereum.org/en/",
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
    name: "dapplion",
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
    name: "guiltygyoza",
    company: "Topology",
    src: guiltygyoza,
    twitter: "https://twitter.com/guiltygyoza",
    companyLink: "https://www.topology.gg/",
  },
  {
    name: "Hsiao-Wei Wang",
    company: "Ethereum Foundation",
    src: hsiaoWeiWang,
    twitter: "https://twitter.com/icebearhww",
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
];

export default speakers;
