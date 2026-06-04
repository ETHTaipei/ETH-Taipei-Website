import type { GetStaticProps } from "next";

import CommunityPage from "@/components/CommunityPage";
import Layout from "@/components/Layout";
import {
  newsletterFeedUrl,
  temMediumFeedUrl,
} from "@/public/constant/urls";
import { fetchLatestPosts, FeedPost } from "@/public/utils/rss";

type CommunityProps = {
  mediumPosts: FeedPost[];
  newsletterPosts: FeedPost[];
};

export const getStaticProps: GetStaticProps<CommunityProps> = async () => {
  // Fetched at build time and re-fetched hourly via ISR (same cadence as the
  // home page); a feed outage degrades to an empty list, never a build break.
  const [mediumPosts, newsletterPosts] = await Promise.all([
    fetchLatestPosts(temMediumFeedUrl),
    fetchLatestPosts(newsletterFeedUrl),
  ]);

  return {
    props: { mediumPosts, newsletterPosts },
    revalidate: 3600, // revalidate every hour
  };
};

const Community = ({ mediumPosts, newsletterPosts }: CommunityProps) => {
  return (
    <CommunityPage mediumPosts={mediumPosts} newsletterPosts={newsletterPosts} />
  );
};

Community.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Community;
