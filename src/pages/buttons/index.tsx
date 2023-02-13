import Button from "&/components/button";
import DisplayBlock from "&/components/display";
import React from "react";
import Eyeopen from "&/asset/eye-open";

const ButtonPage: React.FC = () => {
  return (
    <>
      <h1>按钮分为4种尺寸：Super、Large、Medium、Small</h1>
      <DisplayBlock title="Primary Button" desc="主样式按钮">
        <Button title="Primary-super" size="super" />
        <Button title="Primary-large" size="large" />
        <Button title="Primary-medium" size="medium" />
        <Button title="Primary-small" size="small" />
      </DisplayBlock>
      <DisplayBlock title="Secondary Button">
        <Button title="Secondary-super" size="super" type="secondary" />
        <Button title="Secondary-large" size="large" type="secondary" />
        <Button title="Secondary-medium" size="medium" type="secondary" />
        <Button title="Secondary-small" size="small" type="secondary" />
      </DisplayBlock>
      <DisplayBlock title="Normal Button">
        <Button title="Secondary-super" size="super" type="normal" />
        <Button title="Secondary-large" size="large" type="normal" />
        <Button title="Secondary-medium" size="medium" type="normal" />
        <Button title="Secondary-small" size="small" type="normal" />
      </DisplayBlock>
      <DisplayBlock title="Disabled Button">
        <Button title="Disabled-Primary" disabled />
        <Button title="Disabled-secondary" type="secondary" disabled />
        <Button title="Disabled-normal" type="normal" disabled />
      </DisplayBlock>
      <DisplayBlock title="Loading Button">
        <Button title="Loading-Primary" loading />
        <Button title="Loading-secondary" type="secondary" loading />
        <Button title="Loading-secondary" type="normal" loading />
      </DisplayBlock>
      <DisplayBlock title="Button with icon" desc="按钮同时可以配置显示图标，图标大小无论传多大，最大只有14x14，loading时会展示loading图标而不是自定义图标，支持只显示图标，设置iconOnly时，传入title也不会展示">
        <Button title="Icon-left"  icon={<Eyeopen />}/>
        <Button title="Icon-right" icon={<Eyeopen />}  iconPosition="right" />
        <Button title="Icon-iconOnly" icon={<Eyeopen />} iconOnly  />
        <Button title="Icon-disabled"  icon={<Eyeopen />} disabled/>
      </DisplayBlock>
      <DisplayBlock title="Button with maxWidth">
        <Button title="button-max-width"  maxWidth={100}/>
        <Button title="button-max-width"  maxWidth={100} type="secondary" />
        <Button title="button-max-width"  maxWidth={100} type="normal"/>
      </DisplayBlock>
      <DisplayBlock title="Button with url" desc="跳转会在click之前触发">
        <Button title="bilibili.com"  href="https://bilibili.com"/>
      </DisplayBlock>
    </>
  );
};
export default ButtonPage;
