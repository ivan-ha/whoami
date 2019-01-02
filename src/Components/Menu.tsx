import React from "react";
import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  z-index: 70;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const StyledItem = styled.li`
  display: inline-block;
  margin: 10px;
  color: #000;
  background: #fff;
  background: rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 10px;
  border-radius: 10px;

  &.active {
    background: #666;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  &.active a {
    color: #fff;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 9px 18px;
  display: block;
`;

type MenuProps = {
  items: { anchor: string; text: string }[];
  menuId: string;
};

const Menu = (props: MenuProps) => (
  <StyledMenu id={props.menuId}>
    {props.items.map(item => (
      <StyledItem data-menuanchor={item.anchor} key={item.anchor}>
        <StyledLink href={`#${item.anchor}`}>{item.text}</StyledLink>
      </StyledItem>
    ))}
  </StyledMenu>
);

export default Menu;
