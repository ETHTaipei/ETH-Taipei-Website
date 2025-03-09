import VisaInfoFAQ from "@/components/VisaInfoPage/VisaInfoFAQ";
import Layout from "@/components/Layout";

const VisaInfo = () => {
  return <VisaInfoFAQ />;
};

VisaInfo.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default VisaInfo;
