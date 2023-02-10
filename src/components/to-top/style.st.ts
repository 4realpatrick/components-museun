import styled from "styled-components";
export const STToTopRoot = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg circle {
    transition: all ease-in-out 0.2s;
  }
  &:hover svg circle {
    fill: rgba(${({ theme: { pc } }) => pc.M10}, 0.5);
  }
  &:active svg circle {
    fill: rgba(${({ theme: { pc } }) => pc.M10}, 0.7);
  }
`;
