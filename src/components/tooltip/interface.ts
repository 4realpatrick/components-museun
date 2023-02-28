import { ReactElement } from "react";
import { Placement } from "@popperjs/core";

export interface IEasyTooltipProps {
  children?: React.ReactElement<string>;
  title?: string;
  placement?: "left" | "right" | "bottom" | "top" | "auto";
  isHTMLContent?: boolean;
  showOverflowTooltip?: boolean;
  zIndex?: number;
  mouseEnterDelay?: number;
}

export interface IDataRef<T> {
  current?: T;
}

export interface IConfigPopperOptions {
  title: string;
  placement: Placement;
  isHTMLContent: boolean;
  zIndex: number;
  mouseEnterDelay?: number;
  extraCls?: string;
  showOverflowTooltip?: boolean;
}
