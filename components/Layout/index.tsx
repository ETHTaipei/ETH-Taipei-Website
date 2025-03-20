import styled from "styled-components";
import Header from "./Header";
import Banner from "@/components/HomePage/Banner";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Banner />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`;
