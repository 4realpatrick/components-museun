import { $FIRST_COLOR, $FONT_COLOR, $SECOND_COLOR } from "&/constant/color";
import styled from "styled-components";

export const itemHead = styled.span`
  display: inline-block;
  background: ${$FIRST_COLOR};
  height: 20px;
  width: 8px;
`;
export const title = styled.span`
  font-size: 20px;
  margin-left: 10px;
  color: ${$FONT_COLOR};
`;
export const container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const block = styled.div`
  margin-bottom: 50px;
`;
export const displayCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const description = styled.h3`
  padding-left: 30px;
  color: ${$SECOND_COLOR};
`