import Events from "@/components/HomePage/Events";
import CommunitySupport from "@/components/HomePage/CommunitySupport";
import PastContributors from "@/components/HomePage/PastContributors";
import Introduction from "@/components/HomePage/Introduction";
import Organizers from "@/components/HomePage/Organizers";
import CallToAction from "@/components/HomePage/CallToAction";
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
      <Events />
      <Speakers />
      <Venue />
      <Sponsors />
      <Partners />
      <Organizers />
      <PastContributors />
      <CallToAction />
      <CommunitySupport />
    </div>
  );
};

Home.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Home;
