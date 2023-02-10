import Button from "&/components/button";
import React from "react";
import * as styled from "./style.st";
const ButtonPage: React.FC = () => {
  return <styled.wrapper>
    <Button title="Primary-super" size="super"/>
    <Button title="Primary-large" size="large"/>
    <Button title="Primary-medium" size="medium"/>
    <Button title="Primary-small" size="small"/>
  </styled.wrapper>
}
export default ButtonPage;