import Introduction from "@/components/HomePage/Introduction";
import Recap from "@/components/HomePage/Recap";
import {
  Events2026,
  Home2026Hero,
} from "@/components/HomePage/Home2026";
import { BrandBgVideo } from "@/components/HomePage/Video";
import {
  type CfpPhase,
  resolveCfpPhase,
} from "@/components/hooks/useCfpPhase";
import { ApolloWrapper } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

type HomeProps = {
  initialApolloState: Record<string, unknown>;
  initialCfpPhase: CfpPhase;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      initialApolloState: {},
      initialCfpPhase: resolveCfpPhase(),
    },
    revalidate: 3600, // revalidate every hour
  };
};

const DynamicVenue = dynamic(() => import("@/components/HomePage/Venue"));
const DynamicSponsors = dynamic(() => import("@/components/HomePage/Sponsors"));
const DynamicPartners = dynamic(() => import("@/components/HomePage/Partners"));
const DynamicCallToAction = dynamic(
  () => import("@/components/HomePage/CallToAction")
);
const DynamicCommunitySupport = dynamic(
  () => import("@/components/HomePage/CommunitySupport")
);
const DynamicPartnerSection = dynamic(
  () => import("@/components/HomePage/PartnerSection")
);
const DynamicSpeakerSection = dynamic(
  () => import("@/components/HomePage/SpeakerSection")
);

const Home = ({ initialApolloState, initialCfpPhase }: HomeProps) => {
  return (
    <ApolloWrapper pageProps={{ initialApolloState }}>
      <div className="home-2026">
        <Home2026Hero initialCfpPhase={initialCfpPhase} />
        <DynamicSpeakerSection />
        <DynamicVenue />
        <Introduction />
        <Events2026 />
        <Recap />
        <DynamicSponsors />
        <DynamicPartners />
        <DynamicPartnerSection />
        <DynamicCommunitySupport />
        <DynamicCallToAction />
      </div>
    </ApolloWrapper>
  );
};

Home.getLayout = (page: React.ReactNode) => (
  <>
    <BrandBgVideo />
    {page}
  </>
);

export default Home;
