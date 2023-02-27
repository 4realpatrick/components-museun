import React from "react";
import * as styled from "./styled.st";
const Nav: React.FC = () => {
  return (
    <styled.navWrapper>
      <styled.navItem to="">Home</styled.navItem>
      <styled.navItem to="button">Button</styled.navItem>
      <styled.navItem to="divider">Divider</styled.navItem>
      <styled.navItem to="to-top">ToTop</styled.navItem>
      <styled.navItem to="banner">Banner</styled.navItem>
    </styled.navWrapper>
  );
};
export default Nav;
