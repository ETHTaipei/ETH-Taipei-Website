import {
  web3plusUrl,
  cryptocityUrl,
  tbaUrl
} from "./urls";

import web3plus from "@/public/images/web3plus.png";
import cryptocity from "@/public/images/cryptocity.png";
import tba from "@/public/images/tba.png";

import { StaticImageData } from "next/image";

type MediaPartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  maxHeight?: number;
};

const mediapartners: MediaPartnerProps[] = [
  { name: "Web3+", url: web3plusUrl, logo: web3plus },
  { name: "Crypto City", url: cryptocityUrl, logo: cryptocity },
  { name: "Taiwan Blockchain Academia", url: tbaUrl, logo: tba },
];

export default mediapartners;
