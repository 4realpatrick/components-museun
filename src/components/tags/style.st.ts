import styled, { css } from "styled-components";
import More from "./icon/more";
const ELLIPSIS = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const COMMON_STYLE = css`
  font-family: ${({ theme }) => theme.pc.Family};
  font-weight: 400;
  ${({ theme }) => theme.pc.Fs_2};
`;
export const STTagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const STMore = styled(More)``;
export const STTag = styled.span<{ active: boolean }>`
  height: 24px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.pc.Sp_7}`};
  ${({ theme, active }) =>
    active
      ? css`
          color: #ffffff;
          background: rgb(${theme.pc.S3});
          svg g g {
            fill: rgb(${({ theme }) => theme.pc.M9});
          }
        `
      : css`
          color: rgb(${theme.pc.M2});
          background: rgb(${theme.pc.M7});
        `};
  margin-right: ${({ theme }) => theme.pc.Sp_6};
  border-radius: 12px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    color: #ffffff;
    background: rgba(${({ theme }) => theme.pc.S3}, 0.7);
    svg g g {
      fill: rgb(${({ theme }) => theme.pc.M9});
    }
  }
  &:active {
    color: rgb(${({ theme }) => theme.pc.M9});
    background: rgba(${({ theme }) => theme.pc.S3}, 1);
  }
`;
export const STName = styled.span`
  display: inline-block;
  max-width: 84px;
  ${ELLIPSIS};
  ${COMMON_STYLE};
`;
export const STFoldList = styled.div`
  position: absolute;
  top: 32px;
  left: 0;
  width: 170px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: ${({ theme }) => theme.pc.Ra_2};
  background: #ffffff;
`;
export const STFoldListItem = styled.div<{ active: boolean }>`
  box-sizing: border-box;
  width: 100%;
  max-width: 170px;
  ${ELLIPSIS};
  font-family: ${({ theme }) => theme.pc.Family};
  ${({ theme }) => theme.pc.Fs_2};
  color: rgb(${({ theme }) => theme.pc.M1});
  font-weight: 400;
  padding: 4px 12px;
  background: #fff;
  transition: all ease-in-out 0.2s;
  background: ${({ theme, active }) =>
    active ? `rgba(${theme.pc.S6}, 0.1)` : ""};
  &:hover {
    background: rgba(${({ theme }) => theme.pc.S5}, 0.1);
  }
`;

export const STExtra = styled.span`
  display: inline-block;
  margin: 0;
  margin-left: ${({ theme }) => theme.pc.Sp_3};
`;
