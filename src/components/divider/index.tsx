import React, { memo, CSSProperties } from "react";
import { STContainer, STTitle } from "./style.st";
import { TOrientation, TBorderStyle } from "./style.st";
interface IDviderProps {
  title?: string;
  innerPadding?: number;
  type?: TBorderStyle;
  orientation?: TOrientation;
  fontStyle?: CSSProperties;
  dividerColor?: string;
  margin?: number;
  offset?: number;
  useTheme?: boolean;
  containerStyle?: CSSProperties;
}
const Divider: React.FCWithChildren<IDviderProps> = memo(
  ({
    children,
    title,
    orientation = "center",
    type = "solid",
    fontStyle = {},
    margin = 24,
    offset = 0,
    innerPadding = 16,
    useTheme = false,
    dividerColor = "",
    containerStyle = {},
  }) => {
    return (
      <STContainer
        orientation={orientation}
        borderStyle={type}
        margin={margin}
        offset={offset}
        isUsingTheme={useTheme}
        dividerColor={dividerColor}
        style={containerStyle}
      >
        {(title || children) && (
          <STTitle style={fontStyle} innerPadding={innerPadding} isUsingTheme={useTheme}>
            {title || children}
          </STTitle>
        )}
      </STContainer>
    );
  }
);
/**
 * @descrpition 分割线组件
 * @param {IDviderProps} props
 * @param {string} [title] 可选，分割线的标题，不传就是一个没有标题的分割线
 * @param {number} [innerPadding] 可选，分割线的标题，不传就是一个没有标题的分割线
 * @param {TBorderStyle} [type] 可选，分割线的样式，可用值：solid、dotted、dashed，默认是solid
 * @param {TOrientation} [orientation] 可选，字体对齐方式，可用值：left、center、right，默认是center
 * @param {CSSProperties} [fontStyle] 可选，分割线中字体的样式，需要覆盖默认样式的时候使用，无默认值
 * @param {string} [dividerColor] 可选，分割线颜色，需要覆盖分割线原有颜色时使用，无默认值
 * @param {number} [margin] 可选，外边距，默认为16px
 * @param {number} [offset] 可选，偏移量，orientation为left或者right会生效，如果是left，设置offset后会往右偏移，为left则相反，注意left或者right时，默认都是5%的偏移量，设置的值加上原有的偏移量不能超过100%，否则不会生效，默认不偏移
 * @param {boolean} [isUsingTheme] 可选，是否使用主题色，为true则分割线和字体都会为主题色，fontStyle和dividerColor优先级大于此项，默认不使用
 */
export default Divider;
