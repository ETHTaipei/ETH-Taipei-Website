import { StaticImageData } from "next/image";

import hsiaoWeiWang from "@/public/images/Hsiao-WeiWang.png";
import vivian from "@/public/images/vivian.png";
import wanseob from "@/public/images/wanseob.png";
import balalKhan from "@/public/images/balalKhan.png";
import chrisTam from "@/public/images/chrisTam.png";
import anderson from "@/public/images/anderson.png";
import danieleUgolini from "@/public/images/danieleUgolini.png";
import cathie from "@/public/images/cathie.png";
import guiltygyoza from "@/public/images/guiltygyoza.png";
import savio from "@/public/images/savio.png";
import shotaroGranzierNakajima from "@/public/images/shotaroGranzier-Nakajima.png";

type SpeakerProps = {
  name: string;
  company: string;
  src: StaticImageData;
};

const speakers: SpeakerProps[] = [
  { name: "Anderson Chen", company: "Diamond Protocol", src: anderson },
  { name: "Balal Khan", company: "ZKEX", src: balalKhan },
  { name: "Cathie", company: "zkMachineLearning", src: cathie },
  { name: "Chris Tam", company: "BTQ", src: chrisTam },
  { name: "Daniele Ugolini", company: "Rysk Finance", src: danieleUgolini },
  { name: "guiltygyoza", company: "Topology", src: guiltygyoza },
  { name: "Hsiao-Wei Wang", company: "Ethereum Foundation", src: hsiaoWeiWang },
  { name: "Savio", company: "Noir / Aztec", src: savio },
  {
    name: `Shotaro Granzier-Nakajima`,
    company: "Kleros",
    src: shotaroGranzierNakajima,
  },
  { name: "Vivian", company: "Ethereum Foundation", src: vivian },
  { name: "Wanseob", company: "Ethereum Foundation", src: wanseob },
];

export default speakers;
