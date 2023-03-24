import { ethereumFoundationUrl, ethPlanetUrl, tpeUrl } from "./urls";

import tpe from "@/public/images/taipei-ethereum.png";
import ethPlanet from "@/public/images/ethPlanet.png";
import ethereumFoundation from "@/public/images/ethereumFoundation.png";

import { StaticImageData } from "next/image";

type CommunitySupportsProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  maxHeight?: number;
};

const communitySupports: CommunitySupportsProps[] = [
  { name: "Taipei Ethereum Meetup", url: tpeUrl, logo: tpe },
  {
    name: "Ethereum Foundation",
    url: ethereumFoundationUrl,
    logo: ethereumFoundation,
  },
  { name: "ETHPlanet", url: ethPlanetUrl, logo: ethPlanet },
];

export default communitySupports;
