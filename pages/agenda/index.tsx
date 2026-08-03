import AgendaPage2026 from "@/components/AgendaPage2026";
import {
  type CfpPhase,
  resolveCfpPhase,
} from "@/components/hooks/useCfpPhase";
import type { GetStaticProps } from "next";

type AgendaProps = {
  initialCfpPhase: CfpPhase;
};

export const getStaticProps: GetStaticProps<AgendaProps> = async () => ({
  props: {
    initialCfpPhase: resolveCfpPhase(),
  },
});

const Agenda = ({ initialCfpPhase }: AgendaProps) => {
  return <AgendaPage2026 initialCfpPhase={initialCfpPhase} />;
};

Agenda.getLayout = (page: React.ReactNode) => page;

export default Agenda;
