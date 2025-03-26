import Events from "@/components/HomePage/Events";
import Introduction from "@/components/HomePage/Introduction";
import Recap from "@/components/HomePage/Recap";
import Speakers from "@/components/HomePage/Speakers";
import Layout from "@/components/Layout";
import { SPEAKER_QUERY } from "@/components/hooks/useSpeakers";
import { SPONSOR_QUERY } from "@/components/hooks/useSponsors";
import { ApolloWrapper, getInitialData } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

export const getStaticProps: GetStaticProps = async () => {
  // only pre-fetch speakers for now for performance
  const initialApolloState = await getInitialData([SPEAKER_QUERY]);

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
      <Recap />
      <Introduction />
      <Events />
      <Speakers />
      <DynamicVenue />
      <DynamicSponsors />
      <DynamicPartners />
      <DynamicOrganizers />
      <DynamicPastContributors />
      <DynamicCallToAction />
      <DynamicCommunitySupport />
    </ApolloWrapper>
  );
};

Home.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Home;
