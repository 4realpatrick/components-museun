import { css, ContentTheme, createGlobalStyle } from "styled-components";

export const PCGlobalStyleConstant: ContentTheme = {
  Fs_1: css`
    font-size: 12px;
    line-height: 20px;
  `,
  Fs_2: css`
    font-size: 14px;
    line-height: 22px;
  `,
  Fs_3: css`
    font-size: 16px;
    line-height: 24px;
  `,
  Fs_4: css`
    font-size: 18px;
    line-height: 26px;
  `,
  Fs_5: css`
    font-size: 20px;
    line-height: 28px;
  `,
  Fs_6: css`
    font-size: 24px;
    line-height: 32px;
  `,
  Fs_7: css`
    font-size: 28px;
    line-height: 36px;
  `,
  Fs_8: css`
    font-size: 32px;
    line-height: 42px;
  `,
  Family: `"PingFang SC", "Hiragino Sans GB",STHeitiSC,Helvetica,"Helvetica Neue","Microsoft YaHei",Tahoma`,
  Sh_1: css`
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.03);
  `,
  Sh_2: css`
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  `,
  Sh_3: css`
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_4: css`
    box-shadow: -4px 0 20px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_5: css`
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
  `,
  ModalZindex: 1100,
  UnmodelZindex: 1100,
  PopoverZindex: 1100,
  PopconfirmZindex: 1100,
  MessageZindex: 1100,
  TooltipZindex: 1100,
  Sp_1: "2px",
  Sp_2: "4px",
  Sp_3: "8px",
  Sp_4: "10px",
  Sp_5: "12px",
  Sp_6: "16px",
  Sp_7: "20px",
  Sp_8: "24px",
  Sp_9: "30px",
  Sp_10: "32px",
  Sp_11: "40px",
  Ra_1: "2px",
  Ra_2: "3px",
  Ra_3: "6px",
  Ra_4: "10px",
  Ra_5: "100px",
  M1: "14, 17, 20",
  M2: "51, 56, 61",
  M3: "86, 94, 102",
  M4: "131, 137, 143",
  M5: "191, 195, 199",
  M6: "230, 232, 235",
  M7: "240, 242, 245",
  M8: "250, 251, 252",
  M9: "255, 255, 255",
  M10: "0, 0, 0",
  S1: "0, 79, 158",
  S2: "16, 110, 204",
  S3: "29, 134, 240",
  S4: "92, 173, 255",
  S5: "133, 194, 255",
  S6: "194, 224, 255",
};

export const MobileGlobalStyleConstant: ContentTheme = {
  Fs_1: css`
    font-size: 10px;
    line-height: 14px;
  `,
  Fs_2: css`
    font-size: 12px;
    line-height: 16px;
  `,
  Fs_2_1: css`
    font-size: 14px;
    line-height: 18px;
  `,
  Fs_3: css`
    font-size: 14px;
    line-height: 18px;
  `,
  Fs_3_1: css`
    font-size: 14px;
    line-height: 20px;
  `,
  Fs_4: css`
    font-size: 16px;
    line-height: 20px;
  `,
  Fs_4_1: css`
    font-size: 16px;
    line-height: 22px;
  `,
  Fs_5: css`
    font-size: 18px;
    line-height: 22px;
  `,
  Fs_5_1: css`
    font-size: 18px;
    line-height: 24px;
  `,
  Fs_6: css`
    font-size: 20px;
    line-height: 24px;
  `,
  Fs_7: css`
    font-size: 24px;
    line-height: 30px;
  `,
  Fs_8: css`
    font-size: 28px;
    line-height: 34px;
  `,
  Family: `"PingFang SC", "Hiragino Sans GB",STHeitiSC,Helvetica,"Helvetica Neue","Microsoft YaHei",Tahoma`,
  Sh_1_down: css`
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  `,
  Sh_1_up: css`
    box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.05);
  `,
  Sh_1_left: css`
    box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.05);
  `,
  Sh_1_right: css`
    box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
  `,
  Sh_2_down: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_2_up: css`
    box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_2_left: css`
    box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_2_right: css`
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_3_down: css`
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_3_up: css`
    box-shadow: 0 -10px 15px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_3_left: css`
    box-shadow: -10px 0 15px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_3_right: css`
    box-shadow: 10px 0 15px 0 rgba(0, 0, 0, 0.1);
  `,
  Sh_4_down: css`
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  `,
  Sh_4_up: css`
    box-shadow: 0 -10px 20px 0 rgba(0, 0, 0, 0.15);
  `,
  Sh_4_left: css`
    box-shadow: -10px 0 20px 0 rgba(0, 0, 0, 0.15);
  `,
  Sh_4_right: css`
    box-shadow: 10px 0 20px 0 rgba(0, 0, 0, 0.15);
  `,
  Sp_1: "5px",
  Sp_2: "10px",
  Sp_3: "15px",
  Sp_4: "20px",
  Sp_5: "25px",
  Sp_6: "30px",
  Sp_7: "35px",
  Sp_8: "40px",
  Ra_1: "2px",
  Ra_2: "3px",
  Ra_3: "5px",
  Ra_4: "8px",
  Ra_5: "13px",
  M1: "255, 255, 255",
  M2: "250, 250, 250",
  M3: "245, 245, 245",
  M4: "240, 240, 240",
  M5: "217, 217, 217",
  M6: "191, 191, 191",
  M7: "140, 140, 140",
  M8: "89, 89, 89",
  M9: "66, 66, 66",
  M10: "37, 37, 37",
  M11: "20, 20, 20",
  M12: "0, 0, 0",
  S1: "230, 255, 251",
  S2: "181, 245, 236",
  S3: "135, 232, 222",
  S4: "92, 219, 211",
  S5: "54, 207, 201",
  S6: "19, 194, 194",
  S7: "8, 151, 156",
  S8: "0, 109, 117",
  S9: "0, 71, 79",
  S10: "0, 36, 41",
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: #666;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: antialiased;
  }
`;
