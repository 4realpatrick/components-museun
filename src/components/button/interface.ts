import React, { CSSProperties } from "react";
export type TButtonType = "primary" | "secondary" | "normal";
export type TSpecialStyleTarget = "hover" | "active" | "disabled" | "loading";
export type TButtonSize = "super" | "large" | "medium" | "small";
export type TIconPosition = "left" | "right";
export interface IButtonProps {
  type?: TButtonType;
  size?: TButtonSize;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  href?: string;
  icon?: JSX.Element;
  iconOnly?: boolean;
  title?: string | JSX.Element;
  iconPosition?: TIconPosition;
  width?: number;
  maxWidth?: number;
  autoTip?: boolean;
  extraStyle?: CSSProperties;
  extraCls?: string;
  loadingPosition?: TIconPosition;
}
export interface ITextButtonProps {
  type?: Exclude<TButtonType, 'normal'>;
  size?: Exclude<TButtonSize, 'super' | 'medium'>;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  href?: string;
  title?: string | JSX.Element;
  width?: number;
  maxWidth?: number;
  autoTip?: boolean;
  extraStyle?: CSSProperties;
  extraCls?: string;
  loadingPosition?: TIconPosition;
}