// React
import React, { useEffect, useRef, useState } from "react";
// Style
import * as styled from "./style.st";
import Icon from "./icon";
// Utils
import throttle from "&/utils/easy-throttle";
// interface
interface IToTopProps {
  displayHeight?: number;
  right?: number;
  bottom?: number;
}

const ToTop: React.FC<IToTopProps> = ({
  displayHeight = 0,
  right = 50,
  bottom = 50,
}) => {
  const [show, setShow] = useState<boolean>(false);
  // 去最上方
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      setShow(scrollTop > displayHeight);
    }, 300);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <styled.STToTopRoot
      style={{
        display: show ? "flex" : "none",
        opacity: show ? 1 : 0,
        right,
        bottom,
      }}
      onClick={handleToTop}
    >
      <Icon />
    </styled.STToTopRoot>
  );
};

/**
 * @description 回到顶部组件
 * @param {IToTopProps} props
 * @param {number} [displayHeight] 可选，距离顶部什么高度的时候展示，默认滚动就展示
 * @param {number} [right] 可选，右偏移量，默认50px
 * @param {number} [bottom] 可选，下偏移量，默认50px
 */
export default ToTop;
