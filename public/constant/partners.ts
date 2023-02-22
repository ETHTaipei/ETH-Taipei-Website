import { taikaiUrl, unlockUrl } from "./urls";

import taikai from "@/public/images/taikai.png";
import unlock from "@/public/images/unlock.png";

import { StaticImageData } from "next/image";

type PartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
};

const partners: PartnerProps[] = [
  { name: "Taikai", url: taikaiUrl, logo: taikai },
  { name: "Unlock", url: unlockUrl, logo: unlock },
];

export default partners;
