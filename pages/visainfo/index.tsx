import VisaInfoPage from "@/components/VisaInfoPage";
import {
  type CfpPhase,
  resolveCfpPhase,
} from "@/components/hooks/useCfpPhase";
import type { GetStaticProps } from "next";

type VisaInfoProps = {
  initialCfpPhase: CfpPhase;
};

export const getStaticProps: GetStaticProps<VisaInfoProps> = async () => ({
  props: {
    initialCfpPhase: resolveCfpPhase(),
  },
});

const VisaInfo = ({ initialCfpPhase }: VisaInfoProps) => {
  return <VisaInfoPage initialCfpPhase={initialCfpPhase} />;
};

VisaInfo.getLayout = (page: React.ReactNode) => page;

export default VisaInfo;
