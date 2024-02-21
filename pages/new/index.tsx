import Layout from "@/components/New/Layout";

const New = () => {
  return <div>New Design</div>;
};

New.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default New;
