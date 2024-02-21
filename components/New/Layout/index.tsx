import { ApolloWrapper } from "@/components/providers/apollo";

import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <ApolloWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ApolloWrapper>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  @media (max-width: 992px) {
    padding-top: 60px;
  }
`;
