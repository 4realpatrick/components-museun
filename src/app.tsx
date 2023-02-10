import React from "react";
import Container from "./components/container";
import Button from "./components/button";
import { ThemeProvider } from "styled-components";
import {
  PCGlobalStyleConstant,
  MobileGlobalStyleConstant,
  GlobalStyle,
} from "./global.st";
import { Link, Outlet } from "react-router-dom";
const App: React.FCWithChildren = ({
  children
}) => {
  console.log("children:", children);
  return (
    <ThemeProvider
      theme={{
        pc: PCGlobalStyleConstant,
        mobile: MobileGlobalStyleConstant,
      }}
    >
      <GlobalStyle />
      欢迎来到我的React组件库
      <Link to="button">to button</Link>
      <Outlet />
    </ThemeProvider>
  );
};
export default App;
