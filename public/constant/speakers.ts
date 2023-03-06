import { StaticImageData } from "next/image";

import hsiaoWeiWang from "@/public/images/Hsiao-WeiWang.png";
import vivian from "@/public/images/vivian.png";
import wanseob from "@/public/images/wanseob.png";
import balaKhan from "@/public/images/balaKhan.png";
import chrisTam from "@/public/images/chrisTam.png";
import anderson from "@/public/images/anderson.png";
import danieleUgolini from "@/public/images/danieleUgolini.png";
import cathie from "@/public/images/cathie.png";
import guiltygyoza from "@/public/images/guiltygyoza.png";

type SpeakerProps = {
  name: string;
  company: string;
  src: StaticImageData;
};

const speakers: SpeakerProps[] = [
  { name: "Hsiao-Wei Wang", company: "Ethereum Foundation", src: hsiaoWeiWang },
  { name: "Cathie", company: "Ethereum Foundation", src: cathie },
  { name: "Vivian", company: "Ethereum Foundation", src: vivian },
  { name: "Wanseob", company: "Ethereum Foundation", src: wanseob },
  { name: "guiltygyoza", company: "Topology", src: guiltygyoza },
  { name: "Daniele Ugolini", company: "Rysk Finance", src: danieleUgolini },
  { name: "Anderson Chen", company: "Diamond Protocol", src: anderson },
  { name: "Chris Tam", company: "BTQ", src: chrisTam },
];

export default speakers;
