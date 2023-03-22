import {
  code4renaUrl,
  lyraUrl,
  perpetualUrl,
  quantstampUrl,
  tpeUrl,
  appWorksUrl,
  tenderlyUrl,
  autopassUrl,
  termStructureUrl,
  seleneUrl,
  zommaUrl,
} from "./urls";

import code4Rena from "@/public/images/code4Rena.png";
import appWorks from "@/public/images/appWorks.png";
import tenderly from "@/public/images/tenderly.png";
import autopass from "@/public/images/autopass.png";
import termStructure from "@/public/images/termStructure.png";
import selene from "@/public/images/selene.png";
import perpetual from "@/public/images/perpetual.png";
import quantstamp from "@/public/images/quantstamp.png";
import zomma from "@/public/images/zomma.png";

import { StaticImageData } from "next/image";

type OrganizerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  width: number;
  height: number;
};

const goldSponsors: OrganizerProps[] = [
  {
    name: "Autopass",
    url: autopassUrl,
    logo: autopass,
    width: 363,
    height: 150,
  },
  {
    name: "Tenderly",
    url: tenderlyUrl,
    logo: tenderly,
    width: 400,
    height: 150,
  },
  {
    name: "Term Structure",
    url: termStructureUrl,
    logo: termStructure,
    width: 418,
    height: 150,
  },
];

const silverSponsors: OrganizerProps[] = [
  {
    name: "quantstamp",
    url: quantstampUrl,
    logo: quantstamp,
    width: 359,
    height: 120,
  },
  { name: "Selene", url: seleneUrl, logo: selene, width: 291, height: 120 },
];

const bronzeSponsors: OrganizerProps[] = [
  {
    name: "AppWorks",
    url: appWorksUrl,
    logo: appWorks,
    width: 203,
    height: 80,
  },
  {
    name: "code4Rena",
    url: code4renaUrl,
    logo: code4Rena,
    width: 236,
    height: 80,
  },
  {
    name: "perpetual",
    url: perpetualUrl,
    logo: perpetual,
    width: 342,
    height: 80,
  },
  {
    name: "zomma",
    url: zommaUrl,
    logo: zomma,
    width: 162,
    height: 80,
  },
];

export { goldSponsors, silverSponsors, bronzeSponsors };
