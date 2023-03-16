import {
  taikaiUrl,
  unlockUrl,
  diamondUrl,
  furucomboUrl,
  imTokenUrl,
  lyraUrl,
  perpetualUrl,
  quantstampUrl,
  tpeUrl,
} from "./urls";

import taikai from "@/public/images/taikai.png";
import unlock from "@/public/images/unlock.png";
import diamond from "@/public/images/diamond.png";
import furucombo from "@/public/images/furucombo.png";
import imToken from "@/public/images/imToken.png";
import lyra from "@/public/images/lyra.png";
import perpetual from "@/public/images/perpetual.png";
import quantstamp from "@/public/images/quantstamp.png";
import tpe from "@/public/images/taipei-ethereum.png";

import { StaticImageData } from "next/image";

type PartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
};

const partners: PartnerProps[] = [
  { name: "diamond protocol", url: diamondUrl, logo: diamond },
  { name: "furucombo", url: furucomboUrl, logo: furucombo },
  { name: "imToken", url: imTokenUrl, logo: imToken },
  { name: "lyra", url: lyraUrl, logo: lyra },
  { name: "perpetual", url: perpetualUrl, logo: perpetual },
  { name: "quantstamp", url: quantstampUrl, logo: quantstamp },
  { name: "Taikai", url: taikaiUrl, logo: taikai },
  { name: "Taipei Ethereum Meetup", url: tpeUrl, logo: tpe },
  { name: "Unlock", url: unlockUrl, logo: unlock },
];

export default partners;
