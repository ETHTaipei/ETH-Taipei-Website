import Activities from "@/components/HomePage/Events";
import Community from "@/components/HomePage/CommunitySupport";
import Contributors from "@/components/HomePage/PastContributors";
import Introduction from "@/components/HomePage/Introduction";
import Organizers from "@/components/HomePage/Organizers";
import Participation from "@/components/HomePage/CallToAction";
import Partners from "@/components/HomePage/Partners";
import Recap from "@/components/HomePage/Recap";
import Speakers from "@/components/HomePage/Speakers";
import Sponsors from "@/components/HomePage/Sponsors";
import Venue from "@/components/HomePage/Venue";
import Layout from "@/components/Layout";

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
