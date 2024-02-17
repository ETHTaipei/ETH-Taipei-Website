import Application from "@/components/GoldCardPage/Application";
import Banner from "@/components/GoldCardPage/Banner";
import FAQ from "@/components/GoldCardPage/FAQ";
import Subsidy from "@/components/GoldCardPage/Subsidy";

const GoldCard = () => {
  return (
    <div>
      <Banner />
      <Subsidy />
      <Application />
      <FAQ />
    </div>
  );
};

export default GoldCard;
