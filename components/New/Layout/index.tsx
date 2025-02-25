import { ApolloWrapper } from "@/components/providers/apollo";

import styled from "styled-components";
import Header from "./Header";
import Banner from "@/components/New/HomePage/Banner";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <ApolloWrapper>
      <Header />
      <Banner />
      <Main>{children}</Main>
    </ApolloWrapper>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`;
