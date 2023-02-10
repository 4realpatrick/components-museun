import React, { useLayoutEffect, useRef } from "react";
/**
 * @description 有一些组件渲染时需要隐藏滚动条，如modal之类，则使用改hook
 * @param container 有时候滚动条不在body上，则传入container的ref
 */
export default function (container?: React.MutableRefObject<HTMLElement>) {
  // 用来暂存滚动条样式的
  const scrollStyle = useRef<string>("");
  // 隐藏滚动条
  useLayoutEffect(() => {
    if (container) {
      scrollStyle.current = container.current.style.overflow;
      container.current.style.overflow = "hidden";
      return () => {
        container.current.style.overflow = scrollStyle.current;
      };
    }
    const doc = document.body || document.documentElement;
    scrollStyle.current = doc.style.overflow;
    doc.style.overflow = "hidden";
    return () => {
      doc.style.overflow = scrollStyle.current;
    };
  }, []);
}
