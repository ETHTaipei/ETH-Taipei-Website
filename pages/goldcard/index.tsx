import Application from "@/components/GoldCardPage/Application";
import GoldCardBanner from "@/components/GoldCardPage/Banner";
import FAQ from "@/components/GoldCardPage/FAQ";
import Intro from "@/components/GoldCardPage/Intro";
import Subsidy from "@/components/GoldCardPage/Subsidy";
import Layout from "@/components/New/Layout";

const GoldCard = () => {
  return (
    <div>
      <GoldCardBanner />
      <Intro />
      <Subsidy />
      <Application />
      <FAQ />
    </div>
  );
};

GoldCard.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default GoldCard;
