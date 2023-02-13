import DisplayBlock from "&/components/display";
import React from "react";
import * as st from "./style.st";
import Divider from "&/components/divider";

const ButtonPage: React.FC = () => {
  return (
    <st.wrapper>
      <DisplayBlock
        title="Divider现在支持三种类型，solid、dash、dot，默认值为solid"
        inline={false}
      >
        <Divider title="Solid Divider" />
        <Divider title="Dash Divider" type="dashed" />
        <Divider title="Dot Divider" type="dotted" />
      </DisplayBlock>
      <DisplayBlock
        title="Orientation 支持center、left、right，默认值为center"
        inline={false}
      >
        <Divider title="Center" />
        <Divider title="Left" orientation="left" />
        <Divider title="Right" orientation="right" />
      </DisplayBlock>
      <DisplayBlock
        title="Offset 仅在orientation设置为left或right的时候使用，offset不能大于95"
        inline={false}
      >
        <Divider title="left & offset 20" orientation="left" offset={20} />
        <Divider title="right & offset 20" orientation="right" offset={20} />
        <Divider title="left & offset 50" orientation="left" offset={50} />
        <Divider title="right & offset 50" orientation="right" offset={50} />
      </DisplayBlock>
      <DisplayBlock title="Custom" inline={false}>
        <Divider title="使用主题色" useTheme />
        <Divider title="自定义分割线颜色" dividerColor="red" />
        <Divider
          title="自定义字体样式"
          fontStyle={{ fontSize: "20px", color: "green" }}
        />
        <Divider title="自定义组件外边距" margin={40} />
        <Divider title="自定义title内边距" innerPadding={30} />
        <Divider
          title="自定义容器样式"
          containerStyle={{ background: "wheat" }}
        />
      </DisplayBlock>
    </st.wrapper>
  );
};
export default ButtonPage;
