import React from "react";
import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  right: 0;
`;

const Menu = () => (
  <StyledMenu id="myMenu">
    <li data-menuanchor="firstPage">
      <a href="#firstPage">First section</a>
    </li>
    <li data-menuanchor="secondPage">
      <a href="#secondPage">Second section</a>
    </li>
    <li data-menuanchor="thirdPage">
      <a href="#thirdPage">Third section</a>
    </li>
  </StyledMenu>
);

export default Menu;
