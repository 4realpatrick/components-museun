import React, { MouseEventHandler, useMemo } from "react";
import { IEasyTooltipProps } from "./interface";
import usePopper from "./use-tooltip";

const Tooltip: React.FCWithChildren<IEasyTooltipProps> = ({
  children,
  title,
  placement = "top",
  isHTMLContent = false,
  showOverflowTooltip = false,
  zIndex = 100,
  mouseEnterDelay,
}) => {
  let onMouseEnter: MouseEventHandler | undefined;
  let onMouseLeave: MouseEventHandler | undefined;

  if (children && children.props) {
    onMouseEnter = children.props.onMouseEnter;
    onMouseLeave = children.props.onMouseLeave;
  }

  let { mouseEnter, mouseLeave } = usePopper({
    title: title as any,
    placement,
    isHTMLContent,
    zIndex,
    mouseEnterDelay,
    showOverflowTooltip,
  });
  // tooltip相关的鼠标事件进行合并，显示tooltip的功能事件避免原有的事件丢失
  let mouseEventProps = useMemo(() => {
    let combinedProps: {
      onMouseEnter?: React.MouseEventHandler;
      onMouseLeave?: React.MouseEventHandler;
    } = {};
    combinedProps.onMouseEnter = (e: React.MouseEvent, ...args) => {
      if (typeof onMouseEnter === "function") onMouseEnter(e, ...args);
      mouseEnter(e, ...args);
    };
    combinedProps.onMouseLeave = (e: React.MouseEvent, ...args) => {
      if (typeof onMouseLeave === "function") onMouseLeave(e, ...args);
      mouseLeave(e, ...args);
    };
    return combinedProps;
  }, [onMouseEnter, onMouseLeave, mouseEnter, mouseLeave]);

  // @ts-ignore
  return React.cloneElement(children, mouseEventProps);
};
// export { IEasyTooltipProps as IEasyTooltipProps };
export default Tooltip;
