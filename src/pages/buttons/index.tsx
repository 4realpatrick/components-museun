import Button, { IButtonProps } from "&/components/button";
import DisplayBlock from "&/components/display";
import React from "react";
import Eyeopen from "&/asset/eye-open";
const propsList: {
  title: string;
  desc?: string;
  propsArray: IButtonProps[];
}[] = [
  {
    title: "Primary Button",
    desc: "主样式按钮",
    propsArray: [
      {
        title: "Primary-super",
        size: "super",
      },
      {
        title: "Primary-large",
        size: "large",
      },
      {
        title: "Primary-medium",
        size: "medium",
      },
      {
        title: "Primary-super",
        size: "super",
      },
      {
        title: "Primary-small",
        size: "small",
      },
    ],
  },
  {
    title: "Secondary Button",
    propsArray: [
      {
        title: "Secondary-super",
        size: "super",
        type: "secondary",
      },
      {
        title: "Secondary-large",
        size: "large",
        type: "secondary",
      },
      {
        title: "Secondary-medium",
        size: "medium",
        type: "secondary",
      },
      {
        title: "Secondary-small",
        size: "small",
        type: "secondary",
      },
    ],
  },
  {
    title: "Normal Button",
    propsArray: [
      {
        title: "Normal-super",
        size: "super",
        type: "normal",
      },
      {
        title: "Normal-large",
        size: "large",
        type: "normal",
      },
      {
        title: "Normal-medium",
        size: "medium",
        type: "normal",
      },
      {
        title: "Normal-small",
        size: "small",
        type: "normal",
      },
    ],
  },
  {
    title: "Disabled Button",
    propsArray: [
      {
        title: "Disabled-Primary",
        disabled: true,
      },
      {
        title: "Disabled-secondary",
        disabled: true,
        type: "secondary",
      },
      {
        title: "Disabled-normal",
        disabled: true,
        type: "normal",
      },
    ],
  },
  {
    title: "Loading Button",
    propsArray: [
      {
        title: "Loading-primary",
        loading: true,
      },
      {
        title: "Loading-second",
        type: "secondary",
        loading: true,
      },
      {
        title: "Loading-normal",
        type: "normal",
        loading: true,
      },
    ],
  },
  {
    title: "Button with icon",
    desc: "按钮同时可以配置显示图标，图标大小无论传多大，最大只有14x14，loading时会展示loading图标而不是自定义图标，支持只显示图标，设置iconOnly时，传入title也不会展示",
    propsArray: [
      {
        title: "Icon-left",
        icon: <Eyeopen />,
      },
      {
        title: "Icon-right",
        icon: <Eyeopen />,
        iconPosition: "right",
      },
      {
        title: "Icon-iconOnly",
        iconOnly: true,
        icon: <Eyeopen />,
      },
      {
        title: "Icon-disabled",
        icon: <Eyeopen />,
        disabled: true,
      },
    ],
  },
  {
    title: "Button with maxWidth",
    propsArray: [
      {
        title: "button-max-width",
        maxWidth: 100,
      },
      {
        title: "button-max-width",
        type: "secondary",
        maxWidth: 100,
      },
      {
        title: "button-max-width",
        type: "normal",
        maxWidth: 100,
      },
    ],
  },
  {
    title: "Button with url",
    desc: "跳转会在click之前触发",
    propsArray: [
      {
        title: "bilibili.com",
        href: "https://bilibili.com",
      },
    ],
  },
];
const ButtonPage: React.FC = () => {
  return (
    <>
      <h1>按钮分为4种尺寸：Super、Large、Medium、Small</h1>
      {propsList.map((item) => (
        <DisplayBlock title={item.title} desc={item.desc}>
          {item.propsArray.map((props) => (
            <Button {...props} />
          ))}
        </DisplayBlock>
      ))}
    </>
  );
};
export default ButtonPage;
