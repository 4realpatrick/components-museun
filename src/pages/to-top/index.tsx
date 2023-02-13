import React from "react";
import DisplayBlock from "&/components/display";
import ToTop from "&/components/to-top";

const ToTopPage: React.FCWithChildren = () => {
  return (
    <div style={{ height: 5000 }}>
      <DisplayBlock title="回到顶部组件，默认滚动时出现在右下角">
        <ToTop />
      </DisplayBlock>
      <DisplayBlock title="可设置组件位置，展示在左边">
        <ToTop right={document.body.getBoundingClientRect().width - 50}/>
      </DisplayBlock>
      <DisplayBlock
        title="可设置展示高度，滚动到800的时候展示"
        style={{ marginTop: 600 }}
      >
        <ToTop displayHeight={800} bottom={600} />
      </DisplayBlock>

    </div>
  );
};
export default ToTopPage;
