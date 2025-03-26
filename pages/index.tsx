import Events from "@/components/HomePage/Events";
import CommunitySupport from "@/components/HomePage/CommunitySupport";
import PastContributors from "@/components/HomePage/PastContributors";
import Introduction from "@/components/HomePage/Introduction";
import Organizers from "@/components/HomePage/Organizers";
import CallToAction from "@/components/HomePage/CallToAction";
import Partners from "@/components/HomePage/Partners";
import Recap from "@/components/HomePage/Recap";
import Speakers from "@/components/HomePage/Speakers";
import Sponsors from "@/components/HomePage/Sponsors";
import Venue from "@/components/HomePage/Venue";
import Layout from "@/components/Layout";
import { SPEAKER_QUERY } from "@/components/hooks/useSpeakers";
import { SPONSOR_QUERY } from "@/components/hooks/useSponsors";
import { ApolloWrapper, getInitialData } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

export const getStaticProps: GetStaticProps = async () => {
  const initialApolloState = await getInitialData([
    SPEAKER_QUERY,
    SPONSOR_QUERY,
  ]);

  return {
    props: {
      initialApolloState,
    },
    revalidate: 3600, // revalidate every hour
  };
};

const DynamicVenue = dynamic(() => import("@/components/HomePage/Venue"));
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
      <Sponsors />
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
