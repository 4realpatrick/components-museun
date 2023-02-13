import React from "react";
import * as st from "./styled.st";
import Title from "./item-title";
interface IProps {
  title: string;
  desc?: string;
  inline?: boolean;
}
const DisplayBlock: React.FCWithChildren<IProps> = (props) => {
  const { desc, children, inline = true } = props;
  return (
    <st.block>
      <Title {...props} />
      {!!desc && <st.description>{desc}</st.description>}
      <st.displayCase inline={inline}>{children}</st.displayCase>
    </st.block>
  );
};
export default React.memo(DisplayBlock);
