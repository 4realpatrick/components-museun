import React from "react";
import * as styled from "./styled.st";
const Container: React.FCWithChildren = ({ children }) => {
  return <styled.wrapper>{children}</styled.wrapper>;
};
export default Container;
