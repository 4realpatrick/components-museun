import styled, { css } from "styled-components";
import { isMobile } from "&/utils/is";
export const STRoot = styled.div`
  overflow: hidden;
  height: inherit;
`;
export const STFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const STBanner = styled.section`
  width: inherit;
  position: relative;
  transition: transform 0.5s ease-in-out;
`;
export const STBannerItem = styled.img<{ index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
  ${({ index }) =>
    isMobile()
      ? css`
          max-height: inherit;
          border-radius: 8px;
          left: calc(${index} * 100vw);
        `
      : css`
          height: 100%;
          left: calc(${index} * 100vw);
          cursor: pointer;
        `}
`;
export const STDotContainer = styled.div`
  position: relative;
  bottom: ${isMobile() ? "11px" : "15px"};
  width: inherit;
  transition: transform 0.5s ease-in-out;
  display: flex;
  justify-content: center;
`;
export const STDot = styled.span<{ isActive: boolean }>`
  margin: 0 5px;
  background: #ffffff;
  transition: all ease-in-out 0.5s;
  display: inline-block;
  ${isMobile()
    ? css`
        width: 4px;
        height: 4px;
        border-radius: 2px;
      `
    : css`
        width: 20px;
        height: 6px;
        border-radius: 3px;
        cursor: pointer;
      `}
  ${({ isActive }) =>
    isActive
      ? isMobile()
        ? css`
            width: 15px;
            background: rgb(255, 255, 255);
          `
        : css`
            width: 40px;
            background: rgb(${({ theme: { pc } }) => pc.M9});
          `
      : css`
          opacity: 0.2;
        `};
`;
