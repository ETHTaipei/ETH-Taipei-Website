import Activities from "@/components/New/HomePage/Activities";
import Banner from "@/components/New/HomePage/Banner";
import Introduction from "@/components/New/HomePage/Introduction";
import Layout from "@/components/New/Layout";

const New = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <Activities />
    </div>
  );
};

New.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default New;
