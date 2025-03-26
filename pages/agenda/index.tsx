import Agendas from "@/components/AgendaPage/Agendas";
import Layout from "@/components/Layout";
import { ApolloWrapper } from "@/components/providers/apollo";

const Agenda = () => {
  return (
    <ApolloWrapper pageProps={{ initialApolloState: null }}>
      <Agendas />
    </ApolloWrapper>
  );
};

Agenda.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Agenda;
