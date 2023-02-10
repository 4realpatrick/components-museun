/// <reference types="vite/client" />
import 'styled-components';
import "react";
// extends theme
declare module "styled-components" {
  export interface AllContentTheme {
    Fs_1: FlattenSimpleInterpolation;
    Fs_2: FlattenSimpleInterpolation;
    Fs_2_1: FlattenSimpleInterpolation;
    Fs_3: FlattenSimpleInterpolation;
    Fs_3_1: FlattenSimpleInterpolation;
    Fs_4: FlattenSimpleInterpolation;
    Fs_4_1: FlattenSimpleInterpolation;
    Fs_5: FlattenSimpleInterpolation;
    Fs_5_1: FlattenSimpleInterpolation;
    Fs_6: FlattenSimpleInterpolation;
    Fs_7: FlattenSimpleInterpolation;
    Fs_8: FlattenSimpleInterpolation;
    Family: string;
    Sh_1: FlattenSimpleInterpolation;
    Sh_2: FlattenSimpleInterpolation;
    Sh_3: FlattenSimpleInterpolation;
    Sh_4: FlattenSimpleInterpolation;
    Sh_5: FlattenSimpleInterpolation;
    Sh_1_down: FlattenSimpleInterpolation;
    Sh_1_up: FlattenSimpleInterpolation;
    Sh_1_left: FlattenSimpleInterpolation;
    Sh_1_right: FlattenSimpleInterpolation;
    Sh_2_down: FlattenSimpleInterpolation;
    Sh_2_up: FlattenSimpleInterpolation;
    Sh_2_left: FlattenSimpleInterpolation;
    Sh_2_right: FlattenSimpleInterpolation;
    Sh_3_down: FlattenSimpleInterpolation;
    Sh_3_up: FlattenSimpleInterpolation;
    Sh_3_left: FlattenSimpleInterpolation;
    Sh_3_right: FlattenSimpleInterpolation;
    Sh_4_down: FlattenSimpleInterpolation;
    Sh_4_up: FlattenSimpleInterpolation;
    Sh_4_left: FlattenSimpleInterpolation;
    Sh_4_right: FlattenSimpleInterpolation;
    Sp_1: string;
    Sp_2: string;
    Sp_3: string;
    Sp_4: string;
    Sp_5: string;
    Sp_6: string;
    Sp_7: string;
    Sp_8: string;
    Sp_9: string;
    Sp_10: string;
    Sp_11: string;
    Ra_1: string;
    Ra_2: string;
    Ra_3: string;
    Ra_4: string;
    Ra_5: string;
    ModalZindex: number;
    UnmodelZindex: number;
    PopoverZindex: number;
    PopconfirmZindex: number;
    MessageZindex: number;
    TooltipZindex: number;
  }

  export interface ContentTheme extends Partial<AllContentTheme & ColorTheme> {}
  export interface ColorTheme {
    S1: string;
    S2: string;
    S3: string;
    S4: string;
    S5: string;
    S6: string;
    S7?: string;
    S8?: string;
    S9?: string;
    S10?: string;
    M1: string;
    M2: string;
    M3: string;
    M4: string;
    M5: string;
    M6: string;
    M7: string;
    M8: string;
    M9: string;
    M10: string;
    M11?: string;
    M12?: string;
  }
  export interface DefaultTheme {
    pc: ContentTheme;
    mobile: ContentTheme;
  }
}
// React18里面type FC删除了children，咱们需要用到，就继承一下
declare module "react" {
  export type FCWithChildren<P = {}> = FunctionComponent<P & {
    children?: React.ReactNode
  }>
}