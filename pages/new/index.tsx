import Activities from "@/components/New/HomePage/Activities";
import Banner from "@/components/New/HomePage/Banner";
import Introduction from "@/components/New/HomePage/Introduction";
import Recap from "@/components/New/HomePage/Recap";
import Layout from "@/components/New/Layout";

const New = () => {
  return (
    <div>
      <Banner />
      <Recap />
      <Introduction />
      <Activities />
    </div>
  );
};

New.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default New;
