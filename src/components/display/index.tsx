import React from "react";
import * as st from "./styled.st";
import Title from "./item-title";
interface IProps {
  title: string;
  desc?: string;
}
const DisplayBlock: React.FCWithChildren<IProps> = (props) => {
  const { desc, children } = props;
  return (
    <st.block>
      <Title {...props} />
      {!!desc && <st.description>{desc}</st.description>}
      <st.displayCase>{children}</st.displayCase>
    </st.block>
  );
};
export default React.memo(DisplayBlock);
