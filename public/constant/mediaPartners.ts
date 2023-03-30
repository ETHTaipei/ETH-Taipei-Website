import { web3plusUrl, cryptoCityUrl, tbaUrl } from "./urls";

import web3Plus from "@/public/images/web3Plus.png";
import cryptoCity from "@/public/images/cryptoCity.png";
import tba from "@/public/images/tba.png";

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
];

export default mediaPartners;
