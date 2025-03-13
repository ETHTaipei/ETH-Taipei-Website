import Agendas from "@/components/AgendaPage/Agendas";
import Layout from "@/components/Layout";

const Agenda = () => {
  return <Agendas />;
};

Agenda.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Agenda;
