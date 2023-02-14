import React from "react";
import Banner, { IimgItem, IBannerProps } from "&/components/banner";
import DisplayBlock from "&/components/display";
const imgList: IimgItem[] = [
  {
    path: "https://picsum.photos/1720/300",
  },
  {
    path: "https://picsum.photos/1720/299",
  },
  {
    path: "https://picsum.photos/1720/298",
  },
];
const propsList: {
  title: string;
  desc?: string;
  props: IBannerProps;
}[] = [
  {
    title:
      "默认banner，切换图片时间为3s；开启轮询；自动切换，鼠标hover会停止图片切换",
    props: {
      imgList,
    },
  },
  {
    title: "切换图片时间为5s",
    props: {
      imgList,
      interval: 5,
    },
  },
  {
    title: "hover时不停止切换图片",
    props: {
      imgList,
      hoverStop: false,
    },
  },
  {
    title:
      "不开启轮训，会切换到最后一张后停止，点击小点切换除当前的任意一张时，再次开启自动切换",
    props: {
      imgList,
      loop: false,
    },
  },
  {
    title: "不开启自动切换，需手动点小点切换",
    props: {
      imgList,
      autoplay: false,
    },
  },
];
const BannerPage: React.FCWithChildren = () => {
  return (
    <div>
      {propsList.map((item) => (
        <DisplayBlock title={item.title}>
          <div style={{ height: 300, width: "100%" }}>
            <Banner {...item.props} />
          </div>
        </DisplayBlock>
      ))}
    </div>
  );
};
export default BannerPage;
