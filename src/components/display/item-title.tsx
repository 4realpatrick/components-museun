import React from "react";
import * as st from "./styled.st";
interface IProps {
  title: string;
}
const DisplayItemTitle: React.FCWithChildren<IProps> = ({ title }) => {
  return (
    <st.container>
      <st.itemHead />
      <st.title>{title}</st.title>
    </st.container>
  );
};
export default DisplayItemTitle;
