import Activities from "@/components/New/HomePage/Activities";
import Banner from "@/components/New/HomePage/Banner";
import FloatingButton from "@/components/New/HomePage/FloatingBotton";
import Introduction from "@/components/New/HomePage/Introduction";
import Participation from "@/components/New/HomePage/Participation";
import Partners from "@/components/New/HomePage/Partners";
import Recap from "@/components/New/HomePage/Recap";
import Speakers from "@/components/New/HomePage/Speakers";
import Sponsors from "@/components/New/HomePage/Sponsors";
import Venue from "@/components/New/HomePage/Venue";
import Layout from "@/components/New/Layout";

const New = () => {
  return (
    <div>
      <FloatingButton />
      <Banner />
      <Recap />
      <Introduction />
      <Activities />
      <Speakers />
      <Venue />
      <Sponsors />
      <Partners />
      <Participation />
    </div>
  );
};

New.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default New;
