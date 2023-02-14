import React, { FCWithChildren, memo, useCallback, useMemo } from "react";
import { ITextButtonProps } from "./interface";
import { STTextBtnWrapper, STButton, STLoadingWrapper } from "./style.st";
import Loading from "./loading";
import { useTheme } from "styled-components";
export type { ITextButtonProps };
const TextButton: FCWithChildren<ITextButtonProps> = memo(
  ({
    type = "primary",
    size = "small",
    loading = false,
    disabled = false,
    autoTip = true,
    href = "",
    title = "",
    loadingPosition = "left",
    width,
    maxWidth,
    extraStyle,
    extraCls,
    children,
    onClick,
  }) => {
    const { pc: pcTheme } = useTheme();
    const loadingIcon = useMemo(() => {
      if (!loading) return <></>;
      return (
        <STLoadingWrapper position={loadingPosition}>
          <Loading color={`rgb(${pcTheme.M4})`} />
        </STLoadingWrapper>
      );
    }, [loading]);
    // 点击事件，有链接的，需要打开链接。
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (disabled || loading) return;
        href && window.open(href, "_blank");
        onClick && onClick(e);
      },
      [onClick, href, disabled, loading]
    );
    return (
      <STTextBtnWrapper
        size={size}
        type={type}
        width={width}
        maxWidth={maxWidth}
        className={extraCls}
        style={extraStyle}
        loading={loading}
        disabled={disabled}
        onClick={handleClick}
      >
        {loadingPosition === "left" && !disabled && loadingIcon}
        {<STButton maxWidth={!!maxWidth}>{title ? title : children}</STButton>}
        {loadingPosition === "right" && !disabled && loadingIcon}
      </STTextBtnWrapper>
    );
  }
);
export default TextButton;
