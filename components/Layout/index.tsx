import styled from "styled-components";
import Header from "./Header";
import { BrandBgVideo } from "@/components/HomePage/Video";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <>
      <BrandBgVideo />
      <Header />
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
