import {
  web3plusUrl,
  cryptoCityUrl,
  tbaUrl,
  blockbeatsUrl,
  nineupUrl,
  coinnewshkUrl,
  panewsUrl,
  coinspeakerUrl,
  blockbarUrl,
  decryptUrl,
  twBlockchainAssociationUrl,
  dlnewsUrl,
  lydianLabsUrl,
  todayInDefiUrl,
  cryptonewsUrl,
  acebeakerUrl,
} from "./urls";

import web3Plus from "@/public/images/web3Plus.png";
import cryptoCity from "@/public/images/cryptoCity.png";
import tba from "@/public/images/tba.png";
import coinnewshk from "@/public/images/coinnewshk.png";
import blockbeats from "@/public/images/blockbeats.png";
import nineup from "@/public/images/nineup.png";
import pan from "@/public/images/panews.png";
import coinspeaker from "@/public/images/Coinspeaker.png";
import blockbar from "@/public/images/blockbar.png";
import decrypt from "@/public/images/decrypt.png";
import twBlockchainAssociation from "@/public/images/taiwanBlockchainAssociation.png";
import dlNews from "@/public/images/dlNews.png";
import lydianLabs from "@/public/images/lydianLabs.png";
import todayInDefi from "@/public/images/todayInDefi.png";
import cryptonews from "@/public/images/cryptonews.png";
import acebeaker from "@/public/images/acebeaker.png";

import { StaticImageData } from "next/image";

type MediaPartnerProps = {
  name: string;
  url: string;
  logo: StaticImageData;
  maxHeight?: number;
};

const mediaPartners: MediaPartnerProps[] = [
  // { name: "9up.io", url: nineupUrl, logo: nineup },
  // { name: "blockbar", url: blockbarUrl, logo: blockbar },
  // { name: "Coin Speaker", url: coinspeakerUrl, logo: coinspeaker },
  // { name: "decrypt", url: decryptUrl, logo: decrypt },
  // { name: "DLNews", url: dlnewsUrl, logo: dlNews },
  // { name: "Lyain Labs", url: lydianLabsUrl, logo: lydianLabs },
  // { name: "PANews", url: panewsUrl, logo: pan },
  // { name: "Today in defi", url: todayInDefiUrl, logo: todayInDefi },
  // { name: "Web3+", url: web3plusUrl, logo: web3Plus },
  // { name: "Crypto City", url: cryptoCityUrl, logo: cryptoCity },
  // {
  //   name: "台灣區塊鏈協會",
  //   url: twBlockchainAssociationUrl,
  //   logo: twBlockchainAssociation,
  // },
  // { name: "Taiwan Blockchain Academia", url: tbaUrl, logo: tba },
  // { name: "律動", url: blockbeatsUrl, logo: blockbeats },
  // { name: "幣訊", url: coinnewshkUrl, logo: coinnewshk },
  // { name: "Cryptonews", url: cryptonewsUrl, logo: cryptonews },
  // { name: "AceBeaker", url: acebeakerUrl, logo: acebeaker },
];

export default mediaPartners;
