import styled from "styled-components";
export type TOrientation = "left" | "center" | "right";
export type TBorderStyle = "dotted" | "dashed" | "solid";
const orientationConfig = {
  left: [5, 95],
  center: [50, 50],
  right: [95, 5],
};
const getOrientationConfig = (
  offset: number = 0,
  orientation: TOrientation
) => {
  // 中间的时候设置偏移值也没用
  if (orientation === "center") return orientationConfig[orientation];
  // align为left 但是原有偏移值 + 设置偏移值超过100则返回原有配置，align为right 但是原有偏移值 - 设置偏移值小于0则返回原有配置
  if (
    (orientation === "left" &&
      orientationConfig[orientation][0] + offset > 100) ||
    (orientation === "right" && orientationConfig[orientation][0] - offset < 0)
  )
    return orientationConfig[orientation];
  if (orientation === "left") {
    return [
      orientationConfig.left[0] + offset,
      orientationConfig.left[1] - offset,
    ];
  } else {
    return [
      orientationConfig.right[0] - offset,
      orientationConfig.right[1] + offset,
    ];
  }
};
interface ISTContainerProps {
  orientation: TOrientation;
  borderStyle: TBorderStyle;
  margin: number;
  offset?: number;
  isUsingTheme?: boolean;
  dividerColor?: string;
}
interface ISTTitleProps {
  innerPadding: number;
  isUsingTheme?: boolean;
}
export const STContainer = styled.div<ISTContainerProps>`
  display: flex;
  margin: ${({ margin }) => `${margin}px 0`};
  white-space: nowrap;
  user-select: none;
  &:before {
    position: relative;
    top: 50%;
    width: ${({ orientation, offset = 0 }) =>
      `${getOrientationConfig(offset, orientation)[0]}%`};
    border-top-color: ${({ dividerColor, isUsingTheme, theme }) =>
      dividerColor
        ? dividerColor
        : isUsingTheme
        ? `rgb(${theme.pc.S3})`
        : `rgba(${theme.pc.M5}, 0.5)`};
    border-top-style: ${({ borderStyle }) => borderStyle};
    border-top-width: 1px;
    transform: translateY(50%);
    content: "";
  }
  &:after {
    position: relative;
    top: 50%;
    width: ${({ orientation, offset = 0 }) =>
      `${getOrientationConfig(offset, orientation)[1]}%`};
    border-top-color: ${({ dividerColor, isUsingTheme, theme }) =>
      dividerColor
        ? dividerColor
        : isUsingTheme
        ? `rgb(${theme.pc.S3})`
        : `rgba(${theme.pc.M5}, 0.5)`};
    border-top-style: ${({ borderStyle }) => borderStyle};
    border-top-width: 1px;
    transform: translateY(50%);
    content: "";
  }
`;
export const STTitle = styled.pre<ISTTitleProps>`
  display: inline-block;
  padding: 0 ${({ innerPadding }) => `${innerPadding}px`};
  font-family: ${({ theme }) => theme.pc.Family};
  color: rgb(
    ${({ isUsingTheme, theme }) => (isUsingTheme ? theme.pc.S3 : theme.pc.M4)}
  );
  font-weight: 400;
  ${({ theme }) => theme.pc.Fs_2};
  margin: 0;
`;
