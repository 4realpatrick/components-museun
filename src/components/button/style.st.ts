import styled, { css, keyframes } from "styled-components";
import {
  buttonSizeStyleMapping,
  buttonTypeStyleMapping,
  buttonHoverStyleMapping,
  buttonActiveStyleMapping,
  buttonDisabledAndLoadingStyleMapping,
  textButtonSizeStyleMapping,
  textButtonTypeStyleMapping,
  textButtonHoverStyle,
  textButtonActiveStyle,
  textButtonDisabledAndLoadingStyle,
  ELLIPSIS,
} from "./const";
import { TButtonType, TButtonSize, TIconPosition } from "./interface";
const scan = keyframes`
  0% {
      opacity:1
  }
  100% {
      opacity:0;
  }
`;
const commonWrapperStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: antialiased;
  transition: all ease-in-out 0.1s;
`;
export const STWrapper = styled.div<{
  size: TButtonSize;
  type: TButtonType;
  isLoading: boolean;
  maxWidth?: number;
  width?: number;
  disabled?: boolean;
}>`
  border-radius: 3px;
  ${({ size }) => buttonSizeStyleMapping[size]};
  ${({ type }) => buttonTypeStyleMapping[type]};
  ${commonWrapperStyle};
  ${({ maxWidth, width }) => {
    let str = "";
    if (maxWidth) {
      str += `max-width: ${maxWidth}px;`;
    }
    if (width) {
      str += `width: ${width}px;`;
    }
    return str;
  }}
  & {
    rect.one {
      animation: ${scan} 0.9s linear 0s infinite;
    }

    rect.two {
      animation: ${scan} 0.9s linear 0.1125s infinite;
    }
    rect.three {
      animation: ${scan} 0.9s linear 0.225s infinite;
    }
    rect.four {
      animation: ${scan} 0.9s linear 0.3375s infinite;
    }
    rect.five {
      animation: ${scan} 0.9s linear 0.45s infinite;
    }
    rect.six {
      animation: ${scan} 0.9s linear 0.5625s infinite;
    }
    rect.seven {
      animation: ${scan} 0.9s linear 0.675s infinite;
    }
    rect.eight {
      animation: ${scan} 0.9s linear 0.7875s infinite;
    }
  }
  &:hover {
    ${({ type, disabled = false, isLoading = false }) =>
      !disabled && !isLoading && buttonHoverStyleMapping[type]};
  }
  &:active {
    ${({ type, disabled = false, isLoading = false }) =>
      !disabled && !isLoading && buttonActiveStyleMapping[type]};
  }
  ${({ type, disabled = false, isLoading = false }) =>
    (disabled || isLoading) && buttonDisabledAndLoadingStyleMapping[type]};
`;
export const STButton = styled.div<{
  maxWidth?: boolean; // 有最大宽度开启打点
}>`
  ${({ maxWidth }) => maxWidth && ELLIPSIS};
  overflow: hidden;
`;
export const STLoadingWrapper = styled.span<{ position?: TIconPosition }>`
  display: flex;
  align-items: center;
  ${({ position = "left" }) =>
    position === "left" ? "margin-right: 4px" : "margin-left: 4px"};
`;
export const STIconWrapper = styled.div<{
  position?: TIconPosition;
  iconOnly?: boolean;
}>`
  display: flex;
  align-items: center;
  height: 14px;
  width: 14px;
  overflow: hidden;
  flex-shrink: 0;
  ${({ position = "left", iconOnly = false }) =>
    iconOnly
      ? ""
      : position === "left"
      ? "margin-right: 4px"
      : "margin-left: 4px"};
`;
export const STTextBtnWrapper = styled.div<{
  size: Exclude<TButtonSize, "super" | "medium">;
  type: Exclude<TButtonType, "normal">;
  maxWidth?: number;
  width?: number;
  disabled?: boolean;
  loading?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: antialiased;
  transition: all ease-in-out 0.2s;
  ${({ size }) => textButtonSizeStyleMapping[size]};
  ${({ type }) => textButtonTypeStyleMapping[type]};
  ${({ maxWidth, width }) => {
    let str = "";
    if (maxWidth) {
      str += `max-width: ${maxWidth}px;`;
    }
    if (width) {
      str += `width: ${width}px;`;
    }
    return str;
  }}
  &:hover {
    ${({ type, disabled = false, loading = false }) =>
      !disabled && !loading && textButtonHoverStyle};
  }
  &:active {
    ${({ type, disabled = false, loading = false }) =>
      !disabled && !loading && textButtonActiveStyle};
  }
  ${({ disabled = false, loading = false }) =>
    (disabled || loading) && textButtonDisabledAndLoadingStyle};
`;
