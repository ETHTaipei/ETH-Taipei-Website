import {
  taikaiUrl,
  unlockUrl,
  diamondUrl,
  imTokenUrl,
  grenadeUrl,
  blockBoosterUrl,
  blocktempoUrl,
  abmediaUrl,
  gen3Url,
  taibeiUrl,
  mattersLabUrl,
  proticoUrl,
  zombitUrl,
  brainCryptoUrl,
  bzdUrl,
  representUrl,
} from "./urls";

import taikai from "@/public/images/taikai.png";
import unlock from "@/public/images/unlock.png";
import diamond from "@/public/images/diamond.png";
import imToken from "@/public/images/imToken.png";
import grenade from "@/public/images/grenade.png";
import abmedia from "@/public/images/abmedia.png";
import blocktempo from "@/public/images/blockTempo.png";
import blockBooster from "@/public/images/BlockBooster.png";
import gen3 from "@/public/images/gen3.png";
import taibei from "@/public/images/taibei.png";
import mattersLab from "@/public/images/mattersLab.png";
import protico from "@/public/images/protico.png";
import zombit from "@/public/images/zombit.png";
import brainCrypto from "@/public/images/brainCrypto.png";
import BuZhiDAO from '@/public/images/BuZhiDAO.png';
import represent from "@/public/images/REPRESENT.png";

import { StaticImageData } from "next/image";

type PartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  maxHeight?: number;
};

const partners: PartnerProps[] = [
  { name: "diamond protocol", url: diamondUrl, logo: diamond },
  { name: "grenade", url: grenadeUrl, logo: grenade },
  { name: "imToken", url: imTokenUrl, logo: imToken },
  { name: "TABEI", url: taibeiUrl, logo: taibei },
  { name: "Taikai", url: taikaiUrl, logo: taikai, maxHeight: 90 },
  { name: "Unlock", url: unlockUrl, logo: unlock },
  { name: "Block Booster", url: blockBoosterUrl, logo: blockBooster },
  { name: "BuZhiDAO", url: bzdUrl, logo: BuZhiDAO },
  { name: "Gen3", url: gen3Url, logo: gen3, maxHeight: 55 },
  { name: "Matters Lab", url: mattersLabUrl, logo: mattersLab },
  { name: "Protico", url: proticoUrl, logo: protico },
  { name: "Zombit", url: zombitUrl, logo: zombit },
  { name: "動區", url: blocktempoUrl, logo: blocktempo },
  { name: "腦哥", url: brainCryptoUrl, logo: brainCrypto },
  { name: "鏈新聞", url: abmediaUrl, logo: abmedia, maxHeight: 80 },
  { name: "Represent", url: representUrl, logo: represent },
];

export default partners;
