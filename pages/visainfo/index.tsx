import VisaInfoFAQ from "@/components/New/VisaInfoPage/VisaInfoFAQ";
import Layout from "@/components/New/Layout";

const VisaInfo = () => {
  return <VisaInfoFAQ />;
};

VisaInfo.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default VisaInfo;
