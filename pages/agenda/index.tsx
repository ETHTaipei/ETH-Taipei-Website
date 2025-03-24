import Agendas from "@/components/AgendaPage/Agendas";
import Layout from "@/components/Layout";
import { ApolloWrapper, getInitialData } from "@/components/providers/apollo";
import type { GetStaticProps } from "next";

import { CONFERENCE_QUERY } from "@/components/hooks/useConferences";

export const getStaticProps: GetStaticProps = async () => {
  const initialApolloState = await getInitialData([CONFERENCE_QUERY]);
  return {
    props: {
      initialApolloState,
    },
    revalidate: 3600,
  };
};

const Agenda = ({ initialApolloState }: any) => {
  return (
    <ApolloWrapper pageProps={{ initialApolloState }}>
      <Agendas />
    </ApolloWrapper>
  );
};

Agenda.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Agenda;
