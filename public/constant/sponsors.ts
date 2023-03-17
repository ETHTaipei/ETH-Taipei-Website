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
} from "./urls";

import code4Rena from "@/public/images/code4Rena.png";
import appWorks from "@/public/images/appWorks.png";
import tenderly from "@/public/images/tenderly.png";
import autopass from "@/public/images/autopass.png";
import termStructure from "@/public/images/termStructure.png";
import selene from "@/public/images/selene.png";
import perpetual from "@/public/images/perpetual.png";
import quantstamp from "@/public/images/quantstamp.png";

import { StaticImageData } from "next/image";

type OrganizerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
};

const organizers: OrganizerProps[] = [
  { name: "AppWorks", url: appWorksUrl, logo: appWorks },
  { name: "Autopass", url: autopassUrl, logo: autopass },
  { name: "code4Rena", url: code4renaUrl, logo: code4Rena },
  { name: "perpetual", url: perpetualUrl, logo: perpetual },
  { name: "quantstamp", url: quantstampUrl, logo: quantstamp },
  { name: "Selene", url: seleneUrl, logo: selene },
  { name: "Tenderly", url: tenderlyUrl, logo: tenderly },
  { name: "Term Structure", url: termStructureUrl, logo: termStructure },
];

export default organizers;
