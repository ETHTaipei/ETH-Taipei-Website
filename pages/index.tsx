import Activities from "@/components/New/HomePage/Activities";
import Community from "@/components/New/HomePage/Community";
import Contributors from "@/components/New/HomePage/Contributors";
import Introduction from "@/components/New/HomePage/Introduction";
import Organizers from "@/components/New/HomePage/Organizers";
import Participation from "@/components/New/HomePage/Participation";
import Partners from "@/components/New/HomePage/Partners";
import Recap from "@/components/New/HomePage/Recap";
import Speakers from "@/components/New/HomePage/Speakers";
import Sponsors from "@/components/New/HomePage/Sponsors";
import Venue from "@/components/New/HomePage/Venue";
import Layout from "@/components/New/Layout";

const Home = () => {
  return (
    <div>
      <Recap />
      <Introduction />
      <Activities />
      <Speakers />
      <Venue />
      <Sponsors />
      <Partners />
      <Organizers />
      <Contributors />
      <Participation />
      <Community />
    </div>
  );
};

Home.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Home;
