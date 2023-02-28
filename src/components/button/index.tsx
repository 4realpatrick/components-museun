import React, { FCWithChildren, useCallback, useMemo, memo } from "react";
import { IButtonProps } from "./interface";
import {
  STWrapper,
  STButton,
  STLoadingWrapper,
  STIconWrapper,
} from "./style.st";
import Loading from "./loading";
import { useTheme } from "styled-components";
import TextButton, { ITextButtonProps } from "./text-button";
import Tooltip from "../tooltip";
const Button: FCWithChildren<IButtonProps> = memo(
  ({
    type = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    iconOnly = false,
    autoTip = true,
    href = "",
    title = "",
    iconPosition = "left",
    loadingPosition = "left",
    icon,
    width,
    maxWidth,
    extraStyle,
    extraCls,
    children,
    onClick,
  }) => {
    const { pc: pcTheme } = useTheme();
    // loadingIcon 根据类型颜色会不同
    const loadingIcon = useMemo(() => {
      let color = "";
      if (type === "primary") {
        color = pcTheme.M9 as string;
      } else if (type === "secondary") {
        color = pcTheme.S3 as string;
      } else {
        color = pcTheme.M4 as string;
      }
      return loading ? (
        <STLoadingWrapper position={loadingPosition}>
          <Loading color={color} />
        </STLoadingWrapper>
      ) : (
        <></>
      );
    }, [loading, type]);
    // 自定义的icon需要限制大小，14 * 14，不能传多大的图标就显示多大，如果只有icon的话，不添加左右间距
    const limitIcon = useMemo(() => {
      if (!icon) return <></>;
      return (
        <STIconWrapper position={iconPosition} iconOnly={iconOnly}>
          {icon}
        </STIconWrapper>
      );
    }, [icon, iconPosition, iconOnly]);
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
      <STWrapper
        size={size}
        type={type}
        style={extraStyle}
        onClick={handleClick}
        maxWidth={maxWidth}
        width={width}
        disabled={disabled}
        isLoading={loading}
        className={extraCls}
      >
        {loadingPosition === "left" && loadingIcon}
        {iconPosition === "left" && !loading && !disabled && limitIcon}
        {!iconOnly && (
          <Tooltip>
            <STButton maxWidth={!!maxWidth}>
              {title ? title : children}
            </STButton>
          </Tooltip>
        )}
        {iconPosition === "right" && !loading && !disabled && limitIcon}
        {loadingPosition === "right" && loadingIcon}
      </STWrapper>
    );
  }
);
/**
 * @description 按照UI设计写的按钮组件，使用中有错误直接给我反馈。
 * @link 参考UI链接：http://nature.beisen.co/NaturedesignSpec/NaturedesignSpec-PC-3.0/preview/%5BPC%5DNaturedesign3.1.0/02-%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/01%E9%80%9A%E7%94%A8/02-Button%20%E6%8C%89%E9%92%AE/
 * @param {IButtonProps} props
 * @param {TButtonType} [props.type] 可选，按钮样式，目前有(primary、secondary、normal)，默认为primary
 * @param {TButtonSize} [props.size] 可选，按钮大小，目前有(super、large、medium、small)，默认为medium
 * @param {boolean} [props.loading] 可选，按钮是否为loading态，loading时默认左边会出现一个loading图标，默认为false
 * @param {boolean} [props.disabled] 可选，按钮是否为disabled态，此优先级大于loading，设置为disabled态时，即使设置为loading不会出现loaading图标
 * @param {e?: React.MouseEvent<HTMLDivElement>) => void} [props.onClick] 可选，按钮点击事件，默认不冒泡，loading或者disabled时不会触发点击事件
 * @param {string} [props.href] 可选，点击时打开的链接，不管是否设置点击事件，只要设置此项，就会在点击后，新页打开href
 * @param {JSX.Element} [props.icon] 可选，附加的icon，注意，不管传入的icon多大，最后只会显示14 * 14的大小，且不带hover态，在设置maxWidth时，即使设置的最大宽度小于14px，仍然会保证图标的正常显示，默认没有icon，loading时会隐藏icon
 * @param {iconOnly} [props.icon] 可选，是否只显示图标，设置后，即使传入title和children也不会显示，默认为false
 * @param {string | JSX.Element} [props.title] 可选，按钮标题，既可以传title，也可以设置children
 * @param {TIconPosition} [props.iconPosition] 可选，icon的位置，距离按钮标题4px，默认为左边
 * @param {number} [props.width] 可选，按钮的宽度，用于自定义场景，建议不设置此项，让按钮根据内容撑开，默认值无
 * @param {number} [props.maxWidth] 可选，按钮的最大宽度，设置后，在内容超出最大宽度时，会打点，默认值无
 * @param {autoTip} [props.autoTip] 可选，是否使用内部自带的tooltip，如果设置此项，在超出最大宽度后，hover时会显示tooltip，如果不设置最大宽度，此项不会生效，默认为true
 * @param {CSSProperties} [props.extraStyle] 可选，额外的样式，主要是覆盖padding之类的，默认值无
 * @param {string} [props.extraCls] 可选，额外的className，默认值无
 * @param {TIconPosition} [props.loadingPosition] 可选，loading图标的位置，默认左边
 */
export default Button;
export type { IButtonProps, ITextButtonProps };
export { TextButton };
