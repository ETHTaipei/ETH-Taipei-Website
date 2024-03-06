import Application from "@/components/GoldCardPage/Application";
import GoldCardBanner from "@/components/GoldCardPage/Banner";
import FAQ from "@/components/GoldCardPage/FAQ";
import Intro from "@/components/GoldCardPage/Intro";
import Subsidy from "@/components/GoldCardPage/Subsidy";
import FloatingButton from "@/components/New/HomePage/FloatingBotton";
import Layout from "@/components/New/Layout";
import Banner from "@/components/New/HomePage/Banner";

const GoldCard = () => {
  return (
    <div>
      <FloatingButton />
      <Banner/>
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
