import Application from "@/components/GoldCardPage/Application";
import Banner from "@/components/GoldCardPage/Banner";
import FAQ from "@/components/GoldCardPage/FAQ";
import Intro from "@/components/GoldCardPage/Intro";
import Subsidy from "@/components/GoldCardPage/Subsidy";

const GoldCard = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <Subsidy />
      <Application />
      <FAQ />
    </div>
  );
};

export default GoldCard;
