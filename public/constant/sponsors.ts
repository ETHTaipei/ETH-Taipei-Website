import {
  code4renaUrl,
  perpetualUrl,
  quantstampUrl,
  appWorksUrl,
  tenderlyUrl,
  autopassUrl,
  termStructureUrl,
  seleneUrl,
  zommaUrl,
  bloctoUrl,
  gnosisChainUrl,
  imTokenUrl,
  dedaubUrl,
  thunderCoreUrl,
  furucomboUrl,
  teaHouseUrl,
  dataverseUrl,
  hashKeyUrl,
  pseUrl,
  taiwanMobileUrl,
  consensysUrl,
  klickKlackUrl,
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
import blocto from "@/public/images/Blocto.png";
import gnosisChain from "@/public/images/gnosisChain.png";
import imToken from "@/public/images/imToken.png";
import dedaub from "@/public/images/dedaub.png";
import thunderCore from "@/public/images/thunderCore.png";
import furcombo from "@/public/images/furcombo.png";
import teaHouse from "@/public/images/teaHouse.png";
import dataverse from "@/public/images/dataverse.png";
import HashKey from "@/public/images/HashKey.png";
import pse from "@/public/images/PSE.png";
import taiwanMobile from "@/public/images/TaiwanMobile.png";
import Consensys from "@/public/images/Consensys.png";
import klickKlack from "@/public/images/KlickKlack.png";

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
    name: "Gnosis Chain",
    url: gnosisChainUrl,
    logo: gnosisChain,
    width: 645,
    height: 180,
  },
  {
    name: "ImToken",
    url: imTokenUrl,
    logo: imToken,
    width: 456,
    height: 160,
  },
  {
    name: "Autopass",
    url: autopassUrl,
    logo: autopass,
    width: 292,
    height: 150,
  },
  {
    name: "Tenderly",
    url: tenderlyUrl,
    logo: tenderly,
    width: 300,
    height: 150,
  },
  {
    name: "Term Structure",
    url: termStructureUrl,
    logo: termStructure,
    width: 300,
    height: 150,
  },
];

const silverSponsors: OrganizerProps[] = [
  {
    name: "DEDAUB",
    url: dedaubUrl,
    logo: dedaub,
    width: 351,
    height: 90,
  },
  {
    name: "HashKey",
    url: hashKeyUrl,
    logo: HashKey,
    width: 215,
    height: 110,
  },
  {
    name: "PSE",
    url: pseUrl,
    logo: pse,
    width: 93,
    height: 90,
  },
  {
    name: "quantstamp",
    url: quantstampUrl,
    logo: quantstamp,
    width: 359,
    height: 120,
  },
  { name: "Selene", url: seleneUrl, logo: selene, width: 291, height: 120 },
  {
    name: "ThunderCore",
    url: thunderCoreUrl,
    logo: thunderCore,
    width: 366,
    height: 100,
  },
  {
    name: "台灣大哥大",
    url: taiwanMobileUrl,
    logo: taiwanMobile,
    width: 212,
    height: 100,
  },
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
    name: "Blocto",
    url: bloctoUrl,
    logo: blocto,
    width: 300,
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
    name: "Consensys",
    url: consensysUrl,
    logo: Consensys,
    width: 136,
    height: 100,
  },
  {
    name: "Dataverse",
    url: dataverseUrl,
    logo: dataverse,
    width: 300,
    height: 75,
  },
  {
    name: "Furucombo",
    url: furucomboUrl,
    logo: furcombo,
    width: 256,
    height: 80,
  },
  {
    name: "可立可",
    url: klickKlackUrl,
    logo: klickKlack,
    width: 188,
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
    name: "Teahouse",
    url: teaHouseUrl,
    logo: teaHouse,
    width: 210,
    height: 80,
  },
  {
    name: "zomma",
    url: zommaUrl,
    logo: zomma,
    width: 300,
    height: 80,
  },
];

export { goldSponsors, silverSponsors, bronzeSponsors };
