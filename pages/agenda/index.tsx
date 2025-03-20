import Agendas from "@/components/AgendaPage/Agendas";
import Layout from "@/components/Layout";
import { ApolloWrapper, initializeApollo } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";

import { CONFERENCE_QUERY } from "@/components/hooks/useConferences";

async function getInitialData() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query({ query: CONFERENCE_QUERY });
    return apolloClient.cache.extract();
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

const Agenda = ({ initialApolloState }: any) => {
  return (
    <ApolloWrapper pageProps={{ initialApolloState }}>
      <Agendas />
    </ApolloWrapper>
  );
};

Agenda.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps = async () => {
  const initialApolloState = await getInitialData();
  return {
    props: {
      initialApolloState,
    },
    revalidate: 3600,
  };
};

export default Agenda;
