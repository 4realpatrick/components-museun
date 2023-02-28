import DisplayBlock from "&/components/display";
import React from "react";
import Tags, { ITagsProps } from "&/components/tags";
const propsList: {
  title: string;
  desc?: string;
  propsObj: ITagsProps;
}[] = [
  {
    title: "常用tag，只需要配置tagList即可",
    propsObj: {
      tagList: [
        {
          id: "213123",
          text: "测试",
        },
        {
          id: "232",
          text: "测试1",
        },
        {
          id: "333",
          text: "测试2",
        },
      ],
    },
  },
  {
    title: "添加额外的展示项",
    propsObj: {
      tagList: [
        {
          id: "213123",
          text: "测试",
          extra: "2个职位",
        },
        {
          id: "232",
          text: "开发",
          extra: "5个职位",
        },
        {
          id: "333",
          text: "产品",
          extra: "7个职位",
        },
      ],
    },
  },
  {
    title: "设置默认的激活key",
    propsObj: {
      tagList: [
        {
          id: "213123",
          text: "测试",
          extra: "2个职位",
        },
        {
          id: "232",
          text: "开发",
          extra: "5个职位",
        },
        {
          id: "333",
          text: "产品",
          extra: "7个职位",
        },
      ],
      defaultActiveKey: 2,
    },
  },
  {
    title: "设置超过多少开启折叠",
    propsObj: {
      tagList: [
        {
          id: "213123",
          text: "测试",
          extra: "2个职位",
        },
        {
          id: "232",
          text: "开发",
          extra: "5个职位",
        },
        {
          id: "333",
          text: "产品",
          extra: "7个职位",
        },
        {
          id: "232",
          text: "开发",
          extra: "5个职位",
        },
        {
          id: "333",
          text: "产品",
          extra: "7个职位",
        },
      ],
      fold: 2,
    },
  },
  {
    title: "超长会开启打点，hover会有tooltip",
    propsObj: {
      tagList: [
        {
          id: "213123",
          text: "测试超长测试超长测试超长测试超长测试超长",
        },
        {
          id: "232",
          text: "开发超长超长超长超长超长",
        },
        {
          id: "333",
          text: "产品超长超长超长超长超长",
        },
        {
          id: "232",
          text: "开发",
        },
        {
          id: "333",
          text: "产品",
        },
      ],
      fold: 2,
    },
  },
];

const TagPage: React.FC = () => {
  return (
    <>
      {propsList.map((item, index) => (
        <DisplayBlock title={item.title} desc={item.desc} key={index}>
          <Tags {...item.propsObj} />
        </DisplayBlock>
      ))}
    </>
  );
};
export default TagPage;
