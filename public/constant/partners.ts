import {
  taikaiUrl,
  unlockUrl,
  diamondUrl,
  furucomboUrl,
  imTokenUrl,
  lyraUrl,
  perpetualUrl,
  quantstampUrl,
  grenadeUrl,
  blockBoosterUrl,
  blocktempoUrl,
  abmediaUrl,
  gen3Url,
} from "./urls";

import taikai from "@/public/images/taikai.png";
import unlock from "@/public/images/unlock.png";
import diamond from "@/public/images/diamond.png";
import furucombo from "@/public/images/furucombo.png";
import imToken from "@/public/images/imToken.png";
import lyra from "@/public/images/lyra.png";
import perpetual from "@/public/images/perpetual.png";
import quantstamp from "@/public/images/quantstamp.png";
import grenade from "@/public/images/grenade.png";
import abmedia from "@/public/images/abmedia.png";
import blocktempo from "@/public/images/blockTempo.png";
import blockBooster from "@/public/images/BlockBooster.png";
import gen3 from "@/public/images/gen3.png";

import { StaticImageData } from "next/image";

type PartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  maxHeight?: number;
};

const partners: PartnerProps[] = [
  { name: "diamond protocol", url: diamondUrl, logo: diamond },
  { name: "furucombo", url: furucomboUrl, logo: furucombo },
  { name: "grenade", url: grenadeUrl, logo: grenade },
  { name: "imToken", url: imTokenUrl, logo: imToken },
  { name: "lyra", url: lyraUrl, logo: lyra },
  { name: "perpetual", url: perpetualUrl, logo: perpetual },
  { name: "quantstamp", url: quantstampUrl, logo: quantstamp },
  { name: "Taikai", url: taikaiUrl, logo: taikai, maxHeight: 90 },
  { name: "Unlock", url: unlockUrl, logo: unlock },
  { name: "Block Booster", url: blockBoosterUrl, logo: blockBooster },
  { name: "鏈新聞", url: abmediaUrl, logo: abmedia, maxHeight: 80 },
  { name: "動區", url: blocktempoUrl, logo: blocktempo },
  { name: "Gen3", url: gen3Url, logo: gen3, maxHeight: 55 },
];

export default partners;
