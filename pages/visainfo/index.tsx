import VisaInfoPage from "@/components/VisaInfoPage";
import Layout from "@/components/Layout";

const VisaInfo = () => {
  return <VisaInfoPage />;
};

VisaInfo.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default VisaInfo;
