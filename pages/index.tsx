import Introduction from "@/components/HomePage/Introduction";
import Recap from "@/components/HomePage/Recap";
import Speakers from "@/components/HomePage/Speakers";
import {
  Events2026,
  Home2026Hero,
} from "@/components/HomePage/Home2026";
import { BrandBgVideo } from "@/components/HomePage/Video";
import { SPEAKER_QUERY } from "@/components/hooks/useSpeakers";
import { FLAGS } from "@/public/constant/flags";
import { ApolloWrapper, getInitialData } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

export const getStaticProps: GetStaticProps = async () => {
  // Only pre-fetch speakers when the section is enabled; otherwise the year-templated
  // query (e.g. speakers2026) will 400 against Hygraph until the collection is seeded.
  const initialApolloState = FLAGS.showSpeakers
    ? await getInitialData([SPEAKER_QUERY])
    : {};

  return {
    props: {
      initialApolloState,
    },
    revalidate: 3600, // revalidate every hour
  };
};

const DynamicVenue = dynamic(() => import("@/components/HomePage/Venue"));
const DynamicSponsors = dynamic(() => import("@/components/HomePage/Sponsors"));
const DynamicPartners = dynamic(() => import("@/components/HomePage/Partners"));
const DynamicOrganizers = dynamic(
  () => import("@/components/HomePage/Organizers")
);
const DynamicPastContributors = dynamic(
  () => import("@/components/HomePage/PastContributors")
);
const DynamicCallToAction = dynamic(
  () => import("@/components/HomePage/CallToAction")
);
const DynamicCommunitySupport = dynamic(
  () => import("@/components/HomePage/CommunitySupport")
);

const Home = ({ initialApolloState }: any) => {
  return (
    <ApolloWrapper pageProps={{ initialApolloState }}>
      <div className="home-2026">
        <Home2026Hero />
        <Events2026 />
        <Recap />
        <Introduction />
        <Speakers />
        <DynamicVenue />
        <DynamicSponsors />
        <DynamicPartners />
        <DynamicOrganizers />
        <DynamicPastContributors />
        <DynamicCallToAction />
        <DynamicCommunitySupport />
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
