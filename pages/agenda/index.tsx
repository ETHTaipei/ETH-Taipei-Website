import Agendas from "@/components/AgendaPage/Agendas";
import Layout from "@/components/New/Layout";
import React from "react";

const Agenda = () => {
  return (
    <div id="info">
      <Agendas />
    </div>
  );
};

Agenda.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Agenda;
