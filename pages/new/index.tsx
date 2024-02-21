import Banner from "@/components/New/HomePage/Banner";
import Layout from "@/components/New/Layout";

const New = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

New.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default New;
