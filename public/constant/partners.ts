import { taikaiUrl, unlockUrl } from "./urls";

import taikai from "@/public/images/taikai.png";
import unlock from "@/public/images/unlock.png";

import { StaticImageData } from "next/image";

type PartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  height?: number;
};

const partners: PartnerProps[] = [
  { name: "Taikai", url: taikaiUrl, logo: taikai, height: 40 },
  { name: "Unlock", url: unlockUrl, logo: unlock },
];

export default partners;
