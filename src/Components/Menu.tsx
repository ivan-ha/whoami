import React from "react";
import styled from "styled-components";

import IconLink from "./IconLink";

const StyledMenu = styled.ul`
  position: fixed;
  top: 20px;
  right: 20px;
  height: 40px;
  z-index: 70;
  padding: 0;
  margin: 0;
`;

type StyledItemProps = {
  noHover?: boolean;
};

const StyledItem = styled.li`
  display: inline-block;
  font-size: 18px;

  &.active :after {
    content: "";
    margin: 4px 0;
    height: 2px;
    background: #fff;
    display: block;
    bottom: -6px;
    left: 0;
    right: 0;
    display: block;
  }

  &:hover {
    background: ${(props: StyledItemProps) =>
      props.noHover ? "" : "rgba(0,0,0,0.3)"};
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
    <StyledItem noHover>
      <IconLink
        src="/images/github.svg"
        href="https://github.com/ivan-ha/whoami"
        small
      />
    </StyledItem>
  </StyledMenu>
);

export default Menu;
