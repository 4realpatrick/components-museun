import { css } from "styled-components";
// 超长打点
export const ELLIPSIS = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
// 不同类型的按钮的通用样式mapping
export const buttonTypeStyleMapping = {
  primary: css`
    color: rgb(${({ theme: { pc } }) => pc.M9});
    background: rgb(${({ theme: { pc } }) => pc.S3});
  `,
  secondary: css`
    color: rgb(${({ theme: { pc } }) => pc.S2});
    background: rgb(${({ theme: { pc } }) => pc.M9});
    border: 1px solid rgb(${({ theme: { pc } }) => pc.S5});
  `,
  normal: css`
    color: rgb(${({ theme: { pc } }) => pc.M2});
    background: rgb(${({ theme: { pc } }) => pc.M9});
    border: 1px solid rgb(${({ theme: { pc } }) => pc.M6});
  `,
};
// 不同尺寸按钮的样式mapping
export const buttonSizeStyleMapping = {
  small: css`
    ${({ theme: { pc } }) => pc.Fs_1};
    height: 26px;
    padding: 0 10px;
  `,
  medium: css`
    ${({ theme: { pc } }) => pc.Fs_1};
    height: 30px;
    padding: 0 12px;
  `,
  large: css`
    ${({ theme: { pc } }) => pc.Fs_2};
    height: 32px;
    padding: 0 16px;
  `,
  super: css`
    ${({ theme: { pc } }) => pc.Fs_4};
    height: 32px;
    padding: 0 30px;
  `,
};
// 按钮hover样式mapping
export const buttonHoverStyleMapping = {
  primary: css`
    color: rgb(${({ theme: { pc } }) => pc.M9});
    background: rgb(${({ theme: { pc } }) => pc.S4});
  `,
  secondary: css`
    color: rgb(${({ theme: { pc } }) => pc.S2});
    background: rgba(${({ theme: { pc } }) => pc.S5}, 0.1);
    border: 1px solid rgb(${({ theme: { pc } }) => pc.S5});
  `,
  normal: css`
    color: rgb(${({ theme: { pc } }) => pc.S2});
    background: rgba(${({ theme: { pc } }) => pc.S5}, 0.1);
    border: 1px solid rgb(${({ theme: { pc } }) => pc.S5});
  `,
};
// 按钮active样式mapping
export const buttonActiveStyleMapping = {
  primary: css`
    color: rgb(${({ theme: { pc } }) => pc.M9});
    background: rgb(${({ theme: { pc } }) => pc.S2});
  `,
  secondary: css`
    color: rgb(${({ theme: { pc } }) => pc.S2});
    background: rgba(${({ theme: { pc } }) => pc.S5}, 0.2);
    border: 1px solid rgb(${({ theme: { pc } }) => pc.S5});
  `,
  normal: css`
    color: rgb(${({ theme: { pc } }) => pc.S2});
    background: rgba(${({ theme: { pc } }) => pc.S5}, 0.2);
    border: 1px solid rgb(${({ theme: { pc } }) => pc.S5});
  `,
};
// 按钮disabled和loading样式mapping
export const buttonDisabledAndLoadingStyleMapping = {
  primary: css`
    color: rgb(${({ theme: { pc } }) => pc.M9});
    background: rgba(${({ theme: { pc } }) => pc.S3}, 0.5);
    cursor: not-allowed;
  `,
  secondary: css`
    color: rgba(${({ theme: { pc } }) => pc.S2}, 0.5);
    background: rgb(${({ theme: { pc } }) => pc.M9});
    border: 1px solid rgba(${({ theme: { pc } }) => pc.S5}, 0.5);
    cursor: not-allowed;
  `,
  normal: css`
    color: rgb(${({ theme: { pc } }) => pc.M5});
    background: rgba(${({ theme: { pc } }) => pc.M6}, 0.3);
    border: 1px solid rgb(${({ theme: { pc } }) => pc.M6});
    cursor: not-allowed;
  `,
};
// 不同类型的文本按钮的通用样式mapping
export const textButtonTypeStyleMapping = {
  primary: css`
    color: rgb(${({ theme: { pc } }) => pc.S2});
  `,
  secondary: css`
    color: rgb(${({ theme: { pc } }) => pc.M2});
  `,
};
// 不同尺寸文本按钮的样式mapping
export const textButtonSizeStyleMapping = {
  small: css`
    ${({ theme: { pc } }) => pc.Fs_1};
  `,
  large: css`
    ${({ theme: { pc } }) => pc.Fs_2};
  `,
};
// 文本按钮hover样式
export const textButtonHoverStyle = css`
  color: rgb(${({ theme: { pc } }) => pc.S3});
`;
// 文本按钮active样式
export const textButtonActiveStyle = css`
  color: rgb(${({ theme: { pc } }) => pc.S2});
`
// 文本按钮disabled和loading样式
export const textButtonDisabledAndLoadingStyle = css`
  color: rgb(${({ theme: { pc } }) => pc.M5});
  cursor: not-allowed;
`

