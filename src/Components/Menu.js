import React from "react";
import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  right: 0;
`;

const Menu = () => (
  <StyledMenu id="myMenu">
    <li data-menuanchor="whoAmI">
      <a href="#whoAmI">First section</a>
    </li>
    <li data-menuanchor="introduction">
      <a href="#introduction">Second section</a>
    </li>
    <li data-menuanchor="findMeOn">
      <a href="#findMeOn">Third section</a>
    </li>
  </StyledMenu>
);

export default Menu;
