import React from "react";
import * as styled from "./styled.st";
const Nav: React.FCWithChildren = () => {
  return (
    <styled.navWrapper>
      <styled.navItem to="">Home</styled.navItem>
      <styled.navItem to="button">Button</styled.navItem>
    </styled.navWrapper>
  );
};
export default Nav;
