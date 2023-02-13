import React from "react";
import { ThemeProvider } from "styled-components";
import Nav from "../../components/nav";
import {
  PCGlobalStyleConstant,
  MobileGlobalStyleConstant,
  GlobalStyle,
} from "./global.st";
import * as styled from "./styled.st";
import { Outlet, useLocation } from "react-router-dom";
const Home: React.FCWithChildren = () => {
  const location = useLocation();
  return (
    <ThemeProvider
      theme={{
        pc: PCGlobalStyleConstant,
        mobile: MobileGlobalStyleConstant,
      }}
    >
      <GlobalStyle />
      <Nav />
      {location.pathname === "/" && (
        <styled.container>
          <styled.title>Welcome 2 my React Components lib 🎉</styled.title>
          <styled.description>
            Please select a component from nav for preview
          </styled.description>
        </styled.container>
      )}
      <div style={{ margin: 50 }}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};
export default Home;
