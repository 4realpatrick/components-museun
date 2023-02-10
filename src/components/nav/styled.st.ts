import styled from "styled-components";
import { Link } from "react-router-dom";
import { $FONT_COLOR, $SECOND_COLOR, $FIRST_COLOR } from "&/constant/color";
export const navItem = styled(Link)`
  font-size: 17px;
  text-decoration: none;
  color: ${$FONT_COLOR};
  font-weight: 600;
`;
export const navWrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: ${$SECOND_COLOR};
  transition: all ease-in-out .3s;
  & ${navItem} {
    margin: 0 10px;
  }
  &:hover ${navItem} {
    color: #FFFFFF;
  }
  &:hover {
    background: ${$FIRST_COLOR};
  }
`;

