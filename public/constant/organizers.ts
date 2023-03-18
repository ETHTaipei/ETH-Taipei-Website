import {
  diamondUrl,
  furucomboUrl,
  imTokenUrl,
  lyraUrl,
  perpetualUrl,
  quantstampUrl,
  ethereumOrgUrl,
} from "./urls";

import yenWen from "@/public/images/YenWen.png";
import hsiaoWei from "@/public/images/Hsiao-WeiWang.png";
import martinet from "@/public/images/Martinet.png";
import anderson from "@/public/images/anderson.png";
import kimi from "@/public/images/Kimi.png";
import anton from "@/public/images/Anton.png";
import changWu from "@/public/images/ChangWu.png";
import hsuanTing from "@/public/images/HsuanTing.png";
import hana from "@/public/images/Hana.png";

import { StaticImageData } from "next/image";

type OrganizerProps = {
  name: string;
  title: string;
  organization: string;
  src: StaticImageData;
  twitter?: string;
  companyLink?: string;
};

const organizers: OrganizerProps[] = [
  {
    name: "Yen Wen",
    title: "Founder",
    organization: "Perpetual Protocol",
    src: yenWen,
    twitter: "https://twitter.com/tempofeng",
    companyLink: perpetualUrl,
  },
  {
    name: "Hsiao-Wei Wang",
    title: "Researcher",
    organization: "Ethereum Foundation",
    src: hsiaoWei,
    twitter: "https://twitter.com/icebearhww",
    companyLink: ethereumOrgUrl,
  },
  {
    name: "Martinet",
    title: "Head of DevRel",
    organization: "Quantstamp",
    src: martinet,
    twitter: "https://twitter.com/martinetlee",
    companyLink: quantstampUrl,
  },
  {
    name: "Anderson Chen",
    title: "Co-founder",
    organization: "Diamond Protocol",
    src: anderson,
    twitter: "https://twitter.com/MrAndersonChen",
    companyLink: diamondUrl,
  },
  {
    name: "Kimi",
    title: "Researcher",
    organization: "Ethereum Foundation",
    src: kimi,
    twitter: "https://twitter.com/KimiWu15",
    companyLink: ethereumOrgUrl,
  },
  {
    name: "Anton",
    title: "Solidity Developer",
    organization: "Lyra",
    src: anton,
    twitter: "https://twitter.com/antonttc",
    companyLink: lyraUrl,
  },
  {
    name: "Chang Wu",
    title: "Chief Scientist",
    organization: "ImToken",
    src: changWu,
    twitter: "https://twitter.com/changwu_tw",
    companyLink: imTokenUrl,
  },
  {
    name: "Hsuan Ting",
    title: "Founder",
    organization: "Furucombo",
    src: hsuanTing,
    twitter: "https://twitter.com/hsuantingchu",
    companyLink: furucomboUrl,
  },
  {
    name: "Hana",
    title: "Marketing",
    organization: "Perpetual Protocol",
    src: hana,
    twitter: "https://twitter.com/hanamizuki",
    companyLink: perpetualUrl,
  },
];

export default organizers;
