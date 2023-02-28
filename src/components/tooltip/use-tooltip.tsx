import { Instance, createPopper } from "@popperjs/core";
import { useCallback, useEffect } from "react";
import { IDataRef, IConfigPopperOptions } from "./interface";

import st from "./style.module.scss";

// 缓存当前鼠标事件的pointingNode，用来和当前popper的节点做比较
let pointingNodeRef: IDataRef<Element> = {};
// 缓存当前popper相关的引用，包括当前popper的实例，和触发点
let popperRef: IDataRef<{
  popper: Instance;
  node: Element;
}> = {};

const mountNodeRef: IDataRef<Element> = {};

function getArrow() {
  let arrow = document.createElement("div");
  arrow.setAttribute("data-popper-arrow", "");
  return arrow;
}

function checkShouldElementShowTooltip(el: Element): boolean {
  let { clientWidth, scrollWidth } = el;
  /**
   * 如果元素没有溢出，也不显示tooltip
   */
  if (scrollWidth > clientWidth) {
    if (IEVersion()) {
      return el.getBoundingClientRect().width === clientWidth;
    }
    return true;
  }
  return false;
}

function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE =
    userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 =
    userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;

  return isIE || isEdge || isIE11;
}
//生成tooltip元素，需要传递给popper来显示
function createPopupElement(
  content: string,
  isHTMLContent: boolean,
  mouseEnterDelay: number = 0,
  zIndex: number
): HTMLDivElement {
  let outerPop = document.createElement("div");
  outerPop.className = `${st.popper_tooltip} ${st.tooltip_init}`;
  outerPop.style.zIndex = `${zIndex}`;
  let innerContent = document.createElement("div");
  innerContent.className = st.tooltip_content;
  innerContent[isHTMLContent ? "innerHTML" : "innerText"] = content;
  outerPop.appendChild(innerContent);
  outerPop.appendChild(getArrow());
  mountNodeRef.current = outerPop;
  document.body.appendChild(outerPop);
  setTimeout(() => {
    outerPop.className = `${st.popper_tooltip} ${st.tooltip_show}`;
  }, mouseEnterDelay * 1000);
  return outerPop;
}

/**
 * 清除tooltip的方法
 */
function cleanPopper() {
  // 清掉当前的popper
  if (popperRef.current) {
    let { popper } = popperRef.current;
    popper.destroy();
    delete popperRef.current;
  }
  // 清掉缓存dom引用
  if (pointingNodeRef.current) {
    delete pointingNodeRef.current;
  }
  // 清掉当前的挂载元素
  if (mountNodeRef.current) {
    document.body.removeChild(mountNodeRef.current);
    delete mountNodeRef.current;
  }
}

//显示tooltip的方法
function showPopper({
  title,
  placement,
  isHTMLContent,
  mouseEnterDelay,
  zIndex,
}: IConfigPopperOptions) {
  let { current: currentPopper } = popperRef;
  let { current: currentPointingNode } = pointingNodeRef;
  // 如果当前鼠标指向是个空的，就啥也不干
  if (!currentPointingNode) return;
  // 如果这次指向的和原来的是同一个节点，就啥也不干，显示原来的popper
  if (currentPopper && currentPopper.node === currentPointingNode) return;
  // 如果指的不是同一个节点，先清掉原来的，再开一个新的
  if (popperRef.current) cleanPopper();
  let popper = createPopper(
    currentPointingNode,
    createPopupElement(title, isHTMLContent, mouseEnterDelay, zIndex),
    {
      placement: placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );
  popperRef.current = {
    popper,
    node: currentPointingNode,
  };
}

export default function usePopper({
  title,
  showOverflowTooltip,
  ...otherOptions
}: IConfigPopperOptions): {
  mouseEnter: (e: React.MouseEvent, ...other: any) => void;
  mouseLeave: (e: React.MouseEvent, ...other: any) => void;
} {
  const mouseEnter = useCallback(
    (e: React.MouseEvent) => {
      let target = e.currentTarget;
      if (target instanceof Element) {
        // 执行时马上把当前鼠标指向的节点进行更新
        pointingNodeRef.current = target;
        if (title) {
          if (showOverflowTooltip) {
            checkShouldElementShowTooltip(target) &&
              showPopper({ ...otherOptions, title });
          } else {
            showPopper({ ...otherOptions, title });
          }
        } else {
          if (checkShouldElementShowTooltip(target)) {
            let text = target.textContent;
            if (text) {
              showPopper({ ...otherOptions, title: text });
            }
          }
        }
      }
    },
    [title]
  );
  const mouseLeave = useCallback((e: React.MouseEvent) => {
    delete pointingNodeRef.current;
    cleanPopper();
  }, []);

  useEffect(() => {
    return () => {
      delete pointingNodeRef.current;
      if (popperRef.current) {
        cleanPopper();
      }
    };
  }, []);

  return { mouseEnter, mouseLeave };
}
