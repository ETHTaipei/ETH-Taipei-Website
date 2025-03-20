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
import {
  PARTNER_QUERY,
  MEDIAPARTNER_QUERY,
  COMMUNITY_QUERY,
} from "@/components/hooks/usePartners";
import {
  ORGANIZER_QUERY,
  PASTCONTRIBUTOR_QUERY,
} from "@/components/hooks/useContributors";
import { ApolloWrapper, initializeApollo } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";

async function getInitialData() {
  const apolloClient = initializeApollo();

  try {
    for (const query of [
      SPEAKER_QUERY,
      SPONSOR_QUERY,
      PARTNER_QUERY,
      MEDIAPARTNER_QUERY,
      COMMUNITY_QUERY,
      ORGANIZER_QUERY,
      PASTCONTRIBUTOR_QUERY,
    ]) {
      await apolloClient.query({ query });
      // Add delay between requests to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return apolloClient.cache.extract();
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const initialApolloState = await getInitialData();

  return {
    props: {
      initialApolloState,
    },
    revalidate: 3600, // revalidate every hour
  };
};

const Home = ({ initialApolloState }: any) => {
  return (
    <ApolloWrapper pageProps={{ initialApolloState }}>
      <Recap />
      <Introduction />
      <Events />
      <Speakers />
      <Venue />
      <Sponsors />
      <Partners />
      <Organizers />
      <PastContributors />
      <CallToAction />
      <CommunitySupport />
    </ApolloWrapper>
  );
};

Home.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Home;
