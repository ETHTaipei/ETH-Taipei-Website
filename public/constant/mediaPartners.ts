import { web3plusUrl, cryptoCityUrl, tbaUrl, blockbeatsUrl, nineupUrl, coinnewshkUrl } from "./urls";

import web3Plus from "@/public/images/web3Plus.png";
import cryptoCity from "@/public/images/cryptoCity.png";
import tba from "@/public/images/tba.png";
import coinnewshk from "@/public/images/coinnewshk.png";
import blockbeats from "@/public/images/blockbeats.png";
import nineup from "@/public/images/nineup.png";

import { StaticImageData } from "next/image";

type MediaPartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  maxHeight?: number;
};

const mediaPartners: MediaPartnerProps[] = [
  { name: "Web3+", url: web3plusUrl, logo: web3Plus },
  { name: "Crypto City", url: cryptoCityUrl, logo: cryptoCity },
  { name: "Taiwan Blockchain Academia", url: tbaUrl, logo: tba },
  { name: "9up.io", url: nineupUrl, logo: nineup },
  { name: "律動", url: blockbeatsUrl, logo: blockbeats },
  { name: "幣訊", url: coinnewshkUrl, logo: coinnewshk },
];

export default mediaPartners;
